"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { X } from "lucide-react"
import { toast } from "sonner"

interface DownloadFormProps {
  isOpen: boolean
  onClose: () => void
}

export function DownloadForm({ isOpen, onClose }: DownloadFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      console.log("Submitting form data:", formData)
      
      const response = await fetch("/api/send-download-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      console.log("Response from server:", data)

      if (!response.ok) {
        throw new Error(data.error || data.details || "حدث خطأ أثناء إرسال البيانات")
      }

      // Show success message
      toast.success(data.message || "تم إرسال البيانات بنجاح")

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
      })

      // Redirect to Google Drive link
      window.open("https://drive.google.com/file/d/1lB9Cq2vX9Mi0PN2WFdUUC-Wv_ZTRO1wG/view?ts=682e1a9e", "_blank")
      
      // Close the dialog
      onClose()
    } catch (error) {
      console.error("Error submitting form:", error)
      const errorMessage = error instanceof Error ? error.message : "حدث خطأ أثناء إرسال البيانات"
      toast.error(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">تحميل برنامج دفترة</DialogTitle>
          <DialogDescription className="text-center">
            يرجى ملء النموذج التالي للحصول على رابط تحميل النسخة التجريبية من برنامج دفترة
          </DialogDescription>
          <Button
            variant="ghost"
            className="absolute left-4 top-4 h-8 w-8 p-0"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">الاسم الكامل</Label>
              <Input
                id="fullName"
                name="fullName"
                placeholder="أدخل اسمك الكامل"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">رقم الهاتف</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="أدخل رقم هاتفك"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="companyName">اسم الشركة</Label>
              <Input
                id="companyName"
                name="companyName"
                placeholder="أدخل اسم شركتك"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "جاري التحميل..." : "تحميل البرنامج"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
