import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

const LOGICS_API_KEY = process.env.LOGICS_API_KEY!;
const TUNE_URL = process.env.TUNE_URL!;
const TUNE_OFFER_ID = "24";

const PARTNER_MAP: Record<string, number> = {
    "11": 219, // Best Money
    "12": 223, // Top Rated Tax
    "13": 226, // Test Source
    "1":  227, // Test Source 2
};

function logicsBodyHasError(body: string): boolean {
    const lc = body.toLowerCase();
    return ["error", "invalid", "missing", "failed", "exception", "denied", "not allowed"]
        .some((w) => lc.includes(w));
}

export async function POST(req: NextRequest) {
    const body = await req.json();

    const ip =
        req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
        req.headers.get("x-real-ip") ??
        "unknown";
    const userAgent = req.headers.get("user-agent") ?? "unknown";

    const {
        firstName, lastName, email, phone, taxAmount,
        pageUrl, transactionId, sub1, sub2, partnerId,
    } = body;

    // ── 1. Supabase ──────────────────────────────────────────────
    const { error: dbError } = await supabase.from("leads").insert({
        first_name:     firstName,
        last_name:      lastName,
        email,
        phone,
        tax_amount:     taxAmount,
        page_url:       pageUrl,
        transaction_id: transactionId,
        sub1,
        sub2,
        partner_id:     partnerId,
        ip,
        user_agent:     userAgent,
    });

    if (dbError) {
        console.error("Supabase insert error:", dbError);
        return NextResponse.json({ success: false }, { status: 500 });
    }

    // ── 2. IRS Logics ─────────────────────────────────────────────
    const leadProviderId = PARTNER_MAP[partnerId];

    if (!leadProviderId) {
        // Organic / unknown partner — skip Logics + TUNE
        return NextResponse.json({ success: true });
    }

    const logicsPayload = new URLSearchParams({
        FNAME:            firstName,
        LNAME:            lastName,
        EMAIL:            email,
        CELL_PHONE:       phone,
        LEAD_PROVIDER_ID: String(leadProviderId),
        UDF83:            taxAmount,
        ...(transactionId ? { UDF120: transactionId } : {}),
        // UDF92: only for provider 223 (Top Rated Tax) — add uniqueId here if needed
    });

    const logicsResp = await fetch(
        `https://fivestar.irslogics.com/postLead.aspx?apikey=${LOGICS_API_KEY}`,
        { method: "POST", body: logicsPayload }
    );

    const logicsBody = await logicsResp.text();

    if (!logicsResp.ok || logicsBodyHasError(logicsBody)) {
        console.error("Logics error:", logicsResp.status, logicsBody);
        return NextResponse.json({ success: false, stage: "logics" }, { status: 502 });
    }

    // ── 3. TUNE (only fires after confirmed Logics success) ───────
    const tuneParams = new URLSearchParams({ offer_id: TUNE_OFFER_ID });
    if (transactionId) tuneParams.set("transaction_id", transactionId);

    const tuneResp = await fetch(`${TUNE_URL}?${tuneParams}`);
    if (!tuneResp.ok) {
        console.error("TUNE error:", tuneResp.status);
    }

    return NextResponse.json({ success: true });
}
