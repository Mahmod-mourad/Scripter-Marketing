import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Providers } from "./providers"
import { ResponsiveFixes } from "@/components/responsive-fixes"
import { viewport } from "./viewport"

export const metadata: Metadata = {
  title: "Scripter Marketing",
  description: "شركة متخصصة في تطوير البرمجيات والتسويق الرقمي",
}

export { viewport }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning={true}>
        <Providers>
          {children}
          <ResponsiveFixes />
        </Providers>
      </body>
    </html>
  )
}
