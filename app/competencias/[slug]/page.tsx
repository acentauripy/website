import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { competitions } from "@/lib/competitions"
import { formatDate } from "@/lib/utils"
import CompetitionCard from "@/components/competition-card"

export async function generateStaticParams() {
  return competitions.map((competition) => ({
    slug: competition.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const competition = competitions.find((competition) => competition.slug === params.slug)

  if (!competition) {
    return {
      title: "Competencia no encontrada | aCentauri",
      description: "La competencia que buscas no existe.",
    }
  }

  return {
    title: `${competition.title} | aCentauri`,
    description: competition.excerpt,
  }
}

export default function CompetitionPage({ params }: { params: { slug: string } }) {
  const competition = competitions.find((competition) => competition.slug === params.slug)

  if (!competition) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold">Competencia no encontrada</h1>
        <p className="mt-4">La competencia que buscas no existe.</p>
        <Link href="/competencias" className="mt-4 inline-block">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a competencias
          </Button>
        </Link>
      </div>
    )
  }

  // Find related competitions (same year, excluding current)
  const year = new Date(competition.date).getFullYear()
  const relatedCompetitions = competitions
    .filter((c) => new Date(c.date).getFullYear() === year && c.slug !== competition.slug)
    .slice(0, 3)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Link href="/competencias" className="mb-4 inline-flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a competencias
            </Link>
            <Badge className="mb-2">{competition.location}</Badge>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{competition.title}</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">{competition.excerpt}</p>
              <p className="text-sm text-muted-foreground">{formatDate(competition.date)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Content */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="relative mb-10 h-[300px] w-full overflow-hidden rounded-lg md:h-[500px]">
              <Image
                src={competition.coverImage || "/placeholder.svg"}
                alt={competition.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="prose prose-lg max-w-none">
              {competition.content.map((paragraph, index) => (
                <p key={index} className="mb-4 text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Competition Details */}
            <div className="mt-12 rounded-lg border p-6">
              <h3 className="text-xl font-bold">Detalles de la Competencia</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold">Ubicación</h4>
                  <p className="mt-2 text-muted-foreground">{competition.location}</p>

                  <h4 className="mt-4 font-semibold">Fecha</h4>
                  <p className="mt-2 text-muted-foreground">{formatDate(competition.date)}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Equipo Participante</h4>
                  <ul className="mt-2 space-y-1">
                    {competition.team.map((member) => (
                      <li key={member}>{member}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {competition.awards && competition.awards.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-semibold">Premios Obtenidos</h4>
                  <ul className="mt-2 space-y-1">
                    {competition.awards.map((award) => (
                      <li key={award} className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-2 h-5 w-5 text-yellow-500"
                        >
                          <circle cx="12" cy="8" r="6"></circle>
                          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                        </svg>
                        {award}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Competitions */}
      {relatedCompetitions.length > 0 && (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Otras Competencias del {year}</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                  Explora otras competencias en las que participamos durante el mismo año.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedCompetitions.map((competition) => (
                <CompetitionCard
                  key={competition.slug}
                  title={competition.title}
                  description={competition.excerpt}
                  imageUrl={competition.coverImage}
                  location={competition.location}
                  date={competition.date}
                  slug={competition.slug}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

