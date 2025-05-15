import { Badge } from "@/components/ui/badge"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { CalendarIcon, User, Clock, ArrowLeft, ArrowRight, Share2, Facebook, Twitter, Linkedin } from "lucide-react"

// Mock blog posts data
const blogPosts = [
  {
    id: "web-development-trends-2023",
    title: "أحدث اتجاهات تطوير الويب في 2023",
    excerpt: "تعرف على أحدث التقنيات والاتجاهات في مجال تطوير الويب لعام 2023 وكيف يمكنك الاستفادة منها في مشاريعك.",
    content: `
# أحدث اتجاهات تطوير الويب في 2023

يشهد مجال تطوير الويب تطورًا مستمرًا، وفي عام 2023، ظهرت العديد من الاتجاهات والتقنيات الجديدة التي تغير طريقة بناء وتصميم مواقع الويب. في هذا المقال، سنستعرض أهم هذه الاتجاهات وكيف يمكنك الاستفادة منها في مشاريعك.

## 1. تطبيقات الويب التقدمية (PWA)

تستمر تطبيقات الويب التقدمية في اكتساب شعبية كبيرة في عام 2023. هذه التطبيقات توفر تجربة مستخدم مشابهة لتطبيقات الجوال الأصلية، ولكنها تعمل على متصفح الويب. من مميزاتها:

- إمكانية العمل بدون اتصال بالإنترنت
- سرعة التحميل العالية
- إمكانية التثبيت على الشاشة الرئيسية
- دعم الإشعارات

## 2. تطوير الويب بدون واجهة (Headless Web Development)

أصبح تطوير الويب بدون واجهة من الاتجاهات الرئيسية في عام 2023. يفصل هذا النهج بين الواجهة الأمامية وخلفية التطبيق، مما يوفر مرونة أكبر في تطوير واجهات المستخدم. من فوائده:

- حرية اختيار تقنيات الواجهة الأمامية
- أداء أفضل
- إمكانية إعادة استخدام المحتوى عبر منصات متعددة

## 3. الذكاء الاصطناعي وتعلم الآلة

يتزايد استخدام الذكاء الاصطناعي وتعلم الآلة في تطوير الويب. يمكن استخدام هذه التقنيات في:

- تخصيص تجربة المستخدم
- تحليل سلوك المستخدم
- تحسين البحث والتوصيات
- المساعدين الافتراضيين والدردشة الآلية

## 4. تصميم الويب ثلاثي الأبعاد

مع تطور متصفحات الويب وزيادة قدراتها، أصبح تصميم الويب ثلاثي الأبعاد أكثر شيوعًا. يمكن استخدام تقنيات مثل WebGL وThree.js لإنشاء تجارب تفاعلية ثلاثية الأبعاد على الويب.

## 5. تطوير الويب منخفض الكود / بدون كود

تزداد شعبية منصات التطوير منخفضة الكود وبدون كود، حيث توفر طريقة سريعة وفعالة لبناء تطبيقات الويب دون الحاجة إلى مهارات برمجية متقدمة.

## 6. تقنية Jamstack

تستمر تقنية Jamstack في النمو، وهي نهج لبناء مواقع الويب يعتمد على JavaScript وواجهات برمجة التطبيقات والعلامات التعريفية. توفر هذه التقنية:

- أداء عالي
- أمان محسن
- تكلفة استضافة منخفضة
- تجربة تطوير أفضل

## الخلاصة

يشهد مجال تطوير الويب تطورًا مستمرًا، ومواكبة أحدث الاتجاهات والتقنيات أمر ضروري للبقاء في المقدمة. في شركة Scripter Marketing، نحرص على استخدام أحدث التقنيات في مشاريعنا لتقديم حلول ويب متطورة وفعالة لعملائنا.
    `,
    date: "2023-05-15",
    image: "/placeholder.svg?key=nd0iw",
    author: "محمد أحمد",
    readTime: 5,
    tags: ["تطوير الويب", "تقنيات حديثة", "PWA", "Jamstack"],
    relatedPosts: ["digital-marketing-strategies", "mobile-app-development-guide"],
  },
  {
    id: "digital-marketing-strategies",
    title: "استراتيجيات التسويق الرقمي الفعالة للشركات الصغيرة",
    excerpt:
      "دليل شامل لأفضل استراتيجيات التسويق الرقمي التي يمكن للشركات الصغيرة تطبيقها لزيادة مبيعاتها وتوسيع نطاق وصولها.",
    content: `
# استراتيجيات التسويق الرقمي الفعالة للشركات الصغيرة

في عصر التحول الرقمي، أصبح التسويق الرقمي ضرورة لا غنى عنها للشركات الصغيرة التي تسعى للنمو وزيادة حصتها السوقية. في هذا المقال، سنستعرض أهم استراتيجيات التسويق الرقمي التي يمكن للشركات الصغيرة تطبيقها لتحقيق نتائج ملموسة.

## 1. تحسين محركات البحث (SEO)

يعد تحسين محركات البحث من أهم استراتيجيات التسويق الرقمي للشركات الصغيرة. من خلال تحسين ظهور موقعك في نتائج البحث العضوية، يمكنك:

- زيادة الزيارات إلى موقعك
- تحسين جودة الزيارات
- تقليل تكلفة اكتساب العملاء

## 2. التسويق عبر وسائل التواصل الاجتماعي

تعد منصات التواصل الاجتماعي أداة قوية للشركات الصغيرة للتواصل مع جمهورها وبناء علاقات معهم. يمكنك استخدام هذه المنصات لـ:

- بناء الوعي بعلامتك التجارية
- التفاعل مع العملاء الحاليين والمحتملين
- مشاركة المحتوى القيم
- الإعلان المستهدف بتكلفة منخفضة

## 3. التسويق بالمحتوى

يساعد التسويق بالمحتوى على بناء سلطة في مجالك وجذب العملاء المحتملين. يمكنك إنشاء:

- مقالات مدونة
- مقاطع فيديو
- بودكاست
- كتب إلكترونية وأدلة

## 4. التسويق عبر البريد الإلكتروني

يظل التسويق عبر البريد الإلكتروني واحدًا من أكثر قنوات التسويق الرقمي فعالية من حيث التكلفة. يمكنك استخدامه لـ:

- بناء علاقات مع العملاء
- تقديم عروض مخصصة
- إبقاء علامتك التجارية في ذهن العملاء

## 5. الإعلانات المدفوعة

تعد الإعلانات المدفوعة طريقة سريعة للوصول إلى جمهورك المستهدف. يمكنك الاستفادة من:

- إعلانات Google
- إعلانات وسائل التواصل الاجتماعي
- إعلانات إعادة الاستهداف

## 6. التسويق بالتأثير

يمكن للشركات الصغيرة الاستفادة من التسويق بالتأثير للوصول إلى جمهور أوسع. ابحث عن المؤثرين في مجالك الذين لديهم جمهور مشابه لجمهورك المستهدف.

## 7. تحسين تجربة المستخدم

تجربة المستخدم الجيدة تؤدي إلى زيادة معدلات التحويل. تأكد من أن موقعك:

- سريع التحميل
- سهل التنقل
- متوافق مع الأجهزة المحمولة
- يحتوي على دعوات واضحة للعمل

## الخلاصة

لا يتطلب التسويق الرقمي الفعال ميزانية ضخمة، بل يتطلب استراتيجية ذكية وتنفيذًا متسقًا. في شركة Scripter Marketing، نساعد الشركات الصغيرة على تطوير وتنفيذ استراتيجيات تسويق رقمي مخصصة تناسب احتياجاتها وميزانيتها.
    `,
    date: "2023-06-22",
    image: "/placeholder.svg?key=qcoga",
    author: "سارة محمود",
    readTime: 7,
    tags: ["التسويق الرقمي", "وسائل التواصل الاجتماعي", "SEO", "التسويق بالمحتوى"],
    relatedPosts: ["web-development-trends-2023", "mobile-app-development-guide"],
  },
  {
    id: "mobile-app-development-guide",
    title: "دليل شامل لتطوير تطبيقات الجوال الناجحة",
    excerpt:
      "خطوات تطوير تطبيق جوال ناجح من الفكرة إلى الإطلاق، مع نصائح عملية لتجنب الأخطاء الشائعة وتحقيق أفضل النتائج.",
    content: `
# دليل شامل لتطوير تطبيقات الجوال الناجحة

تطوير تطبيق جوال ناجح يتطلب أكثر من مجرد فكرة جيدة. في هذا الدليل الشامل، سنستعرض الخطوات الأساسية لتطوير تطبيق جوال ناجح من الفكرة إلى الإطلاق، مع نصائح عملية لتجنب الأخطاء الشائعة.

## 1. تحديد الفكرة والهدف

قبل البدء في تطوير التطبيق، يجب تحديد:

- ما هي المشكلة التي يحلها التطبيق؟
- من هو الجمهور المستهدف؟
- ما هي ميزات التطبيق الأساسية؟
- كيف سيختلف التطبيق عن المنافسين؟

## 2. دراسة السوق والمنافسين

قم بإجراء بحث شامل عن:

- حجم السوق المستهدف
- المنافسين الرئيسيين
- نقاط القوة والضعف في التطبيقات المنافسة
- احتياجات المستخدمين غير الملباة

## 3. تصميم تجربة المستخدم (UX) وواجهة المستخدم (UI)

تصميم تجربة مستخدم جيدة أمر حاسم لنجاح التطبيق:

- قم بإنشاء رسومات تخطيطية للتطبيق
- صمم واجهة مستخدم جذابة وسهلة الاستخدام
- اختبر التصميم مع مستخدمين حقيقيين
- قم بتحسين التصميم بناءً على التعليقات

## 4. اختيار تقنية التطوير المناسبة

هناك عدة خيارات لتطوير تطبيقات الجوال:

- التطوير الأصلي (Native): باستخدام Swift/Objective-C لـ iOS و Java/Kotlin لـ Android
- التطوير المتعدد المنصات (Cross-platform): باستخدام React Native أو Flutter
- تطبيقات الويب التقدمية (PWA): باستخدام HTML/CSS/JavaScript

## 5. تطوير التطبيق

خلال مرحلة التطوير:

- اتبع منهجية تطوير مناسبة (Agile، Scrum)
- قم بتقسيم المشروع إلى مراحل صغيرة
- ركز على تطوير الميزات الأساسية أولاً (MVP)
- قم بإجراء اختبارات مستمرة

## 6. اختبار التطبيق

قبل إطلاق التطبيق، تأكد من اختباره بشكل شامل:

- اختبار الوظائف
- اختبار الأداء
- اختبار الأمان
- اختبار تجربة المستخدم
- اختبار التوافق مع مختلف الأجهزة

## 7. إطلاق التطبيق

عند إطلاق التطبيق:

- قم بتحسين صفحة التطبيق في متاجر التطبيقات (ASO)
- أعد استراتيجية تسويقية للإطلاق
- جمع تعليقات المستخدمين الأوائل
- كن مستعدًا للاستجابة السريعة للمشكلات

## 8. التحسين المستمر

بعد الإطلاق:

- تتبع مقاييس الأداء الرئيسية
- قم بتحليل سلوك المستخدم
- أضف ميزات جديدة بناءً على تعليقات المستخدمين
- قم بإصلاح الأخطاء وتحسين الأداء

## نصائح لتجنب الأخطاء الشائعة

- لا تضيف ميزات كثيرة في البداية
- لا تتجاهل أهمية التصميم
- لا تقلل من أهمية الاختبار
- لا تنس التسويق للتطبيق
- لا تتجاهل تعليقات المستخدمين

## الخلاصة

تطوير تطبيق جوال ناجح هو رحلة طويلة تتطلب تخطيطًا دقيقًا وتنفيذًا محكمًا. في شركة Scripter Marketing، نقدم خدمات تطوير تطبيقات جوال متكاملة تشمل جميع المراحل من الفكرة إلى الإطلاق والدعم المستمر.
    `,
    date: "2023-07-10",
    image: "/placeholder.svg?key=vs4r7",
    author: "أحمد علي",
    readTime: 8,
    tags: ["تطوير تطبيقات الجوال", "React Native", "Flutter", "تجربة المستخدم"],
    relatedPosts: ["web-development-trends-2023", "digital-marketing-strategies"],
  },
]

export function generateMetadata({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === params.id)
  if (!post) return { title: "مقال غير موجود | Scripter Marketing" }
  return {
    title: `${post.title} | Scripter Marketing`,
    description: post.excerpt,
  }
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }))
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === params.id)

  // إذا لم يتم العثور على المقال، عرض صفحة 404
  if (!post) return notFound()

  // Get related posts
  const relatedPosts = post.relatedPosts
    ? blogPosts.filter((p) => post.relatedPosts?.includes(p.id))
    : blogPosts.filter((p) => p.id !== post.id).slice(0, 2)

  // Format date to Arabic format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("ar-EG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  // Convert markdown content to HTML (simple version)
  const renderMarkdown = (markdown: string) => {
    // This is a very simple markdown parser for demonstration
    // In a real app, you would use a proper markdown library

    // Process headings
    let html = markdown
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-6 mb-3">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mt-5 mb-2">$1</h3>')

    // Process lists
    html = html.replace(/^- (.*$)/gm, '<li class="mb-1 list-disc mr-6">$1</li>')

    // Wrap lists
    html = html.replace(
      /<li class="mb-1 list-disc mr-6">(.*?)<\/li>\n<li class="mb-1 list-disc mr-6">/gs,
      '<ul class="my-4">\n<li class="mb-1 list-disc mr-6">$1</li>\n<li class="mb-1 list-disc mr-6">',
    )
    html = html.replace(
      /<li class="mb-1 list-disc mr-6">(.*?)<\/li>\n\n/gs,
      '<li class="mb-1 list-disc mr-6">$1</li>\n</ul>\n\n',
    )

    // Process paragraphs
    html = html.replace(/^(?!<[h|u|l])(.*$)/gm, (match) => {
      if (match.trim() === "") return match
      return '<p class="mb-4 leading-relaxed">' + match + "</p>"
    })

    return html
  }

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-white theme-transition">
      <MainNav />

      <PageHeader
        title="المدونة"
        description="آخر المقالات والأخبار في مجال البرمجة والتسويق الرقمي"
        breadcrumbs={[
          { title: "الرئيسية", href: "/" },
          { title: "المدونة", href: "/blog" },
          { title: post.title, href: `/blog/${post.id}` },
        ]}
      />

      <main className="flex-1 py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            {/* Article Header */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
              <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400 mb-6">
                <div className="flex items-center gap-1">
                  <CalendarIcon className="h-4 w-4" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime} دقائق للقراءة</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag, index) => (
                  <Badge key={`tag-${index}`} variant="secondary" className="bg-slate-100 dark:bg-slate-800">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-8">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
            </div>

            {/* Article Content */}
            <div
              className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
            />

            {/* Share Article */}
            <div className="mt-12 border-t border-b border-slate-200 dark:border-slate-800 py-6">
              <div className="flex flex-wrap justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold mb-2">مشاركة المقال</h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4 sm:mt-0">
                  <span className="text-sm text-slate-600 dark:text-slate-400">الكاتب:</span>
                  <span className="font-medium">{post.author}</span>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">مقالات ذات صلة</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Card
                    key={`related-post-${relatedPost.id}`}
                    className="overflow-hidden hover:shadow-md transition-all duration-300"
                  >
                    <div className="relative aspect-video">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-2">
                        <CalendarIcon className="h-4 w-4" />
                        <span>{formatDate(relatedPost.date)}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2">
                        <Link
                          href={`/blog/${relatedPost.id}`}
                          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2 mb-3">
                        {relatedPost.excerpt}
                      </p>
                      <Button variant="link" className="text-blue-600 dark:text-blue-400 p-0" asChild>
                        <Link href={`/blog/${relatedPost.id}`}>قراءة المزيد</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Article Navigation */}
            <div className="mt-12 flex justify-between">
              <Button variant="ghost" className="flex items-center gap-2" asChild>
                <Link href="/blog">
                  <ArrowRight className="h-5 w-5" />
                  العودة إلى المدونة
                </Link>
              </Button>
              <Button variant="ghost" className="flex items-center gap-2" asChild>
                <Link href={relatedPosts[0]?.id ? `/blog/${relatedPosts[0].id}` : "/blog"}>
                  المقال التالي
                  <ArrowLeft className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
