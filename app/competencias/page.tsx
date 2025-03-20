import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import CompetitionCard from "@/components/competition-card"
import { competitions } from "@/lib/competitions"

export const metadata = {
  title: "Competencias | αCentauri",
  description:
    "Explora las competencias internacionales en las que ha participado el equipo αCentauri, representando a FIUNA.",
}

export default function CompetitionsPage() {
  // Group competitions by year
  const competitionsByYear = competitions.reduce(
    (acc, competition) => {
      const year = new Date(competition.date).getFullYear().toString()
      if (!acc[year]) {
        acc[year] = []
      }
      acc[year].push(competition)
      return acc
    },
    {} as Record<string, typeof competitions>,
  )

  // Sort years in descending order
  const years = Object.keys(competitionsByYear).sort((a, b) => Number.parseInt(b) - Number.parseInt(a))

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Competencias Internacionales
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Explora las competencias internacionales en las que ha participado el equipo αCentauri, representando a
                FIUNA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitions Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Nuestra Trayectoria</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                A lo largo de los años, hemos participado en diversas competencias internacionales, poniendo a prueba
                nuestras habilidades y representando a nuestra universidad.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-5xl">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 text-center">
                <div className="text-4xl font-bold">{competitions.length}</div>
                <p className="text-muted-foreground">Competencias</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 text-center">
                <div className="text-4xl font-bold">{years.length}</div>
                <p className="text-muted-foreground">Años de Participación</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 text-center">
                <div className="text-4xl font-bold">
                  {competitions.filter((c) => c.awards && c.awards.length > 0).length}
                </div>
                <p className="text-muted-foreground">Premios Obtenidos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitions by Year */}
      {years.map((year) => (
        <section key={year} className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">{year}</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                  Competencias en las que participamos durante este año.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {competitionsByYear[year].map((competition) => (
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
      ))}

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">¿Quieres ser parte de nuestro equipo?</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Únete a αCentauri y participa en competencias internacionales representando a FIUNA.
              </p>
            </div>
            <div className="pt-4">
              <Link href="/contacto">
                <Button className="bg-black text-white hover:bg-gray-800">
                  Únete al Equipo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

