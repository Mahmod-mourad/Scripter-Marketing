import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Briefcase, Users, Award, Clock, Globe, CheckCircle, Target, Heart, Zap, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { PageTransition } from "@/components/page-transition"
import Image from "next/image"
import Link from "next/link"
import { TeamMemberCard } from "@/components/team-member-card"

export const metadata = {
  title: "من نحن | Scripter Marketing",
  description: "تعرف على شركة Scripter Marketing وفريقنا وقيمنا ورؤيتنا",
}

export default function AboutPage() {
  // Define company values to avoid duplication
  const companyValues = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "الرؤية",
      description:
        "نسعى لأن نكون الشريك الموثوق به في مجال التطوير البرمجي والتسويق الرقمي في المنطقة العربية، من خلال تقديم حلول مبتكرة ومستدامة.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "الرسالة",
      description:
        "نلتزم بتقديم خدمات متميزة تساعد عملائنا على النمو والتميز في السوق الرقمي، مع التركيز على الجودة والابتكار والموثوقية.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "الأهداف",
      description:
        "نسعى لبناء شراكات طويلة الأمد مع عملائنا، وتطوير حلول مبتكرة، وتقديم خدمات عالية الجودة، وتحقيق النمو المستدام.",
    },
  ]

  // Define company stats to avoid duplication
  const companyStats = [
    { icon: <Briefcase className="h-8 w-8" />, value: "50+", label: "مشروع منجز" },
    { icon: <Users className="h-8 w-8" />, value: "30+", label: "عميل سعيد" },
    { icon: <Award className="h-8 w-8" />, value: "5+", label: "جائزة وتقدير" },
    { icon: <Clock className="h-8 w-8" />, value: "2+", label: "سنوات من الخبرة" },
  ]

  // Define team members to avoid duplication
  const teamMembers = [
    {
      name: "فراس",
      position: "Founder & CEO",
      description:
        "المؤسس والرئيس التنفيذي للشركة، مسؤول عن الإدارة العليا، الرؤية الاستراتيجية، وتمويل وتوسيع نطاق العمل.",
      image: "/assets/images/team/ceo.jpg",
    },
    {
      name: "م. عبادة",
      position: "Full-Stack Engineer (.NET & Angular) & Head of Backend Team",
      description:
        "بخبرة أكثر من 4 سنوات، متخصص في تطوير حلول برمجية متكاملة باستخدام .NET وAngular، ويقود فريق الباك إند لبناء أنظمة قوية وآمنة وقابلة للتوسع.",
      image: "/assets/images/team/backend-lead.jpg",
    },
    {
      name: "م. محمود مراد",
      position: "Full-Stack Engineer (MERN) & Head of Frontend Team",
      description:
        "مهندس برمجيات بخبرة 3 سنوات، يتقن العمل باستخدام تقنيات MERN Stack، ويقود فريق الواجهة الأمامية لتطوير تطبيقات ويب عالية الجودة وتجربة مستخدم متميزة.",
      image: "/assets/images/team/fullstack.jpg",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 theme-transition">
      <MainNav />

      <PageHeader
        title="من نحن"
        description="تعرف على شركة Scripter Marketing وفريقنا وقيمنا ورؤيتنا"
        breadcrumbs={[
          { title: "الرئيسية", href: "/" },
          { title: "من نحن", href: "/about" },
        ]}
      />

      <PageTransition>
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative py-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-slate-950/50"></div>
            <div className="container relative">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div>
                  <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white theme-transition mb-4">
                    نحن نبتكر <span className="text-blue-600 dark:text-blue-400">حلولاً رقمية</span> تدفع عملك للأمام
                  </h2>
                  <div className="mt-4 space-y-3 text-slate-700 dark:text-slate-300 theme-transition">
                    <p className="text-lg">
                      تأسست شركة Scripter Marketing في عام 2022 في مدينة 6 أكتوبر على يد مجموعة من المهندسين المحترفين
                      بهدف تقديم حلول برمجية وتسويقية متكاملة للشركات والمؤسسات في المنطقة العربية.
                    </p>
                    <p>
                      نحن نؤمن بأن التكنولوجيا والتسويق الرقمي يجب أن يكونا أداة لتبسيط وتحسين العمليات التجارية، وليسا
                      مصدرًا للتعقيد. لذلك، نركز على تطوير حلول سهلة الاستخدام وفعالة تلبي احتياجات عملائنا.
                    </p>
                    <p>
                      تتخصص الشركة في مجالي البرمجة والتسويق الرقمي، حيث نقدم خدمات متكاملة تساعد عملائنا على النمو
                      والتوسع في السوق الرقمي بأحدث التقنيات والاستراتيجيات.
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 theme-transition" asChild>
                      <Link href="/contact">تواصل معنا</Link>
                    </Button>
                    <Button
                      variant="secondary"
                      className="bg-blue-200 text-blue-900 border-blue-300 hover:bg-blue-300 dark:bg-blue-900/30 dark:text-blue-100 dark:border-blue-800 dark:hover:bg-blue-900/50 theme-transition"
                      asChild
                    >
                      <Link href="/services">استكشف خدماتنا</Link>
                    </Button>
                  </div>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-xl shadow-2xl">
                  <Image
                    src="/assets/images/about/team.jpg"
                    alt="فريق Scripter Marketing"
                    className="object-cover"
                    fill
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          {/* My Experience & Touch */}
          <section className="py-8 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
            <div className="container">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-2xl font-bold tracking-tight text-blue-700 dark:text-blue-400 mb-3">لمسة المطور وخبرته</h2>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  بخبرة تتجاوز <span className="font-bold text-blue-600 dark:text-blue-300">7 سنوات</span> في تطوير البرمجيات وتصميم واجهات المستخدم وتجربة المستخدم، أحرص دائماً على المزج بين الإبداع والعملية في كل مشروع أعمل عليه. أستخدم أحدث التقنيات وأفضل الممارسات العالمية في تطوير المواقع والتطبيقات، مع التركيز على التفاصيل الصغيرة التي تصنع الفرق الكبير في تجربة العميل. شغفي هو بناء حلول رقمية متكاملة تساعد الشركات على النمو والتميز في السوق الرقمي.
                </p>
              </div>
            </div>
          </section>

          {/* Vision, Mission & Goals */}
          <section className="py-10 bg-slate-50 dark:bg-slate-900/50 theme-transition border-b border-slate-200 dark:border-slate-800">
            <div className="container">
              <div className="mx-auto max-w-2xl text-center mb-10">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white theme-transition">رؤيتنا ورسالتنا وأهدافنا</h2>
                <p className="mt-2 text-slate-700 dark:text-slate-300 theme-transition">نحن نسعى دائماً للتميز والابتكار في كل ما نقوم به</p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {companyValues.map((value, index) => (
                  <Card key={`company-value-${index}`} className="bg-white dark:bg-slate-800 dark:border-slate-700 theme-transition hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="mb-4 h-14 w-14 rounded-lg bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 theme-transition">{value.icon}</div>
                      <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white theme-transition">{value.title}</h3>
                      <p className="text-slate-700 dark:text-slate-300 theme-transition leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Our Team */}
          <section className="py-10">
            <div className="container">
              <div className="mx-auto max-w-2xl text-center mb-10">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white theme-transition">فريقنا المتميز</h2>
                <p className="mt-2 text-slate-700 dark:text-slate-300 theme-transition">
                  يتكون فريقنا من مجموعة من المهندسين المتخصصين ذوي الخبرة في مختلف مجالات البرمجة والتسويق الرقمي
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                {teamMembers.map((member, index) => (
                  <TeamMemberCard
                    key={`team-member-${index}`}
                    name={member.name}
                    position={member.position}
                    description={member.description}
                    image={member.image}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Company Stats */}
          <section className="py-10 bg-gradient-to-br from-blue-600 to-blue-800 text-white border-b border-blue-700/30">
            <div className="container">
              <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
                {companyStats.map((stat, index) => (
                  <div key={`company-stat-${index}`} className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-blue-100 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-10">
            <div className="container">
              <div className="mx-auto max-w-2xl text-center mb-10">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white theme-transition">لماذا تختارنا؟</h2>
                <p className="mt-2 text-slate-700 dark:text-slate-300 theme-transition">نقدم خدمات متميزة تلبي احتياجات عملائنا بأعلى معايير الجودة</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="bg-white dark:bg-slate-800 dark:border-slate-700 theme-transition hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 theme-transition">
                        <Shield className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white theme-transition mb-2">خبرة واسعة</h3>
                        <p className="text-slate-700 dark:text-slate-300 theme-transition text-sm">
                          فريقنا يمتلك خبرة واسعة في مختلف مجالات البرمجة والتسويق الرقمي، مما يمكننا من تقديم حلول متكاملة وفعالة.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white dark:bg-slate-800 dark:border-slate-700 theme-transition hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 theme-transition">
                        <CheckCircle className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white theme-transition mb-2">جودة عالية</h3>
                        <p className="text-slate-700 dark:text-slate-300 theme-transition text-sm">
                          نلتزم بتقديم خدمات عالية الجودة تتجاوز توقعات عملائنا، مع التركيز على التفاصيل والكمال في كل ما نقوم به.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-12">
            <div className="container">
              <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 md:p-12 shadow-xl">
                <div className="mx-auto max-w-3xl text-center">
                  <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl mb-4">
                    هل أنت جاهز لتطوير أعمالك؟
                  </h2>
                  <p className="mt-2 text-base text-blue-100 mb-6">
                    تواصل معنا اليوم لمناقشة مشروعك واحتياجاتك البرمجية والتسويقية. فريقنا جاهز لمساعدتك في تحقيق
                    أهدافك.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 dark:bg-white dark:text-blue-900 dark:hover:bg-blue-50 theme-transition" asChild>
                      <Link href="/contact">تواصل معنا</Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="secondary"
                      className="bg-blue-200 text-blue-900 border-blue-300 hover:bg-blue-300 dark:bg-blue-900/30 dark:text-blue-100 dark:border-blue-800 dark:hover:bg-blue-900/50 theme-transition"
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
