import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PageHeader } from "@/components/page-header"
import { PageTransition } from "@/components/page-transition"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { CalendarIcon, Search } from "lucide-react"

export const metadata = {
  title: "المدونة | Scripter Marketing",
  description: "آخر المقالات والأخبار في مجال البرمجة والتسويق الرقمي",
}

// Mock blog posts data
const blogPosts = [
  {
    id: "web-development-trends-2023",
    title: "أحدث اتجاهات تطوير الويب في 2023",
    excerpt: "تعرف على أحدث التقنيات والاتجاهات في مجال تطوير الويب لعام 2023 وكيف يمكنك الاستفادة منها في مشاريعك.",
    date: "2023-05-15",
    image: "/placeholder.svg?key=avft9",
    author: "محمد أحمد",
    category: "تطوير الويب",
    tags: ["تطوير الويب", "تقنيات حديثة", "PWA", "Jamstack"],
  },
  {
    id: "digital-marketing-strategies",
    title: "استراتيجيات التسويق الرقمي الفعالة للشركات الصغيرة",
    excerpt:
      "دليل شامل لأفضل استراتيجيات التسويق الرقمي التي يمكن للشركات الصغيرة تطبيقها لزيادة مبيعاتها وتوسيع نطاق وصولها.",
    date: "2023-06-22",
    image: "/placeholder.svg?key=hvxmx",
    author: "سارة محمود",
    category: "التسويق الرقمي",
    tags: ["التسويق الرقمي", "وسائل التواصل الاجتماعي", "SEO", "التسويق بالمحتوى"],
  },
  {
    id: "mobile-app-development-guide",
    title: "دليل شامل لتطوير تطبيقات الجوال الناجحة",
    excerpt:
      "خطوات تطوير تطبيق جوال ناجح من الفكرة إلى الإطلاق، مع نصائح عملية لتجنب الأخطاء الشائعة وتحقيق أفضل النتائج.",
    date: "2023-07-10",
    image: "/placeholder.svg?key=tau9g",
    author: "أحمد علي",
    category: "تطوير تطبيقات الجوال",
    tags: ["تطوير تطبيقات الجوال", "React Native", "Flutter", "تجربة المستخدم"],
  },
  {
    id: "ui-ux-design-principles",
    title: "مبادئ تصميم واجهات المستخدم وتجربة المستخدم",
    excerpt:
      "تعرف على أهم مبادئ تصميم واجهات المستخدم وتجربة المستخدم وكيفية تطبيقها لإنشاء تصاميم جذابة وسهلة الاستخدام.",
    date: "2023-08-05",
    image: "/ui-ux-principles.png",
    author: "ليلى حسن",
    category: "تصميم واجهات المستخدم",
    tags: ["تصميم واجهات المستخدم", "تجربة المستخدم", "تصميم المواقع", "تصميم التطبيقات"],
  },
  {
    id: "seo-optimization-guide",
    title: "دليل شامل لتحسين محركات البحث في 2023",
    excerpt: "تعرف على أحدث استراتيجيات تحسين محركات البحث وكيفية تطبيقها لتحسين ظهور موقعك في نتائج البحث.",
    date: "2023-09-18",
    image: "/seo-optimization-concept.png",
    author: "محمد أحمد",
    category: "تحسين محركات البحث",
    tags: ["SEO", "تحسين محركات البحث", "التسويق الرقمي", "محتوى"],
  },
  {
    id: "e-commerce-best-practices",
    title: "أفضل الممارسات لتطوير متاجر إلكترونية ناجحة",
    excerpt: "تعرف على أفضل الممارسات والنصائح لتطوير متجر إلكتروني ناجح يجذب العملاء ويزيد المبيعات.",
    date: "2023-10-25",
    image: "/placeholder.svg?key=g74nj",
    author: "سارة محمود",
    category: "التجارة الإلكترونية",
    tags: ["التجارة الإلكترونية", "تطوير الويب", "تجربة المستخدم", "المبيعات"],
  },
]

// Get all unique categories
const categories = Array.from(new Set(blogPosts.map((post) => post.category)))

// Get all unique tags
const allTags = blogPosts.flatMap((post) => post.tags)
const uniqueTags = Array.from(new Set(allTags))

// Format date to Arabic format
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString("ar-EG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-white theme-transition">
      <MainNav />

      <PageHeader
        title="المدونة"
        description="آخر المقالات والأخبار في مجال البرمجة والتسويق الرقمي"
        breadcrumbs={[
          { title: "الرئيسية", href: "/" },
          { title: "المدونة", href: "/blog" },
        ]}
      />

      <PageTransition>
        <main className="flex-1 py-12">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-4">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="space-y-8">
                  {/* Search */}
                  <Card className="border-slate-200 dark:border-slate-800">
                    <CardContent className="p-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <Input
                          placeholder="بحث في المدونة..."
                          className="pl-10 border-slate-300 dark:border-slate-700"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Categories */}
                  <Card className="border-slate-200 dark:border-slate-800">
                    <CardContent className="p-4">
                      <h3 className="mb-4 text-lg font-bold">التصنيفات</h3>
                      <ul className="space-y-2">
                        {categories.map((category) => (
                          <li key={`category-${category}`}>
                            <Link
                              href={`/blog/category/${category}`}
                              className="text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                            >
                              {category}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Tags */}
                  <Card className="border-slate-200 dark:border-slate-800">
                    <CardContent className="p-4">
                      <h3 className="mb-4 text-lg font-bold">الوسوم</h3>
                      <div className="flex flex-wrap gap-2">
                        {uniqueTags.map((tag) => (
                          <Badge
                            key={`tag-${tag}`}
                            variant="secondary"
                            className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 cursor-pointer"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Recent Posts */}
                  <Card className="border-slate-200 dark:border-slate-800">
                    <CardContent className="p-4">
                      <h3 className="mb-4 text-lg font-bold">أحدث المقالات</h3>
                      <ul className="space-y-4">
                        {blogPosts.slice(0, 3).map((post) => (
                          <li key={`recent-${post.id}`} className="flex gap-3">
                            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                              <Image
                                src={post.image || "/placeholder.svg"}
                                alt={post.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-medium line-clamp-2">
                                <Link
                                  href={`/blog/${post.id}`}
                                  className="hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                  {post.title}
                                </Link>
                              </h4>
                              <p className="text-sm text-slate-500 dark:text-slate-400">{formatDate(post.date)}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                  {blogPosts.map((post) => (
                    <Card
                      key={`post-${post.id}`}
                      className="overflow-hidden border-slate-200 hover:shadow-md transition-all duration-300 dark:border-slate-800"
                    >
                      <div className="relative aspect-video">
                        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      </div>
                      <CardContent className="p-6">
                        <div className="mb-2">
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800">
                            {post.category}
                          </Badge>
                        </div>
                        <h2 className="mb-2 text-xl font-bold">
                          <Link href={`/blog/${post.id}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                            {post.title}
                          </Link>
                        </h2>
                        <p className="mb-4 text-slate-600 dark:text-slate-300 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                            <CalendarIcon className="h-4 w-4" />
                            <span>{formatDate(post.date)}</span>
                          </div>
                          <Button variant="link" className="p-0 text-blue-600 dark:text-blue-400" asChild>
                            <Link href={`/blog/${post.id}`}>قراءة المزيد</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Pagination */}
                <div className="mt-12 flex justify-center">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" className="border-slate-300 dark:border-slate-700" disabled>
                      السابق
                    </Button>
                    <Button
                      variant="outline"
                      className="border-slate-300 dark:border-slate-700 bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                    >
                      1
                    </Button>
                    <Button variant="outline" className="border-slate-300 dark:border-slate-700">
                      2
                    </Button>
                    <Button variant="outline" className="border-slate-300 dark:border-slate-700">
                      3
                    </Button>
                    <Button variant="outline" className="border-slate-300 dark:border-slate-700">
                      التالي
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </PageTransition>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
