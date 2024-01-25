'use server'

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

const validateFiled = (fieldValue: any) => {
    if (!fieldValue || typeof fieldValue !== 'string') {
        return false
    }
    return true
}

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');


   if (!validateFiled(senderEmail)) {
      return {
        error: 'Invalid sender email'
      }
   }

   if (!validateFiled(message)) {
    return {
      error: 'Invalid message'
    }
   }

   resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'wpuga.dev@gmail.com',
    subject: 'Message from contact form',
    reply_to: senderEmail,
    text: message
   })
  };