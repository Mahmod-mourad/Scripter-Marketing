import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCard } from "@/components/project-card"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Check, ArrowLeft, ArrowRight, Calendar, User, Tag } from "lucide-react"

// Mock project data
const projects = [
  {
    id: "accounting-software",
    title: "برنامج المحاسبة الشامل",
    description: "برنامج محاسبي متكامل مطور بلغة C# لإدارة الحسابات والمخزون والفواتير",
    fullDescription:
      "برنامج المحاسبة الشامل هو حل متكامل لإدارة الحسابات والمخزون والفواتير للشركات والمؤسسات بمختلف أحجامها. تم تطوير البرنامج باستخدام لغة C# ويوفر واجهة مستخدم سهلة الاستخدام وتقارير متنوعة وإمكانية التخصيص حسب احتياجات العميل.",
    features: [
      "إدارة الحسابات العامة والمخزون والمبيعات والمشتريات",
      "إصدار الفواتير وإدارة العملاء والموردين",
      "تقارير مالية متنوعة وقابلة للتخصيص",
      "دعم العمل على شبكة محلية وإدارة متعددة المستخدمين",
      "نظام نسخ احتياطي واستعادة البيانات",
      "واجهة مستخدم سهلة الاستخدام ومتوافقة مع أنظمة Windows",
      "إمكانية التكامل مع أنظمة أخرى",
      "دعم الباركود وأجهزة قراءة الباركود",
      "إدارة الصلاحيات والمستخدمين",
      "تتبع حركة المخزون والتنبيه عند وصول المخزون للحد الأدنى",
    ],
    technologies: ["C#", ".NET Framework", "SQL Server", "Crystal Reports", "Windows Forms"],
    images: [
      "/assets/images/accounting-software/dashboard.png",
      "/assets/images/accounting-software/inventory.png",
      "/assets/images/accounting-software/financial.png",
    ],
    category: "desktop",
    client: "متاجر الأمل",
    completionDate: "2022-05-15",
    relatedProjects: ["inventory-system", "hr-system"],
    challenges: [
      "تطوير نظام متكامل يلبي احتياجات العميل المتنوعة",
      "ضمان أداء عالي مع كميات كبيرة من البيانات",
      "تصميم واجهة مستخدم سهلة الاستخدام",
      "توفير تقارير شاملة ودقيقة",
    ],
    solutions: [
      "استخدام أحدث تقنيات البرمجة لضمان الأداء والاستقرار",
      "تصميم قاعدة بيانات مُحسنة للتعامل مع كميات كبيرة من البيانات",
      "تطوير واجهة مستخدم بسيطة وسهلة الاستخدام",
      "إنشاء محرك تقارير مرن وقابل للتخصيص",
    ],
    results: [
      "تحسين كفاءة العمل وتوفير الوقت والجهد",
      "تقليل الأخطاء وزيادة الدقة في العمليات المالية والمحاسبية",
      "توفير تقارير دقيقة وشاملة تساعد في اتخاذ القرارات",
      "تحسين تجربة المستخدم وسهولة استخدام النظام",
    ],
  },
  {
    id: "e-learning-platform",
    title: "منصة تعليمية",
    description: "منصة تعليمية متكاملة لتقديم الدورات عبر الإنترنت",
    fullDescription:
      "منصة تعليمية متكاملة تتيح للمدربين تقديم دوراتهم عبر الإنترنت وللطلاب الاشتراك في هذه الدورات ومتابعتها. تتضمن المنصة نظام إدارة محتوى تعليمي، ونظام دفع إلكتروني، ومنتدى للنقاش، واختبارات وشهادات.",
    features: [
      "نظام إدارة محتوى تعليمي متكامل",
      "بث مباشر للمحاضرات",
      "نظام دفع إلكتروني",
      "منتدى للنقاش والتواصل",
      "اختبارات وشهادات",
      "لوحة تحكم للمدربين والطلاب",
      "تطبيق جوال متوافق",
      "إحصائيات وتقارير",
      "دعم اللغة العربية والإنجليزية",
      "تصميم متجاوب يعمل على جميع الأجهزة",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "WebRTC", "Stripe", "AWS"],
    images: ["/placeholder.svg?key=zdmho", "/placeholder-zs4ae.png", "/virtual-classroom.png"],
    category: "web",
    client: "أكاديمية التعلم",
    completionDate: "2023-02-10",
    relatedProjects: ["cms-system", "real-estate-platform"],
    challenges: [
      "تطوير منصة سهلة الاستخدام للمدربين والطلاب",
      "ضمان أداء عالي مع عدد كبير من المستخدمين",
      "توفير تجربة تعليمية تفاعلية",
      "دعم مختلف أنواع المحتوى التعليمي",
    ],
    solutions: [
      "استخدام تقنيات الويب الحديثة لتطوير واجهة مستخدم سلسة",
      "تصميم بنية تحتية قابلة للتوسع",
      "دمج أدوات تفاعلية مثل البث المباشر والاختبارات",
      "تطوير نظام إدارة محتوى مرن",
    ],
    results: [
      "زيادة عدد المستخدمين بنسبة 150% خلال 6 أشهر",
      "تحسين تجربة التعلم وزيادة معدلات إكمال الدورات",
      "توفير مصدر دخل إضافي للمدربين",
      "تسهيل الوصول إلى المحتوى التعليمي",
    ],
  },
  {
    id: "e-commerce-app",
    title: "تطبيق متجر إلكتروني",
    description: "تطبيق جوال لمتجر إلكتروني مع نظام دفع متكامل",
    fullDescription:
      "تطبيق جوال لمتجر إلكتروني يتيح للمستخدمين تصفح المنتجات وشرائها عبر الإنترنت. يتضمن التطبيق نظام دفع متكامل، وسلة تسوق، وإدارة للطلبات، وتتبع للشحن، وتقييمات للمنتجات.",
    features: [
      "واجهة مستخدم سهلة الاستخدام",
      "نظام دفع متكامل",
      "سلة تسوق",
      "إدارة للطلبات",
      "تتبع للشحن",
      "تقييمات للمنتجات",
      "إشعارات فورية",
      "بحث متقدم وتصفية للمنتجات",
      "دعم اللغة العربية والإنجليزية",
      "تكامل مع وسائل التواصل الاجتماعي",
    ],
    technologies: ["React Native", "Firebase", "Stripe", "Redux", "Node.js", "Express", "MongoDB"],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    category: "mobile",
    client: "متجر الأناقة",
    completionDate: "2023-07-20",
    relatedProjects: ["food-delivery-app", "task-management-app"],
  },
  {
    id: "cms-system",
    title: "نظام إدارة المحتوى",
    description: "نظام إدارة محتوى مخصص لشركة إعلامية",
    category: "web",
  },
  {
    id: "food-delivery-app",
    title: "تطبيق توصيل طعام",
    description: "تطبيق لطلب وتوصيل الطعام مع نظام تتبع مباشر",
    category: "mobile",
  },
  {
    id: "real-estate-platform",
    title: "منصة عقارية",
    description: "منصة لعرض وبيع وشراء العقارات مع خرائط تفاعلية",
    category: "web",
  },
  {
    id: "task-management-app",
    title: "تطبيق إدارة المهام",
    description: "تطبيق لإدارة المهام والمشاريع للفرق والشركات",
    category: "mobile",
  },
  {
    id: "hr-system",
    title: "نظام إدارة الموارد البشرية",
    description: "نظام متكامل لإدارة شؤون الموظفين والرواتب والإجازات",
    category: "desktop",
  },
  {
    id: "inventory-system",
    title: "نظام إدارة المخزون",
    description: "نظام لإدارة المخزون والمستودعات وتتبع المنتجات",
    category: "desktop",
  },
]

export function generateMetadata({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)
  if (!project) return { title: "مشروع غير موجود | Scripter Marketing" }
  return {
    title: `${project.title} | Scripter Marketing`,
    description: project.description,
  }
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  // إذا لم يتم العثور على المشروع، عرض صفحة 404
  if (!project) return notFound()

  // Get related projects
  const relatedProjects = project.relatedProjects
    ? projects.filter((p) => project.relatedProjects?.includes(p.id))
    : projects.filter((p) => p.category === project.category && p.id !== project.id).slice(0, 3)

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-white theme-transition">
      <MainNav />

      <PageHeader
        title={project.title}
        description={project.description}
        breadcrumbs={[
          { title: "الرئيسية", href: "/" },
          { title: "مشاريعنا", href: "/projects" },
          { title: project.title, href: `/projects/${project.id}` },
        ]}
      />

      <main className="flex-1">
        {/* Project Hero */}
        <section className="py-12 bg-slate-50 dark:bg-slate-900 theme-transition">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={project.images[0] || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover"
                  fill
                  priority
                />
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-blue-600 text-white">
                    {project.category === "desktop"
                      ? "برامج سطح المكتب"
                      : project.category === "web"
                        ? "تطبيقات الويب"
                        : "تطبيقات الجوال"}
                  </Badge>
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <Badge key={`hero-tech-${index}`} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
                <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">{project.fullDescription}</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-blue-600" />
                    <span className="text-slate-700 dark:text-slate-300">العميل: {project.client}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <span className="text-slate-700 dark:text-slate-300">
                      تاريخ الإنجاز: {new Date(project.completionDate).toLocaleDateString("ar-EG")}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600" asChild>
                    <Link href="/contact">طلب مشروع مماثل</Link>
                  </Button>
                  <Button variant="outline" className="border-slate-300 dark:border-slate-700" asChild>
                    <Link href="/quote">طلب عرض سعر</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="py-12">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 text-center">معرض الصور</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.images.map((image, index) => (
                <div key={`gallery-${index}`} className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - صورة ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Details Tabs */}
        <section className="py-12 bg-slate-50 dark:bg-slate-900 theme-transition">
          <div className="container">
            <Tabs defaultValue="features" className="w-full">
              <TabsList className="mx-auto mb-8 grid w-full max-w-md grid-cols-4 bg-white dark:bg-slate-800">
                <TabsTrigger value="features">المميزات</TabsTrigger>
                <TabsTrigger value="challenges">التحديات</TabsTrigger>
                <TabsTrigger value="solutions">الحلول</TabsTrigger>
                <TabsTrigger value="results">النتائج</TabsTrigger>
              </TabsList>

              <TabsContent value="features">
                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                  <h3 className="text-xl font-bold mb-6">مميزات المشروع</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <div key={`feature-${index}`} className="flex items-start gap-3">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                          <Check className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <p className="text-slate-700 dark:text-slate-300">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="challenges">
                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                  <h3 className="text-xl font-bold mb-6">التحديات</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.challenges.map((challenge, index) => (
                      <div key={`challenge-${index}`} className="flex items-start gap-3">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center">
                          <span className="text-orange-600 dark:text-orange-400 text-sm font-bold">{index + 1}</span>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300">{challenge}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="solutions">
                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                  <h3 className="text-xl font-bold mb-6">الحلول</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.solutions.map((solution, index) => (
                      <div key={`solution-${index}`} className="flex items-start gap-3">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                          <span className="text-green-600 dark:text-green-400 text-sm font-bold">{index + 1}</span>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300">{solution}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="results">
                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                  <h3 className="text-xl font-bold mb-6">النتائج</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.results.map((result, index) => (
                      <div key={`result-${index}`} className="flex items-start gap-3">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                          <Check className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <p className="text-slate-700 dark:text-slate-300">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-12">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 text-center">التقنيات المستخدمة</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {project.technologies.map((tech, index) => (
                <div
                  key={`tech-${index}`}
                  className="px-6 py-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 flex items-center gap-2"
                >
                  <Tag className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="py-12 bg-slate-50 dark:bg-slate-900 theme-transition">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 text-center">مشاريع ذات صلة</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject, index) => (
                <ProjectCard
                  key={`related-project-${relatedProject.id || index}`}
                  id={relatedProject.id}
                  title={relatedProject.title}
                  description={relatedProject.description}
                  image={relatedProject.images?.[0] || "/placeholder.svg?height=300&width=400"}
                  category={relatedProject.category}
                  technologies={relatedProject.technologies?.slice(0, 3)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12">
          <div className="container">
            <div className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 p-8 md:p-12 theme-transition">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">هل تريد مشروعًا مماثلًا؟</h2>
                <p className="mt-4 text-lg text-blue-100">
                  تواصل معنا اليوم لمناقشة مشروعك واحتياجاتك البرمجية. فريقنا جاهز لمساعدتك في تحقيق أهدافك.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50" asChild>
                    <Link href="/contact">تواصل معنا</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-800/30" asChild>
                    <Link href="/quote">طلب عرض سعر</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Navigation */}
        <section className="py-8 border-t border-slate-200 dark:border-slate-800">
          <div className="container">
            <div className="flex justify-between">
              <Button variant="ghost" className="flex items-center gap-2" asChild>
                <Link href="/projects">
                  <ArrowRight className="h-5 w-5" />
                  العودة إلى المشاريع
                </Link>
              </Button>
              <Button variant="ghost" className="flex items-center gap-2" asChild>
                <Link href={relatedProjects[0]?.id ? `/projects/${relatedProjects[0].id}` : "/projects"}>
                  المشروع التالي
                  <ArrowLeft className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
