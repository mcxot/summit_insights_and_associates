import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;
    const attachment = formData.get('attachment') as File | null;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Prepare attachments array
    const attachments: { filename: string; content: Buffer }[] = [];
    
    if (attachment && attachment.size > 0) {
      const bytes = await attachment.arrayBuffer();
      attachments.push({
        filename: attachment.name,
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
    console.error('Resend error:', JSON.stringify(error, null, 2));
    const errorMessage = error instanceof Error ? error.message : JSON.stringify(error);
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
