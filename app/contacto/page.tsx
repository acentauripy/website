import { Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { contactInfo, siteMetadata } from "@/lib/utils"

export const metadata = {
  title: "Contacto | αCentauri",
  description:
    "Ponte en contacto con el equipo αCentauri o únete a nosotros para ser parte de nuestros proyectos y competencias.",
  keywords: siteMetadata.keywords + ", contacto, unirse, equipo",
  openGraph: {
    title: "Contacto | αCentauri",
    description:
      "Ponte en contacto con el equipo αCentauri o únete a nosotros para ser parte de nuestros proyectos y competencias.",
    url: `${siteMetadata.siteUrl}/contacto`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | αCentauri",
    description:
      "Ponte en contacto con el equipo αCentauri o únete a nosotros para ser parte de nuestros proyectos y competencias.",
    creator: siteMetadata.twitterHandle,
  },
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contacto</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Ponte en contacto con nosotros o únete al equipo αCentauri para ser parte de nuestros proyectos y
                competencias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Información de Contacto</h2>
                <p className="text-muted-foreground">
                  Puedes contactarnos a través de los siguientes medios o completando el formulario.
                </p>
              </div>

              <div className="grid gap-6">
                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-black" />
                    <div>
                      <CardTitle className="text-lg mb-2">Email</CardTitle>
                      <CardDescription>
                        <a href={`mailto:${contactInfo.email.info}`} className="text-blue-600 hover:underline">
                          {contactInfo.email.info}
                        </a>
                      </CardDescription>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-black" />
                    <div>
                      <CardTitle className="text-lg mb-2">Ubicación</CardTitle>
                      <CardDescription>
                        {contactInfo.location.name}
                        <br />
                        {contactInfo.location.address}
                        <br />
                        {contactInfo.location.city}
                      </CardDescription>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Horario de Atención</h3>
                <p className="text-muted-foreground mb-2">Lunes a Viernes: 08:00 - 16:00</p>
                <p className="text-muted-foreground">Sábados: 08:00 - 12:00</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Envíanos un mensaje</CardTitle>
                  <CardDescription>
                    Completa el formulario y nos pondremos en contacto contigo lo antes posible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium">
                          Nombre
                        </label>
                        <Input id="first-name" placeholder="Tu nombre" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium">
                          Apellido
                        </label>
                        <Input id="last-name" placeholder="Tu apellido" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="tu@email.com" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Asunto
                      </label>
                      <Select>
                        <SelectTrigger id="subject">
                          <SelectValue placeholder="Selecciona un asunto" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">Consulta General</SelectItem>
                          <SelectItem value="join">Unirse al Equipo</SelectItem>
                          <SelectItem value="project">Propuesta de Proyecto</SelectItem>
                          <SelectItem value="sponsor">Patrocinio</SelectItem>
                          <SelectItem value="other">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Mensaje
                      </label>
                      <Textarea id="message" placeholder="Tu mensaje..." className="min-h-[120px]" />
                    </div>
                    <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
                      Enviar Mensaje
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Únete a αCentauri</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Si eres estudiante de FIUNA y te apasiona la tecnología, la innovación y el trabajo en equipo, αCentauri
                es el lugar para ti.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="flex flex-col items-center text-center p-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-black text-white mb-4">
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
              <h3 className="text-xl font-bold mb-2">Trabajo en Equipo</h3>
              <p className="text-muted-foreground">
                Forma parte de un equipo multidisciplinario donde podrás desarrollar tus habilidades y aprender de otros
                estudiantes con intereses similares.
              </p>
            </Card>

            <Card className="flex flex-col items-center text-center p-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-black text-white mb-4">
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
              <h3 className="text-xl font-bold mb-2">Experiencia Práctica</h3>
              <p className="text-muted-foreground">
                Aplica tus conocimientos teóricos en proyectos reales y adquiere experiencia práctica que complementará
                tu formación académica.
              </p>
            </Card>

            <Card className="flex flex-col items-center text-center p-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-black text-white mb-4">
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Competencias Internacionales</h3>
              <p className="text-muted-foreground">
                Participa en competencias nacionales e internacionales, representando a FIUNA y poniendo a prueba tus
                habilidades.
              </p>
            </Card>
          </div>

          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Proceso de Selección</CardTitle>
                <CardDescription>Para unirte a αCentauri, debes seguir estos pasos:</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-muted-foreground">
                    <span className="font-medium text-black">Completa el formulario de contacto</span> - Selecciona
                    "Unirse al Equipo" como asunto y cuéntanos sobre ti, tus intereses y habilidades.
                  </li>
                  <li className="text-muted-foreground">
                    <span className="font-medium text-black">Entrevista</span> - Si tu perfil se ajusta a nuestras
                    necesidades, te contactaremos para una entrevista.
                  </li>
                  <li className="text-muted-foreground">
                    <span className="font-medium text-black">Período de prueba</span> - Participarás en un proyecto
                    pequeño para evaluar tus habilidades y trabajo en equipo.
                  </li>
                  <li className="text-muted-foreground">
                    <span className="font-medium text-black">Incorporación</span> - Si superas el período de prueba,
                    serás oficialmente miembro de αCentauri.
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Preguntas Frecuentes</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Respuestas a las preguntas más comunes sobre αCentauri.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">¿Quiénes pueden unirse a αCentauri?</h3>
                <p className="text-muted-foreground">
                  Cualquier estudiante activo de la Facultad de Ingeniería de la Universidad Nacional de Asunción
                  (FIUNA) puede aplicar para unirse a αCentauri. Valoramos la diversidad de conocimientos, por lo que
                  aceptamos estudiantes de todas las carreras de ingeniería.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">¿Cuánto tiempo debo dedicar al equipo?</h3>
                <p className="text-muted-foreground">
                  El tiempo de dedicación varía según el proyecto y tu rol en el equipo. En general, esperamos un
                  compromiso mínimo de 8 horas semanales. Durante las competencias, la dedicación puede aumentar.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">¿Necesito tener experiencia previa?</h3>
                <p className="text-muted-foreground">
                  No es necesario tener experiencia previa, pero sí es importante tener interés y disposición para
                  aprender. Valoramos la actitud, la creatividad y el compromiso por encima de los conocimientos
                  técnicos.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">¿Cómo se financian los proyectos y competencias?</h3>
                <p className="text-muted-foreground">
                  Nuestros proyectos y participaciones en competencias se financian a través de patrocinios de empresas,
                  apoyo de la universidad, fondos de investigación y, en algunos casos, actividades de recaudación de
                  fondos organizadas por el equipo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

