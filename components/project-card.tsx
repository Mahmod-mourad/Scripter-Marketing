import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ProjectCardProps {
  id: string
  title: string
  description: string
  image: string
  category: string
  featured?: boolean
  technologies?: string[]
}

export function ProjectCard({
  id,
  title,
  description,
  image,
  category,
  featured = false,
  technologies = [],
}: ProjectCardProps) {
  return (
    <div
      className={`group overflow-hidden rounded-lg border dark:border-slate-700 border-slate-200 bg-white dark:bg-slate-800 theme-transition hover:shadow-lg transition-all duration-300 ${featured ? "ring-2 ring-blue-500" : ""}`}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || "/assets/images/placeholder.png"}
          alt={title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
        />
        {featured && (
          <div className="absolute top-2 right-2">
            <Badge className="bg-blue-600 dark:bg-blue-500 theme-transition">مميز</Badge>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white theme-transition">{title}</h3>
        <p className="mb-4 text-sm text-slate-600 dark:text-slate-300 theme-transition">{description}</p>
        <div className="mb-4">
          <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-700 theme-transition">
            {category === "desktop"
              ? "برامج سطح المكتب"
              : category === "web"
                ? "تطبيقات الويب"
                : category === "mobile"
                  ? "تطبيقات الجوال"
                  : "تسويق رقمي"}
          </Badge>
        </div>
        {technologies && technologies.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge
                key={`tech-${id}-${index}`}
                variant="outline"
                className="text-xs border-slate-300 dark:border-slate-600"
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}
        <Button variant="outline" className="w-full border-slate-200 dark:border-slate-700 theme-transition" asChild>
          <Link href={`/projects/${id}`}>عرض التفاصيل</Link>
        </Button>
      </div>
    </div>
  )
}
