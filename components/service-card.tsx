import {
  Globe,
  Layout,
  MessageCircle,
  Server,
  Smartphone,
  PenToolIcon as Tool,
  Calculator,
  Search,
  GraduationCap,
  Megaphone,
  Share2,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  extended?: boolean
}

export function ServiceCard({ title, description, icon, extended = false }: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "globe":
        return <Globe className="h-6 w-6" />
      case "smartphone":
        return <Smartphone className="h-6 w-6" />
      case "layout":
        return <Layout className="h-6 w-6" />
      case "server":
        return <Server className="h-6 w-6" />
      case "message-circle":
        return <MessageCircle className="h-6 w-6" />
      case "tool":
        return <Tool className="h-6 w-6" />
      case "calculator":
        return <Calculator className="h-6 w-6" />
      case "search":
        return <Search className="h-6 w-6" />
      case "graduation-cap":
        return <GraduationCap className="h-6 w-6" />
      case "megaphone":
        return <Megaphone className="h-6 w-6" />
      case "share2":
        return <Share2 className="h-6 w-6" />
      default:
        return <Globe className="h-6 w-6" />
    }
  }

  return (
    <Card className="bg-white border-slate-200 transition-transform hover:-translate-y-1 dark:bg-slate-800 dark:border-slate-700 theme-transition">
      <CardContent className="p-6">
        <div className="mb-4 h-12 w-12 rounded-lg bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 theme-transition">
          {getIcon()}
        </div>
        <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white theme-transition">{title}</h3>
        <p className="text-slate-600 mb-4 dark:text-slate-300 theme-transition">{description}</p>
        <Link href="/services" className="text-blue-600 hover:underline text-sm dark:text-blue-400 theme-transition">
          المزيد من التفاصيل
        </Link>
      </CardContent>
    </Card>
  )
}
