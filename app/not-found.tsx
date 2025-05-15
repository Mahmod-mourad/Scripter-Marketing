import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-white theme-transition">
      <MainNav />
      <main className="flex-1 flex items-center justify-center">
        <div className="container max-w-md text-center py-16">
          <h1 className="text-6xl font-bold text-blue-600 dark:text-blue-500 theme-transition">404</h1>
          <h2 className="mt-4 text-2xl font-bold">الصفحة غير موجودة</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 theme-transition">
            عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها أو حذفها.
          </p>
          <div className="mt-8">
            <Button
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 theme-transition"
              asChild
            >
              <Link href="/">العودة للصفحة الرئيسية</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
