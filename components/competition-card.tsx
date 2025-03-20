import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/lib/utils"

interface CompetitionCardProps {
  title: string
  description: string
  imageUrl: string
  location: string
  date: string
  slug: string
}

export default function CompetitionCard({ title, description, imageUrl, location, date, slug }: CompetitionCardProps) {
  return (
    <Link href={`/competencias/${slug}`}>
      <Card className="overflow-hidden border-none shadow-lg transition-all hover:shadow-xl">
        <div className="relative h-40 w-full">
          <Image src={imageUrl || "/placeholder.svg?height=200&width=300"} alt={title} fill className="object-cover" />
          <div className="absolute right-2 top-2">
            <Badge variant="secondary" className="bg-white text-black">
              {location}
            </Badge>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          <p className="mt-2 text-xs text-muted-foreground">{formatDate(date)}</p>
        </CardContent>
      </Card>
    </Link>
  )
}

