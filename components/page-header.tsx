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
    <div className="bg-slate-50 py-8">
      <div className="container">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          {breadcrumbs.map((breadcrumb, index) => (
            <div key={index} className="flex items-center">
              {index > 0 && <ChevronLeft className="h-4 w-4 mx-1" />}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-slate-900">{breadcrumb.title}</span>
              ) : (
                <Link href={breadcrumb.href} className="hover:text-blue-600">
                  {breadcrumb.title}
                </Link>
              )}
            </div>
          ))}
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">{description}</p>
      </div>
    </div>
  )
}
