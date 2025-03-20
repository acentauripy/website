export interface Competition {
  title: string
  slug: string
  excerpt: string
  content: string[]
  coverImage: string
  date: string
  location: string
  team: string[]
  awards?: string[]
}

export const competitions: Competition[] = [
/*  {
    title: "RoboCup 2023",
    slug: "robocup-2023",
    excerpt: "Participación en la competencia internacional de robótica RoboCup en la categoría de robots de rescate.",
    content: [
      "RoboCup es una de las competencias de robótica más prestigiosas a nivel mundial, y en 2023 tuvimos el honor de representar a FIUNA en la categoría de robots de rescate. Esta competencia desafía a los equipos a desarrollar robots autónomos capaces de navegar en entornos de desastre simulados y localizar víctimas.",
      "Nuestro equipo trabajó durante meses en el diseño y desarrollo de un robot autónomo equipado con sensores avanzados y algoritmos de inteligencia artificial para la detección de víctimas y la navegación en entornos complejos. El robot contaba con cámaras térmicas, sensores de gas, y un sistema de locomoción capaz de superar diversos obstáculos.",
      "Durante la competencia, enfrentamos diversos desafíos, desde problemas técnicos de última hora hasta la adaptación a las condiciones específicas del campo de pruebas. Sin embargo, gracias al trabajo en equipo y a la preparación previa, logramos superar estos obstáculos y obtener un desempeño destacado.",
      "La experiencia en RoboCup 2023 no solo nos permitió poner a prueba nuestras habilidades técnicas, sino también aprender de otros equipos y establecer contactos con investigadores y estudiantes de todo el mundo. Regresamos con nuevas ideas y motivación para seguir mejorando nuestros proyectos de robótica.",
    ],
    coverImage: "/placeholder.svg?height=500&width=800",
    date: "2023-07-15",
    location: "Bordeaux, Francia",
    team: ["Ana Martínez", "Carlos Gómez", "Martín López", "Laura Benítez"],
    awards: ["Tercer lugar en la categoría de Robots de Rescate", "Premio a la Innovación Tecnológica"],
  },
  {
    title: "IEEE Latin American Robotics Competition 2023",
    slug: "ieee-larc-2023",
    excerpt: "Participación en la competencia de robótica organizada por IEEE para universidades de América Latina.",
    content: [
      "La IEEE Latin American Robotics Competition (LARC) es una de las competencias más importantes de robótica en América Latina, y en 2023 tuvimos la oportunidad de participar representando a FIUNA. Esta competencia reúne a equipos universitarios de toda la región para enfrentar desafíos que combinan robótica, inteligencia artificial y automatización.",
      "Nuestro equipo participó en la categoría de 'Open Challenge', donde debíamos desarrollar un robot capaz de realizar tareas específicas en un entorno industrial simulado. Diseñamos y construimos un robot manipulador con múltiples grados de libertad, controlado por un sistema basado en ROS (Robot Operating System) y equipado con visión por computadora para la detección y manipulación de objetos.",
      "La preparación para esta competencia fue intensa, con meses de trabajo en el diseño mecánico, la programación del control y la integración de los sistemas de percepción. Realizamos numerosas pruebas y simulaciones para asegurarnos de que el robot pudiera enfrentar los desafíos de la competencia con éxito.",
      "Durante el evento, tuvimos la oportunidad de intercambiar conocimientos con otros equipos y asistir a conferencias y talleres sobre temas avanzados de robótica. Esta experiencia nos permitió no solo mejorar nuestras habilidades técnicas, sino también establecer contactos y colaboraciones con estudiantes e investigadores de otras universidades de la región.",
    ],
    coverImage: "/placeholder.svg?height=500&width=800",
    date: "2023-11-10",
    location: "Santiago, Chile",
    team: ["Ana Martínez", "Diego Fernández", "Sofía Rodríguez", "Martín López"],
    awards: ["Primer lugar en la categoría Open Challenge", "Premio al Mejor Diseño Mecánico"],
  },
  {
    title: "International Collegiate Programming Contest 2023",
    slug: "icpc-2023",
    excerpt: "Participación en la competencia internacional de programación para estudiantes universitarios.",
    content: [
      "El International Collegiate Programming Contest (ICPC) es la competencia de programación más prestigiosa a nivel mundial para estudiantes universitarios, y en 2023 tuvimos el honor de representar a FIUNA en este evento. Esta competencia desafía a los equipos a resolver problemas complejos de algoritmos y estructuras de datos en un tiempo limitado.",
      "Nuestro equipo, compuesto por tres estudiantes con habilidades complementarias en programación competitiva, se preparó durante meses para esta competencia. Realizamos entrenamientos semanales, resolviendo problemas de competencias anteriores y participando en contests en línea para mejorar nuestras habilidades de resolución de problemas y trabajo en equipo.",
      "Durante la competencia, enfrentamos 12 problemas de diversa dificultad, que abarcaban temas como grafos, programación dinámica, geometría computacional y estructuras de datos avanzadas. A pesar de la presión del tiempo y la complejidad de los problemas, logramos resolver 8 de ellos, lo que nos posicionó entre los mejores equipos de nuestra región.",
      "La experiencia en el ICPC no solo nos permitió poner a prueba nuestras habilidades de programación, sino también aprender nuevas técnicas y enfoques para la resolución de problemas. Además, tuvimos la oportunidad de conocer a estudiantes de todo el mundo y establecer contactos que podrían llevar a futuras colaboraciones académicas y profesionales.",
    ],
    coverImage: "/placeholder.svg?height=500&width=800",
    date: "2023-05-20",
    location: "Dhaka, Bangladesh",
    team: ["Diego Fernández", "Carlos Gómez", "Sofía Rodríguez"],
    awards: ["Medalla de plata en la fase regional"],
  },
  {
    title: "NASA Space Apps Challenge 2022",
    slug: "nasa-space-apps-2022",
    excerpt:
      "Participación en el hackathon internacional organizado por la NASA para desarrollar soluciones a desafíos espaciales.",
    content: [
      "El NASA Space Apps Challenge es el hackathon internacional más grande del mundo, donde equipos de todo el planeta trabajan durante 48 horas para desarrollar soluciones a desafíos relacionados con la exploración espacial y la mejora de la vida en la Tierra. En 2022, tuvimos la oportunidad de participar en este evento representando a FIUNA.",
      "Nuestro equipo eligió el desafío 'Planetary Lander', que consistía en desarrollar un sistema de aterrizaje autónomo para misiones planetarias. Diseñamos un algoritmo de control basado en aprendizaje por refuerzo que optimizaba la trayectoria de descenso y el consumo de combustible, utilizando datos de sensores simulados para ajustar la maniobra de aterrizaje en tiempo real.",
      "Durante las 48 horas del hackathon, trabajamos intensamente en el desarrollo del algoritmo, la implementación del simulador y la preparación de la presentación final. A pesar del poco tiempo disponible, logramos crear un prototipo funcional que demostraba la viabilidad de nuestra solución y sus ventajas sobre los métodos tradicionales de control de aterrizaje.",
      "Nuestra participación en el NASA Space Apps Challenge fue una experiencia enriquecedora que nos permitió aplicar nuestros conocimientos de ingeniería a problemas reales de la exploración espacial. Además, tuvimos la oportunidad de recibir retroalimentación de expertos de la NASA y establecer contactos con otros equipos apasionados por la ciencia y la tecnología espacial.",
    ],
    coverImage: "/placeholder.svg?height=500&width=800",
    date: "2022-10-01",
    location: "Evento Global (Participación Local)",
    team: ["Carlos Gómez", "Ana Martínez", "Diego Fernández", "Laura Benítez"],
    awards: ["Finalistas Globales", "Ganadores Locales"],
  },
  {
    title: "Hackathon de Innovación Social 2022",
    slug: "hackathon-innovacion-social-2022",
    excerpt:
      "Participación en un hackathon enfocado en desarrollar soluciones tecnológicas para problemas sociales en Paraguay.",
    content: [
      "El Hackathon de Innovación Social es un evento que busca promover el desarrollo de soluciones tecnológicas para problemas sociales relevantes en Paraguay. En 2022, participamos en este evento con el objetivo de aplicar nuestros conocimientos de ingeniería para generar un impacto positivo en nuestra comunidad.",
      "Nuestro equipo abordó el desafío de mejorar el acceso a la educación en zonas rurales con conectividad limitada. Desarrollamos 'EduBox', un sistema de bajo costo que combina hardware y software para crear una red local de contenidos educativos que puede funcionar sin conexión a internet, pero que se actualiza automáticamente cuando hay conectividad disponible.",
      "Durante las 36 horas del hackathon, trabajamos en el desarrollo del prototipo, que incluía un servidor Raspberry Pi con contenidos educativos preinstalados, una aplicación web para acceder a estos contenidos, y un sistema de sincronización para actualizar los materiales cuando se dispone de conexión a internet. Además, diseñamos un plan de implementación y sostenibilidad para el proyecto.",
      "Nuestra solución fue reconocida por su potencial para reducir la brecha educativa en zonas rurales, y recibimos el primer premio del hackathon. Más allá del reconocimiento, lo más valioso de esta experiencia fue la oportunidad de aplicar nuestras habilidades técnicas para abordar un problema social relevante y contribuir al desarrollo de nuestra comunidad.",
    ],
    coverImage: "/placeholder.svg?height=500&width=800",
    date: "2022-08-15",
    location: "Asunción, Paraguay",
    team: ["Laura Benítez", "Sofía Rodríguez", "Martín López", "Diego Fernández"],
    awards: ["Primer Lugar", "Premio a la Innovación Tecnológica"],
  },
  {
    title: "IEEE International Conference on Robotics and Automation 2022",
    slug: "icra-2022",
    excerpt:
      "Participación en la conferencia internacional de robótica y automatización con un paper sobre nuestro proyecto de robot autónomo.",
    content: [
      "La IEEE International Conference on Robotics and Automation (ICRA) es una de las conferencias más prestigiosas en el campo de la robótica y la automatización. En 2022, tuvimos la oportunidad de participar en este evento presentando un paper sobre nuestro proyecto de robot autónomo para exploración de entornos desconocidos.",
      "Nuestro paper, titulado 'Autonomous Exploration and Mapping of Unknown Environments using Reinforcement Learning', presentaba un enfoque novedoso para la exploración autónoma basado en técnicas de aprendizaje por refuerzo. El algoritmo propuesto permitía al robot tomar decisiones sobre qué áreas explorar basándose en la incertidumbre del mapa y la potencial ganancia de información.",
      "La preparación para esta conferencia implicó un riguroso proceso de investigación, experimentación y redacción del paper. Realizamos numerosos experimentos para validar nuestro enfoque y compararlo con métodos existentes, y trabajamos en la presentación para comunicar efectivamente nuestros resultados a la comunidad científica.",
      "Durante la conferencia, tuvimos la oportunidad de presentar nuestro trabajo ante investigadores y profesionales de todo el mundo, recibir retroalimentación valiosa y establecer contactos con grupos de investigación que trabajan en temas similares. Esta experiencia no solo validó nuestro trabajo a nivel internacional, sino que también nos abrió puertas para futuras colaboraciones y proyectos de investigación.",
    ],
    coverImage: "/placeholder.svg?height=500&width=800",
    date: "2022-05-23",
    location: "Philadelphia, Estados Unidos",
    team: ["Ana Martínez", "Carlos Gómez", "Martín López"],
    awards: ["Best Paper Award en la sesión de Robótica Móvil"],
  },
  {
    title: "ACM International Collegiate Programming Contest 2022",
    slug: "acm-icpc-2022",
    excerpt:
      "Participación en la fase regional de la competencia internacional de programación para estudiantes universitarios.",
    content: [
      "El ACM International Collegiate Programming Contest (ICPC) es una competencia de programación de alto nivel para estudiantes universitarios. En 2022, participamos en la fase regional de esta competencia, representando a FIUNA y poniendo a prueba nuestras habilidades de resolución de problemas y programación.",
      "Nuestro equipo, compuesto por tres estudiantes con diferentes fortalezas en algoritmos y estructuras de datos, se preparó durante meses para esta competencia. Realizamos entrenamientos semanales, resolviendo problemas de competencias anteriores y participando en contests en línea para mejorar nuestra velocidad y precisión en la resolución de problemas.",
      "Durante la competencia, enfrentamos 10 problemas que abarcaban temas como grafos, programación dinámica, matemáticas y estructuras de datos avanzadas. Trabajamos en equipo para analizar los problemas, diseñar algoritmos eficientes y implementar soluciones correctas en el menor tiempo posible.",
      "A pesar de la intensa competencia, logramos resolver 7 problemas, lo que nos posicionó entre los mejores equipos de nuestra región. Esta experiencia no solo nos permitió mejorar nuestras habilidades técnicas, sino también fortalecer nuestro trabajo en equipo y nuestra capacidad para resolver problemas bajo presión, habilidades que son fundamentales tanto en competencias como en el ámbito profesional.",
    ],
    coverImage: "/placeholder.svg?height=500&width=800",
    date: "2022-11-05",
    location: "Buenos Aires, Argentina",
    team: ["Diego Fernández", "Carlos Gómez", "Sofía Rodríguez"],
    awards: ["Tercer lugar en la fase regional"],
  },
  {
    title: "Competencia Latinoamericana de Robótica 2021",
    slug: "competencia-latinoamericana-robotica-2021",
    excerpt:
      "Participación en la competencia de robótica para universidades de América Latina en la categoría de robots seguidores de línea.",
    content: [
      "La Competencia Latinoamericana de Robótica es un evento que reúne a estudiantes universitarios de toda América Latina para competir en diversas categorías de robótica. En 2021, participamos en la categoría de robots seguidores de línea, donde el objetivo era diseñar y construir un robot capaz de seguir un circuito marcado en el suelo en el menor tiempo posible.",
      "Nuestro equipo diseñó un robot compacto y eficiente, equipado con sensores infrarrojos para detectar la línea y un sistema de control PID para ajustar la velocidad de los motores en tiempo real. Además, implementamos algoritmos para optimizar la trayectoria en curvas y cruces, lo que nos permitió reducir significativamente el tiempo de recorrido.",
      "La preparación para esta competencia implicó numerosas horas de diseño, construcción y pruebas. Realizamos ajustes constantes en el hardware y el software del robot para mejorar su rendimiento, y simulamos diferentes tipos de circuitos para asegurarnos de que pudiera enfrentar cualquier desafío durante la competencia.",
      "Durante el evento, nuestro robot demostró un excelente desempeño, completando los circuitos con precisión y rapidez. Esta experiencia nos permitió aplicar conocimientos de electrónica, control automático y programación en un proyecto práctico, y nos motivó a seguir mejorando nuestras habilidades en el campo de la robótica.",
    ],
    coverImage: "/placeholder.svg?height=500&width=800",
    date: "2021-09-18",
    location: "Montevideo, Uruguay",
    team: ["Ana Martínez", "Martín López", "Laura Benítez"],
    awards: ["Segundo lugar en la categoría de Robots Seguidores de Línea"],
  },*/
]

