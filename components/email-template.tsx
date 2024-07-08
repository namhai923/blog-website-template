import React from "react"

interface EmailTemplateProps {
  email: string
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  message,
}) => (
  <>
    <p>Email submitted:</p>
    <p>{email}</p>
    <p>New message submitted:</p>
    <p>{message}</p>
  </>
)

export default EmailTemplate
