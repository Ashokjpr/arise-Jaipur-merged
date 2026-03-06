// lib/sendMail.ts

import nodemailer from "nodemailer";

interface SendMailProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const sendMail = async ({
  name,
  email,
  phone,
  message,
}: SendMailProps) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Arise Medical Academy jaipur" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Message",
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Email Error:", error);
    throw new Error("Email sending failed");
  }
};