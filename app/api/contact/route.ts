import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
    }

    // Set up Gmail transporter using App Password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'deepakchandra4551@gmail.com',
        pass: process.env.EMAIL_PASS, // Needs App Password in environment variables
      },
    });

    const mailOptions = {
      from: email,
      to: 'deepakchandra4551@gmail.com',
      subject: `Portfolio Contact Form: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email', error: error.message }, { status: 500 });
  }
}
