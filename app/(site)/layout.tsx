import "@/styles/globals.css"
import "@/styles/themes.css"
import type { Metadata } from "next"
import { draftMode } from "next/headers"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeWrapper } from "@/components/theme-wrapper"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import VisualEditing from "@/components/visual-editing"

import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeWrapper>
            <div className="relative flex min-h-screen flex-col">
              <Toaster position="top-center" />

              <SiteHeader />
              <div className="flex-1">
                {children}
                {draftMode().isEnabled && <VisualEditing />}
              </div>
              <SiteFooter />
            </div>
          </ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
