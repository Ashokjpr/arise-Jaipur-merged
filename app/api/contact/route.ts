import { NextResponse } from "next/server";
import { z } from "zod";
import axios from "axios";
import { sendMail } from "@/lib/mail/sendMail";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Invalid Mobile Number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = contactSchema.parse(body);

    //  1. Send Email
    await sendMail(data);

    //  2. Prepare WhatsApp Message
    const whatsappMessage = `
      New Contact Inquiry

      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone}
      Message: ${data.message}
      `;

    //  3. Send WhatsApp via Axios
    await axios.post(
      `https://graph.facebook.com/v22.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`,
      {
        messaging_product: "whatsapp",
        to: process.env.WHATSAPP_TO,
        type: "text",
        text: {
          body: whatsappMessage,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json(
      { success: true, message: "Message received successfully" },
      { status: 200 }
    );

  } catch (error: any) {
    console.error("WhatsApp Error:", error?.response?.data || error.message);

    return NextResponse.json(
      {
        success: false,
        message: "Invalid request",
        error: error?.response?.data || error.message,
      },
      { status: 400 }
    );
  }
}