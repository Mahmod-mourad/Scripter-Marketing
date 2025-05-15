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

export const metadata = {
  title: "اتصل بنا | Scripter Marketing",
  description: "تواصل مع شركة Scripter Marketing للاستفسارات والمشاريع",
}

export default function ContactPage() {
  // Define contact cards to avoid duplication
  const contactCards = [
    {
      id: "address",
      icon: <MapPin className="h-6 w-6" />,
      title: "العنوان",
      content: "مدينة 6 أكتوبر، محافظة الجيزة، مصر",
    },
    {
      id: "phone",
      icon: <Phone className="h-6 w-6" />,
      title: "الهاتف",
      content: "+20 123 456 7890",
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
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
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
          <section className="py-16">
            <div className="container">
              <div className="grid gap-12 md:grid-cols-2">
                {/* Contact Form */}
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">أرسل لنا رسالة</h2>
                  <p className="mt-2 text-slate-700">
                    يمكنك التواصل معنا من خلال ملء النموذج التالي وسنقوم بالرد عليك في أقرب وقت ممكن
                  </p>
                  <form className="mt-8 space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-900">
                          الاسم
                        </label>
                        <Input id="name" placeholder="أدخل اسمك" />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-900">
                          البريد الإلكتروني
                        </label>
                        <Input id="email" type="email" placeholder="أدخل بريدك الإلكتروني" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-900">
                        الموضوع
                      </label>
                      <Input id="subject" placeholder="أدخل موضوع الرسالة" />
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-900">
                        الرسالة
                      </label>
                      <Textarea id="message" placeholder="أدخل رسالتك" rows={5} />
                    </div>
                    <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                      إرسال الرسالة
                    </Button>
                  </form>
                </div>

                {/* Contact Info */}
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">معلومات الاتصال</h2>
                  <p className="mt-2 text-slate-700">يمكنك التواصل معنا مباشرة من خلال وسائل الاتصال التالية</p>
                  <div className="mt-8 space-y-6">
                    {contactCards.map((card) => (
                      <Card key={`contact-card-${card.id}`}>
                        <CardContent className="flex items-start gap-4 p-6">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                            {card.icon}
                          </div>
                          <div>
                            <h3 className="font-bold text-slate-900">{card.title}</h3>
                            <p className="mt-1 text-slate-700">{card.content}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Map */}
          <section className="bg-slate-100 py-16">
            <div className="container">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">موقعنا</h2>
                <p className="mt-4 text-slate-700">يمكنك زيارتنا في مقر الشركة في مدينة 6 أكتوبر</p>
              </div>
              <div className="mt-8 aspect-video w-full overflow-hidden rounded-xl bg-slate-200">
                <div className="h-full w-full bg-slate-300 p-4 text-center">
                  <p className="text-slate-600">خريطة موقع الشركة</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16">
            <div className="container">
              <div className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 md:p-12">
                <div className="mx-auto max-w-3xl text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">هل أنت جاهز لبدء مشروعك؟</h2>
                  <p className="mt-4 text-lg text-blue-100">
                    تواصل معنا اليوم لمناقشة مشروعك واحتياجاتك البرمجية والتسويقية. فريقنا جاهز لمساعدتك في تحقيق
                    أهدافك.
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="bg-blue-200 text-blue-900 border-blue-300 hover:bg-blue-300"
                      asChild
                    >
                      <Link href="/services">استكشف خدماتنا</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </PageTransition>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
