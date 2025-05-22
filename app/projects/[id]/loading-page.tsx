import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { PageHeader } from "@/components/page-header"
import { Loader2 } from "lucide-react"

export default function ProjectLoadingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <MainNav />

      <PageHeader
        title="تفاصيل المشروع"
        description="جاري تحميل تفاصيل المشروع"
        breadcrumbs={[
          { title: "الرئيسية", href: "/" },
          { title: "مشاريعنا", href: "/projects" },
          { title: "تفاصيل المشروع", href: "#" },
        ]}
      />

      <main className="flex-1">
        <section className="py-16">
          <div className="container">
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Loader2 className="h-16 w-16 animate-spin text-blue-600" />
              <h2 className="mt-8 text-2xl font-bold">جاري رفع المشروع</h2>
              <p className="mt-4 max-w-md text-slate-600">
                نحن نعمل على إضافة تفاصيل هذا المشروع. يرجى العودة قريبًا للاطلاع على التفاصيل الكاملة.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton phoneNumber="01020384694" />
    </div>
  )
}
