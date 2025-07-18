// src/app/api/contact/route.ts
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

  try {
    const data = await resend.emails.send({
      from: 'mail@anker-tattoo.de',
      to: 'info@anker-tattoo.de',
      subject: `Neue Nachricht von ${name}: ${subject}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return new NextResponse(JSON.stringify({ success: false, error }), {
      status: 500,
    });
  }
}
