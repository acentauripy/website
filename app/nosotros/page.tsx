import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import TeamMemberCard from "@/components/team-member-card"
import { siteMetadata } from "@/lib/utils"

export const metadata = {
  title: "Nosotros | aCentauri",
  description: "Conoce más sobre aCentauri, nuestra historia, valores y el equipo que hace posible nuestros proyectos.",
  keywords: siteMetadata.keywords + ", equipo, historia, valores, misión, visión",
  openGraph: {
    title: "Nosotros | aCentauri",
    description:
      "Conoce más sobre aCentauri, nuestra historia, valores y el equipo que hace posible nuestros proyectos.",
    url: `${siteMetadata.siteUrl}/nosotros`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nosotros | aCentauri",
    description:
      "Conoce más sobre aCentauri, nuestra historia, valores y el equipo que hace posible nuestros proyectos.",
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
                Conoce más sobre aCentauri, nuestra historia, valores y el equipo que hace posible nuestros proyectos.
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
                  Somos un equipo conformado por estudiantes de la Facultad de Ingeniería de la Universidad
                  Nacional de Asunción.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  Nos especializamos en participar en competencias internacionales,
                  donde ponemos a prueba nuestras habilidades en ingeniería, tecnología y matemáticas,
                  representando a nuestra facultad y a nuestro país.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  Además, desarrollamos proyectos innovadores de programación, inteligencia artificial y robótica.
                </p>
              </div>
            </div>
            <div className="relative h-[300px] w-full overflow-hidden rounded-lg md:h-[400px]">
              <Image src="/placeholder.svg?height=400&width=600" alt="Equipo aCentauri" fill className="object-cover" />
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
                  <h3 className="text-xl font-bold">2021 - Fundación</h3>
                  <p className="text-muted-foreground">
                  aCentauri surge como una iniciativa de un grupo de estudiantes de ingeniería con la visión de crear un
                  espacio que sirva como punto de entrada para los estudiantes al mundo de las competencias internacionales.
                  Un lugar donde aprender y participar sin importar el nivel de conocimiento previo.
                  </p>
                </div>
              </div>
              <div className="relative pl-8 border-l-2 border-gray-200">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-black"></div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">2022 - Primeros Pasos</h3>
                  <p className="text-muted-foreground">
                    Participamos en nuestra primera competencia internacional, el NASA Space Apps Challenge, donde, a pesar
                    de un trayecto lleno de imprevistos, logramos destacar con nuestro proyecto de visualización de
                    lunamotos. Como resultado de nuestro esfuerzo y perseverancia, recibimos una mención de honor.
                  </p>
                </div>
              </div>
              <div className="relative pl-8 border-l-2 border-gray-200">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-black"></div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">2023 - Reconocimiento Internacional</h3>
                  <p className="text-muted-foreground">
                  Nuestros proyectos comienzan a ganar reconocimiento internacional, participando en competencias de alto
                  nivel y alcanzando importantes logros. Al mismo tiempo, nuestros miembros se convierten en embajadores de
                  prestigiosas competencias de astronomía y matemáticas.
                  </p>
                </div>
              </div>
              <div className="relative pl-8 border-l-2 border-gray-200">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-black"></div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">2024 - Reconocimiento Internacional</h3>
                  <p className="text-muted-foreground">
                  Logramos un nuevo hito en el NASA Space Apps Challenge 2025, obteniendo el 1er lugar local y
                  avanzando a la final global. Ubicándonos entre los 40 finalistas globales. Con ello, nos
                  consolidamos como uno de los mejores equipos de la competencia y el mejor del país.
                  </p>
                </div>
              </div>
              <div className="relative pl-8">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-black"></div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Actualidad</h3>
                  <p className="text-muted-foreground">
                  Hoy, aCentauri es un equipo consolidado que continúa creciendo, innovando y representando no
                  solo a FIUNA, sino también a todo el país, tanto a nivel nacional como internacional.
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
                  Ser un punto de partida para estudiantes que desean participar en competencias.
                  Ofrecer un espacio donde puedan aprender, experimentar y desarrollarse.
                </p>
                <p className="text-muted-foreground md:text-lg">
                Proporcionar las herramientas y la confianza necesarias para que cada integrante pueda aprender,
                enfrentar nuevos desafíos y alcanzar su máximo potencial.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Nuestra Visión</h2>
                <p className="text-muted-foreground md:text-lg">
                  Ser un referente en ingeniería aplicada y representar al país en competencias internacionales,
                  posicionándonos como un país con talento e innovación tecnológica.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  Aspiramos a que nuestros integrantes lideren proyectos de impacto global, impulsando el avance
                  tecnológico y demostrando el potencial de nuestra comunidad estudiantil en el ámbito internacional.
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
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                >
                  <path d="M1.41421 16.4322L0 15.018L7.07107 7.94693L13.435 14.3109L17.6777 10.0682L15.9353 8.32587L22.6274 6.53271L20.8343 13.2248L19.0919 11.4825L13.435 17.1393L7.07107 10.7754L1.41421 16.4322Z" fill="#ffffff"/>
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
                Conoce a las personas que hacen posible aCentauri.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            <TeamMemberCard
              name="David Giménez"
              role="Desarrollo Front-End"
              imageUrl="/images/miembros/David.png?height=300&width=300"
              socials={{
                instagram: "https://instagram.com/davidgimenez_s",
                linkedin: "https://linkedin.com/in/davidgimenezs",
                github: "https://github.com/davidgimenezs",
                email: "david.gimenezs@acentauri.co",
              }}
            />
            <TeamMemberCard
              name="Oscar Alderete"
              role="Inteligencia Artificial"
              imageUrl="/images/miembros/Oscar.png?height=300&width=300"
              socials={{
                instagram: "https://instagram.com/oscar_alderete99",
                linkedin: "https://linkedin.com/in/",
                github: "https://github.com/",
                email: "osualderete@acentauri.co",
              }}
            />
            <TeamMemberCard
              name="Esteban Ibarra"
              role="Despliegue & DevOps"
              imageUrl="/images/miembros/Esteban.png?height=300&width=300"
              socials={{
                instagram: "https://instagram.com/ibarra_jeje",
                linkedin: "https://linkedin.com/in/",
                github: "https://github.com/",
                email: "juan.ibarra@acentauri.co",
              }}
            />
            <TeamMemberCard
              name="Gabriel Park"
              role="Análisis de datos"
              imageUrl="/images/miembros/Gabriel.png?height=300&width=300"
              socials={{
                instagram: "https://instagram.com/jyp_py",
                linkedin: "https://linkedin.com/in/",
                github: "https://github.com/",
                email: "jinyoung@acentauri.co",
              }}
            />
            <TeamMemberCard
              name="José Hellión"
              role="Desarrollo Back-End"
              imageUrl="/images/miembros/Jose.png?height=300&width=300"
              socials={{
                instagram: "https://instagram.com/josecah11",
                linkedin: "https://linkedin.com/in/",
                github: "https://github.com/",
                email: "jchellion@acentauri.co",
              }}
            />
            <TeamMemberCard
              name="Mathias Barrios"
              role="Scrum Master"
              imageUrl="/placeholder.svg?height=300&width=300"
              socials={{
                instagram: "https://instagram.com/mathiasbarrios",
                linkedin: "https://linkedin.com/in/",
                github: "https://github.com/",
                email: "mathiasbarriosp@acentauri.co",
              }}
            />
          </div>
        </div>
      </section>

      {/* Join Section
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Unite al Equipo</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Si sos estudiante de FIUNA y te apasiona la tecnología, la innovación y el trabajo en equipo,
                este es el lugar para vos.
              </p>
            </div>
            <div className="pt-4">
              <Link href="/contacto">
                <Button className="bg-black text-white hover:bg-gray-800">
                  Unite al Equipo
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

