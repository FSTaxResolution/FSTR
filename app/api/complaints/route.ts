import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    const { firstName, lastName, email, phone, message } = await req.json();

    const { error } = await resend.emails.send({
        from: "Five Star Tax Resolution <noreply@fivestartaxhelp.com>",
        to: "destinie@fivestartaxhelp.com",
        subject: `Relationship Management Inquiry — ${firstName} ${lastName}`,
        text: [
            `Name: ${firstName} ${lastName}`,
            `Email: ${email}`,
            `Phone: ${phone}`,
            `Message:\n${message}`,
        ].join("\n"),
    });

    if (error) {
        console.error("Resend error:", error);
        return NextResponse.json({ success: false }, { status: 500 });
    }

    return NextResponse.json({ success: true });
}