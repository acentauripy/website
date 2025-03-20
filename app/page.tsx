import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import { siteMetadata } from "@/lib/utils"

export const metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    creator: siteMetadata.twitterHandle,
  },
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 border-b">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Construyendo el futuro juntos...
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  αCentauri es un equipo de estudiantes de ingeniería de la FIUNA especializado en robótica,
                  inteligencia artificial, automatización y programación.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/proyectos">
                  <Button className="bg-black text-white hover:bg-gray-800">
                    Ver Proyectos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contacto">
                  <Button variant="outline" className="border-black text-black hover:bg-gray-100">
                    Contacto
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-full overflow-hidden rounded-lg md:h-[400px]">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Equipo αCentauri trabajando en un proyecto de robótica"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">¿Quiénes Somos?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                αCentauri es un equipo de estudiantes apasionados por la ingeniería y la tecnología. Nos especializamos
                en el desarrollo de proyectos innovadores y participamos en competencias internacionales, donde ponemos
                a prueba nuestras habilidades.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Misión</h3>
                    <p className="text-muted-foreground">
                      Desarrollar tecnología innovadora y formar ingenieros con experiencia práctica en desafíos reales.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Visión</h3>
                    <p className="text-muted-foreground">
                      Ser un referente en ingeniería aplicada y representar a FIUNA en competencias internacionales.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Valores</h3>
                    <p className="text-muted-foreground">Innovación, colaboración, excelencia y crecimiento.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px] w-full overflow-hidden rounded-lg md:h-[400px]">
              <Image src="/placeholder.svg?height=400&width=600" alt="Equipo αCentauri" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestros Proyectos</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Exploramos diversas áreas de la ingeniería a través de proyectos innovadores.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            <ProjectCard
              title="Robótica Autónoma"
              description="Desarrollo de robots autónomos para diversas aplicaciones."
              imageUrl="/placeholder.svg?height=200&width=300"
              category="Robótica"
            />
            <ProjectCard
              title="Inteligencia Artificial"
              description="Aplicaciones de IA para resolver problemas complejos."
              imageUrl="/placeholder.svg?height=200&width=300"
              category="IA"
            />
            <ProjectCard
              title="Automatización"
              description="Sistemas de control y automatización para procesos industriales."
              imageUrl="/placeholder.svg?height=200&width=300"
              category="Automatización"
            />
            <ProjectCard
              title="Desarrollo de Software"
              description="Aplicaciones y sistemas para diversas necesidades."
              imageUrl="/placeholder.svg?height=200&width=300"
              category="Software"
            />
          </div>
          <div className="flex justify-center">
            <Link href="/proyectos">
              <Button variant="outline" className="border-black text-black hover:bg-gray-100">
                Ver todos los proyectos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">¿Quieres ser parte de αCentauri?</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Estamos buscando estudiantes apasionados por la ingeniería y la tecnología. Únete a nuestro equipo y
              desarrolla tus habilidades en proyectos reales.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
            <Link href="/contacto">
              <Button className="bg-black text-white hover:bg-gray-800">
                Contacto
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

