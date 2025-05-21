"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X, Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { href: "/services", label: "خدماتنا", id: "services" },
  { href: "/projects", label: "مشاريعنا", id: "projects" },
  { href: "/about", label: "من نحن", id: "about" },
  { href: "/contact", label: "اتصل بنا", id: "contact" },
]

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-900 shadow-md border-b border-blue-900/30" dir="rtl">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-12 w-12 rounded-full overflow-hidden border-4 border-blue-800 bg-white flex items-center justify-center transition-all group-hover:scale-105">
            <Image src="/assets/images/services/logo.jpg" alt="Scripter Marketing Logo" width={48} height={48} className="w-full h-full object-contain" />
          </div>
          <span className="text-xl font-extrabold text-white tracking-tight">Scripter Marketing</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-2">
          <ul className="flex gap-2 text-white font-medium text-base">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="px-4 py-2 rounded-lg hover:bg-blue-800/40 transition-colors duration-150"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-2">
          <ThemeToggle />
          <Button
            className="text-sm font-medium bg-white text-blue-900 border-2 border-white hover:bg-blue-100 hover:text-blue-900 transition-all rounded-full px-6 py-2 shadow"
            asChild
          >
            <Link href="/quote">طلب عرض سعر</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2 hover:bg-blue-800/40 rounded-lg transition-colors"
          onClick={toggleMenu}
          aria-label="القائمة"
        >
          <Menu className="h-7 w-7" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col lg:hidden">
          <div className="flex-1 bg-black/40 backdrop-blur-sm" onClick={toggleMenu} />
          <div className="absolute top-0 right-0 left-0 mx-auto w-full max-w-sm bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 rounded-b-3xl shadow-2xl p-0 animate-slideInDown" style={{ zIndex: 100 }} dir="rtl">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-blue-800">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-white bg-white flex items-center justify-center shadow">
                  <Image src="/assets/images/services/logo.jpg" alt="Scripter Marketing Logo" width={48} height={48} className="w-full h-full object-contain" />
                </div>
                <span className="text-xl font-extrabold text-white tracking-tight drop-shadow">Scripter Marketing</span>
              </div>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <button onClick={toggleMenu} className="text-white p-2 rounded-full hover:bg-blue-800 transition-colors" aria-label="إغلاق القائمة">
                  <X className="h-7 w-7" />
                </button>
              </div>
            </div>
            {/* Navigation */}
            <nav className="py-6 px-6">
              <ul className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 text-lg font-semibold text-white hover:bg-blue-800/60 px-4 py-3 rounded-xl transition-colors"
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            {/* CTA Button */}
            <div className="px-6 pb-6">
              <Button
                className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-3 rounded-xl shadow-lg hover:from-green-500 hover:to-blue-600 transition-all"
                asChild
              >
                <Link href="/quote">🚀 اطلب عرض سعر الآن</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
} 