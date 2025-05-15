import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Providers } from "@/app/providers"
import { ResponsiveFixes } from "@/components/responsive-fixes"
import { viewport } from "./viewport"

export const metadata: Metadata = {
  title: "Scripter Marketing - شركة برمجة وتسويق رقمي",
  description: "شركة Scripter Marketing لتطوير البرمجيات والتسويق الرقمي وتقديم الحلول التقنية المتكاملة",
  generator: 'v0.dev'
}

export { viewport }

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
