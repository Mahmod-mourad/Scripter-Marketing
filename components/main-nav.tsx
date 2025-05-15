"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X, Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Define navigation items to avoid duplication
  const navItems = [
    { href: "/", label: "الرئيسية", id: "home" },
    { href: "/about", label: "من نحن", id: "about" },
    { href: "/services", label: "خدماتنا", id: "services" },
    { href: "/projects", label: "مشاريعنا", id: "projects" },
    { href: "/blog", label: "المدونة", id: "blog" },
    { href: "/contact", label: "اتصال", id: "contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/95">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-blue-600"></div>
          <Link href="/" className="text-xl font-bold">
            Scripter Marketing
          </Link>
        </div>
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-6">
            {navItems.map((item, index) => (
              <li key={`desktop-nav-${item.id || index}`}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-slate-800 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
            <Button
              variant="outline"
              className="border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
              asChild
            >
              <Link href="/contact">تواصل معنا</Link>
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600" asChild>
              <Link href="/quote">طلب عرض سعر</Link>
            </Button>
          </div>
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
            <ul className="flex flex-col">
              {navItems.map((item, index) => (
                <li key={`mobile-nav-${item.id || index}`}>
                  <Link
                    href={item.href}
                    className="block border-b border-slate-200 hover:bg-slate-100 px-4 py-3 text-sm dark:border-slate-800 dark:hover:bg-slate-900"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="p-4 space-y-2">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600" asChild>
                <Link href="/quote" onClick={toggleMenu}>
                  طلب عرض سعر
                </Link>
              </Button>
              <Button
                variant="outline"
                className="w-full border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
                asChild
              >
                <Link href="/contact" onClick={toggleMenu}>
                  تواصل معنا
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
