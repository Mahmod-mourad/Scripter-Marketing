"use client"

import Link from "next/link"
import Image from "next/image"
import { FaWhatsapp, FaLinkedin, FaFacebook } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 mt-12">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          {/* الشعار والوصف */}
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/assets/images/services/logo.jpg"
                alt="Scripter Marketing Logo"
                width={40}
                height={40}
                className="rounded-full object-contain"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Scripter Marketing
              </span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm max-w-sm leading-relaxed">
              سكرِبتر ماركتنج متخصصة في تقديم حلول تطوير الأعمال والتسويق الاستراتيجي والتقني لمساعدتك على النمو وتعزيز مكانتك في السوق.
            </p>
          </div>

          {/* الروابط */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">الخدمات</h2>
              <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
                <li><Link href="#" className="hover:underline">تطوير الأعمال</Link></li>
                <li><Link href="#" className="hover:underline">التسويق الاستراتيجي</Link></li>
                <li><Link href="#" className="hover:underline">التطوير التقني</Link></li>
                <li><Link href="#" className="hover:underline">تعهيد التوظيف</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">روابط سريعة</h2>
              <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
                <li><Link href="/about" className="hover:underline">من نحن</Link></li>
                <li><Link href="/services" className="hover:underline">خدماتنا</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">تواصل معنا</h2>
              <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
                <li>
                  <a href="mailto:info@scripter-marketing.com" className="hover:underline">
                    info@scripter-marketing.com
                  </a>
                </li>
                <li className="flex space-x-4 rtl:space-x-reverse text-xl">
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="واتساب" className="hover:text-green-500"><FaWhatsapp /></a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="لينكدإن" className="hover:text-blue-500"><FaLinkedin /></a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="فيسبوك" className="hover:text-blue-400"><FaFacebook /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025 <Link href="/" className="hover:underline">Scripter Marketing</Link>. جميع الحقوق محفوظة.
          </span>
          {/* تم حذف الأيقونات من الأسفل بناءً على الطلب */}
        </div>
      </div>
    </footer>
  )
}
