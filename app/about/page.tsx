import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Briefcase, Users, Award, Clock, Globe, CheckCircle } from "lucide-react"
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
      icon: <CheckCircle className="h-6 w-6" />,
      title: "الجودة",
      description:
        "نلتزم بتقديم منتجات وخدمات عالية الجودة تتجاوز توقعات عملائنا. نحن نؤمن بأن الجودة ليست خيارًا، بل هي ضرورة.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "العمل الجماعي",
      description:
        "نؤمن بقوة العمل الجماعي والتعاون. نحن نعمل معًا كفريق واحد لتحقيق أهدافنا المشتركة وتقديم أفضل النتائج لعملائنا.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "الابتكار",
      description:
        "نسعى دائمًا للابتكار وتطوير حلول جديدة ومبتكرة. نحن نشجع الإبداع والتفكير خارج الصندوق في كل ما نقوم به.",
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
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
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
          {/* Company Overview */}
          <section className="py-16">
            <div className="container">
              <div className="grid gap-12 md:grid-cols-2 md:items-center">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-slate-900">نبذة عن الشركة</h2>
                  <div className="mt-6 space-y-4 text-slate-700">
                    <p>
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
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                      <Link href="/contact">تواصل معنا</Link>
                    </Button>
                    <Button
                      variant="secondary"
                      className="bg-blue-200 text-blue-900 border-blue-300 hover:bg-blue-300"
                      asChild
                    >
                      <Link href="/services">استكشف خدماتنا</Link>
                    </Button>
                  </div>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-xl">
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

          {/* Our Values */}
          <section className="bg-slate-100 py-16">
            <div className="container">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">قيمنا</h2>
                <p className="mt-4 text-slate-700">المبادئ التي توجه عملنا وتحدد هويتنا كشركة</p>
              </div>
              <div className="mt-16 grid gap-8 md:grid-cols-3">
                {companyValues.map((value, index) => (
                  <Card key={`company-value-${index}`} className="bg-white">
                    <CardContent className="p-6">
                      <div className="mb-4 h-12 w-12 rounded-lg bg-blue-100 p-3 text-blue-600">{value.icon}</div>
                      <h3 className="mb-2 text-xl font-bold text-slate-900">{value.title}</h3>
                      <p className="text-slate-700">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Our Team */}
          <section className="py-16">
            <div className="container">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">فريقنا</h2>
                <p className="mt-4 text-slate-700">
                  يتكون فريقنا من مجموعة من المهندسين المتخصصين ذوي الخبرة في مختلف مجالات البرمجة والتسويق الرقمي
                </p>
              </div>
              <div className="mt-16 grid gap-12 md:grid-cols-3">
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
          <section className="bg-slate-100 py-16">
            <div className="container">
              <div className="grid gap-8 grid-cols-2 md:grid-cols-4">
                {companyStats.map((stat, index) => (
                  <div key={`company-stat-${index}`} className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                    <div className="mt-2 text-slate-700">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16">
            <div className="container">
              <div className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 md:p-12">
                <div className="mx-auto max-w-3xl text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    هل أنت جاهز لتطوير أعمالك؟
                  </h2>
                  <p className="mt-4 text-lg text-blue-100">
                    تواصل معنا اليوم لمناقشة مشروعك واحتياجاتك البرمجية والتسويقية. فريقنا جاهز لمساعدتك في تحقيق
                    أهدافك.
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50" asChild>
                      <Link href="/contact">تواصل معنا</Link>
                    </Button>
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
