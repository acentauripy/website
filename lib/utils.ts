import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)

  // Format: "15 de mayo de 2023"
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }

  return date.toLocaleDateString("es-ES", options)
}

// Add a function to get contact information consistently across the site
export const contactInfo = {
  email: {
    info: "info@acentauri.co",
    team: "acentauripy@gmail.com",
  },
  location: {
    name: "Facultad de Ingeniería UNA",
    address: "Campus Universitario",
    city: "San Lorenzo, Paraguay",
  },
  social: {
    youtube: "https://youtube.com/@acentauripy",
    instagram: "https://instagram.com/acentauripy",
    twitter: "https://x.com/acentauripy",
    linkedin: "https://linkedin.com/company/acentauripy",
  },
  website: "https://acentauri.co",
}

// SEO metadata
export const siteMetadata = {
  title: "αCentauri - Equipo de Ingeniería FIUNA",
  description:
    "Equipo de estudiantes de ingeniería de la FIUNA especializado en robótica, inteligencia artificial, automatización y programación.",
  keywords:
    "ingeniería, robótica, inteligencia artificial, automatización, programación, FIUNA, Paraguay, competencias, proyectos, logros, prensa",
  siteUrl: "https://acentauri.co",
  twitterHandle: "@acentauripy",
  locale: "es_PY",
}

// Brand guidelines
export const brandGuidelines = {
  colors: {
    primary: {
      name: "Azul αCentauri",
      hex: "#0055B8",
      rgb: "0, 85, 184",
    },
    secondary: {
      name: "Naranja αCentauri",
      hex: "#FF6B00",
      rgb: "255, 107, 0",
    },
    accent: {
      name: "Turquesa αCentauri",
      hex: "#00B8B8",
      rgb: "0, 184, 184",
    },
    neutral: {
      dark: "#212121",
      medium: "#757575",
      light: "#F5F5F5",
    },
  },
  typography: {
    primary: "Poppins",
    secondary: "Roboto",
    monospace: "Roboto Mono",
  },
  spacing: {
    clearSpace: "El logo debe tener un espacio libre alrededor equivalente a la altura de la letra α.",
    minSize: "El logo no debe utilizarse en tamaños menores a 30px de altura para asegurar su legibilidad.",
  },
}

