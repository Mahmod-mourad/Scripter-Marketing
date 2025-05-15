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
      <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-105">
        <Image src={image || "/assets/images/placeholder.png"} alt={name} className="object-cover" fill />
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-bold text-slate-900">{name}</h3>
        <p className="text-blue-600 font-medium">{position}</p>
        <p className="mt-2 text-slate-700">{description}</p>
      </div>
    </div>
  )
}
