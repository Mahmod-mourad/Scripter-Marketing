"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import type { ButtonHTMLAttributes } from "react"

export function ThemeToggle({ small = false }: { small?: boolean }) {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    // Check for saved theme in localStorage or system preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setTheme(prefersDark ? "dark" : "light")
      document.documentElement.classList.toggle("dark", prefersDark)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className={`rounded-full ${small ? "p-1" : "p-2"} bg-blue-900 hover:bg-blue-800 text-white shadow transition-colors border border-blue-800`}
      aria-label={theme === "dark" ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن"}
      type="button"
    >
      {theme === "dark"
        ? <Sun className={small ? "h-4 w-4" : "h-5 w-5"} />
        : <Moon className={small ? "h-4 w-4" : "h-5 w-5"} />}
    </button>
  )
}
