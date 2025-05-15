import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Globe, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  // Define social media links array to avoid duplicate keys
  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", href: "#", id: "linkedin" },
    { icon: <Facebook className="h-5 w-5" />, label: "Facebook", href: "#", id: "facebook" },
    { icon: <Twitter className="h-5 w-5" />, label: "Twitter", href: "#", id: "twitter" },
    { icon: <Instagram className="h-5 w-5" />, label: "Instagram", href: "#", id: "instagram" },
  ]

  // Define quick links
  const quickLinks = [
    { label: "الرئيسية", href: "/", id: "home" },
    { label: "من نحن", href: "/about", id: "about" },
    { label: "خدماتنا", href: "/services", id: "services" },
    { label: "مشاريعنا", href: "/projects", id: "projects" },
    { label: "المدونة", href: "/blog", id: "blog" },
    { label: "اتصل بنا", href: "/contact", id: "contact" },
  ]

  // Define services links
  const servicesLinks = [
    { label: "تطوير مواقع الويب", href: "/services#web-development", id: "web-dev" },
    { label: "تطوير تطبيقات الجوال", href: "/services#mobile-development", id: "mobile-dev" },
    { label: "تصميم واجهات المستخدم", href: "/services#ui-ux-design", id: "ui-ux" },
    { label: "التسويق الرقمي", href: "/services#digital-marketing", id: "digital-marketing" },
    { label: "تحسين محركات البحث", href: "/services#seo", id: "seo" },
  ]

  // Define contact info
  const contactInfo = [
    { icon: <Mail className="h-5 w-5" />, info: "info@scriptermarketing.com", id: "email" },
    { icon: <Phone className="h-5 w-5" />, info: "+20 123 456 7890", id: "phone" },
    { icon: <MapPin className="h-5 w-5" />, info: "مدينة 6 أكتوبر، محافظة الجيزة، مصر", id: "address" },
  ]

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-8 rounded-full bg-blue-600"></div>
              <span className="text-xl font-bold">Scripter Marketing</span>
            </div>
            <p className="text-slate-300 mb-6">
              شركة متخصصة في البرمجة والتسويق الرقمي وتقديم حلول تقنية متكاملة للشركات والمؤسسات
            </p>
            <div className="flex space-x-3 space-x-reverse">
              {socialLinks.map((link, index) => (
                <a
                  key={`social-link-${link.id || index}`}
                  href={link.href}
                  className="rounded-full bg-slate-800 p-2 text-slate-300 hover:bg-blue-600 hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4 border-b border-slate-700 pb-2">روابط سريعة</h3>
            <ul className="space-y-2 text-slate-300">
              {quickLinks.map((link, index) => (
                <li key={`quick-link-${link.id || index}`}>
                  <Link href={link.href} className="hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4 border-b border-slate-700 pb-2">خدماتنا</h3>
            <ul className="space-y-2 text-slate-300">
              {servicesLinks.map((link, index) => (
                <li key={`service-link-${link.id || index}`}>
                  <Link href={link.href} className="hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4 border-b border-slate-700 pb-2">تواصل معنا</h3>
            <ul className="space-y-4 text-slate-300">
              {contactInfo.map((item, index) => (
                <li key={`contact-info-${item.id || index}`} className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">{item.icon}</span>
                  <span>{item.info}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-2">
              <Globe className="h-5 w-5 text-blue-400" />
              <select className="bg-slate-800 border border-slate-700 rounded text-sm py-1 px-2" defaultValue="ar">
                <option value="ar">العربية</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-slate-400">
          <p>© {new Date().getFullYear()} Scripter Marketing. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}
