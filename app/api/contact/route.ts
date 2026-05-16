import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, company, service, message } = await req.json()

    await resend.emails.send({
      from: 'Sapphire IT <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL!,
      subject: `New Inquiry from ${name} — ${service}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #5FB9F5;">New Client Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold;">Name</td><td>${name}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Email</td><td>${email}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Company</td><td>${company}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Service</td><td>${service}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Message</td><td>${message}</td></tr>
          </table>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}