"use client"

import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageTransition } from "@/components/page-transition"
import { Download, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { DownloadForm } from "@/components/download-form"

export default function AccountingSoftwareClientPage() {
  const [showDownloadForm, setShowDownloadForm] = useState(false)

  const handleDownloadClick = () => {
    setShowDownloadForm(true)
  }

  // Define feature lists to avoid duplication
  const featureLists = [
    {
      id: "features-list-1",
      title: "مميزات الأصناف في برنامج محاسبة DEXEF ERP",
      items: [
        "إضافة الأصناف باستخدام قارئ الباركود في برنامج الكاشير",
        "إضافة أنواع مختلفة للأصناف سواء خدمة أو مخزون - منتج تام",
        "إمكانية إضافة الصنف على أكثر من مخزن",
        "تعدد وحدات القياس للصنف الواحد",
      ],
    },
    {
      id: "features-list-2",
      title: "نظامية المخازن",
      items: [
        "مع برنامج محاسبة DEXEF ERP يمكنك إدارة غاية في النظامية للمخازن، فتستطيع من خلاله إدارة الأصناف في نظام شجري متعدد التفريعات.",
        "تقسيم الأصناف التي لها نفس الخصائص في صورة مجموعات",
        "عملية البحث داخل المخازن أكثر سهولة من أي وقت مضى",
        "تحديد المورد الخاص بكل صنف",
      ],
    },
    {
      id: "features-list-3",
      title: "والكثير من مميزات الأصناف",
      items: [
        "تطبيق سياسة الحد الأدنى والأقصى للأصناف",
        "تقسيم الأصناف إلى مجموعات شجرية",
        "تطبيق الضريبة على الأصناف",
        "تحديد إذا كان الصنف خاضع للضريبة أم لا",
      ],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <MainNav />

      <PageHeader
        title="برنامج المحاسبة الشامل"
        description="برنامج محاسبي متكامل لإدارة الحسابات والمخزون والفواتير للشركات والمؤسسات"
        breadcrumbs={[
          { title: "الرئيسية", href: "/" },
          { title: "مشاريعنا", href: "/projects" },
          { title: "برنامج المحاسبة الشامل", href: "/projects/accounting-software" },
        ]}
      />

      <PageTransition>
        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-16">
            <div className="container">
              <div className="grid gap-12 md:grid-cols-2 md:items-center">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">DEXEF ERP برنامج محاسبة يلبي كل احتياجاتك</h2>
                  <p className="mt-6 text-lg text-slate-700">
                    هل تبحث عن برنامج محاسبة يشمل كل الإمكانيات التي تجعلك قادراً على إدارة شركتك بكل سهولة؟ إليك DEXEF
                    ERP فهو برنامج محاسبي سحابي "قلبه على مصلحتك" ينقل مستوى أعمالك إلى مستوى أعلى حيث يتم التسجيل الآلي
                    لجميع القيود المحاسبية على معاملاتك المالية.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                      <Link href="/contact">طلب عرض سعر</Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="gap-2 border-slate-300 text-slate-900 hover:bg-slate-100"
                      onClick={handleDownloadClick}
                    >
                      <Download className="h-5 w-5" />
                      رابط تحميل برنامج محاسبة مجانا
                    </Button>
                  </div>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/assets/images/accounting-software/dashboard.png"
                    alt="برنامج المحاسبة الشامل"
                    className="object-cover"
                    fill
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Download Section */}
          <section id="download" className="bg-slate-100 py-16">
            <div className="container">
              <div className="mx-auto max-w-3xl rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-center shadow-lg md:p-12">
                <h2 className="text-3xl font-bold tracking-tight text-white">رابط تحميل برنامج محاسبة مجانا</h2>
                <p className="mt-4 text-lg text-blue-100">
                  الآن أصبح بمقدورك تجربة أفضل برنامج محاسبة قبل اتخاذ قرار الشراء، للتأكد من أنه مناسب لاحتياجاتك.
                </p>
                <div className="mt-8 bg-white p-6 rounded-lg">
                  <DownloadForm />
                </div>
              </div>
            </div>
          </section>

          {/* Features Overview */}
          <section className="bg-slate-50 py-16">
            <div className="container">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight">
                  مميزات المخازن والمستودعات في برنامج محاسبة Dexef Erp
                </h2>
                <p className="mt-4 text-lg text-slate-700">
                  يتضمن برنامج محاسبة سحابي ديكسيف أدوات إدارة مختلف أنواع الحسابات في المحاسبة، مما يسهل تنفيذ الدورة
                  المحاسبية بدقة وكفاءة، بما في ذلك المحاسبة المالية والإدارية ومحاسبة التكاليف.
                </p>
              </div>

              <div className="mt-16">
                <div className="grid gap-8 md:grid-cols-3">
                  {featureLists.map((featureList) => (
                    <div key={featureList.id} className="rounded-lg bg-white p-6 shadow-md border border-slate-200">
                      <h3 className="mb-4 text-xl font-bold">{featureList.title}</h3>
                      <ul className="space-y-3">
                        {featureList.items.map((item, itemIndex) => (
                          <li key={`${featureList.id}-item-${itemIndex}`} className="flex items-start gap-2">
                            <Check className="h-5 w-5 flex-shrink-0 text-blue-600" />
                            <span className="text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Screenshots */}
          <section className="py-16">
            <div className="container">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight">برنامج محاسبة متكامل للشركات</h2>
                <p className="mt-4 text-lg text-slate-700">
                  أفضل برنامج محاسبي متكامل للشركات.. DEXEF ERP يشمل جميع ميزات الحسابات العامة
                </p>
              </div>

              <div className="mt-16">
                <Tabs defaultValue="inventory" className="w-full">
                  <TabsList className="mx-auto mb-8 grid w-full max-w-4xl grid-cols-4 bg-slate-100">
                    <TabsTrigger value="inventory">المخزون</TabsTrigger>
                    <TabsTrigger value="financial">النظام المالي</TabsTrigger>
                    <TabsTrigger value="hr">شؤون الموظفين</TabsTrigger>
                    <TabsTrigger value="branches">الفروع</TabsTrigger>
                  </TabsList>
                  <TabsContent value="inventory">
                    <div className="grid gap-8 md:grid-cols-2">
                      <div className="relative aspect-video overflow-hidden rounded-lg shadow-md">
                        <Image
                          src="/assets/images/accounting-software/inventory.png"
                          alt="إدارة المخزون"
                          className="object-cover"
                          fill
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">سهولة جرد المخازن</h3>
                        <ul className="mt-6 space-y-4">
                          <li key="inventory-feature-1" className="flex items-start gap-3">
                            <Check className="h-6 w-6 flex-shrink-0 text-blue-600" />
                            <p className="text-slate-700">
                              من خلال برنامج محاسبة Dexef، يمكن عمل جرد للمخازن بكل سهولة عن أي فترة سواء يومية أو شهرية
                              أو سنوية والوقوف على أرصدة نهاية كل فترة بأي وحدة للصنف.
                            </p>
                          </li>
                          <li key="inventory-feature-2" className="flex items-start gap-3">
                            <Check className="h-6 w-6 flex-shrink-0 text-blue-600" />
                            <p className="text-slate-700">
                              نظام محاسبة ديكسيف يوضح لك الطريقة التي تراها الأنسب لحساب تكلفة المخزون لديك سواء
                              بالمتوسط المرجح أو الوارد أو صادر أولا - الوارد أخيرا صادر أولا.
                            </p>
                          </li>
                          <li key="inventory-feature-3" className="flex items-start gap-3">
                            <Check className="h-6 w-6 flex-shrink-0 text-blue-600" />
                            <p className="text-slate-700">
                              ومنها تستطيع معرفة تكلفة كل صنف على حدى، وبالتالي معرفة أرباح الصنف.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="financial">
                    <div className="grid gap-8 md:grid-cols-2">
                      <div className="relative aspect-video overflow-hidden rounded-lg shadow-md">
                        <Image
                          src="/assets/images/accounting-software/financial.png"
                          alt="النظام المالي"
                          className="object-cover"
                          fill
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">
                          برنامج محاسبة DEXEF ERP يوفر لك كل ما تحتاجه لإدارة منظومتك المالية
                        </h3>
                        <ul className="mt-6 space-y-4">
                          <li key="financial-feature-1" className="flex items-start gap-3">
                            <Check className="h-6 w-6 flex-shrink-0 text-blue-600" />
                            <p className="text-slate-700">
                              نجاح المنظومة المالية داخل مؤسستك يضمن لك استمرارية التطور والتقدم. وهذا ما نوفره لك
                              ديكسيف في أفضل برنامج محاسبي فهو برنامج فوترة ومبيعات ومحاسبة يساعدك كدليل محاسبي شامل سهل
                              تصنيف وتنظيم الحسابات
                            </p>
                          </li>
                          <li key="financial-feature-2" className="flex items-start gap-3">
                            <Check className="h-6 w-6 flex-shrink-0 text-blue-600" />
                            <p className="text-slate-700">
                              هو أقوى برنامج محاسبة مجاني يدعمك بكل قوة إلى النجاح والاستمرارية فهو: توافق مع هيئة
                              الزكاة والدخل، دعم ضريبة القيمة المضافة، يدعم الفاتورة
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="hr">
                    <div className="grid gap-8 md:grid-cols-2">
                      <div className="relative aspect-video overflow-hidden rounded-lg shadow-md">
                        <Image
                          src="/assets/images/accounting-software/hr.png"
                          alt="شؤون الموظفين"
                          className="object-cover"
                          fill
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">برنامج محاسبة DEXEF ERP لإدارة شؤون الموظفين</h3>
                        <ul className="mt-6 space-y-4">
                          <li key="hr-feature-1" className="flex items-start gap-3">
                            <Check className="h-6 w-6 flex-shrink-0 text-blue-600" />
                            <p className="text-slate-700">
                              برنامج إدارة الموارد البشرية هو نظام قائم على أتمتة عمليات الموارد البشرية، بدءًا من
                              التوظيف وحتى إنهاء الخدمة.
                            </p>
                          </li>
                          <li key="hr-feature-2" className="flex items-start gap-3">
                            <Check className="h-6 w-6 flex-shrink-0 text-blue-600" />
                            <p className="text-slate-700">
                              يساعد برنامج الموارد البشرية الشركات على إدارة الموظفين بكفاءة وفعالية، وتحسين إنتاجية
                              الموظفين، وخفض التكاليف.
                            </p>
                          </li>
                          <li key="hr-feature-3" className="flex items-start gap-3">
                            <Check className="h-6 w-6 flex-shrink-0 text-blue-600" />
                            <p className="text-slate-700">
                              يساعد على تتبع أداء الموظفين وتحديد نقاط القوة والضعف لديهم.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="branches">
                    <div className="grid gap-8 md:grid-cols-2">
                      <div className="relative aspect-video overflow-hidden rounded-lg shadow-md">
                        <Image
                          src="/assets/images/accounting-software/branches.png"
                          alt="الفروع"
                          className="object-cover"
                          fill
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">برنامج محاسبة DEXEF ERP لإدارة الفروع</h3>
                        <ul className="mt-6 space-y-4">
                          <li key="branches-feature-1" className="flex items-start gap-3">
                            <Check className="h-6 w-6 flex-shrink-0 text-blue-600" />
                            <p className="text-slate-700">
                              برنامج إدارة الفروع هو نظام يساعد الشركات على إدارة فروعها المتعددة بكفاءة وفعالية.
                            </p>
                          </li>
                          <li key="branches-feature-2" className="flex items-start gap-3">
                            <Check className="h-6 w-6 flex-shrink-0 text-blue-600" />
                            <p className="text-slate-700">
                              يساعد برنامج إدارة الفروع الشركات على تتبع أداء الفروع، وإدارة المخزون، وإدارة المبيعات،
                              وإدارة العملاء.
                            </p>
                          </li>
                          <li key="branches-feature-3" className="flex items-start gap-3">
                            <Check className="h-6 w-6 flex-shrink-0 text-blue-600" />
                            <p className="text-slate-700">يساعد على تحسين التواصل بين الفروع والإدارة المركزية.</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </PageTransition>
    </div>
  )
}
