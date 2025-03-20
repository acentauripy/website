import Image from "next/image"
import Link from "next/link"
import {
  ArrowDown,
  ArrowRight,
  Calendar,
  Download,
  ExternalLink,
  FileText,
  ImageIcon,
  Monitor,
  Newspaper,
  Mail,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { pressItems, videoInterviews, mediaAssets } from "@/lib/press"
import { formatDate, siteMetadata, brandGuidelines } from "@/lib/utils"

export const metadata = {
  title: "Prensa | aCentauri",
  description:
    "Centro de prensa de aCentauri: noticias, entrevistas, menciones en medios y recursos para la prensa sobre nuestro equipo de ingeniería.",
  keywords: siteMetadata.keywords + ", prensa, noticias, entrevistas, medios, kit de prensa, branding",
  openGraph: {
    title: "Prensa | aCentauri",
    description:
      "Centro de prensa de aCentauri: noticias, entrevistas, menciones en medios y recursos para la prensa sobre nuestro equipo de ingeniería.",
    url: `${siteMetadata.siteUrl}/prensa`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prensa | aCentauri",
    description:
      "Centro de prensa de aCentauri: noticias, entrevistas, menciones en medios y recursos para la prensa sobre nuestro equipo de ingeniería.",
    creator: siteMetadata.twitterHandle,
  },
}

// Get file icon based on file type
const getFileIcon = (fileType: string) => {
  switch (fileType) {
    case "png":
    case "jpg":
      return <ImageIcon className="h-5 w-5" />
    case "pdf":
      return <FileText className="h-5 w-5" />
    case "zip":
      return <ArrowDown className="h-5 w-5" />
    case "svg":
      return <ImageIcon className="h-5 w-5" />
    default:
      return <FileText className="h-5 w-5" />
  }
}

export default function PressPage() {
  // Sort press items by date (newest first)
  const sortedPressItems = [...pressItems].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  // Sort video interviews by date (newest first)
  const sortedVideoInterviews = [...videoInterviews].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  // Get featured items
  const featuredPress = sortedPressItems.filter((item) => item.featured)
  const featuredVideos = sortedVideoInterviews.filter((video) => video.featured)

  // Group media assets by category
  const assetsByCategory = mediaAssets.reduce(
    (acc, asset) => {
      if (!acc[asset.category]) {
        acc[asset.category] = []
      }
      acc[asset.category].push(asset)
      return acc
    },
    {} as Record<string, typeof mediaAssets>,
  )

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sala de Prensa</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Noticias, entrevistas y recursos para la prensa sobre el equipo aCentauri y nuestras actividades.
              </p>
            </div>
            <div className="w-full max-w-md mx-auto">
              <Image
                src="/images/joeyontv.jpg"
                alt="Joey Tribbiani sees himself on TV."
                width={504}
                height={894}
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      {(featuredPress.length > 0 || featuredVideos.length > 0) && (
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Destacados</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                  Nuestras apariciones más recientes en los medios.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
              {featuredPress.slice(0, 1).map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={item.image || "/placeholder.svg?height=300&width=400"}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-white text-black">{item.source}</Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Newspaper className="h-5 w-5 text-blue-500" />
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{item.description}</CardDescription>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-2 h-4 w-4" />
                      {formatDate(item.date)}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={item.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        Leer artículo
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
              {featuredVideos.slice(0, 1).map((video) => (
                <Card key={video.id} className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={video.thumbnail || "/placeholder.svg?height=300&width=400"}
                      alt={video.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-white text-black">{video.channel}</Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Monitor className="h-5 w-5 text-red-500" />
                      <CardTitle className="text-lg">{video.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{video.description}</CardDescription>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-2 h-4 w-4" />
                      {formatDate(video.date)}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/prensa/videos/${video.id}`}>
                      <Button variant="outline" size="sm">
                        Ver entrevista
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Press Coverage Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Cobertura de Prensa</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Artículos, entrevistas y menciones de aCentauri en los medios.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-5xl">
            <Tabs defaultValue="articles" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="articles">Artículos</TabsTrigger>
                <TabsTrigger value="interviews">Entrevistas</TabsTrigger>
                <TabsTrigger value="mentions">Menciones</TabsTrigger>
              </TabsList>
              <TabsContent value="articles" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {sortedPressItems
                    .filter((item) => item.type === "article")
                    .map((item) => (
                      <Card key={item.id} className="overflow-hidden">
                        <div className="relative h-40 w-full">
                          <Image
                            src={item.image || "/placeholder.svg?height=300&width=400"}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-center">
                            <CardTitle className="text-base">{item.title}</CardTitle>
                          </div>
                          <CardDescription className="text-xs">
                            {item.source} • {formatDate(item.date)}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground line-clamp-3">{item.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Link href={item.link} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm">
                              Leer artículo
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="interviews" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {sortedVideoInterviews.map((video) => (
                    <Card key={video.id} className="overflow-hidden">
                      <div className="relative h-40 w-full">
                        <Image
                          src={video.thumbnail || "/placeholder.svg?height=300&width=400"}
                          alt={video.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="rounded-full bg-black/70 p-3">
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
                              className="h-6 w-6 text-white"
                            >
                              <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-base">{video.title}</CardTitle>
                        </div>
                        <CardDescription className="text-xs">
                          {video.channel} • {formatDate(video.date)}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground line-clamp-3">{video.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Link href={`/prensa/videos/${video.id}`}>
                          <Button variant="outline" size="sm">
                            Ver entrevista
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="mentions" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {sortedPressItems
                    .filter((item) => item.type === "mention")
                    .map((item) => (
                      <Card key={item.id} className="overflow-hidden">
                        <div className="relative h-40 w-full">
                          <Image
                            src={item.image || "/placeholder.svg?height=300&width=400"}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-center">
                            <CardTitle className="text-base">{item.title}</CardTitle>
                          </div>
                          <CardDescription className="text-xs">
                            {item.source} • {formatDate(item.date)}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground line-clamp-3">{item.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Link href={item.link} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm">
                              Ver mención
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Media Kit Section */}
      <section className="w-full py-12 md:py-24 lg:py-32" id="kit-de-medios">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Kit de Medios</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Recursos oficiales para el uso correcto de nuestra identidad visual.
              </p>
            </div>
          </div>

          {/* Brand Guidelines */}
          <div className="mx-auto mt-12 max-w-5xl">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-2xl font-bold mb-4">Guía de Marca</h3>
              <p className="text-muted-foreground mb-8">
                Estas pautas aseguran que nuestra identidad visual se utilice de manera consistente en todas las
                plataformas y materiales.
              </p>

              {/* Logo Usage */}
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4">Uso del Logo</h4>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h5 className="font-semibold mb-2">Lo que se debe hacer:</h5>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Mantener las proporciones originales del logo</li>
                      <li>Asegurar que el logo tenga suficiente espacio libre alrededor</li>
                      <li>Usar la versión apropiada del logo según el fondo</li>
                      <li>Mantener un tamaño mínimo para asegurar la legibilidad</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Lo que no se debe hacer:</h5>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Distorsionar o estirar el logo</li>
                      <li>Cambiar los colores del logo</li>
                      <li>Alterar el logo de cualquier manera</li>
                      <li>Colocar el logo sobre fondos que reduzcan su visibilidad</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Color Palette */}
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4">Paleta de Colores</h4>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg overflow-hidden">
                    <div className="h-24" style={{ backgroundColor: brandGuidelines.colors.primary.hex }}></div>
                    <div className="p-3 bg-gray-100">
                      <p className="font-semibold">{brandGuidelines.colors.primary.name}</p>
                      <p className="text-sm text-muted-foreground">HEX: {brandGuidelines.colors.primary.hex}</p>
                      <p className="text-sm text-muted-foreground">RGB: {brandGuidelines.colors.primary.rgb}</p>
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <div className="h-24" style={{ backgroundColor: brandGuidelines.colors.secondary.hex }}></div>
                    <div className="p-3 bg-gray-100">
                      <p className="font-semibold">{brandGuidelines.colors.secondary.name}</p>
                      <p className="text-sm text-muted-foreground">HEX: {brandGuidelines.colors.secondary.hex}</p>
                      <p className="text-sm text-muted-foreground">RGB: {brandGuidelines.colors.secondary.rgb}</p>
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <div className="h-24" style={{ backgroundColor: brandGuidelines.colors.accent.hex }}></div>
                    <div className="p-3 bg-gray-100">
                      <p className="font-semibold">{brandGuidelines.colors.accent.name}</p>
                      <p className="text-sm text-muted-foreground">HEX: {brandGuidelines.colors.accent.hex}</p>
                      <p className="text-sm text-muted-foreground">RGB: {brandGuidelines.colors.accent.rgb}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Typography */}
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4">Tipografía</h4>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h5 className="font-semibold mb-2">Fuente Principal</h5>
                    <p className="text-2xl" style={{ fontFamily: brandGuidelines.typography.primary }}>
                      {brandGuidelines.typography.primary}
                    </p>
                    <p className="text-muted-foreground mt-2">Utilizada para títulos y textos destacados.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Fuente Secundaria</h5>
                    <p className="text-2xl" style={{ fontFamily: brandGuidelines.typography.secondary }}>
                      {brandGuidelines.typography.secondary}
                    </p>
                    <p className="text-muted-foreground mt-2">Utilizada para cuerpo de texto y contenido general.</p>
                  </div>
                </div>
              </div>

              {/* Name Usage */}
              <div>
                <h4 className="text-xl font-bold mb-4">Uso del Nombre</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold mb-2">Forma correcta de escribir nuestro nombre:</h5>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>
                        <strong>aCentauri</strong> - Con la letra griega alfa minúscula seguida de "Centauri" con la C
                        mayúscula y sin espacios
                      </li>
                      <li>En caso de no poder utilizar el símbolo alfa, se puede usar "aCentauri" (con la letra minúscula A)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Formas incorrectas:</h5>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Alpha Centauri (usando "Alpha" o "Alfa" en lugar de "a")</li>
                      <li>a-Centauri (usando guion)</li>
                      <li>acentauri (todo en minúsculas)</li>
                      <li>ACentauri (con A latina mayúscula)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Downloadable Assets */}
          <div className="mx-auto mt-12 max-w-5xl">
            <h3 className="text-2xl font-bold mb-6">Recursos Descargables</h3>
            <Tabs defaultValue="logo" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="logo">Logos</TabsTrigger>
                <TabsTrigger value="banner">Banners</TabsTrigger>
                <TabsTrigger value="icon">Iconos</TabsTrigger>
                <TabsTrigger value="document">Documentos</TabsTrigger>
                <TabsTrigger value="photo">Fotos</TabsTrigger>
              </TabsList>
              {["logo", "banner", "icon", "document", "photo"].map((category) => (
                <TabsContent key={category} value={category} className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {assetsByCategory[category]?.map((asset) => (
                      <Card key={asset.id}>
                        <div className="relative h-40 w-full bg-gray-100 flex items-center justify-center">
                          <Image
                            src={asset.thumbnailUrl || "/placeholder.svg?height=200&width=200"}
                            alt={asset.name}
                            width={200}
                            height={200}
                            className="object-contain max-h-full"
                          />
                        </div>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">{asset.name}</CardTitle>
                          <CardDescription className="text-xs">
                            {asset.fileType.toUpperCase()} {asset.dimensions && `• ${asset.dimensions}`}{" "}
                            {asset.fileSize && `• ${asset.fileSize}`}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">{asset.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Link href={asset.fileUrl} download>
                            <Button variant="outline" size="sm">
                              Descargar
                              <Download className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Contact for Press Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Contacto para Prensa</h2>
            <p className="text-muted-foreground mb-8">
              Si sos periodista o representante de un medio y querés más información sobre aCentauri, entrevistar a
              algún miembro del equipo o cubrir alguno de nuestros eventos, no dudes en contactarnos.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="mailto:prensa@acentauri.co">
                <Button className="bg-black text-white hover:bg-gray-800">
                  Contacto para Prensa
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contacto">
                <Button variant="outline">
                  Formulario de Contacto
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

