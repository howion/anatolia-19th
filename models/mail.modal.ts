import type SMTPTransport from 'nodemailer/lib/smtp-transport'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    requireTLS: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
})

export async function sendMail(
    receivers: text[] /*example@example.com*/,
    subject: text,
    text: text
): Promise<SMTPTransport.SentMessageInfo | null> {
    try {
        return await transporter.sendMail({
            from: '"Anatolia 19 Webmaster" <me@howion.com>', // sender address
            to: receivers.join(', '),
            subject: subject,
            text: text
        })
    } catch (error) {
        console.log('send mail error:', error)
        return null
    }
}
