import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/lib/utils"

interface BlogPostCardProps {
  title: string
  excerpt: string
  coverImage: string
  date: string
  author: string
  category: string
  slug: string
}

export default function BlogPostCard({ title, excerpt, coverImage, date, author, category, slug }: BlogPostCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <Card className="overflow-hidden border-none shadow-lg transition-all hover:shadow-xl">
        <div className="relative h-40 w-full">
          <Image
            src={coverImage || "/placeholder.svg?height=200&width=300"}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute right-2 top-2">
            <Badge variant="secondary" className="bg-white text-black">
              {category}
            </Badge>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground">{excerpt}</p>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-xs text-muted-foreground">{author}</p>
            <p className="text-xs text-muted-foreground">{formatDate(date)}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

