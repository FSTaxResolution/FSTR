import { get } from "@vercel/edge-config";

/**
 * Default phone number used when no partner_id is found
 * and no page-level fallback is provided.
 */
export const DEFAULT_PHONE = "(866) 902-9123";

export const GOOGLE_SEND_TO = "AW-1016512637/A4IkCOrYxcsbEP2A2-QD";

/**
 * Look up the display phone number with this priority:
 *   1. partner_id from URL → Edge Config lookup
 *   2. pageFallback → hardcoded on the page itself
 *   3. DEFAULT_PHONE
 *
 * Edge Config keys should match partner IDs (e.g. "11", "12").
 * Each value in Edge Config should be a string like "(866) 316-6069".
 *
 * Usage:
 *   const phone = await getPartnerPhone(searchParams.partner_id);
 *   const phone = await getPartnerPhone(searchParams.partner_id, "(888) 555-1234");
 */
export async function getPartnerPhone(
    partnerId?: string | null,
    pageFallback?: string,
): Promise<string> {
    // 1. If partner_id exists, look it up in Edge Config
    if (partnerId) {
        try {
            const phone = await get<string>(partnerId);
            if (phone) return phone;
        } catch {
            // Edge Config unavailable (local dev, etc.) — fall through
        }
    }

    // 2. Page-level hardcoded fallback
    if (pageFallback) return pageFallback;

    // 3. Default
    return DEFAULT_PHONE;
}

/**
 * Convert a display phone like "(866) 316-6069" to a tel: href.
 */
export function toTelHref(phone: string): string {
    return "tel:" + phone.replace(/[^\d+]/g, "");
}

/**
 * Extract digits only from a string.
 */
export function digitsOnly(s: string): string {
    return s.replace(/\D/g, "");
}
