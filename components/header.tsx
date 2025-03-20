"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const isMobile = useMobile()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="aCentauri Logo" width={120} height={40} className="h-10 w-auto" />
        </Link>
        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="border-none">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-medium hover:text-gray-600">
                  Inicio
                </Link>
                <Link href="/nosotros" className="text-lg font-medium hover:text-gray-600">
                  Nosotros
                </Link>
                <Link href="/logros" className="text-lg font-medium hover:text-gray-600">
                  Logros
                </Link>
                <Link href="/proyectos" className="text-lg font-medium hover:text-gray-600">
                  Proyectos
                </Link>
                <Link href="/competencias" className="text-lg font-medium hover:text-gray-600">
                  Competencias
                </Link>
                <Link href="/prensa" className="text-lg font-medium hover:text-gray-600">
                  Prensa
                </Link>
                <Link href="/blog" className="text-lg font-medium hover:text-gray-600">
                  Blog
                </Link>
                <Link href="/contacto" className="text-lg font-medium hover:text-gray-600">
                  Contacto
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-gray-600">
              Inicio
            </Link>
            <Link href="/nosotros" className="text-sm font-medium hover:text-gray-600">
              Nosotros
            </Link>
            <Link href="/logros" className="text-sm font-medium hover:text-gray-600">
              Logros
            </Link>
            <Link href="/proyectos" className="text-sm font-medium hover:text-gray-600">
              Proyectos
            </Link>
            <Link href="/competencias" className="text-sm font-medium hover:text-gray-600">
              Competencias
            </Link>
            <Link href="/prensa" className="text-sm font-medium hover:text-gray-600">
              Prensa
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-gray-600">
              Blog
            </Link>
            <Link href="/contacto" className="text-sm font-medium hover:text-gray-600">
              Contacto
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

