import { NextResponse } from 'next/server';

interface ContactRequestBody {
  name?: string;
  phone?: string;
  email?: string;
  serviceType?: string;
  message?: string;
}

const resendApiKey = process.env.RESEND_API_KEY;
const resendFromEmail = process.env.RESEND_FROM_EMAIL;
const contactToEmail = process.env.CONTACT_TO_EMAIL;

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

export async function POST(req: Request) {
  if (!resendApiKey || !resendFromEmail || !contactToEmail) {
    return NextResponse.json(
      { error: 'Email service is not configured. Please contact support.' },
      { status: 500 }
    );
  }

  const body = (await req.json()) as ContactRequestBody;
  const name = body.name?.trim();
  const phone = body.phone?.trim();
  const email = body.email?.trim();
  const serviceType = body.serviceType?.trim();
  const message = body.message?.trim();

  if (!name || !phone || !serviceType || !message) {
    return NextResponse.json(
      { error: 'Name, phone, service type and message are required.' },
      { status: 400 }
    );
  }

  const lines = [
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email || 'Not provided'}`,
    `Service Type: ${serviceType}`,
    '',
    'Message:',
    message,
  ];

  const safeName = escapeHtml(name);
  const safePhone = escapeHtml(phone);
  const safeEmail = escapeHtml(email || 'Not provided');
  const safeServiceType = escapeHtml(serviceType);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>');

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: resendFromEmail,
        to: [contactToEmail],
        subject: `New enquiry from ${name}`,
        reply_to: email || undefined,
        text: lines.join('\n'),
        html: `
        <h2>New StrongHold enquiry</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Service Type:</strong> ${safeServiceType}</p>
        <p><strong>Message:</strong><br/>${safeMessage}</p>
      `,
      }),
    });

    if (!response.ok) {
      throw new Error('Resend API request failed');
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Unable to send enquiry right now. Please try again later.' },
      { status: 500 }
    );
  }
}
