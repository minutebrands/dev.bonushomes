import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const LEAD_NOTIFY_EMAIL = (process.env.LEAD_NOTIFY_EMAIL ?? "shaneglvr@gmail.com, shadglover@gmail.com").split(",").map(s => s.trim()).filter(Boolean);

  const data = await req.json();

  const leadText = `
New Inquiry — Bonus Homes

Name:          ${data.firstName} ${data.lastName}
Email:         ${data.email}
Cell:          ${data.cell}
Role:          ${data.role}
Company:       ${data.company}
# of RIAs:    ${data.numRIAs}
# of Offices: ${data.numOffices}
# of HNIs:    ${data.numHNIs}
AUM:           ${data.aum}
  `.trim();

  // ── Resend email ───────────────────────────────────────────────
  try {
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
  } catch (err) {
    console.error("Resend threw:", err);
  }

  // ── Zapier ─────────────────────────────────────────────────────
  try {
    await fetch("https://hooks.zapier.com/hooks/catch/27852567/4bxok7e/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: data.firstName,
        last_name:  data.lastName,
        email:      data.email,
        mobile:     data.cell,
        role:       data.role,
      }),
    });
  } catch (err) {
    console.error("Zapier error:", err);
  }

  return NextResponse.json({ success: true });
}
