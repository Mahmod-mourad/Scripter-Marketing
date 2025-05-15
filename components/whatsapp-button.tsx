import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 block" // تم إزالة hover:block وجعله ظاهرًا دائمًا
      aria-label="تواصل معنا عبر واتساب"
    >
      <Button size="lg" className="h-14 w-14 rounded-full bg-green-500 p-0 shadow-lg hover:bg-green-600">
        <Phone className="h-6 w-6 text-white" />
      </Button>
    </a>
  )
}
