import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import { projects } from "@/lib/projects"

export const metadata = {
  title: "Proyectos | aCentauri",
  description:
    "Explora los proyectos innovadores desarrollados por el equipo aCentauri en robótica, inteligencia artificial, automatización y programación.",
}

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestros Proyectos</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Explorá los proyectos innovadores desarrollados por el equipo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Categorías</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Nuestros proyectos se dividen en cuatro categorías principales.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Link href="/proyectos?categoria=robotica" className="group">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 text-center transition-all hover:border-black">
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
                    <rect x="3" y="11" width="18" height="10" rx="2"></rect>
                    <circle cx="12" cy="5" r="2"></circle>
                    <path d="M12 7v4"></path>
                    <line x1="8" y1="16" x2="8" y2="16"></line>
                    <line x1="16" y1="16" x2="16" y2="16"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Robótica Autónoma</h3>
                <p className="text-muted-foreground">Desarrollo de robots autónomos para diversas aplicaciones.</p>
              </div>
            </Link>
            <Link href="/proyectos?categoria=ia" className="group">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 text-center transition-all hover:border-black">
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
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                    <line x1="12" y1="22" x2="12" y2="12"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Inteligencia Artificial</h3>
                <p className="text-muted-foreground">Aplicaciones de IA para resolver problemas complejos.</p>
              </div>
            </Link>
            <Link href="/proyectos?categoria=automatizacion" className="group">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 text-center transition-all hover:border-black">
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
                    <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"></path>
                    <path d="M2 20h20"></path>
                    <path d="M14 12v.01"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Automatización</h3>
                <p className="text-muted-foreground">
                  Sistemas de control y automatización para procesos industriales.
                </p>
              </div>
            </Link>
            <Link href="/proyectos?categoria=software" className="group">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 text-center transition-all hover:border-black">
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
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Desarrollo de Software</h3>
                <p className="text-muted-foreground">Aplicaciones y sistemas para diversas necesidades.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Proyectos Destacados</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Conoce algunos de nuestros proyectos más innovadores.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((project) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                description={project.excerpt}
                imageUrl={project.coverImage}
                category={project.category}
                slug={project.slug}
              />
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link href="/proyectos/todos">
              <Button variant="outline" className="border-black text-black hover:bg-gray-100">
                Ver todos los proyectos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

