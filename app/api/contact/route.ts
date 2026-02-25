import { NextResponse } from 'next/server';

interface ContactRequestBody {
  name?: string;
  phone?: string;
  email?: string;
  location?: string;
  message?: string;
}

const resendApiKey = process.env.RESEND_API_KEY;
const resendFromEmail = process.env.RESEND_FROM_EMAIL;
const contactToEmail = process.env.CONTACT_TO_EMAIL;
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  process.env.SITE_URL?.replace(/\/$/, '');

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex = /^[A-Za-z.' -]+$/;

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
  const location = body.location?.trim();
  const message = body.message?.trim();
  const normalizedPhone = phone?.replace(/\D/g, '');

  if (!name || !phone || !location || !message) {
    return NextResponse.json(
      { error: 'Name, phone, location and message are required.' },
      { status: 400 }
    );
  }

  if (name.length < 2 || !nameRegex.test(name)) {
    return NextResponse.json(
      { error: 'Please enter a valid name.' },
      { status: 400 }
    );
  }

  if (!normalizedPhone || normalizedPhone.length < 10 || normalizedPhone.length > 15) {
    return NextResponse.json(
      { error: 'Please enter a valid phone number.' },
      { status: 400 }
    );
  }

  if (email && !emailRegex.test(email)) {
    return NextResponse.json(
      { error: 'Please enter a valid email address.' },
      { status: 400 }
    );
  }

  if (location.length < 2) {
    return NextResponse.json(
      { error: 'Please enter a valid location.' },
      { status: 400 }
    );
  }

  if (message.length < 10 || message.length > 1000) {
    return NextResponse.json(
      { error: 'Message should be between 10 and 1000 characters.' },
      { status: 400 }
    );
  }

  const lines = [
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email || 'Not provided'}`,
    `Location: ${location}`,
    '',
    'Message:',
    message,
  ];

  const safeName = escapeHtml(name);
  const safePhone = escapeHtml(phone);
  const safeEmail = escapeHtml(email || 'Not provided');
  const safeLocation = escapeHtml(location);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>');
  const logoUrl = siteUrl ? `${siteUrl}/logo.png` : '';
  const logoBlock = logoUrl
    ? `<img src="${escapeHtml(logoUrl)}" alt="Stronghold Structures" width="160" style="display:block; margin-bottom:14px;" />`
    : '<p style="margin:0 0 14px 0; font-size:18px; font-weight:700;">Stronghold Structures</p>';
  const submittedAt = new Date().toLocaleString('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  try {
    const adminEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: resendFromEmail,
        to: [contactToEmail],
        subject: `New Website Lead | ${name} | ${location}`,
        reply_to: email || undefined,
        text: lines.join('\n'),
        html: `
        <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
          ${logoBlock}
          <h2 style="margin: 0 0 10px 0;">New Lead Received from Website Contact Form</h2>
          <p style="margin: 0 0 16px 0; color: #475569;">
            A new enquiry has been submitted and is ready for follow-up.
          </p>
          <table cellpadding="8" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%; max-width: 640px; background: #f8fafc; border: 1px solid #e2e8f0;">
            <tr><td style="font-weight: 700; width: 180px;">Lead Name</td><td>${safeName}</td></tr>
            <tr><td style="font-weight: 700;">Phone</td><td>${safePhone}</td></tr>
            <tr><td style="font-weight: 700;">Email</td><td>${safeEmail}</td></tr>
            <tr><td style="font-weight: 700;">Location</td><td>${safeLocation}</td></tr>
            <tr><td style="font-weight: 700;">Submitted At</td><td>${escapeHtml(submittedAt)}</td></tr>
          </table>
          <div style="margin-top: 16px; padding: 14px; border: 1px solid #e2e8f0; background: #ffffff; max-width: 640px;">
            <p style="margin: 0 0 8px 0; font-weight: 700;">Customer Message</p>
            <p style="margin: 0;">${safeMessage}</p>
          </div>
          <p style="margin-top: 16px; color: #334155;">
            Recommended action: Contact this lead as soon as possible and update CRM status.
          </p>
        </div>
      `,
      }),
    });

    if (!adminEmailResponse.ok) {
      throw new Error('Resend API request failed');
    }

    if (email) {
      const acknowledgementResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: resendFromEmail,
          to: [email],
          subject: 'Thank you for contacting StrongHold Structures',
          text: `Dear ${name},

Thank you for contacting StrongHold Structures.

We have received your enquiry and our team will review the details and reach out to you shortly.

Submitted details:
- Name: ${name}
- Phone: ${phone}
- Email: ${email}
- Location: ${location}

Regards,
StrongHold Structures`,
          html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a; max-width: 640px;">
              ${logoBlock}
              <h2 style="margin: 0 0 10px 0;">Thank You for Contacting StrongHold Structures</h2>
              <p style="margin: 0 0 12px 0;">Dear ${safeName},</p>
              <p style="margin: 0 0 12px 0;">
                Thank you for reaching out to us. We have successfully received your enquiry.
              </p>
              <p style="margin: 0 0 12px 0;">
                Our team will review your requirement and contact you soon to discuss the next steps.
              </p>
              <div style="margin: 12px 0; padding: 12px; background: #f8fafc; border: 1px solid #e2e8f0;">
                <p style="margin: 0 0 6px 0; font-weight: 700;">Reference Details</p>
                <p style="margin: 0;">Name: ${safeName}</p>
                <p style="margin: 0;">Phone: ${safePhone}</p>
                <p style="margin: 0;">Email: ${safeEmail}</p>
                <p style="margin: 0;">Location: ${safeLocation}</p>
              </div>
              <p style="margin: 14px 0 0 0;">Regards,<br/>StrongHold Structures Team</p>
            </div>
          `,
        }),
      });

      if (!acknowledgementResponse.ok) {
        throw new Error('Acknowledgement email request failed');
      }
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Unable to send enquiry right now. Please try again later.' },
      { status: 500 }
    );
  }
}
