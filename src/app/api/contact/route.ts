import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const LEAD_NOTIFY_EMAIL = (process.env.LEAD_NOTIFY_EMAIL ?? "").split(",").map(s => s.trim()).filter(Boolean);

// Salesforce — fill these in .env.local when ready
const SF_ENDPOINT = process.env.SALESFORCE_ENDPOINT ?? "";
const SF_API_KEY  = process.env.SALESFORCE_API_KEY  ?? "";

export async function POST(req: Request) {
  const data = await req.json();

  const leadText = `
New Inquiry — Bonus Homes

Name:    ${data.firstName} ${data.lastName}
Email:   ${data.email}
Mobile:  ${data.mobile}
Role:    ${data.role}
  `.trim();

  // ── Resend email ───────────────────────────────────────────────
  const emailResult = await resend.emails.send({
    from:     "Bonus Homes <leads@bonushomes.io>",
    to:       LEAD_NOTIFY_EMAIL,
    replyTo:  data.email,
    subject:  `New Inquiry — ${data.firstName} ${data.lastName} (${data.role})`,
    text:     leadText,
  });

  if (emailResult.error) {
    console.error("Resend error:", emailResult.error);
  }

  // ── Salesforce ─────────────────────────────────────────────────
  if (SF_ENDPOINT && SF_API_KEY) {
    try {
      await fetch(SF_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${SF_API_KEY}`,
        },
        body: JSON.stringify({
          FirstName:   data.firstName,
          LastName:    data.lastName,
          Email:       data.email,
          MobilePhone: data.mobile,
          Title:       data.role,
        }),
      });
    } catch (err) {
      console.error("Salesforce error:", err);
    }
  }

  return NextResponse.json({ success: true });
}
