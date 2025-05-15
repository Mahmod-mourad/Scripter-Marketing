import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "lucide-react"

// تعديل مكون BlogPreview لضمان استخدام مفاتيح فريدة

// تأكد من أن كل مقال له معرف فريد
const blogPosts = [
  {
    id: "web-development-trends-2023",
    title: "أحدث اتجاهات تطوير الويب في 2023",
    excerpt: "تعرف على أحدث التقنيات والاتجاهات في مجال تطوير الويب لعام 2023 وكيف يمكنك الاستفادة منها في مشاريعك.",
    date: "2023-05-15",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    author: "محمد أحمد",
  },
  {
    id: "digital-marketing-strategies",
    title: "استراتيجيات التسويق الرقمي الفعالة للشركات الصغيرة",
    excerpt:
      "دليل شامل لأفضل استراتيجيات التسويق الرقمي التي يمكن للشركات الصغيرة تطبيقها لزيادة مبيعاتها وتوسيع نطاق وصولها.",
    date: "2023-06-22",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=800",
    author: "سارة محمود",
  },
  {
    id: "mobile-app-development-guide",
    title: "دليل شامل لتطوير تطبيقات الجوال الناجحة",
    excerpt:
      "خطوات تطوير تطبيق جوال ناجح من الفكرة إلى الإطلاق، مع نصائح عملية لتجنب الأخطاء الشائعة وتحقيق أفضل النتائج.",
    date: "2023-07-10",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    author: "أحمد علي",
  },
]

export function BlogPreview() {
  // Format date to Arabic format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("ar-EG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  // في الـ return، تأكد من استخدام post.id كمفتاح فريد
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {blogPosts.map((post) => (
        <Card
          key={post.id}
          className="overflow-hidden bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 theme-transition hover:shadow-md transition-all duration-300"
        >
          <div className="relative aspect-video">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} className="object-cover" fill />
          </div>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
              <CalendarIcon className="h-4 w-4" />
              <span>{formatDate(post.date)}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              <Link
                href={`/blog/${post.id}`}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {post.title}
              </Link>
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">{post.excerpt}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-500 dark:text-slate-400">بواسطة: {post.author}</span>
              <Button variant="link" className="text-blue-600 dark:text-blue-400 p-0" asChild>
                <Link href={`/blog/${post.id}`}>قراءة المزيد</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
