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
    //twitter: "https://x.com/acentauripy",
    //linkedin: "https://linkedin.com/company/acentauripy",*
  },
  website: "https://acentauri.co",
}

// SEO metadata
export const siteMetadata = {
  title: "aCentauri",
  description:
    "Equipo de estudiantes de ingeniería de la FIUNA especializado en programación, inteligencia artificial y robótica.",
  keywords:
    "ingeniería, programación, inteligencia artificial, robótica, estudiantes, FIUNA, Paraguay, competencias, proyectos, logros, prensa",
  siteUrl: "https://acentauri.co",
  twitterHandle: "@acentauripy",
  locale: "es_PY",
}

// Brand guidelines
export const brandGuidelines = {
  colors: {
    primary: {
      name: "Negro",
      hex: "#000000",
      rgb: "0, 0, 0",
    },
    secondary: {
      name: "Blanco",
      hex: "#fafafa",
      rgb: "250, 250, 250",
    },
    accent: {
      name: "Gris",
      hex: "#343434",
      rgb: "72, 68, 68",
    },
    neutral: {
      dark: "#212121",
      medium: "#757575",
      light: "#F5F5F5",
    },
  },
  typography: {
    primary: "Poppins",
    secondary: "Poppins",
    monospace: "Poppins",
  },
  spacing: {
    clearSpace: "El logo debe tener un espacio libre alrededor equivalente a la altura de la letra a.",
    minSize: "El logo no debe utilizarse en tamaños menores a 30px de altura para asegurar su legibilidad.",
  },
}

