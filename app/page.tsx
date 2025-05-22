"use client"

import { ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ProjectCard } from "@/components/project-card"
import { ServiceCard } from "@/components/service-card"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"

export default function Home() {
  // Define values for cards to avoid duplication
  const valueCards = [
    {
      id: "reliability",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        </svg>
      ),
      title: "الموثوقية",
      description: "نلتزم بتقديم حلول آمنة وموثوقة تلبي احتياجات عملائنا",
    },
    {
      id: "innovation",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M12 2v4" />
          <path d="M12 18v4" />
          <path d="m4.93 4.93 2.83 2.83" />
          <path d="m16.24 16.24 2.83 2.83" />
          <path d="M2 12h4" />
          <path d="M18 12h4" />
          <path d="m4.93 19.07 2.83-2.83" />
          <path d="m16.24 7.76 2.83-2.83" />
        </svg>
      ),
      title: "الابتكار",
      description: "نسعى دائمًا لتقديم حلول مبتكرة باستخدام أحدث التقنيات",
    },
    {
      id: "team",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "فريق متكامل",
      description: "فريق متكامل من المهندسين ذوي الخبرة في مختلف مجالات البرمجة والتسويق الرقمي",
    },
  ]

  // Define featured projects
  const featuredProjects = [
    {
      id: "accounting-software",
      title: "دفترة",
      description: "برنامج محاسبي متكامل لإدارة الحسابات والمخزون والفواتير للشركات والمؤسسات",
      image: "/assets/images/projects/accounting-software.jpg",
      category: "software",
      featured: true,
    },
    {
      id: "e-learning-platform",
      title: "منصة تعليمية",
      description: "منصة تعليمية متكاملة لتقديم الدورات عبر الإنترنت",
      image: "/assets/images/projects/e-learning.jpg",
      category: "web",
      featured: true,
    },
    {
      id: "cms-system",
      title: "نظام إدارة المحتوى",
      description: "نظام إدارة محتوى مخصص لشركة إعلامية",
      image: "/assets/images/projects/cms.jpg",
      category: "web",
      featured: true,
    },
  ]

  // Define services
  const services = [
    {
      id: "web-dev",
      title: "تطوير تطبيقات الويب",
      description: "تصميم وتطوير مواقع وتطبيقات ويب متكاملة باستخدام أحدث التقنيات",
      icon: "globe",
    },
    {
      id: "digital-marketing",
      title: "التسويق الرقمي",
      description: "خدمات تسويق رقمي متكاملة لزيادة ظهور علامتك التجارية وجذب العملاء",
      icon: "megaphone",
    },
    {
      id: "accounting-software",
      title: "برامج المحاسبة",
      description: "تطوير برامج محاسبية متكاملة باستخدام لغة C# لإدارة الحسابات والمخزون",
      icon: "calculator",
    },
  ]

  return (
    <div className={`flex min-h-screen flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-white theme-transition`} dir="rtl">
      {/* Header */}
      <MainNav />

      <PageTransition>
        <main className="flex-1">
          {/* Hero Section */}
          <section id="home" className="relative min-h-screen flex items-center pt-20 bg-blue-900">
            <div className="absolute inset-0 bg-blue-900"></div>
            {/* يمكن إضافة تأثيرات خلفية إضافية هنا إذا رغبت */}

            <div className="container relative z-10 px-2 sm:px-4">
              <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 items-center">
                {/* Hero Content */}
                <div className="text-center lg:text-right">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 break-words">
                    نُمهد الطريق <span className="text-[#00e6d8]">لنجاح الشركات الناشئة</span>
                  </h1>
                  <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-blue-100 mb-8 break-words">
                    خدماتنا مصممة لمساعدتك على النمو والابتكار والتميز في السوق الرقمي.
                  </p>
                  <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-end gap-4">
                    <Button
                      size="lg"
                      className="bg-[#00e6d8] hover:bg-[#00bfae] text-blue-900 font-bold rounded-md px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-md transition-all w-full sm:w-auto"
                      asChild
                    >
                      <Link href="/contact">احجز استشارة مجانية</Link>
                    </Button>
                  </div>
                </div>

                {/* Hero Image */}
                <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
                  <div className="relative w-60 h-60 sm:w-80 sm:h-80 max-w-full">
                    <Image
                      src="/rocket-hero.svg"
                      alt="Rocket Launch Illustration"
                      width={320}
                      height={320}
                      className="object-contain drop-shadow-2xl w-full h-full"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Projects - ثانياً */}
          <section className="bg-slate-100 py-20 dark:bg-slate-900 theme-transition">
            <div className="container">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white theme-transition sm:text-4xl">
                  أبرز مشاريعنا
                </h2>
                <p className="mt-4 text-slate-700 dark:text-slate-300 theme-transition">
                  نماذج من المشاريع التي قمنا بتنفيذها لعملائنا في مختلف المجالات
                </p>
              </div>
              <div className="mt-16 grid gap-8 md:grid-cols-3">
                {featuredProjects.map((project) => (
                  <ProjectCard
                    key={`featured-project-${project.id}`}
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    category={project.category}
                    featured={project.featured}
                  />
                ))}
              </div>
              <div className="mt-10 text-center">
                <Button variant="outline" className="border-slate-200 dark:border-slate-700 theme-transition" asChild>
                  <Link href="/projects">عرض جميع المشاريع</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Services Section - ثالثاً */}
          <section id="services" className="py-20">
            <div className="container">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white theme-transition sm:text-4xl">
                  خدماتنا
                </h2>
                <p className="mt-4 text-slate-700 dark:text-slate-300 theme-transition">
                  نقدم مجموعة متنوعة من الخدمات البرمجية لتلبية احتياجات عملائنا
                </p>
              </div>
              <div className="mt-16 grid gap-8 md:grid-cols-3">
                {services.map((service) => (
                  <ServiceCard
                    key={`home-service-${service.id}`}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                  />
                ))}
              </div>
              <div className="mt-10 text-center">
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
          </section>

          {/* About Section - رابعاً */}
          <section className="py-20">
            <div className="container">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white theme-transition sm:text-4xl">
                  من نحن
                </h2>
                <p className="mt-4 text-slate-700 dark:text-slate-300 theme-transition">
                  شركة Scripter Marketing متخصصة في تقديم حلول برمجية وتسويقية متكاملة للشركات والمؤسسات
                </p>
              </div>
              <div className="mt-16 grid gap-8 md:grid-cols-3">
                {valueCards.map((card) => (
                  <Card
                    key={`value-card-${card.id}`}
                    className="bg-white dark:bg-slate-800 dark:border-slate-700 theme-transition"
                  >
                    <CardContent className="p-6">
                      <div className="mb-4 h-12 w-12 rounded-lg bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 theme-transition">
                        {card.icon}
                      </div>
                      <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white theme-transition">
                        {card.title}
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300 theme-transition">{card.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-10 text-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-blue-200 text-blue-900 border-blue-300 hover:bg-blue-300"
                  asChild
                >
                  <Link href="/about">المزيد عن الشركة</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-20">
            <div className="container">
              <div className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 p-8 md:p-12 theme-transition">
                <div className="mx-auto max-w-3xl text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    هل أنت جاهز لتطوير أعمالك؟
                  </h2>
                  <p className="mt-4 text-lg text-blue-100">
                    تواصل معنا اليوم لمناقشة مشروعك واحتياجاتك البرمجية والتسويقية. فريقنا جاهز لمساعدتك في تحقيق
                    أهدافك.
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 dark:bg-white dark:text-blue-900 dark:hover:bg-blue-50 theme-transition" asChild>
                      <Link href="/contact">تواصل معنا</Link>
                    </Button>
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 theme-transition" asChild>
                      <Link href="/quote">طلب عرض سعر</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </PageTransition>

      {/* Footer - خامساً */}
      <Footer />

      {/* تم حذف WhatsAppButton */}
    </div>
  )
}
