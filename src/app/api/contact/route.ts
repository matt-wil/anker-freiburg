import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Force Node.js runtime (Nodemailer requires net/tls, which Edge doesn't support)
export const runtime = 'nodejs';

// Initialize transporter outside the request handler to reuse connection
const transporter = nodemailer.createTransport({
  host: process.env.NEXT_SMTP_HOST || 'smtp.ionos.de',
  port: Number(process.env.NEXT_SMTP_PORT) || 465,
  secure: true, // true for port 587 SSL/TLS
  auth: {
    user: process.env.NEXT_SMTP_USER,
    pass: process.env.NEXT_SMTP_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message, 'g-recaptcha-response': captchaToken } = body;

    // 1. Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 2. Verify reCAPTCHA with Google
    if (process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY) {
      const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY,
          response: captchaToken || '',
        }),
      });

      const verifyData = await verifyRes.json();
      if (!verifyData.success) {
        return NextResponse.json(
          { success: false, error: 'reCAPTCHA verification failed' },
          { status: 400 }
        );
      }
    }

    console.log('SMTP Config Check:', {
      host: process.env.NEXT_SMTP_HOST,
      user: process.env.NEXT_SMTP_USER,
      hasPass: Boolean(process.env.NEXT_SMTP_PASS),
    });

    // 3. Send email via IONOS SMTP
    await transporter.sendMail({
      // "from" MUST match your authenticated IONOS account
      from: `"Anker Website" <${process.env.NEXT_SMTP_USER}>`,
      to: process.env.NEXT_CONTACT_RECIPIENT || process.env.NEXT_SMTP_USER,
      // replyTo ensures clicking "Reply" in your email client goes directly to the visitor
      replyTo: email,
      subject: subject ? `Kontaktformular: ${subject}` : `Neue Anfrage von ${name}`,
      text: `Absender: ${name} (${email})\n\nBetreff: ${subject || 'Kein Betreff'}\n\nNachricht:\n${message}`,
      html: `
        <div style="font-family: sans-serif; color: #111; line-height: 1.6;">
          <h2 style="margin-bottom: 8px;">Neue Kontaktanfrage</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Betreff:</strong> ${subject || 'Kein Betreff'}</p>
          <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;" />
          <p><strong>Nachricht:</strong></p>
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 12px; border-radius: 4px;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('IONOS SMTP error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
