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
 /* {
    id: "abc-color-2023-robocup",
    title: "Estudiantes paraguayos obtienen reconocimiento en competencia internacional de robótica",
    source: "ABC Color",
    date: "2023-07-20",
    description:
      "El equipo aCentauri de la Facultad de Ingeniería UNA obtuvo el tercer lugar en la categoría de Robots de Rescate en la competencia RoboCup 2023 celebrada en Bordeaux, Francia.",
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
      "aCentauri, equipo de la FIUNA, se coronó campeón en la categoría Open Challenge de la IEEE Latin American Robotics Competition 2023 realizada en Santiago de Chile.",
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
      "El proyecto 'Planetary Lander' del equipo aCentauri fue seleccionado como finalista global en el NASA Space Apps Challenge 2022, destacándose entre miles de participantes de todo el mundo.",
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
    title: "Entrevista a aCentauri tras su éxito en RoboCup 2023",
    source: "Paraguay TV",
    date: "2023-08-05",
    description:
      "Miembros del equipo aCentauri fueron entrevistados sobre su experiencia y logros en la competencia internacional RoboCup 2023, donde obtuvieron el tercer lugar y un premio a la innovación.",
    link: "https://www.paraguaytv.gov.py/ejemplo",
    image: "/placeholder.svg?height=400&width=600",
    type: "mention",
  },*/
]

export const videoInterviews: VideoInterview[] = [
    {
      id: "pyTV-2025-spaceapps",
      title: "aCentauri: El equipo paraguayo que triunfa en NASA Space Apps Challenge 2025",
      channel: "ParaguayTV",
      date: "2025-11-30",
      description:
        "Entrevista con los miembros del equipo aCentauri tras su victoria en el NASA Space Apps Challenge 2025, donde hablaron sobre su proyecto, los desafíos enfrentados y cómo su solución ha impactado a la comunidad global.",
      embedUrl: "https://drive.google.com/file/d/1CMtLWGYmLVxSVDcGPnS4ogtX2SjHCAXI/view?usp=drive_link",
      thumbnail: "/images/pyTV-2025-spaceapps-thumbnail.png?height=400&width=600",
      featured: true,
    }
 /* {
    id: "telefuturo-2023-ieee",
    title: "Ingenieros paraguayos ganan competencia latinoamericana de robótica",
    channel: "Telefuturo",
    date: "2023-11-20",
    description:
      "Reportaje sobre el triunfo del equipo aCentauri en la IEEE Latin American Robotics Competition 2023, incluyendo demostraciones de su robot ganador.",
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
      "Entrevista con el equipo aCentauri sobre su proyecto 'Planetary Lander' y su experiencia como finalistas globales en el NASA Space Apps Challenge 2022.",
    embedUrl: "https://drive.google.com/file/d/EXAMPLE3/preview",
    thumbnail: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "npy-2022-hackathon",
    title: "Innovación tecnológica para la educación rural",
    channel: "NPY",
    date: "2022-08-25",
    description:
      "Reportaje sobre el proyecto 'EduBox' del equipo aCentauri, ganador del Hackathon de Innovación Social 2022, que busca mejorar el acceso a la educación en zonas rurales.",
    embedUrl: "https://drive.google.com/file/d/EXAMPLE4/preview",
    thumbnail: "/placeholder.svg?height=400&width=600",
  },*/
]

export const mediaAssets: MediaAsset[] = [
  {
    id: "logo-principal-color",
    name: "Logo Principal a Color",
    description: "Versión principal del logo aCentauri a color para uso en fondos claros.",
    fileUrl: "/media-kit/centauri-b.png",
    thumbnailUrl: "/media-kit/centauri-b.png?height=200&width=200",
    fileType: "png",
    category: "logo",
    dimensions: "2945x2944px",
    fileSize: "1.66MB",
  },
  {
    id: "logo-principal-blanco",
    name: "Logo Principal en Blanco",
    description: "Versión del logo aCentauri en blanco para uso en fondos oscuros.",
    fileUrl: "/media-kit/centauri-w.png",
    thumbnailUrl: "/media-kit/centauri-w.png?height=200&width=200",
    fileType: "png",
    category: "logo",
    dimensions: "2982x2982px",
    fileSize: "1.55MB",
  },
  {
    id: "logo-principal-negro",
    name: "Logo Principal en Negro",
    description: "Versión del logo aCentauri en negro para uso en fondos claros cuando se requiere monocromático.",
    fileUrl: "/media-kit/alfacentauri-b.png",
    thumbnailUrl: "/media-kit/alfacentauri-b.png?height=200&width=200",
    fileType: "png",
    category: "logo",
    dimensions: "11815x11809px",
    fileSize: "829KB",
  },
  {
    id: "logo-isotipo-color",
    name: "Isotipo a Color",
    description: "Versión reducida del logo aCentauri (solo símbolo) a color.",
    fileUrl: "/media-kit/isotipo.png",
    thumbnailUrl: "/media-kit/isotipo.png?height=200&width=200",
    fileType: "png",
    category: "icon",
    dimensions: "2555x2555px",
    fileSize: "1.60MB",
  },
  {
    id: "banner-horizontal",
    name: "Banner Horizontal",
    description: "Banner horizontal con el logo aCentauri para uso en sitios web y redes sociales.",
    fileUrl: "/media-kit/acentauri_banner.png",
    thumbnailUrl: "/media-kit/acentauri_banner.png?height=200&width=600",
    fileType: "png",
    category: "banner",
    dimensions: "8000x4500px",
    fileSize: "5.99MB",
  },
  /*{
    id: "manual-identidad",
    name: "Manual de Identidad Visual",
    description: "Documento completo con las normas de uso de la identidad visual de aCentauri.",
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
      "Archivo comprimido con todos los elementos de la identidad visual de aCentauri en diferentes formatos.",
    fileUrl: "/media-kit/kit-completo.zip",
    thumbnailUrl: "/placeholder.svg?height=200&width=200",
    fileType: "zip",
    category: "document",
    fileSize: "12.8MB",
  },*/
  {
    id: "foto-equipo-2025",
    name: "Foto Oficial del Equipo 2025",
    description: "Fotografía oficial del equipo aCentauri del año 2025 en alta resolución.",
    fileUrl: "/images/img-01.jpg",
    thumbnailUrl: "/images/img-01.jpg?height=200&width=300",
    fileType: "jpg",
    category: "photo",
    dimensions: "2331x1748px",
    fileSize: "451KB",
  },
]

