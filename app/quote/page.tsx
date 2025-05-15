"use client"

import Link from "next/link"

import { useState } from "react"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PageHeader } from "@/components/page-header"
import { PageTransition } from "@/components/page-transition"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Check, ArrowRight, ArrowLeft } from "lucide-react"

export default function QuotePage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Form schema for step 1
  const formSchema1 = z.object({
    name: z.string().min(2, { message: "الاسم مطلوب" }),
    email: z.string().email({ message: "البريد الإلكتروني غير صالح" }),
    phone: z.string().min(10, { message: "رقم الهاتف غير صالح" }),
    company: z.string().optional(),
  })

  // Form schema for step 2
  const formSchema2 = z.object({
    projectType: z.string({ required_error: "يرجى اختيار نوع المشروع" }),
    services: z.array(z.string()).nonempty({ message: "يرجى اختيار خدمة واحدة على الأقل" }),
    budget: z.string({ required_error: "يرجى اختيار الميزانية التقريبية" }),
  })

  // Form schema for step 3
  const formSchema3 = z.object({
    description: z.string().min(10, { message: "يرجى تقديم وصف مختصر للمشروع" }),
    timeline: z.string({ required_error: "يرجى اختيار الإطار الزمني المتوقع" }),
    hearAbout: z.string().optional(),
  })

  // Form for step 1
  const form1 = useForm<z.infer<typeof formSchema1>>({
    resolver: zodResolver(formSchema1),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
    },
  })

  // Form for step 2
  const form2 = useForm<z.infer<typeof formSchema2>>({
    resolver: zodResolver(formSchema2),
    defaultValues: {
      projectType: "",
      services: [],
      budget: "",
    },
  })

  // Form for step 3
  const form3 = useForm<z.infer<typeof formSchema3>>({
    resolver: zodResolver(formSchema3),
    defaultValues: {
      description: "",
      timeline: "",
      hearAbout: "",
    },
  })

  // Handle form submission for each step
  const onSubmitStep1 = (data: z.infer<typeof formSchema1>) => {
    setFormData({ ...formData, ...data })
    setStep(2)
    window.scrollTo(0, 0)
  }

  const onSubmitStep2 = (data: z.infer<typeof formSchema2>) => {
    setFormData({ ...formData, ...data })
    setStep(3)
    window.scrollTo(0, 0)
  }

  const onSubmitStep3 = (data: z.infer<typeof formSchema3>) => {
    setFormData({ ...formData, ...data })
    // Here you would typically send the data to your server
    console.log("Form submitted:", { ...formData, ...data })
    setIsSubmitted(true)
    window.scrollTo(0, 0)
  }

  // Go back to previous step
  const goBack = () => {
    setStep(step - 1)
    window.scrollTo(0, 0)
  }

  // Define services for checkboxes
  const serviceOptions = [
    { id: "web-dev", label: "تطوير الويب" },
    { id: "mobile-dev", label: "تطوير تطبيقات الجوال" },
    { id: "ui-ux", label: "تصميم واجهات المستخدم" },
    { id: "digital-marketing", label: "التسويق الرقمي" },
    { id: "seo", label: "تحسين محركات البحث" },
    { id: "content", label: "إنشاء المحتوى" },
    { id: "branding", label: "تصميم الهوية البصرية" },
    { id: "consulting", label: "استشارات تقنية" },
  ]

  const budgetOptions = [
    { id: "budget-1", value: "less-5k", label: "أقل من 5,000 دولار" },
    { id: "budget-2", value: "5k-10k", label: "5,000 - 10,000 دولار" },
    { id: "budget-3", value: "10k-20k", label: "10,000 - 20,000 دولار" },
    { id: "budget-4", value: "more-20k", label: "أكثر من 20,000 دولار" },
    { id: "budget-5", value: "not-sure", label: "غير متأكد / أحتاج إلى استشارة" },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-white theme-transition">
      <MainNav />

      <PageHeader
        title="طلب عرض سعر"
        description="املأ النموذج التالي للحصول على عرض سعر مخصص لمشروعك"
        breadcrumbs={[
          { title: "الرئيسية", href: "/" },
          { title: "طلب عرض سعر", href: "/quote" },
        ]}
      />

      <PageTransition>
        <main className="flex-1 py-12">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              {/* Progress Steps */}
              <div className="mb-8">
                <div className="flex justify-between">
                  <div
                    className={`flex flex-col items-center ${step >= 1 ? "text-blue-600 dark:text-blue-400" : "text-slate-400"}`}
                  >
                    <div
                      className={`h-10 w-10 rounded-full flex items-center justify-center mb-2 ${step >= 1 ? "bg-blue-100 dark:bg-blue-900/30" : "bg-slate-100 dark:bg-slate-800"}`}
                    >
                      {step > 1 ? <Check className="h-5 w-5" /> : <span className="font-bold">1</span>}
                    </div>
                    <span className="text-sm">معلومات الاتصال</span>
                  </div>
                  <div
                    className={`flex flex-col items-center ${step >= 2 ? "text-blue-600 dark:text-blue-400" : "text-slate-400"}`}
                  >
                    <div
                      className={`h-10 w-10 rounded-full flex items-center justify-center mb-2 ${step >= 2 ? "bg-blue-100 dark:bg-blue-900/30" : "bg-slate-100 dark:bg-slate-800"}`}
                    >
                      {step > 2 ? <Check className="h-5 w-5" /> : <span className="font-bold">2</span>}
                    </div>
                    <span className="text-sm">تفاصيل المشروع</span>
                  </div>
                  <div
                    className={`flex flex-col items-center ${step >= 3 ? "text-blue-600 dark:text-blue-400" : "text-slate-400"}`}
                  >
                    <div
                      className={`h-10 w-10 rounded-full flex items-center justify-center mb-2 ${step >= 3 ? "bg-blue-100 dark:bg-blue-900/30" : "bg-slate-100 dark:bg-slate-800"}`}
                    >
                      <span className="font-bold">3</span>
                    </div>
                    <span className="text-sm">متطلبات إضافية</span>
                  </div>
                </div>
                <div className="relative mt-2">
                  <div className="absolute top-0 h-1 w-full bg-slate-200 dark:bg-slate-800"></div>
                  <div
                    className="absolute top-0 h-1 bg-blue-600 dark:bg-blue-400 transition-all duration-300"
                    style={{ width: `${(step - 1) * 50}%` }}
                  ></div>
                </div>
              </div>

              {/* Form Content */}
              <Card className="border-slate-200 dark:border-slate-800">
                <CardContent className="p-6">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="mx-auto h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                        <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
                      </div>
                      <h2 className="text-2xl font-bold mb-4">تم استلام طلبك بنجاح!</h2>
                      <p className="text-slate-600 dark:text-slate-400 mb-6">
                        شكراً لك على اهتمامك بخدماتنا. سيقوم فريقنا بمراجعة طلبك وسنتواصل معك في أقرب وقت ممكن.
                      </p>
                      <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600" asChild>
                        <Link href="/">العودة إلى الصفحة الرئيسية</Link>
                      </Button>
                    </div>
                  ) : (
                    <>
                      {step === 1 && (
                        <Form {...form1}>
                          <form onSubmit={form1.handleSubmit(onSubmitStep1)} className="space-y-6">
                            <h2 className="text-2xl font-bold mb-6">معلومات الاتصال</h2>

                            <FormField
                              control={form1.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>الاسم الكامل *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="أدخل اسمك الكامل" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form1.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>البريد الإلكتروني *</FormLabel>
                                  <FormControl>
                                    <Input type="email" placeholder="أدخل بريدك الإلكتروني" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form1.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>رقم الهاتف *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="أدخل رقم هاتفك" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form1.control}
                              name="company"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>اسم الشركة (اختياري)</FormLabel>
                                  <FormControl>
                                    <Input placeholder="أدخل اسم شركتك" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <div className="flex justify-end">
                              <Button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                              >
                                التالي
                                <ArrowLeft className="mr-2 h-4 w-4" />
                              </Button>
                            </div>
                          </form>
                        </Form>
                      )}

                      {step === 2 && (
                        <Form {...form2}>
                          <form onSubmit={form2.handleSubmit(onSubmitStep2)} className="space-y-6">
                            <h2 className="text-2xl font-bold mb-6">تفاصيل المشروع</h2>

                            <FormField
                              control={form2.control}
                              name="projectType"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>نوع المشروع *</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="اختر نوع المشروع" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="website">موقع ويب</SelectItem>
                                      <SelectItem value="mobile-app">تطبيق جوال</SelectItem>
                                      <SelectItem value="desktop-app">برنامج سطح المكتب</SelectItem>
                                      <SelectItem value="e-commerce">متجر إلكتروني</SelectItem>
                                      <SelectItem value="marketing">حملة تسويقية</SelectItem>
                                      <SelectItem value="other">أخرى</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form2.control}
                              name="services"
                              render={() => (
                                <FormItem>
                                  <div className="mb-4">
                                    <FormLabel>الخدمات المطلوبة *</FormLabel>
                                    <FormDescription>اختر الخدمات التي تحتاجها في مشروعك</FormDescription>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {serviceOptions.map((service) => (
                                      <FormField
                                        key={`service-field-${service.id}`}
                                        control={form2.control}
                                        name="services"
                                        render={({ field }) => {
                                          return (
                                            <FormItem className="flex flex-row items-start space-x-3 space-x-reverse">
                                              <FormControl>
                                                <Checkbox
                                                  checked={field.value?.includes(service.id)}
                                                  onCheckedChange={(checked) => {
                                                    return checked
                                                      ? field.onChange([...field.value, service.id])
                                                      : field.onChange(
                                                          field.value?.filter((value) => value !== service.id),
                                                        )
                                                  }}
                                                />
                                              </FormControl>
                                              <FormLabel className="font-normal">{service.label}</FormLabel>
                                            </FormItem>
                                          )
                                        }}
                                      />
                                    ))}
                                  </div>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form2.control}
                              name="budget"
                              render={({ field }) => (
                                <FormItem className="space-y-3">
                                  <FormLabel>الميزانية التقريبية *</FormLabel>
                                  <FormControl>
                                    <RadioGroup
                                      onValueChange={field.onChange}
                                      defaultValue={field.value}
                                      className="flex flex-col space-y-1"
                                    >
                                      {budgetOptions.map((option) => (
                                        <FormItem
                                          key={`budget-option-${option.id}`}
                                          className="flex items-center space-x-3 space-x-reverse"
                                        >
                                          <FormControl>
                                            <RadioGroupItem value={option.value} />
                                          </FormControl>
                                          <FormLabel className="font-normal">{option.label}</FormLabel>
                                        </FormItem>
                                      ))}
                                    </RadioGroup>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <div className="flex justify-between">
                              <Button
                                type="button"
                                variant="outline"
                                onClick={goBack}
                                className="border-slate-300 dark:border-slate-700"
                              >
                                <ArrowRight className="ml-2 h-4 w-4" />
                                السابق
                              </Button>
                              <Button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                              >
                                التالي
                                <ArrowLeft className="mr-2 h-4 w-4" />
                              </Button>
                            </div>
                          </form>
                        </Form>
                      )}

                      {step === 3 && (
                        <Form {...form3}>
                          <form onSubmit={form3.handleSubmit(onSubmitStep3)} className="space-y-6">
                            <h2 className="text-2xl font-bold mb-6">متطلبات إضافية</h2>

                            <FormField
                              control={form3.control}
                              name="description"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>وصف المشروع *</FormLabel>
                                  <FormControl>
                                    <Textarea
                                      placeholder="يرجى تقديم وصف مختصر للمشروع ومتطلباتك"
                                      className="min-h-[120px]"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form3.control}
                              name="timeline"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>الإطار الزمني المتوقع *</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="اختر الإطار الزمني المتوقع" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="asap">في أقرب وقت ممكن</SelectItem>
                                      <SelectItem value="1-month">خلال شهر</SelectItem>
                                      <SelectItem value="1-3-months">1-3 أشهر</SelectItem>
                                      <SelectItem value="3-6-months">3-6 أشهر</SelectItem>
                                      <SelectItem value="6-plus-months">أكثر من 6 أشهر</SelectItem>
                                      <SelectItem value="not-sure">غير متأكد</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form3.control}
                              name="hearAbout"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>كيف سمعت عنا؟ (اختياري)</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="اختر كيف سمعت عنا" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="search">محركات البحث</SelectItem>
                                      <SelectItem value="social">وسائل التواصل الاجتماعي</SelectItem>
                                      <SelectItem value="referral">توصية من صديق</SelectItem>
                                      <SelectItem value="blog">مدونتنا</SelectItem>
                                      <SelectItem value="other">مصدر آخر</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <div className="flex justify-between">
                              <Button
                                type="button"
                                variant="outline"
                                onClick={goBack}
                                className="border-slate-300 dark:border-slate-700"
                              >
                                <ArrowRight className="ml-2 h-4 w-4" />
                                السابق
                              </Button>
                              <Button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                              >
                                إرسال الطلب
                              </Button>
                            </div>
                          </form>
                        </Form>
                      )}
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </PageTransition>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
