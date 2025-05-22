"use client"

import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PageHeader } from "@/components/page-header"
import { PageTransition } from "@/components/page-transition"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { toast } from "sonner"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      console.log("Submitting contact form data:", formData)
      
      const response = await fetch("/api/send-contact-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      console.log("Response from server:", data)

      if (!response.ok) {
        throw new Error(data.error || data.details || "حدث خطأ أثناء إرسال الرسالة")
      }

      // Show success message
      toast.success(data.message || "تم إرسال رسالتك بنجاح")

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      const errorMessage = error instanceof Error ? error.message : "حدث خطأ أثناء إرسال الرسالة"
      toast.error(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Define contact cards to avoid duplication
  const contactCards = [
    {
      id: "address",
      icon: <MapPin className="h-6 w-6" />,
      title: "العنوان",
      content: "المحور المركزي، مدينة 6 أكتوبر، محافظة الجيزة، مصر",
    },
    {
      id: "phone",
      icon: <Phone className="h-6 w-6" />,
      title: "الهاتف",
      content: "+20 102 038 4694",
    },
    {
      id: "email",
      icon: <Mail className="h-6 w-6" />,
      title: "البريد الإلكتروني",
      content: "info@scriptermarketing.com",
    },
    {
      id: "hours",
      icon: <Clock className="h-6 w-6" />,
      title: "ساعات العمل",
      content: "الأحد - الخميس: 9:00 صباحًا - 5:00 مساءً",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-50 theme-transition">
      <MainNav />

      <PageHeader
        title="اتصل بنا"
        description="تواصل معنا للاستفسارات والمشاريع"
        breadcrumbs={[
          { title: "الرئيسية", href: "/" },
          { title: "اتصل بنا", href: "/contact" },
        ]}
      />

      <PageTransition>
        <main className="flex-1">
          <section className="py-16 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 theme-transition">
            <div className="container">
              <div className="grid gap-12 md:grid-cols-2">
                {/* Contact Form */}
                <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-slate-200/50 dark:border-slate-800/50 hover:shadow-xl transition-all duration-300 theme-transition">
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white theme-transition">أرسل لنا رسالة</h2>
                  <p className="mt-2 text-slate-600 dark:text-slate-300 theme-transition">
                    يمكنك التواصل معنا من خلال ملء النموذج التالي وسنقوم بالرد عليك في أقرب وقت ممكن
                  </p>
                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-900 dark:text-white theme-transition">
                          الاسم الكامل <span className="text-red-500 dark:text-red-400">*</span>
                        </label>
                        <Input 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="أدخل اسمك الكامل" 
                          required
                          className="border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 shadow-sm hover:shadow-md transition-all duration-200 theme-transition"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-900 dark:text-white theme-transition">
                          البريد الإلكتروني <span className="text-red-500 dark:text-red-400">*</span>
                        </label>
                        <Input 
                          id="email" 
                          name="email"
                          type="email" 
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="أدخل بريدك الإلكتروني" 
                          required
                          className="border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 shadow-sm hover:shadow-md transition-all duration-200 theme-transition"
                        />
                      </div>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-900 dark:text-white theme-transition">
                          رقم الهاتف <span className="text-red-500 dark:text-red-400">*</span>
                        </label>
                        <Input 
                          id="phone" 
                          name="phone"
                          type="tel" 
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="أدخل رقم هاتفك" 
                          required
                          className="border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 shadow-sm hover:shadow-md transition-all duration-200 theme-transition"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-900 dark:text-white theme-transition">
                          اسم الشركة <span className="text-slate-400 dark:text-slate-500 text-sm">(اختياري)</span>
                        </label>
                        <Input 
                          id="company" 
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="أدخل اسم شركتك" 
                          className="border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 shadow-sm hover:shadow-md transition-all duration-200 theme-transition"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-900 dark:text-white theme-transition">
                        الموضوع <span className="text-red-500 dark:text-red-400">*</span>
                      </label>
                      <Input 
                        id="subject" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="أدخل موضوع الرسالة" 
                        required
                        className="border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 shadow-sm hover:shadow-md transition-all duration-200 theme-transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-900 dark:text-white theme-transition">
                        الرسالة <span className="text-red-500 dark:text-red-400">*</span>
                      </label>
                      <Textarea 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="أدخل رسالتك" 
                        rows={5} 
                        required
                        className="border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 shadow-sm hover:shadow-md transition-all duration-200 theme-transition"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        <span className="text-red-500 dark:text-red-400">*</span> حقول مطلوبة
                      </p>
                      <Button 
                        type="submit" 
                        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700 text-white shadow-md hover:shadow-lg transition-all duration-200 theme-transition px-8 py-2 rounded-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
                      </Button>
                    </div>
                  </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-white via-white to-slate-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 p-8 rounded-xl shadow-lg border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300 theme-transition">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white theme-transition">معلومات الاتصال</h2>
                    <p className="mt-2 text-slate-600 dark:text-slate-200 theme-transition">يمكنك التواصل معنا مباشرة من خلال وسائل الاتصال التالية</p>
                    <div className="mt-8 space-y-6">
                      {contactCards.map((card) => (
                        <Card 
                          key={`contact-card-${card.id}`}
                          className="border-slate-200/50 dark:border-slate-700/50 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 hover:shadow-lg hover:scale-[1.02] transition-all duration-200 theme-transition"
                        >
                          <CardContent className="flex items-start gap-4 p-6">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40 text-blue-600 dark:text-blue-300 shadow-sm theme-transition">
                              {card.icon}
                            </div>
                            <div>
                              <h3 className="font-bold text-slate-900 dark:text-white theme-transition">{card.title}</h3>
                              <p className="mt-1 text-slate-600 dark:text-slate-200 theme-transition">{card.content}</p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Map */}
          <section className="bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-16 theme-transition">
            <div className="container">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white theme-transition">موقعنا</h2>
                <p className="mt-4 text-slate-600 dark:text-slate-300 theme-transition">يمكنك زيارتنا في مقر الشركة في مدينة 6 أكتوبر</p>
              </div>
              <div className="mt-8 aspect-video w-full overflow-hidden rounded-xl bg-white/90 dark:bg-slate-800/90 shadow-lg border border-slate-200/50 dark:border-slate-700/50 theme-transition">
                <div className="h-full w-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 p-4 text-center theme-transition">
                  <p className="text-slate-500 dark:text-slate-400 theme-transition">خريطة موقع الشركة</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 theme-transition">
            <div className="container">
              <div className="rounded-xl bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 dark:from-blue-700 dark:via-blue-800 dark:to-blue-900 p-8 md:p-12 shadow-xl theme-transition">
                <div className="mx-auto max-w-3xl text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">هل أنت جاهز لبدء مشروعك؟</h2>
                  <p className="mt-4 text-lg text-blue-100">
                    تواصل معنا اليوم لمناقشة مشروعك واحتياجاتك البرمجية والتسويقية. فريقنا جاهز لمساعدتك في تحقيق
                    أهدافك.
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Button
                      size="lg"
                      className="bg-white/90 hover:bg-white text-blue-900 dark:bg-white/90 dark:text-blue-900 dark:hover:bg-white shadow-md hover:shadow-lg transition-all duration-200 theme-transition"
                      asChild
                    >
                      <Link href="/services">استكشف خدماتنا</Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="secondary"
                      className="bg-blue-100/90 text-blue-900 border-blue-200 hover:bg-blue-200/90 dark:bg-blue-900/30 dark:text-blue-100 dark:border-blue-800 dark:hover:bg-blue-900/50 shadow-md hover:shadow-lg transition-all duration-200 theme-transition"
                      asChild
                    >
                      <Link href="/quote">طلب عرض سعر</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </PageTransition>

      <Footer />
      <WhatsAppButton phoneNumber="01020384694" />
    </div>
  )
}
