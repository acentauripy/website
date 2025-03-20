import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import BlogPostCard from "@/components/blog-post-card"
import { blogPosts } from "@/lib/blog-posts"

export const metadata = {
  title: "Blog | aCentauri",
  description:
    "Artículos, experiencias y conocimientos compartidos por el equipo sobre ingeniería, tecnología, matemáticas y nuestras competencias.",
}

export default function BlogPage() {
  // Group blog posts by category
  const categories = [...new Set(blogPosts.map((post) => post.category))]

  // Get featured posts (most recent 3)
  const featuredPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Blog</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Artículos, experiencias y conocimientos compartidos por el equipo sobre ingeniería, tecnología,
              matemáticas, competencias y todo lo que nos parezca interesante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Artículos Destacados</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Los artículos más recientes de nuestro blog.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.map((post) => (
              <BlogPostCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                category={post.category}
                slug={post.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Categorías</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Explorá nuestros artículos por categoría.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link key={category} href={`/blog?categoria=${category.toLowerCase()}`} className="group">
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 text-center transition-all hover:border-black">
                  <h3 className="text-xl font-bold">{category}</h3>
                  <p className="text-muted-foreground">
                    {blogPosts.filter((post) => post.category === category).length} artículos
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Todos los Artículos</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">Explorá todos nuestros artículos.</p>
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 9).map((post) => (
              <BlogPostCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                category={post.category}
                slug={post.slug}
              />
            ))}
          </div>
          {blogPosts.length > 9 && (
            <div className="mt-12 flex justify-center">
              <Link href="/blog/todos">
                <Button variant="outline" className="border-black text-black hover:bg-gray-100">
                  Ver todos los artículos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

