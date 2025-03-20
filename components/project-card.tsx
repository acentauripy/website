import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  category: string
  slug?: string
}

export default function ProjectCard({ title, description, imageUrl, category, slug }: ProjectCardProps) {
  const href = slug ? `/proyectos/${slug}` : `/proyectos/${title.toLowerCase().replace(/\s+/g, "-")}`

  return (
    <Link href={href}>
      <Card className="overflow-hidden border-none shadow-lg transition-all hover:shadow-xl">
        <div className="relative h-40 w-full">
          <Image src={imageUrl || "/placeholder.svg?height=200&width=300"} alt={title} fill className="object-cover" />
          <div className="absolute right-2 top-2">
            <Badge variant="secondary" className="bg-white text-black">
              {category}
            </Badge>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}

