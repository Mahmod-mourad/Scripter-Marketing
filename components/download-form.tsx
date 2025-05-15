"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Download } from "lucide-react"

export function DownloadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your server
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>تحميل برنامج المحاسبة</CardTitle>
        <CardDescription>
          يرجى ملء النموذج التالي للحصول على رابط تحميل النسخة التجريبية من برنامج المحاسبة
        </CardDescription>
      </CardHeader>
      {!isSubmitted ? (
        <>
          <CardContent>
            <form onSubmit={handleSubmit} id="download-form" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">الاسم الكامل</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="أدخل اسمك الكامل"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">رقم الهاتف</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="أدخل رقم هاتفك"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">اسم الشركة</Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="أدخل اسم شركتك"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button type="submit" form="download-form" className="w-full gap-2 bg-blue-600 hover:bg-blue-700">
              <Download className="h-5 w-5" />
              تحميل البرنامج
            </Button>
          </CardFooter>
        </>
      ) : (
        <CardContent className="text-center py-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="rounded-full bg-green-100 p-3">
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
                className="h-6 w-6 text-green-600"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3 className="text-xl font-bold">شكراً لك!</h3>
            <p className="text-slate-600">تم إرسال رابط التحميل إلى بريدك الإلكتروني</p>
            <Button
              className="mt-4 gap-2 bg-blue-600 hover:bg-blue-700"
              onClick={() => window.open("https://download.dexef.com/setup.exe", "_blank")}
            >
              <Download className="h-5 w-5" />
              تحميل مباشر
            </Button>
          </div>
        </CardContent>
      )}
    </Card>
  )
}
