"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

// Testimonials data with unique IDs
const testimonials = [
  {
    id: "testimonial-1",
    name: "أحمد محمد",
    position: "مدير شركة التقدم للتجارة",
    content:
      "تعاملنا مع شركة Scripter Marketing كان تجربة رائعة. قاموا بتطوير موقع إلكتروني احترافي لشركتنا وساعدونا في تحسين ظهورنا على الإنترنت. النتائج كانت مذهلة وزادت مبيعاتنا بشكل ملحوظ.",
    image: "/placeholder.svg?key=pyufm",
  },
  {
    id: "testimonial-2",
    name: "سارة أحمد",
    position: "مديرة التسويق في شركة الأفق",
    content:
      "فريق Scripter Marketing من أفضل الفرق التي تعاملت معها. قاموا بتطوير تطبيق جوال لشركتنا بجودة عالية وفي وقت قياسي. التطبيق سهل الاستخدام وحاز على إعجاب عملائنا.",
    image: "/placeholder.svg?key=lur5x",
  },
  {
    id: "testimonial-3",
    name: "محمد علي",
    position: "صاحب متجر إلكتروني",
    content:
      "ساعدتني شركة Scripter Marketing في إنشاء متجر إلكتروني متكامل وتنفيذ حملات تسويقية ناجحة. الفريق محترف ومتعاون والنتائج تجاوزت توقعاتي. أنصح بشدة بالتعامل معهم.",
    image: "/placeholder.svg?key=z75e6",
  },
]

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  // The current testimonial
  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="relative mx-auto max-w-4xl">
      <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 theme-transition">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="relative h-24 w-24 md:h-32 md:w-32 flex-shrink-0">
              <Image
                src={currentTestimonial.image || "/placeholder.svg"}
                alt={currentTestimonial.name}
                className="object-cover rounded-full border-4 border-blue-100 dark:border-blue-900"
                fill
              />
            </div>
            <div className="flex-1">
              <Quote className="h-10 w-10 text-blue-200 dark:text-blue-800 mb-4" />
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 italic">"{currentTestimonial.content}"</p>
              <div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">{currentTestimonial.name}</h4>
                <p className="text-blue-600 dark:text-blue-400">{currentTestimonial.position}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="absolute -bottom-5 left-0 right-0 flex justify-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
          onClick={prevTestimonial}
          aria-label="السابق"
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">السابق</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
          onClick={nextTestimonial}
          aria-label="التالي"
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">التالي</span>
        </Button>
      </div>
    </div>
  )
}
