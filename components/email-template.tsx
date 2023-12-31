import React from "react"

interface EmailTemplateProps {
  userEmail: string
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  userEmail,
  message,
}) => (
  <>
    <p>Email submitted:</p>
    <p>{userEmail}</p>
    <p>New message submitted:</p>
    <p>{message}</p>
  </>
)

export default EmailTemplate
