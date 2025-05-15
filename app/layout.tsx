import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Providers } from "@/app/providers"
import { ResponsiveFixes } from "@/components/responsive-fixes"

export const metadata: Metadata = {
  title: "Scripter Marketing - شركة برمجة وتسويق رقمي",
  description: "شركة Scripter Marketing لتطوير البرمجيات والتسويق الرقمي وتقديم الحلول التقنية المتكاملة",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
          <ResponsiveFixes />
        </Providers>
      </body>
    </html>
  )
}
