export interface Project {
  title: string
  slug: string
  excerpt: string
  content: string[]
  coverImage: string
  date: string
  category: string
  technologies: string[]
  team: string[]
}

export const projects: Project[] = [
  {
    title: "Appsteroids: Orrery Digital de NEOs",
    slug: "appsteroids-orrery-neos",
    excerpt: "Un orrery digital interactivo para visualizar y analizar la trayectoria de NEOs (Objetos Cercanos a la Tierra) en tiempo real.",
    content: [
      "Appsteroids es un orrery digital diseñado para la visualización interactiva de NEOs (Objetos Cercanos a la Tierra), incluyendo asteroides y cometas. Su objetivo es permitir a los usuarios explorar sus órbitas en el Sistema Solar de manera intuitiva y detallada.",
      "El proyecto fue desarrollado como parte del NASA Space Apps Challenge 2024, obteniendo el primer lugar a nivel local y destacando en el Top 40 global entre miles de equipos participantes.",
      "La aplicación utiliza datos orbitales reales de agencias espaciales para representar con precisión la trayectoria de estos objetos. Implementa gráficos en 3D mediante tecnologías como WebGL y Three.js, permitiendo una navegación fluida y una experiencia inmersiva.",
      "Además de la representación visual, Appsteroids incorpora herramientas analíticas para estudiar la evolución de las órbitas, su proximidad a la Tierra y eventos astronómicos relevantes. Actualmente, el proyecto se encuentra en fase de mejora, con planes de integrar bases de datos en tiempo real y funcionalidades adicionales para científicos y entusiastas de la astronomía.",
    ],
    coverImage: "/media-kit/appsteroids_banner.png?height=500&width=800",
    date: "2024-10-06",
    category: "Simulación",
    technologies: ["WebGL", "Three.js", "JavaScript", "Python", "NASA Horizons API"],
    team: ["David Giménez", "Oscar Alderete", "Esteban Ibarra", "Gabriel Park", "José Hellión"],
  },
  {
    title: "Moonquake Map: Visualización de Lunamotos",
    slug: "moonquake-map-lunamotos",
    excerpt: "Plataforma interactiva para visualizar y analizar lunamotos utilizando datos de agencias espaciales y misiones lunares.",
    content: [
      "Moonquake Map es una herramienta de visualización interactiva diseñada para representar y analizar lunamotos en la superficie lunar. Utiliza datos recopilados por misiones espaciales y agencias como la NASA y la ESA, proporcionando una visión detallada de la actividad sísmica en la Luna.",
      "El proyecto permite a los usuarios explorar un mapa lunar con eventos sísmicos históricos y recientes, clasificados según su magnitud y profundidad. También ofrece modelos analíticos que ayudan a comprender las causas y patrones de los lunamotos.",
      "La plataforma se basa en tecnologías de geovisualización y modelado de datos en tiempo real. Implementa WebGL y D3.js para la representación gráfica, mientras que los datos sísmicos provienen de bases científicas como las del Apollo Passive Seismic Experiment.",
      "Moonquake Map tiene aplicaciones tanto en la investigación como en la educación, ayudando a científicos, estudiantes y entusiastas de la astronomía a comprender mejor la dinámica interna de la Luna. Actualmente, el proyecto está en desarrollo para integrar modelos predictivos y mejorar la resolución de los datos visualizados.",
    ],
    coverImage: "/images/moonquake-map.png?height=500&width=800",
    date: "2022-10-03",
    category: "Simulación",
    technologies: ["WebGL", "D3.js", "JavaScript", "Python", "NASA PDS API"],
    team: ["David Giménez", "Oscar Alderete", "Esteban Ibarra", "Juan Rojas"],
  },
  
  /*{
    title: "Robot Autónomo de Exploración",
    slug: "robot-autonomo-exploracion",
    excerpt: "Desarrollo de un robot autónomo capaz de explorar y mapear entornos desconocidos.",
    content: [
      "El Robot Autónomo de Exploración es uno de nuestros proyectos más ambiciosos en el área de robótica. Este robot está diseñado para explorar y mapear entornos desconocidos de forma autónoma, utilizando sensores avanzados y algoritmos de inteligencia artificial.",
      "El robot cuenta con un sistema de navegación basado en SLAM (Simultaneous Localization and Mapping), que le permite construir un mapa del entorno mientras se localiza en él. Además, utiliza algoritmos de planificación de rutas para moverse de forma eficiente y evitar obstáculos.",
      "El proyecto ha sido desarrollado utilizando ROS (Robot Operating System) como plataforma de software, lo que nos ha permitido integrar fácilmente diferentes componentes y algoritmos. El hardware incluye sensores LiDAR, cámaras estereoscópicas y sensores ultrasónicos para la detección de obstáculos.",
      "Este robot tiene aplicaciones en diversos campos, como la exploración de entornos peligrosos, la búsqueda y rescate, y la inspección de infraestructuras. Actualmente, estamos trabajando en mejorar su autonomía energética y su capacidad para adaptarse a diferentes tipos de terreno.",
    ],
    coverImage: "/placeholder.svg?height=500&width=800",
    date: "2023-05-15",
    category: "Robótica",
    technologies: ["ROS", "Python", "C++", "SLAM", "Computer Vision"],
    team: ["Ana Martínez", "Carlos Gómez", "Laura Benítez"],
  },
  {
    title: "Sistema de Reconocimiento Facial",
    slug: "sistema-reconocimiento-facial",
    excerpt: "Implementación de un sistema de reconocimiento facial utilizando técnicas de deep learning.",
    content: [
      "El Sistema de Reconocimiento Facial es un proyecto que utiliza técnicas avanzadas de deep learning para identificar y verificar la identidad de personas a partir de imágenes o videos. Este sistema ha sido desarrollado como parte de nuestras investigaciones en el campo de la inteligencia artificial y la visión por computadora.",
      "El sistema utiliza redes neuronales convolucionales (CNN) para extraer características faciales y compararlas con una base de datos de rostros conocidos. Hemos implementado técnicas de data augmentation para mejorar la robustez del modelo frente a variaciones en la iluminación, el ángulo y la expresión facial.",
      "Una de las principales preocupaciones durante el desarrollo ha sido la privacidad y la ética en el uso de esta tecnología. Por ello, hemos implementado medidas de seguridad para proteger los datos biométricos y garantizar que el sistema se utilice de forma responsable.",
      "El proyecto ha sido desarrollado utilizando TensorFlow y PyTorch como frameworks de deep learning, y OpenCV para el procesamiento de imágenes. Actualmente, estamos trabajando en mejorar la precisión del sistema en condiciones de baja iluminación y con oclusiones parciales del rostro.",
    ],
    coverImage: "/placeholder.svg?height=500&width=800",
    date: "2023-03-10",
    category: "IA",
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV", "Deep Learning"],
    team: ["Carlos Gómez", "Sofía Rodríguez", "Diego Fernández"],
  },
  {
    title: "Sistema de Automatización Industrial",
    slug: "sistema-automatizacion-industrial",
    excerpt: "Desarrollo de un sistema de automatización para procesos industriales utilizando PLC y SCADA.",
    content: [
      "El Sistema de Automatización Industrial es un proyecto que busca optimizar y automatizar procesos industriales utilizando tecnologías como PLC (Programmable Logic Controller) y SCADA (Supervisory Control and Data Acquisition). Este sistema ha sido desarrollado en colaboración con empresas locales para mejorar la eficiencia y reducir los costos operativos.",
      "El sistema incluye una interfaz de usuario intuitiva que permite monitorear y controlar los procesos en tiempo real, así como generar informes y estadísticas sobre el rendimiento. Además, hemos implementado algoritmos de mantenimiento predictivo que utilizan técnicas de machine learning para detectar posibles fallos antes de que ocurran.",
      "La arquitectura del sistema está basada en un modelo cliente-servidor, donde los PLCs se comunican con un servidor central que procesa y almacena los datos. Los clientes pueden acceder a esta información a través de una aplicación web o móvil, lo que permite una supervisión remota de los procesos.",
      "Este proyecto ha sido desarrollado utilizando tecnologías como Siemens S7, WinCC para SCADA, y Node.js para la aplicación web. Actualmente, estamos trabajando en integrar tecnologías de IoT (Internet of Things) para mejorar la conectividad y la recopilación de datos.",
    ],
    coverImage: "/placeholder.svg?height=500&width=800",
    date: "2022-11-20",
    category: "Automatización",
    technologies: ["PLC", "SCADA", "Node.js", "SQL", "IoT"],
    team: ["Martín López", "Laura Benítez", "Diego Fernández"],
  },
  {
    title: "Aplicación de Gestión Académica",
    slug: "aplicacion-gestion-academica",
    excerpt: "Desarrollo de una aplicación web para la gestión académica de instituciones educativas.",
    content: [
      "La Aplicación de Gestión Académica es un proyecto de desarrollo de software que busca facilitar la administración de instituciones educativas. Esta aplicación permite gestionar estudiantes, profesores, cursos, calificaciones y asistencias, así como generar informes y estadísticas sobre el rendimiento académico.",
      "La aplicación cuenta con diferentes módulos que se adaptan a las necesidades específicas de cada institución. Entre ellos se encuentran: gestión de usuarios, gestión de cursos, calificaciones, asistencias, horarios, comunicaciones y reportes. Cada módulo ha sido diseñado pensando en la usabilidad y la eficiencia.",
      "Hemos implementado una arquitectura basada en microservicios, lo que nos permite escalar cada componente de forma independiente y facilitar el mantenimiento. Además, hemos utilizado técnicas de desarrollo ágil para adaptarnos rápidamente a los cambios en los requisitos y entregar valor de forma continua.",
      "Este proyecto ha sido desarrollado utilizando tecnologías como React para el frontend, Node.js y Express para el backend, y MongoDB como base de datos. Actualmente, estamos trabajando en implementar funcionalidades de análisis de datos para ayudar a las instituciones a tomar decisiones basadas en evidencia.",
    ],
    coverImage: "/placeholder.svg?height=500&width=800",
    date: "2022-08-05",
    category: "Software",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Docker"],
    team: ["Diego Fernández", "Sofía Rodríguez", "Ana Martínez"],
  },
  {
    title: "Dron de Monitoreo Ambiental",
    slug: "dron-monitoreo-ambiental",
    excerpt: "Desarrollo de un dron equipado con sensores para el monitoreo de variables ambientales.",
    content: [
      "El Dron de Monitoreo Ambiental es un proyecto que combina robótica y sensores para el monitoreo de variables ambientales como temperatura, humedad, calidad del aire y radiación UV. Este dron ha sido diseñado para realizar mediciones en áreas de difícil acceso o donde se requiere un monitoreo continuo.",
      "El dron está equipado con múltiples sensores que recopilan datos en tiempo real y los transmiten a una estación base para su análisis. Además, cuenta con una cámara de alta resolución que permite capturar imágenes y videos del área monitoreada, lo que facilita la identificación de problemas ambientales.",
      "Hemos desarrollado un software específico para la planificación de misiones, que permite definir rutas de vuelo y puntos de interés donde el dron realizará mediciones. Este software también incluye herramientas para el análisis de los datos recopilados y la generación de informes.",
      "Este proyecto ha sido desarrollado utilizando tecnologías como Arduino para el control de los sensores, ROS para la navegación autónoma, y Python para el procesamiento de datos. Actualmente, estamos trabajando en mejorar la autonomía de vuelo y la precisión de los sensores.",
    ],
    coverImage: "/placeholder.svg?height=500&width=800",
    date: "2023-02-18",
    category: "Robótica",
    technologies: ["Arduino", "ROS", "Python", "IoT", "Sensores"],
    team: ["Ana Martínez", "Martín López", "Carlos Gómez"],
  },
  {
    title: "Asistente Virtual con Procesamiento de Lenguaje Natural",
    slug: "asistente-virtual-nlp",
    excerpt: "Desarrollo de un asistente virtual capaz de entender y responder a consultas en lenguaje natural.",
    content: [
      "El Asistente Virtual con Procesamiento de Lenguaje Natural es un proyecto que utiliza técnicas avanzadas de NLP (Natural Language Processing) para entender y responder a consultas en lenguaje natural. Este asistente ha sido diseñado para facilitar la interacción entre humanos y máquinas, permitiendo una comunicación más natural y eficiente.",
      "El asistente utiliza modelos de lenguaje basados en transformers, como BERT y GPT, para comprender el contexto y la intención detrás de las consultas. Además, hemos implementado técnicas de aprendizaje por refuerzo para mejorar continuamente la calidad de las respuestas basándose en la retroalimentación de los usuarios.",
      "Una de las características más destacadas del asistente es su capacidad para adaptarse a diferentes dominios de conocimiento. Hemos desarrollado un sistema de plugins que permite integrar fácilmente nuevas fuentes de información y funcionalidades, lo que hace que el asistente sea altamente personalizable.",
      "Este proyecto ha sido desarrollado utilizando tecnologías como Python, TensorFlow, Hugging Face Transformers y FastAPI. Actualmente, estamos trabajando en mejorar la comprensión de consultas complejas y la generación de respuestas más naturales y coherentes.",
    ],
    coverImage: "/placeholder.svg?height=500&width=800",
    date: "2023-04-30",
    category: "IA",
    technologies: ["Python", "TensorFlow", "Hugging Face", "FastAPI", "NLP"],
    team: ["Carlos Gómez", "Sofía Rodríguez", "Diego Fernández"],
  },
  {
    title: "Sistema de Control de Acceso Inteligente",
    slug: "sistema-control-acceso-inteligente",
    excerpt: "Implementación de un sistema de control de acceso utilizando reconocimiento biométrico y RFID.",
    content: [
      "El Sistema de Control de Acceso Inteligente es un proyecto que combina tecnologías de reconocimiento biométrico, RFID (Radio Frequency Identification) y IoT para proporcionar un control de acceso seguro y eficiente. Este sistema ha sido diseñado para ser utilizado en edificios, oficinas y áreas restringidas donde se requiere un alto nivel de seguridad.",
      "El sistema utiliza múltiples factores de autenticación, como huellas dactilares, reconocimiento facial y tarjetas RFID, lo que proporciona un nivel adicional de seguridad. Además, hemos implementado un sistema de registro de accesos que permite monitorear quién ha entrado y salido de cada área, así como generar alertas en caso de accesos no autorizados.",
      "La arquitectura del sistema está basada en un modelo distribuido, donde cada punto de acceso cuenta con su propio controlador que se comunica con un servidor central. Esto permite que el sistema siga funcionando incluso si la conexión con el servidor se pierde temporalmente.",
      "Este proyecto ha sido desarrollado utilizando tecnologías como Arduino para el control de hardware, Node.js para el servidor central, y MongoDB para el almacenamiento de datos. Actualmente, estamos trabajando en implementar algoritmos de detección de anomalías para identificar patrones de acceso sospechosos y prevenir intrusiones.",
    ],
    coverImage: "/placeholder.svg?height=500&width=800",
    date: "2022-09-12",
    category: "Automatización",
    technologies: ["Arduino", "RFID", "Node.js", "MongoDB", "IoT"],
    team: ["Martín López", "Ana Martínez", "Laura Benítez"],
  },
  {
    title: "Plataforma de E-learning",
    slug: "plataforma-elearning",
    excerpt: "Desarrollo de una plataforma de e-learning con funcionalidades de aprendizaje adaptativo.",
    content: [
      "La Plataforma de E-learning es un proyecto de desarrollo de software que busca facilitar el aprendizaje en línea mediante una plataforma intuitiva y adaptativa. Esta plataforma permite a los instructores crear y gestionar cursos, mientras que los estudiantes pueden acceder a los contenidos y realizar actividades de forma interactiva.",
      "Una de las características más destacadas de la plataforma es su sistema de aprendizaje adaptativo, que utiliza algoritmos de inteligencia artificial para personalizar la experiencia de aprendizaje según las necesidades y el progreso de cada estudiante. Esto permite que cada usuario avance a su propio ritmo y reciba recomendaciones de contenido basadas en sus fortalezas y debilidades.",
      "La plataforma incluye diversas herramientas para la creación de contenido, como editores de texto enriquecido, herramientas para la creación de cuestionarios y evaluaciones, y la posibilidad de integrar contenido multimedia. Además, hemos implementado funcionalidades de gamificación para aumentar la motivación y el compromiso de los estudiantes.",
      "Este proyecto ha sido desarrollado utilizando tecnologías como React para el frontend, Django para el backend, y PostgreSQL como base de datos. Actualmente, estamos trabajando en implementar funcionalidades de análisis de aprendizaje (learning analytics) para proporcionar insights sobre el proceso de aprendizaje y ayudar a los instructores a mejorar sus cursos.",
    ],
    coverImage: "/placeholder.svg?height=500&width=800",
    date: "2022-07-25",
    category: "Software",
    technologies: ["React", "Django", "PostgreSQL", "Docker", "AWS"],
    team: ["Diego Fernández", "Sofía Rodríguez", "Carlos Gómez"],
  },*/
]

