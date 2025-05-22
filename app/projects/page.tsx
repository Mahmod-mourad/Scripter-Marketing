import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { PageTransition } from "@/components/page-transition"
import { ProjectCard } from "@/components/project-card"
import Link from "next/link"

export const metadata = {
  title: "مشاريعنا | Scripter Marketing",
  description: "تعرف على المشاريع التي قامت بها شركة Scripter Marketing",
}

export default function ProjectsPage() {
  const projects = [
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
    {
      id: "e-commerce",
      title: "متجر إلكتروني",
      description: "متجر إلكتروني متكامل مع نظام دفع وإدارة مخزون",
      image: "/assets/images/projects/e-learning.jpg",
      category: "web",
    },
    {
      id: "mobile-app",
      title: "تطبيق جوال",
      description: "تطبيق جوال لإدارة المهام والمواعيد",
      image: "/assets/images/projects/cms.jpg",
      category: "mobile",
    },
    {
      id: "marketing-campaign",
      title: "حملة تسويقية",
      description: "حملة تسويقية متكاملة لشركة ناشئة",
      image: "/assets/images/projects/accounting-software.jpg",
      category: "marketing",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 theme-transition">
      <MainNav />

      <PageHeader
        title="مشاريعنا"
        description="تعرف على المشاريع التي قامت بها شركة Scripter Marketing"
        breadcrumbs={[
          { title: "الرئيسية", href: "/" },
          { title: "مشاريعنا", href: "/projects" },
        ]}
      />

      <PageTransition>
        <main className="flex-1">
          {/* Projects Grid */}
          <section className="py-16">
            <div className="container">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <ProjectCard
                    key={`project-${project.id}`}
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    category={project.category}
                    featured={project.featured}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-slate-100 dark:bg-slate-900 py-16 theme-transition">
            <div className="container">
              <div className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 p-8 md:p-12 theme-transition">
                <div className="mx-auto max-w-3xl text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    هل لديك مشروع تريد تنفيذه؟
                  </h2>
                  <p className="mt-4 text-lg text-blue-100">
                    تواصل معنا اليوم لمناقشة مشروعك واحتياجاتك البرمجية والتسويقية. فريقنا جاهز لمساعدتك في تحقيق
                    أهدافك.
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-4">
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
      {/* تم حذف WhatsAppButton */}
    </div>
  )
}
