"use client"

import { ThemeProvider } from "@/components/theme-provider"
import type { ReactNode } from "react"
import { AnimatePresence } from "framer-motion"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
      <AnimatePresence mode="wait">
        <div key="providers-wrapper" dir="rtl">{children}</div>
      </AnimatePresence>
    </ThemeProvider>
  )
}
