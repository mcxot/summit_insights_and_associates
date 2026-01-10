import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Simple in-memory rate limiting (resets on server restart)
const rateLimit = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3; // 3 requests per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimit.get(ip);
  
  if (!record || now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimit.set(ip, { count: 1, timestamp: now });
    return false;
  }
  
  if (record.count >= MAX_REQUESTS) {
    return true;
  }
  
  record.count++;
  return false;
}

// Input sanitization
function sanitize(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .trim()
    .slice(0, 5000); // Limit length
}

// Email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

export async function POST(request: Request) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const formData = await request.formData();
    
    const name = sanitize(formData.get('name') as string || '');
    const email = (formData.get('email') as string || '').trim().toLowerCase();
    const phone = sanitize(formData.get('phone') as string || '');
    const message = sanitize(formData.get('message') as string || '');
    const attachment = formData.get('attachment') as File | null;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address' },
        { status: 400 }
      );
    }

    if (name.length < 2 || message.length < 10) {
      return NextResponse.json(
        { success: false, error: 'Name and message are too short' },
        { status: 400 }
      );
    }

    // Prepare attachments array
    const attachments: { filename: string; content: Buffer }[] = [];
    
    if (attachment && attachment.size > 0) {
      // Limit file size to 5MB
      if (attachment.size > 5 * 1024 * 1024) {
        return NextResponse.json(
          { success: false, error: 'File too large. Maximum size is 5MB.' },
          { status: 400 }
        );
      }
      
      const bytes = await attachment.arrayBuffer();
      attachments.push({
        filename: attachment.name.slice(0, 100), // Limit filename length
        content: Buffer.from(bytes),
      });
    }

    await resend.emails.send({
      from: 'Summit Insights <onboarding@resend.dev>',
      to: process.env.RECIPIENT_EMAIL!,
      replyTo: email,
      subject: `New Contact from ${name} - Summit Insights`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        ${attachment ? `<p><strong>Attachment:</strong> ${attachment.name}</p>` : ''}
      `,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    return NextResponse.json(
      { success: true, message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('Contact form error');
    return NextResponse.json(
      { success: false, error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
