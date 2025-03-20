import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, MapPin, Users, Trophy, Medal, Award, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { achievements } from "@/lib/achievements"
import { formatDate, siteMetadata } from "@/lib/utils"

export const metadata = {
  title: "Logros | aCentauri",
  description:
    "Descubre los premios, honores y reconocimientos obtenidos por el equipo aCentauri en competencias nacionales e internacionales.",
  keywords: siteMetadata.keywords + ", logros, premios, reconocimientos, competencias, medallas",
  openGraph: {
    title: "Logros | aCentauri",
    description:
      "Descubre los premios, honores y reconocimientos obtenidos por el equipo aCentauri en competencias nacionales e internacionales.",
    url: `${siteMetadata.siteUrl}/logros`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Logros | aCentauri",
    description:
      "Descubre los premios, honores y reconocimientos obtenidos por el equipo aCentauri en competencias nacionales e internacionales.",
    creator: siteMetadata.twitterHandle,
  },
}

// Group achievements by year
const achievementsByYear = achievements.reduce(
  (acc, achievement) => {
    const year = new Date(achievement.date).getFullYear().toString()
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(achievement)
    return acc
  },
  {} as Record<string, typeof achievements>,
)

// Sort years in descending order
const years = Object.keys(achievementsByYear).sort((a, b) => Number.parseInt(b) - Number.parseInt(a))

// Get achievement icon based on category
const getAchievementIcon = (category: string) => {
  switch (category) {
    case "competencia":
      return <Trophy className="h-6 w-6 text-yellow-500" />
    case "proyecto":
      return <Star className="h-6 w-6 text-blue-500" />
    case "academico":
      return <Award className="h-6 w-6 text-purple-500" />
    case "reconocimiento":
      return <Medal className="h-6 w-6 text-red-500" />
    default:
      return <Trophy className="h-6 w-6 text-yellow-500" />
  }
}

// Get category name in Spanish
const getCategoryName = (category: string) => {
  switch (category) {
    case "competencia":
      return "Competencia"
    case "proyecto":
      return "Proyecto"
    case "academico":
      return "Académico"
    case "reconocimiento":
      return "Reconocimiento"
    default:
      return category
  }
}

export default function AchievementsPage() {
  // Count achievements by category
  const competitionCount = achievements.filter((a) => a.category === "competencia").length
  const projectCount = achievements.filter((a) => a.category === "proyecto").length
  const academicCount = achievements.filter((a) => a.category === "academico").length
  const recognitionCount = achievements.filter((a) => a.category === "reconocimiento").length

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestros Logros</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Descubrí los premios, honores y reconocimientos obtenidos por el equipo  en competencias
                nacionales e internacionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Resumen de Logros</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Un vistazo a nuestros logros a lo largo de los años.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="flex flex-col items-center text-center p-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100 mb-4">
                <Trophy className="h-10 w-10 text-yellow-500" />
              </div>
              <h3 className="text-2xl font-bold">{competitionCount}</h3>
              <p className="text-muted-foreground">Premios en Competencias</p>
            </Card>
            <Card className="flex flex-col items-center text-center p-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 mb-4">
                <Star className="h-10 w-10 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold">{projectCount}</h3>
              <p className="text-muted-foreground">Proyectos Destacados</p>
            </Card>
            <Card className="flex flex-col items-center text-center p-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-purple-100 mb-4">
                <Award className="h-10 w-10 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold">{academicCount}</h3>
              <p className="text-muted-foreground">Reconocimientos Académicos</p>
            </Card>
            <Card className="flex flex-col items-center text-center p-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100 mb-4">
                <Medal className="h-10 w-10 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold">{recognitionCount}</h3>
              <p className="text-muted-foreground">Menciones Honoríficas</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements by Category */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Logros por Categoría</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Explorá nuestros logros organizados por categoría.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-5xl">
            <Tabs defaultValue="competencia" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="competencia">Competencias</TabsTrigger>
                <TabsTrigger value="proyecto">Proyectos</TabsTrigger>
                <TabsTrigger value="academico">Académicos</TabsTrigger>
                <TabsTrigger value="reconocimiento">Reconocimientos</TabsTrigger>
              </TabsList>
              {["competencia", "proyecto", "academico", "reconocimiento"].map((category) => (
                <TabsContent key={category} value={category} className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {achievements
                      .filter((achievement) => achievement.category === category)
                      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                      .map((achievement) => (
                        <Card key={achievement.id} className="overflow-hidden">
                          <div className="relative h-48 w-full">
                            <Image
                              src={achievement.image || "/placeholder.svg?height=300&width=400"}
                              alt={achievement.title}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-4">
                              <Badge className="bg-white text-black">{getCategoryName(achievement.category)}</Badge>
                            </div>
                          </div>
                          <CardHeader className="pb-2">
                            <div className="flex items-center gap-2">
                              {getAchievementIcon(achievement.category)}
                              <CardTitle className="text-lg">{achievement.title}</CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <CardDescription className="mb-4">{achievement.description}</CardDescription>
                            <div className="flex flex-col space-y-2 text-sm">
                              <div className="flex items-center text-muted-foreground">
                                <Calendar className="mr-2 h-4 w-4" />
                                {formatDate(achievement.date)}
                              </div>
                              {achievement.location && (
                                <div className="flex items-center text-muted-foreground">
                                  <MapPin className="mr-2 h-4 w-4" />
                                  {achievement.location}
                                </div>
                              )}
                              {achievement.team && achievement.team.length > 0 && (
                                <div className="flex items-start text-muted-foreground">
                                  <Users className="mr-2 h-4 w-4 mt-1" />
                                  <span>{achievement.team.join(", ")}</span>
                                </div>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Achievements by Year */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Logros por Año</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Nuestra trayectoria de éxitos a lo largo de los años.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-5xl">
            {years.map((year) => (
              <div key={year} className="mb-16">
                <div className="flex items-center mb-8">
                  <h3 className="text-3xl font-bold">{year}</h3>
                  <div className="ml-4 h-px flex-1 bg-gray-200"></div>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {achievementsByYear[year]
                    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                    .map((achievement) => (
                      <Card key={achievement.id} className="overflow-hidden">
                        <div className="relative h-48 w-full">
                          <Image
                            src={achievement.image || "/placeholder.svg?height=300&width=400"}
                            alt={achievement.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute bottom-4 left-4">
                            <Badge className="bg-white text-black">{getCategoryName(achievement.category)}</Badge>
                          </div>
                        </div>
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-2">
                            {getAchievementIcon(achievement.category)}
                            <CardTitle className="text-lg">{achievement.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="mb-4">{achievement.description}</CardDescription>
                          <div className="flex flex-col space-y-2 text-sm">
                            <div className="flex items-center text-muted-foreground">
                              <Calendar className="mr-2 h-4 w-4" />
                              {formatDate(achievement.date)}
                            </div>
                            {achievement.location && (
                              <div className="flex items-center text-muted-foreground">
                                <MapPin className="mr-2 h-4 w-4" />
                                {achievement.location}
                              </div>
                            )}
                            {achievement.team && achievement.team.length > 0 && (
                              <div className="flex items-start text-muted-foreground">
                                <Users className="mr-2 h-4 w-4 mt-1" />
                                <span>{achievement.team.join(", ")}</span>
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action 
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                ¿Querés ser parte de nuestros próximos logros?
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Unite a aCentauri y contribuye a nuestros futuros éxitos en competencias y proyectos.
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
     </section>*/}
    </div>
  )
}

