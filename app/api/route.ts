import React from "react"
import type { NextApiRequest, NextApiResponse } from "next"
import { NextResponse } from "next/server"

import { Resend } from "resend"

import { EmailTemplate } from "@/components/email-template"

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)
const email = process.env.NEXT_PUBLIC_EMAIL!

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userEmail, message } = await req.body
  try {
    if (req.method === "POST") {
      const data = await resend.emails.send({
        from: email,
        to: email,
        subject: "Want To Connect Email From User",
        react: EmailTemplate({ userEmail, message }) as React.ReactElement,
      })
      return NextResponse.json(data)
    }
  } catch (error) {
    return NextResponse.json({ error })
  }
}
