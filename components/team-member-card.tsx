import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Instagram, Linkedin, Mail } from "lucide-react"

interface TeamMemberCardProps {
  name: string
  role: string
  imageUrl: string
  socials?: {
    instagram?: string
    linkedin?: string
    github?: string
    email?: string
  }
}

export default function TeamMemberCard({ name, role, imageUrl, socials }: TeamMemberCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-lg transition-all hover:shadow-xl">
      <div className="relative aspect-square w-full">
        <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <CardContent className="p-4 flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-muted-foreground">{role}</p>
        </div>
        {socials && (
          <div className="flex space-x-2">
            {socials.instagram && (
              <Link
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-black"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Link>
            )}
            {socials.linkedin && (
              <Link
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-black"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            )}
            {socials.github && (
              <Link
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-black"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            )}
            {socials.email && (
              <Link href={`mailto:${socials.email}`} className="text-muted-foreground hover:text-black">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

