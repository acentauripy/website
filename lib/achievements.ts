export interface Achievement {
  id: string
  title: string
  description: string
  date: string
  category: "competencia" | "proyecto" | "academico" | "reconocimiento"
  image?: string
  location?: string
  team?: string[]
  link?: string
}

export const achievements: Achievement[] = [
  {
    id: "robocup-2023-third-place",
    title: "Tercer lugar en RoboCup 2023",
    description:
      "Obtuvimos el tercer lugar en la categoría de Robots de Rescate en la competencia internacional RoboCup 2023 celebrada en Bordeaux, Francia.",
    date: "2023-07-15",
    category: "competencia",
    image: "/placeholder.svg?height=400&width=600",
    location: "Bordeaux, Francia",
    team: ["Ana Martínez", "Carlos Gómez", "Martín López", "Laura Benítez"],
  },
  {
    id: "robocup-2023-innovation",
    title: "Premio a la Innovación Tecnológica en RoboCup 2023",
    description:
      "Nuestro enfoque en la integración de múltiples sensores y algoritmos de fusión de datos fue reconocido con el Premio a la Innovación Tecnológica.",
    date: "2023-07-15",
    category: "competencia",
    image: "/placeholder.svg?height=400&width=600",
    location: "Bordeaux, Francia",
    team: ["Ana Martínez", "Carlos Gómez", "Martín López", "Laura Benítez"],
  },
  {
    id: "ieee-larc-2023-first-place",
    title: "Primer lugar en IEEE LARC 2023",
    description:
      "Ganamos el primer lugar en la categoría Open Challenge de la IEEE Latin American Robotics Competition 2023 en Santiago, Chile.",
    date: "2023-11-10",
    category: "competencia",
    image: "/placeholder.svg?height=400&width=600",
    location: "Santiago, Chile",
    team: ["Ana Martínez", "Diego Fernández", "Sofía Rodríguez", "Martín López"],
  },
  {
    id: "ieee-larc-2023-best-design",
    title: "Premio al Mejor Diseño Mecánico en IEEE LARC 2023",
    description:
      "Nuestro robot manipulador con múltiples grados de libertad recibió el Premio al Mejor Diseño Mecánico por su innovadora estructura y eficiencia.",
    date: "2023-11-10",
    category: "competencia",
    image: "/placeholder.svg?height=400&width=600",
    location: "Santiago, Chile",
    team: ["Ana Martínez", "Diego Fernández", "Sofía Rodríguez", "Martín López"],
  },
  {
    id: "icpc-2023-silver",
    title: "Medalla de plata en ICPC 2023",
    description:
      "Obtuvimos la medalla de plata en la fase regional del International Collegiate Programming Contest 2023.",
    date: "2023-05-20",
    category: "competencia",
    image: "/placeholder.svg?height=400&width=600",
    location: "Dhaka, Bangladesh",
    team: ["Diego Fernández", "Carlos Gómez", "Sofía Rodríguez"],
  },
  {
    id: "nasa-space-apps-2022-global-finalist",
    title: "Finalistas Globales en NASA Space Apps Challenge 2022",
    description:
      "Nuestro proyecto 'Planetary Lander' fue seleccionado como finalista global en el hackathon internacional NASA Space Apps Challenge 2022.",
    date: "2022-10-01",
    category: "competencia",
    image: "/placeholder.svg?height=400&width=600",
    location: "Evento Global (Participación Local)",
    team: ["Carlos Gómez", "Ana Martínez", "Diego Fernández", "Laura Benítez"],
  },
  {
    id: "nasa-space-apps-2022-local-winner",
    title: "Ganadores Locales en NASA Space Apps Challenge 2022",
    description:
      "Nuestro equipo fue seleccionado como el mejor proyecto local en el NASA Space Apps Challenge 2022, lo que nos permitió avanzar a la fase global.",
    date: "2022-10-01",
    category: "competencia",
    image: "/placeholder.svg?height=400&width=600",
    location: "Asunción, Paraguay",
    team: ["Carlos Gómez", "Ana Martínez", "Diego Fernández", "Laura Benítez"],
  },
  {
    id: "hackathon-innovacion-social-2022",
    title: "Primer Lugar en Hackathon de Innovación Social 2022",
    description:
      "Nuestro proyecto 'EduBox' ganó el primer lugar en el Hackathon de Innovación Social 2022 por su potencial para reducir la brecha educativa en zonas rurales.",
    date: "2022-08-15",
    category: "competencia",
    image: "/placeholder.svg?height=400&width=600",
    location: "Asunción, Paraguay",
    team: ["Laura Benítez", "Sofía Rodríguez", "Martín López", "Diego Fernández"],
  },
  {
    id: "hackathon-innovacion-social-2022-innovation",
    title: "Premio a la Innovación Tecnológica en Hackathon de Innovación Social 2022",
    description:
      "Además del primer lugar, nuestro proyecto 'EduBox' recibió el Premio a la Innovación Tecnológica por su enfoque creativo y viable.",
    date: "2022-08-15",
    category: "competencia",
    image: "/placeholder.svg?height=400&width=600",
    location: "Asunción, Paraguay",
    team: ["Laura Benítez", "Sofía Rodríguez", "Martín López", "Diego Fernández"],
  },
  {
    id: "icra-2022-best-paper",
    title: "Best Paper Award en ICRA 2022",
    description:
      "Nuestro paper 'Autonomous Exploration and Mapping of Unknown Environments using Reinforcement Learning' recibió el Best Paper Award en la sesión de Robótica Móvil de la IEEE International Conference on Robotics and Automation 2022.",
    date: "2022-05-23",
    category: "academico",
    image: "/placeholder.svg?height=400&width=600",
    location: "Philadelphia, Estados Unidos",
    team: ["Ana Martínez", "Carlos Gómez", "Martín López"],
  },
  {
    id: "acm-icpc-2022-third-place",
    title: "Tercer lugar en ACM ICPC 2022",
    description:
      "Obtuvimos el tercer lugar en la fase regional del ACM International Collegiate Programming Contest 2022.",
    date: "2022-11-05",
    category: "competencia",
    image: "/placeholder.svg?height=400&width=600",
    location: "Buenos Aires, Argentina",
    team: ["Diego Fernández", "Carlos Gómez", "Sofía Rodríguez"],
  },
  {
    id: "robotica-latinoamericana-2021-second-place",
    title: "Segundo lugar en Competencia Latinoamericana de Robótica 2021",
    description:
      "Obtuvimos el segundo lugar en la categoría de Robots Seguidores de Línea en la Competencia Latinoamericana de Robótica 2021.",
    date: "2021-09-18",
    category: "competencia",
    image: "/placeholder.svg?height=400&width=600",
    location: "Montevideo, Uruguay",
    team: ["Ana Martínez", "Martín López", "Laura Benítez"],
  },
  {
    id: "reconocimiento-fiuna-2023",
    title: "Reconocimiento de Excelencia FIUNA 2023",
    description:
      "La Facultad de Ingeniería de la Universidad Nacional de Asunción nos otorgó el Reconocimiento de Excelencia por nuestras contribuciones a la investigación y representación internacional.",
    date: "2023-12-10",
    category: "reconocimiento",
    image: "/placeholder.svg?height=400&width=600",
    location: "San Lorenzo, Paraguay",
  },
  {
    id: "mencion-ministerio-educacion-2022",
    title: "Mención Honorífica del Ministerio de Educación 2022",
    description:
      "Recibimos una Mención Honorífica del Ministerio de Educación y Ciencias por nuestro aporte a la innovación tecnológica en Paraguay.",
    date: "2022-12-05",
    category: "reconocimiento",
    image: "/placeholder.svg?height=400&width=600",
    location: "Asunción, Paraguay",
  },
  {
    id: "proyecto-destacado-conacyt-2023",
    title: "Proyecto Destacado CONACYT 2023",
    description:
      "Nuestro proyecto de robot autónomo para exploración de entornos desconocidos fue seleccionado como Proyecto Destacado por el Consejo Nacional de Ciencia y Tecnología (CONACYT).",
    date: "2023-06-20",
    category: "proyecto",
    image: "/placeholder.svg?height=400&width=600",
    location: "Asunción, Paraguay",
    team: ["Ana Martínez", "Carlos Gómez", "Laura Benítez"],
  },
]

