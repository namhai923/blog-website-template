import type { Metadata } from "next"
import type { Viewport } from "next"
import { metadata as studioMetadata } from "next-sanity/studio/metadata"
import { viewport as studioViewport } from "next-sanity/studio/viewport"

export const metadata: Metadata = {
  ...studioMetadata,
  title: "Loading Studio...",
  icons: {
    icon: "/favicon.svg",
  },
}

export const viewport: Viewport = {
  ...studioViewport,
  interactiveWidget: "resizes-content",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
