import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "chandatiwari.vll@gmail.com",   
      pass: "nwrg buam zxsl vumv",         
    },
  });

  try {
    await transporter.sendMail({
      from: "chandatiwari.vll@gmail.com",
      to: "chandatiwari.vll@gmail.com",
      replyTo: data.email,
      subject: `New Lead - ${data.firstName} ${data.lastName} (${data.company})`,
      text: `
New Lead - Book a Call

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Cell: ${data.cell}
Company: ${data.company}
# of RIAs: ${data.numRIAs}
# of Offices: ${data.numOffices}
# of HNIs ($800K+/yr): ${data.numHNIs}
AUM: ${data.aum}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log("Email Error:", error);
    return NextResponse.json({ success: false });
  }
}