import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/lib/projects"
import { formatDate } from "@/lib/utils"
import ProjectCard from "@/components/project-card"

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((project) => project.slug === params.slug)

  if (!project) {
    return {
      title: "Proyecto no encontrado | aCentauri",
      description: "El proyecto que buscas no existe.",
    }
  }

  return {
    title: `${project.title} | aCentauri`,
    description: project.excerpt,
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((project) => project.slug === params.slug)

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold">Proyecto no encontrado</h1>
        <p className="mt-4">El proyecto que buscas no existe.</p>
        <Link href="/proyectos" className="mt-4 inline-block">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a proyectos
          </Button>
        </Link>
      </div>
    )
  }

  // Find related projects (same category, excluding current)
  const relatedProjects = projects.filter((p) => p.category === project.category && p.slug !== project.slug).slice(0, 3)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Link href="/proyectos" className="mb-4 inline-flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a proyectos
            </Link>
            <Badge className="mb-2">{project.category}</Badge>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{project.title}</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">{project.excerpt}</p>
              <p className="text-sm text-muted-foreground">{formatDate(project.date)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="relative mb-10 h-[300px] w-full overflow-hidden rounded-lg md:h-[500px]">
              <Image
                src={project.coverImage || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="prose prose-lg max-w-none">
              {project.content.map((paragraph, index) => (
                <p key={index} className="mb-4 text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Project Details */}
            <div className="mt-12 rounded-lg border p-6">
              <h3 className="text-xl font-bold">Detalles del Proyecto</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold">Tecnologías Utilizadas</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="bg-gray-100">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Equipo</h4>
                  <ul className="mt-2 space-y-1">
                    {project.team.map((member) => (
                      <li key={member}>{member}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Proyectos Relacionados</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">Explorá otros proyectos similares.</p>
              </div>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((project) => (
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
          </div>
        </section>
      )}
    </div>
  )
}

