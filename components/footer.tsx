import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin, Mail, Youtube } from "lucide-react"
import { contactInfo } from "@/lib/utils"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white py-6">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/logo.png" alt="αCentauri Logo" width={150} height={50} className="h-12 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground">
              Equipo de estudiantes de ingeniería de la FIUNA especializado en robótica, inteligencia artificial,
              automatización y programación.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Enlaces</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/nosotros" className="text-sm hover:underline">
                Nosotros
              </Link>
              <Link href="/logros" className="text-sm hover:underline">
                Logros
              </Link>
              <Link href="/proyectos" className="text-sm hover:underline">
                Proyectos
              </Link>
              <Link href="/competencias" className="text-sm hover:underline">
                Competencias
              </Link>
              <Link href="/prensa" className="text-sm hover:underline">
                Prensa
              </Link>
              <Link href="/blog" className="text-sm hover:underline">
                Blog
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contacto</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/contacto" className="text-sm hover:underline">
                Contacto
              </Link>
              <a href={`mailto:${contactInfo.email.info}`} className="text-sm hover:underline">
                {contactInfo.email.info}
              </a>
              <p className="text-sm text-muted-foreground">
                {contactInfo.location.name}
                <br />
                {contactInfo.location.city}
              </p>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Síguenos</h3>
            <div className="flex gap-4">
              <Link
                href="https://youtube.com/@acentauripy"
                className="text-muted-foreground hover:text-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                href="https://instagram.com/acentauripy"
                className="text-muted-foreground hover:text-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://x.com/acentauripy"
                className="text-muted-foreground hover:text-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                </svg>
                <span className="sr-only">X (Twitter)</span>
              </Link>
              <Link
                href="https://linkedin.com/company/acentauripy"
                className="text-muted-foreground hover:text-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href={`mailto:${contactInfo.email.team}`} className="text-muted-foreground hover:text-black">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()}{" "}
            <Link href="/humans.txt" className="hover:underline">
              αCentauri
            </Link>
            . Todos los derechos reservados. Hecho con el ♡
          </p>
        </div>
      </div>
    </footer>
  )
}

