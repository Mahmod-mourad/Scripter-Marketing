"use client"

import { ThemeProvider } from "@/components/theme-provider"
import type { ReactNode } from "react"
import { AnimatePresence } from "framer-motion"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <AnimatePresence mode="wait">
        <div key="providers-wrapper">{children}</div>
      </AnimatePresence>
    </ThemeProvider>
  )
}
