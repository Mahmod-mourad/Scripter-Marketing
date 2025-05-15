import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: "project-1",
    title: "منصة تعليمية",
    description: "منصة تعليمية متكاملة لتقديم الدورات عبر الإنترنت",
    image: "/placeholder.svg?height=300&width=400",
    category: "web",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: "project-2",
    title: "تطبيق متجر إلكتروني",
    description: "تطبيق جوال لمتجر إلكتروني مع نظام دفع متكامل",
    image: "/placeholder.svg?height=300&width=400",
    category: "mobile",
    tags: ["React Native", "Firebase", "Stripe"],
  },
  {
    id: "project-3",
    title: "نظام إدارة المحتوى",
    description: "نظام إدارة محتوى مخصص لشركة إعلامية",
    image: "/placeholder.svg?height=300&width=400",
    category: "web",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
  },
  {
    id: "project-4",
    title: "تطبيق توصيل طعام",
    description: "تطبيق لطلب وتوصيل الطعام مع نظام تتبع مباشر",
    image: "/placeholder.svg?height=300&width=400",
    category: "mobile",
    tags: ["Flutter", "Firebase", "Google Maps"],
  },
  {
    id: "project-5",
    title: "منصة عقارية",
    description: "منصة لعرض وبيع وشراء العقارات مع خرائط تفاعلية",
    image: "/placeholder.svg?height=300&width=400",
    category: "web",
    tags: ["React", "Express", "MongoDB"],
  },
  {
    id: "project-6",
    title: "تطبيق إدارة المهام",
    description: "تطبيق لإدارة المهام والمشاريع للفرق والشركات",
    image: "/placeholder.svg?height=300&width=400",
    category: "mobile",
    tags: ["React Native", "GraphQL", "Apollo"],
  },
]

interface ProjectShowcaseProps {
  filter?: string
}

export function ProjectShowcase({ filter }: ProjectShowcaseProps = {}) {
  const filteredProjects = filter ? projects.filter((project) => project.category === filter) : projects

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {filteredProjects.map((project) => (
        <div key={project.id} className="group overflow-hidden rounded-lg border border-slate-700 bg-slate-800">
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              fill
            />
          </div>
          <div className="p-4">
            <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
            <p className="mb-4 text-sm text-slate-300">{project.description}</p>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <Badge key={`${project.id}-tag-${tagIndex}`} variant="secondary" className="bg-slate-700">
                  {tag}
                </Badge>
              ))}
            </div>
            <Button variant="outline" className="w-full">
              عرض التفاصيل
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
