import Image from "next/image"

interface TeamMemberCardProps {
  name: string
  position: string
  description: string
  image: string
}

export function TeamMemberCard({ name, position, description, image }: TeamMemberCardProps) {
  return (
    <div className="group flex flex-col items-center text-center">
      <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-white dark:border-slate-800 shadow-md transition-transform duration-300 group-hover:scale-105 theme-transition">
        <Image src={image || "/assets/images/placeholder.png"} alt={name} className="object-cover" fill />
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white theme-transition">{name}</h3>
        <p className="text-blue-600 dark:text-blue-400 font-medium theme-transition">{position}</p>
        <p className="mt-2 text-slate-700 dark:text-slate-300 theme-transition">{description}</p>
      </div>
    </div>
  )
}
