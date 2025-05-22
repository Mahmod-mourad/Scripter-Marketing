import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { PageHeader } from "@/components/page-header"
import { PageTransition } from "@/components/page-transition"
import { Card, CardContent } from "@/components/ui/card"
import { BookingForm } from "@/components/booking-form"
import { Clock, Video, MessageSquare, CheckCircle } from "lucide-react"

export const metadata = {
  title: "حجز استشارة | Scripter Marketing",
  description: "احجز استشارة مجانية مع خبراء Scripter Marketing لمناقشة مشروعك",
}

export default function BookConsultationPage() {
  // Define benefits to avoid duplication
  const benefits = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "استشارة لمدة 30 دقيقة",
      description: "استشارة مجانية لمدة 30 دقيقة مع أحد خبرائنا لمناقشة مشروعك واحتياجاتك",
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: "اجتماع عبر الإنترنت",
      description: "اجتماع عبر تطبيق Zoom أو Google Meet حسب اختيارك",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "نصائح مخصصة",
      description: "نصائح وتوجيهات مخصصة لمشروعك من خبراء متخصصين في المجال",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "بدون التزامات",
      description: "استشارة مجانية بدون أي التزامات مالية أو تعاقدية",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-white theme-transition">
      <MainNav />

      <PageHeader
        title="احجز استشارة مجانية"
        description="تحدث مع خبرائنا لمناقشة مشروعك واحتياجاتك البرمجية والتسويقية"
        breadcrumbs={[
          { title: "الرئيسية", href: "/" },
          { title: "حجز استشارة", href: "/book-consultation" },
        ]}
      />

      <PageTransition>
        <main className="flex-1 py-12">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Booking Form */}
              <div>
                <Card className="border-slate-200 dark:border-slate-800">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6">احجز موعدك الآن</h2>
                    <BookingForm />
                  </CardContent>
                </Card>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold mb-6">ما الذي ستحصل عليه</h2>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={`benefit-${index}`} className="flex gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{benefit.title}</h3>
                        <p className="mt-2 text-slate-600 dark:text-slate-400">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
                  <h3 className="text-xl font-bold mb-4">كيف تستعد للاستشارة</h3>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400">•</span>
                      <span>جهز أسئلتك واستفساراتك مسبقاً</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400">•</span>
                      <span>حدد أهدافك من المشروع بوضوح</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400">•</span>
                      <span>جهز أي مواد أو مراجع تود مشاركتها معنا</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400">•</span>
                      <span>تأكد من جودة اتصالك بالإنترنت قبل الموعد</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8 text-center">الأسئلة الشائعة</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-slate-200 dark:border-slate-800">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">هل الاستشارة مجانية فعلاً؟</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      نعم، الاستشارة الأولية مجانية تماماً وبدون أي التزامات. نهدف إلى فهم مشروعك واحتياجاتك لتقديم أفضل
                      الحلول.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 dark:border-slate-800">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">كم تستغرق الاستشارة؟</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      تستغرق الاستشارة عادة 30 دقيقة، وهي كافية لمناقشة الأفكار الأساسية للمشروع وتقديم التوجيهات
                      الأولية.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 dark:border-slate-800">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">ماذا يحدث بعد الاستشارة؟</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      بعد الاستشارة، سنرسل لك ملخصاً بالنقاط التي تمت مناقشتها والخطوات التالية المقترحة. إذا كنت مهتماً
                      بالتعاون، سنقدم لك عرض سعر مفصل.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 dark:border-slate-800">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">هل يمكنني إلغاء أو إعادة جدولة الاستشارة؟</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      نعم، يمكنك إلغاء أو إعادة جدولة الاستشارة في أي وقت قبل 24 ساعة من الموعد المحدد عن طريق التواصل
                      معنا.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </PageTransition>

      <Footer />
      <WhatsAppButton phoneNumber="01020384694" />
    </div>
  )
}
