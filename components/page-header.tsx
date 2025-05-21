import Link from "next/link"
import { ChevronLeft } from "lucide-react"

interface Breadcrumb {
  title: string
  href: string
}

interface PageHeaderProps {
  title: string
  description: string
  breadcrumbs: Breadcrumb[]
}

export function PageHeader({ title, description, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 py-8 theme-transition">
      <div className="container">
        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 theme-transition">
          {breadcrumbs.map((breadcrumb, index) => (
            <div key={index} className="flex items-center">
              {index > 0 && <ChevronLeft className="h-4 w-4 mx-1 text-slate-400 dark:text-slate-500 theme-transition" />}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-slate-900 dark:text-white font-medium theme-transition">{breadcrumb.title}</span>
              ) : (
                <Link 
                  href={breadcrumb.href} 
                  className="hover:text-blue-600 dark:hover:text-blue-400 theme-transition"
                >
                  {breadcrumb.title}
                </Link>
              )}
            </div>
          ))}
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl theme-transition">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600 dark:text-slate-300 theme-transition">
          {description}
        </p>
      </div>
    </div>
  )
}
