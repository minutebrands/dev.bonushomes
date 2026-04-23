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
      replyTo: data.email, // ✅ IMPORTANT LINE
      subject: "New Lead - Book a Call",
      text: `
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone}
        Investment: ${data.investment}
Message: ${data.message || "N/A"}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log("Email Error:", error);
    return NextResponse.json({ success: false });
  }
}