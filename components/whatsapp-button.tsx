"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    // رقم الواتساب الخاص بالشركة
    const phoneNumber = "+201234567890"
    // رسالة افتراضية
    const message = "مرحباً، أود الاستفسار عن خدماتكم"
    
    // إنشاء رابط واتساب
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    
    // فتح الرابط في نافذة جديدة
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300"
      size="icon"
      aria-label="تواصل معنا عبر واتساب"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  )
}