import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import TeamMemberCard from "@/components/team-member-card"
import { siteMetadata } from "@/lib/utils"

export const metadata = {
  title: "Nosotros | αCentauri",
  description: "Conoce más sobre αCentauri, nuestra historia, valores y el equipo que hace posible nuestros proyectos.",
  keywords: siteMetadata.keywords + ", equipo, historia, valores, misión, visión",
  openGraph: {
    title: "Nosotros | αCentauri",
    description:
      "Conoce más sobre αCentauri, nuestra historia, valores y el equipo que hace posible nuestros proyectos.",
    url: `${siteMetadata.siteUrl}/nosotros`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nosotros | αCentauri",
    description:
      "Conoce más sobre αCentauri, nuestra historia, valores y el equipo que hace posible nuestros proyectos.",
    creator: siteMetadata.twitterHandle,
  },
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sobre Nosotros</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Conoce más sobre αCentauri, nuestra historia, valores y el equipo que hace posible nuestros proyectos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">¿Quiénes Somos?</h2>
                <p className="text-muted-foreground md:text-lg">
                  αCentauri es un equipo de estudiantes de ingeniería de la Facultad de Ingeniería de la Universidad
                  Nacional de Asunción (FIUNA). Nos especializamos en el desarrollo de proyectos innovadores en
                  robótica, inteligencia artificial, automatización y programación.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  Además, participamos en competencias internacionales, donde ponemos a prueba nuestras habilidades en
                  ingeniería, tecnología y matemáticas, representando a nuestra facultad y a nuestro país.
                </p>
              </div>
            </div>
            <div className="relative h-[300px] w-full overflow-hidden rounded-lg md:h-[400px]">
              <Image src="/placeholder.svg?height=400&width=600" alt="Equipo αCentauri" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Nuestra Historia</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                El camino que nos ha llevado hasta donde estamos hoy.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-4xl">
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-gray-200">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-black"></div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">2018 - Fundación</h3>
                  <p className="text-muted-foreground">
                    αCentauri nace como una iniciativa de un pequeño grupo de estudiantes de ingeniería con la visión de
                    aplicar sus conocimientos teóricos en proyectos prácticos.
                  </p>
                </div>
              </div>
              <div className="relative pl-8 border-l-2 border-gray-200">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-black"></div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">2019 - Primera Competencia</h3>
                  <p className="text-muted-foreground">
                    Participamos en nuestra primera competencia internacional, donde obtuvimos un reconocimiento por
                    nuestro proyecto de robótica autónoma.
                  </p>
                </div>
              </div>
              <div className="relative pl-8 border-l-2 border-gray-200">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-black"></div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">2020 - Expansión</h3>
                  <p className="text-muted-foreground">
                    El equipo crece y se diversifica, incorporando nuevas áreas de especialización como inteligencia
                    artificial y desarrollo de software.
                  </p>
                </div>
              </div>
              <div className="relative pl-8 border-l-2 border-gray-200">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-black"></div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">2022 - Reconocimiento Internacional</h3>
                  <p className="text-muted-foreground">
                    Nuestros proyectos comienzan a ser reconocidos internacionalmente, participando en competencias de
                    alto nivel y obteniendo importantes logros.
                  </p>
                </div>
              </div>
              <div className="relative pl-8">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-black"></div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Actualidad</h3>
                  <p className="text-muted-foreground">
                    Hoy, αCentauri es un equipo consolidado que continúa innovando y representando a FIUNA en el ámbito
                    nacional e internacional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Nuestra Misión</h2>
                <p className="text-muted-foreground md:text-lg">
                  Desarrollar tecnología innovadora y formar ingenieros con experiencia práctica en desafíos reales,
                  contribuyendo al avance tecnológico de nuestra comunidad y país.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  Buscamos crear un espacio donde los estudiantes puedan aplicar sus conocimientos teóricos, desarrollar
                  habilidades prácticas y fomentar la colaboración interdisciplinaria.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Nuestra Visión</h2>
                <p className="text-muted-foreground md:text-lg">
                  Ser un referente en ingeniería aplicada y representar a FIUNA en competencias internacionales,
                  posicionándonos como un semillero de talento e innovación tecnológica.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  Aspiramos a que nuestros miembros se conviertan en profesionales destacados, capaces de liderar
                  proyectos de alto impacto y contribuir al desarrollo tecnológico de nuestro país.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Nuestros Valores</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Los principios que guían nuestro trabajo y nuestra comunidad.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-black text-white">
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
                  className="h-10 w-10"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Innovación</h3>
              <p className="text-muted-foreground">
                Buscamos constantemente nuevas soluciones y enfoques para los desafíos que enfrentamos.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-black text-white">
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
                  className="h-10 w-10"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Colaboración</h3>
              <p className="text-muted-foreground">
                Trabajamos juntos, compartiendo conocimientos y habilidades para lograr objetivos comunes.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-black text-white">
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
                  className="h-10 w-10"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Excelencia</h3>
              <p className="text-muted-foreground">
                Nos esforzamos por alcanzar los más altos estándares en todo lo que hacemos.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-black text-white">
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
                  className="h-10 w-10"
                >
                  <path d="M12 2v20"></path>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Crecimiento</h3>
              <p className="text-muted-foreground">
                Promovemos el desarrollo personal y profesional de cada miembro del equipo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Nuestro Equipo</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Conoce a las personas que hacen posible αCentauri.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            <TeamMemberCard
              name="Ana Martínez"
              role="Líder de Robótica"
              imageUrl="/placeholder.svg?height=300&width=300"
              socials={{
                instagram: "https://instagram.com/anamartinez",
                linkedin: "https://linkedin.com/in/anamartinez",
                github: "https://github.com/anamartinez",
                email: "ana@acentauri.co",
              }}
            />
            <TeamMemberCard
              name="Carlos Gómez"
              role="Especialista en IA"
              imageUrl="/placeholder.svg?height=300&width=300"
              socials={{
                instagram: "https://instagram.com/carlosgomez",
                linkedin: "https://linkedin.com/in/carlosgomez",
                github: "https://github.com/carlosgomez",
                email: "carlos@acentauri.co",
              }}
            />
            <TeamMemberCard
              name="Laura Benítez"
              role="Ingeniera de Software"
              imageUrl="/placeholder.svg?height=300&width=300"
              socials={{
                instagram: "https://instagram.com/laurabenitez",
                linkedin: "https://linkedin.com/in/laurabenitez",
                github: "https://github.com/laurabenitez",
                email: "laura@acentauri.co",
              }}
            />
            <TeamMemberCard
              name="Martín López"
              role="Especialista en Automatización"
              imageUrl="/placeholder.svg?height=300&width=300"
              socials={{
                instagram: "https://instagram.com/martinlopez",
                linkedin: "https://linkedin.com/in/martinlopez",
                github: "https://github.com/martinlopez",
                email: "martin@acentauri.co",
              }}
            />
            <TeamMemberCard
              name="Sofía Rodríguez"
              role="Diseñadora de Sistemas"
              imageUrl="/placeholder.svg?height=300&width=300"
              socials={{
                instagram: "https://instagram.com/sofiarodriguez",
                linkedin: "https://linkedin.com/in/sofiarodriguez",
                github: "https://github.com/sofiarodriguez",
                email: "sofia@acentauri.co",
              }}
            />
            <TeamMemberCard
              name="Diego Fernández"
              role="Desarrollador Full Stack"
              imageUrl="/placeholder.svg?height=300&width=300"
              socials={{
                instagram: "https://instagram.com/diegofernandez",
                linkedin: "https://linkedin.com/in/diegofernandez",
                github: "https://github.com/diegofernandez",
                email: "diego@acentauri.co",
              }}
            />
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Únete a Nosotros</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Si eres estudiante de FIUNA y te apasiona la tecnología, la innovación y el trabajo en equipo, αCentauri
                es el lugar para ti.
              </p>
            </div>
            <div className="pt-4">
              <Link href="/contacto">
                <Button className="bg-black text-white hover:bg-gray-800">
                  Únete a Nosotros
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

