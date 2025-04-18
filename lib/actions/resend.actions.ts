"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND);

export async function sendEmail(email: string, subject: string, body: string) {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: email,
    subject,
    html: body,
  });

  if (error) {
    console.error(error);
    return { error: error.message };
  }

  return { data };
}
