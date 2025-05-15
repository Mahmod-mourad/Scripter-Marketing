"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Check } from "lucide-react"
import { format } from "date-fns"
import { ar } from "date-fns/locale"

export function BookingForm() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [time, setTime] = useState<string | undefined>(undefined)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your server
    console.log("Form submitted:", { ...formData, date, time })
    setIsSubmitted(true)
  }

  // Available time slots
  const timeSlots = [
    { id: "time-1", value: "09:00 AM" },
    { id: "time-2", value: "10:00 AM" },
    { id: "time-3", value: "11:00 AM" },
    { id: "time-4", value: "12:00 PM" },
    { id: "time-5", value: "01:00 PM" },
    { id: "time-6", value: "02:00 PM" },
    { id: "time-7", value: "03:00 PM" },
    { id: "time-8", value: "04:00 PM" },
  ]

  return (
    <div className="w-full max-w-md mx-auto">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                الاسم الكامل *
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="أدخل اسمك الكامل"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                البريد الإلكتروني *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="أدخل بريدك الإلكتروني"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                رقم الهاتف *
              </label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="أدخل رقم هاتفك"
                required
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium mb-1">
                الخدمة المطلوبة *
              </label>
              <Select onValueChange={(value) => handleSelectChange("service", value)}>
                <SelectTrigger id="service">
                  <SelectValue placeholder="اختر الخدمة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web-development">تطوير الويب</SelectItem>
                  <SelectItem value="mobile-development">تطوير تطبيقات الجوال</SelectItem>
                  <SelectItem value="digital-marketing">التسويق الرقمي</SelectItem>
                  <SelectItem value="ui-ux-design">تصميم واجهات المستخدم</SelectItem>
                  <SelectItem value="consulting">استشارات تقنية</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">تاريخ الاستشارة *</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-right font-normal border-slate-300 dark:border-slate-700"
                  >
                    <CalendarIcon className="ml-2 h-4 w-4" />
                    {date ? format(date, "PPP", { locale: ar }) : "اختر التاريخ"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    locale={ar}
                    disabled={(date) => {
                      // Disable past dates and weekends (Friday and Saturday in Arabic calendar)
                      const day = date.getDay()
                      return date < new Date() || day === 5 || day === 6
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">وقت الاستشارة *</label>
              <Select onValueChange={setTime} disabled={!date}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر الوقت" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((slot) => (
                    <SelectItem key={`time-slot-${slot.id}`} value={slot.value}>
                      {slot.value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                رسالة (اختياري)
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="اكتب رسالتك هنا..."
                rows={4}
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            disabled={!date || !time || !formData.name || !formData.email || !formData.phone || !formData.service}
          >
            حجز الاستشارة
          </Button>
        </form>
      ) : (
        <div className="text-center py-8">
          <div className="mx-auto h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
            <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-2xl font-bold mb-4">تم حجز استشارتك بنجاح!</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            شكراً لك على اهتمامك بخدماتنا. سيتم التواصل معك قريباً لتأكيد موعد الاستشارة.
          </p>
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg mb-6">
            <div className="flex justify-between mb-2">
              <span className="font-medium">التاريخ:</span>
              <span>{date ? format(date, "PPP", { locale: ar }) : ""}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">الوقت:</span>
              <span>{time}</span>
            </div>
          </div>
          <Button
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            onClick={() => setIsSubmitted(false)}
          >
            حجز استشارة أخرى
          </Button>
        </div>
      )}
    </div>
  )
}
