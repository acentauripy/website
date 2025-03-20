export interface PressItem {
  id: string
  title: string
  source: string
  date: string
  description: string
  link: string
  image?: string
  type: "article" | "interview" | "mention"
  featured?: boolean
}

export interface VideoInterview {
  id: string
  title: string
  channel: string
  date: string
  description: string
  embedUrl: string
  thumbnail?: string
  featured?: boolean
}

export interface MediaAsset {
  id: string
  name: string
  description: string
  fileUrl: string
  thumbnailUrl: string
  fileType: "png" | "jpg" | "svg" | "pdf" | "zip"
  category: "logo" | "banner" | "icon" | "document" | "photo"
  dimensions?: string
  fileSize?: string
}

export const pressItems: PressItem[] = [
  {
    id: "abc-color-2023-robocup",
    title: "Estudiantes paraguayos obtienen reconocimiento en competencia internacional de robótica",
    source: "ABC Color",
    date: "2023-07-20",
    description:
      "El equipo αCentauri de la Facultad de Ingeniería UNA obtuvo el tercer lugar en la categoría de Robots de Rescate en la competencia RoboCup 2023 celebrada en Bordeaux, Francia.",
    link: "https://www.abc.com.py/ejemplo",
    image: "/placeholder.svg?height=400&width=600",
    type: "article",
    featured: true,
  },
  {
    id: "ultima-hora-2023-ieee",
    title: "Equipo paraguayo gana competencia latinoamericana de robótica",
    source: "Última Hora",
    date: "2023-11-15",
    description:
      "αCentauri, equipo de la FIUNA, se coronó campeón en la categoría Open Challenge de la IEEE Latin American Robotics Competition 2023 realizada en Santiago de Chile.",
    link: "https://www.ultimahora.com/ejemplo",
    image: "/placeholder.svg?height=400&width=600",
    type: "article",
    featured: true,
  },
  {
    id: "la-nacion-2022-nasa",
    title: "Jóvenes paraguayos finalistas en desafío global de la NASA",
    source: "La Nación",
    date: "2022-10-10",
    description:
      "El proyecto 'Planetary Lander' del equipo αCentauri fue seleccionado como finalista global en el NASA Space Apps Challenge 2022, destacándose entre miles de participantes de todo el mundo.",
    link: "https://www.lanacion.com.py/ejemplo",
    image: "/placeholder.svg?height=400&width=600",
    type: "article",
  },
  {
    id: "5dias-2022-hackathon",
    title: "Innovación tecnológica para zonas rurales gana hackathon nacional",
    source: "5 Días",
    date: "2022-08-20",
    description:
      "El proyecto 'EduBox' desarrollado por estudiantes de la FIUNA ganó el primer lugar en el Hackathon de Innovación Social 2022 por su solución para mejorar el acceso a la educación en zonas con conectividad limitada.",
    link: "https://www.5dias.com.py/ejemplo",
    image: "/placeholder.svg?height=400&width=600",
    type: "article",
  },
  {
    id: "paraguay-tv-2023-entrevista",
    title: "Entrevista a αCentauri tras su éxito en RoboCup 2023",
    source: "Paraguay TV",
    date: "2023-08-05",
    description:
      "Miembros del equipo αCentauri fueron entrevistados sobre su experiencia y logros en la competencia internacional RoboCup 2023, donde obtuvieron el tercer lugar y un premio a la innovación.",
    link: "https://www.paraguaytv.gov.py/ejemplo",
    image: "/placeholder.svg?height=400&width=600",
    type: "mention",
  },
]

export const videoInterviews: VideoInterview[] = [
  {
    id: "gen-2023-robocup",
    title: "αCentauri: El equipo paraguayo que triunfa en competencias internacionales de robótica",
    channel: "GEN",
    date: "2023-07-25",
    description:
      "Entrevista con los miembros del equipo αCentauri tras su regreso de la RoboCup 2023, donde hablan sobre su experiencia, los desafíos enfrentados y sus planes futuros.",
    embedUrl: "https://drive.google.com/file/d/EXAMPLE1/preview",
    thumbnail: "/placeholder.svg?height=400&width=600",
    featured: true,
  },
  {
    id: "telefuturo-2023-ieee",
    title: "Ingenieros paraguayos ganan competencia latinoamericana de robótica",
    channel: "Telefuturo",
    date: "2023-11-20",
    description:
      "Reportaje sobre el triunfo del equipo αCentauri en la IEEE Latin American Robotics Competition 2023, incluyendo demostraciones de su robot ganador.",
    embedUrl: "https://drive.google.com/file/d/EXAMPLE2/preview",
    thumbnail: "/placeholder.svg?height=400&width=600",
    featured: true,
  },
  {
    id: "unicanal-2022-nasa",
    title: "Paraguayos finalistas en desafío de la NASA",
    channel: "Unicanal",
    date: "2022-10-15",
    description:
      "Entrevista con el equipo αCentauri sobre su proyecto 'Planetary Lander' y su experiencia como finalistas globales en el NASA Space Apps Challenge 2022.",
    embedUrl: "https://drive.google.com/file/d/EXAMPLE3/preview",
    thumbnail: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "npy-2022-hackathon",
    title: "Innovación tecnológica para la educación rural",
    channel: "NPY",
    date: "2022-08-25",
    description:
      "Reportaje sobre el proyecto 'EduBox' del equipo αCentauri, ganador del Hackathon de Innovación Social 2022, que busca mejorar el acceso a la educación en zonas rurales.",
    embedUrl: "https://drive.google.com/file/d/EXAMPLE4/preview",
    thumbnail: "/placeholder.svg?height=400&width=600",
  },
]

export const mediaAssets: MediaAsset[] = [
  {
    id: "logo-principal-color",
    name: "Logo Principal a Color",
    description: "Versión principal del logo αCentauri a color para uso en fondos claros.",
    fileUrl: "/media-kit/logo-principal-color.png",
    thumbnailUrl: "/placeholder.svg?height=200&width=200",
    fileType: "png",
    category: "logo",
    dimensions: "2000x600px",
    fileSize: "156KB",
  },
  {
    id: "logo-principal-blanco",
    name: "Logo Principal en Blanco",
    description: "Versión del logo αCentauri en blanco para uso en fondos oscuros.",
    fileUrl: "/media-kit/logo-principal-blanco.png",
    thumbnailUrl: "/placeholder.svg?height=200&width=200",
    fileType: "png",
    category: "logo",
    dimensions: "2000x600px",
    fileSize: "142KB",
  },
  {
    id: "logo-principal-negro",
    name: "Logo Principal en Negro",
    description: "Versión del logo αCentauri en negro para uso en fondos claros cuando se requiere monocromático.",
    fileUrl: "/media-kit/logo-principal-negro.png",
    thumbnailUrl: "/placeholder.svg?height=200&width=200",
    fileType: "png",
    category: "logo",
    dimensions: "2000x600px",
    fileSize: "138KB",
  },
  {
    id: "logo-isotipo-color",
    name: "Isotipo a Color",
    description: "Versión reducida del logo αCentauri (solo símbolo) a color.",
    fileUrl: "/media-kit/logo-isotipo-color.png",
    thumbnailUrl: "/placeholder.svg?height=200&width=200",
    fileType: "png",
    category: "icon",
    dimensions: "600x600px",
    fileSize: "86KB",
  },
  {
    id: "banner-horizontal",
    name: "Banner Horizontal",
    description: "Banner horizontal con el logo αCentauri para uso en sitios web y redes sociales.",
    fileUrl: "/media-kit/banner-horizontal.jpg",
    thumbnailUrl: "/placeholder.svg?height=200&width=600",
    fileType: "jpg",
    category: "banner",
    dimensions: "1200x300px",
    fileSize: "245KB",
  },
  {
    id: "manual-identidad",
    name: "Manual de Identidad Visual",
    description: "Documento completo con las normas de uso de la identidad visual de αCentauri.",
    fileUrl: "/media-kit/manual-identidad.pdf",
    thumbnailUrl: "/placeholder.svg?height=300&width=200",
    fileType: "pdf",
    category: "document",
    fileSize: "3.2MB",
  },
  {
    id: "kit-completo",
    name: "Kit Completo de Identidad Visual",
    description:
      "Archivo comprimido con todos los elementos de la identidad visual de αCentauri en diferentes formatos.",
    fileUrl: "/media-kit/kit-completo.zip",
    thumbnailUrl: "/placeholder.svg?height=200&width=200",
    fileType: "zip",
    category: "document",
    fileSize: "12.8MB",
  },
  {
    id: "foto-equipo-2023",
    name: "Foto Oficial del Equipo 2023",
    description: "Fotografía oficial del equipo αCentauri del año 2023 en alta resolución.",
    fileUrl: "/media-kit/foto-equipo-2023.jpg",
    thumbnailUrl: "/placeholder.svg?height=200&width=300",
    fileType: "jpg",
    category: "photo",
    dimensions: "3000x2000px",
    fileSize: "4.5MB",
  },
]

