import { list, TBD } from "@/lib/content";
import type { Project, ProjectCategory, ProjectSummary } from "./types";

export const projectCategories: ("Todos" | ProjectCategory)[] = [
  "Todos",
  "Diseño instruccional",
  "Tecnología & Programación",
  "Educación & STEM",
  "Colaboraciones",
];

/**
 * Fuente única de verdad de los proyectos. Para publicar información nueva basta
 * con sustituir el valor `TBD` del campo correspondiente o añadir la URL de un
 * enlace: la página del caso de estudio se ajusta sola.
 */
export const projects: Project[] = [
  {
    slug: "ingenieria-de-prompts",
    title: "Ingeniería de Prompts en 15 Minutos",
    category: ["Diseño instruccional", "Educación & STEM"],
    categoryLabel: "Diseño instruccional / Microlearning",
    shortDescription:
      "Mini-curso de microlearning para estudiantes de bachillerato: cómo pedir a la IA de forma estructurada, en unos 15 minutos, con práctica y evaluación.",
    featured: true,
    tags: ["Diseño instruccional", "Educación & STEM"],
    role: ["Diseñadora instruccional", "Directora de producto"],
    roleDescription:
      "Actué como diseñadora instruccional y directora de producto de principio a fin: definí la audiencia y el tema, seleccioné y justifiqué el modelo pedagógico, diseñé la arquitectura completa del contenido lección por lección, dirigí el sistema visual y escribí los guiones de video. La construcción técnica se hizo con instrucciones estructuradas en capas (tecnología, sistema de diseño y contenido) en lugar de una sola especificación ambigua: el mismo tipo de brief que le daría a un equipo de desarrollo real.",
    organization: "Universidad Rafael Landívar · CEAT",
    audience: "Estudiantes de 5.º bachillerato.",
    context:
      "Apliqué a la plaza de Coordinadora del Centro de Enseñanza, Aprendizaje y Tecnología Educativa (CEAT) en la Universidad Rafael Landívar. El puesto exige liderar proyectos de virtualización de asignaturas, diseño instruccional y programas formativos con IA, y no tenía un portafolio que demostrara esas competencias de forma tangible. En lugar de una presentación teórica sobre mi enfoque, construí una pieza de trabajo real: un mini-curso funcional, publicado y evaluable, sobre un tema que conecta con lo que el puesto pide: virtualización e IA aplicada a educación.",
    challenge:
      "Tenía menos de 24 horas antes de la entrevista y ningún trabajo previo que mostrar. El reto no era solo producir algo bonito: era demostrar, en un solo artefacto, cinco competencias a la vez: análisis de audiencia, selección justificada de un modelo pedagógico, arquitectura de contenido, diseño visual con identidad propia y ejecución técnica funcional. Cualquier atajo —una plantilla genérica, un PDF estático o una demo sin interactividad— habría delatado relleno para la entrevista, no una muestra de proceso real.",
    objective:
      "Diseñar y construir un mini-curso de microlearning, autocontenido en una sola página, dirigido a una audiencia real —estudiantes de 5.º bachillerato— sobre ingeniería de prompts. Debía seguir un modelo pedagógico justificable en una entrevista, incluir práctica activa y evaluación con retroalimentación real, tener identidad visual propia e independiente de cualquier marca institucional, y estar desplegado y accesible por enlace, no solo como archivo local.",
    process: [
      {
        name: "Audiencia y tema",
        description:
          "Descarté una versión inicial dirigida a docentes y la reenfoqué hacia estudiantes de bachillerato, priorizando un tema de necesidad inmediata: la mayoría ya usa IA generativa, pero sin estructura.",
      },
      {
        name: "Modelo pedagógico",
        description:
          "Evalué el Ciclo de Aprendizaje Experiencial de Kolb frente a modelos más expositivos (Gagné, Merrill) y lo elegí porque una habilidad práctica se aprende haciendo, no memorizando. Lo integré como capa pedagógica dentro de ADDIE.",
      },
      {
        name: "Arquitectura de contenido",
        description:
          "Mapeé las cuatro fases de Kolb a seis lecciones concretas, cada una con un propósito pedagógico distinto: desde experimentar con un prompt vago hasta construir uno propio con retroalimentación.",
      },
      {
        name: "Prototipado",
        description:
          "Diseñé un constructor de prompts en vivo —el estudiante arma su prompt por partes— y una evaluación de cinco preguntas con retroalimentación escalonada según el puntaje.",
      },
      {
        name: "Iteración",
        description:
          "Reestructuré una comparación inicial de dos opciones, con respuesta obvia, a un espectro de cuatro ejemplos, porque una comparación binaria no generaba reflexión real. También decidí mantener la paleta violeta y lima tras comparar alternativas.",
      },
      {
        name: "Producción de video",
        description:
          "Escribí guiones para tres microvideos y generé prompts de video con IA, desglosados en clips de cuatro segundos pensados para intercalarse con narración.",
      },
      {
        name: "Construcción y despliegue",
        description:
          "Separé las instrucciones técnicas en tres capas —stack tecnológico, sistema visual y contenido lección por lección— y publiqué el resultado en la web.",
      },
    ],
    solution:
      "Un mini-curso de una sola página, en español, de unos 15 minutos. Incluye barra de progreso y un indicador del Ciclo de Kolb que se ilumina según la fase activa, de modo que la navegación refleja la metodología y no es solo decoración. Seis lecciones cubren experiencia concreta, observación reflexiva, conceptualización abstracta y experimentación activa, más un cierre. El estudiante practica la fórmula RTFC (Rol, Tarea, Formato, Contexto) en un constructor interactivo y cierra con una evaluación de cinco preguntas, retroalimentación inmediata y un mensaje distinto según el puntaje. La identidad visual es propia: violeta y lima, independiente de cualquier marca institucional.",
    methodologies: ["ADDIE", "Ciclo de Kolb", "Microlearning"],
    designDecisions: [
      {
        title: "Kolb sobre modelos expositivos",
        description:
          "Una habilidad práctica se interioriza mejor viviendo la experiencia —incluido el fracaso de un prompt vago— antes de recibir la teoría, y aplicándola de inmediato en un caso propio.",
      },
      {
        title: "Cuatro ejemplos, no dos",
        description:
          "Una comparación binaria no genera reflexión real. El espectro de cuatro prompts obliga a ordenar y argumentar, no a adivinar la respuesta correcta.",
      },
      {
        title: "Navegación como pedagogía",
        description:
          "El indicador del Ciclo de Kolb se ilumina con la fase activa: el sistema de navegación enseña la metodología, no solo decora la interfaz.",
      },
    ],
    pillars: [
      "Análisis de audiencia",
      "Modelo pedagógico",
      "Arquitectura de contenido",
      "Práctica activa",
      "Evaluación con retroalimentación",
      "Identidad visual",
    ],
    deliverables: [
      "Mini-curso de una sola página, ~15 minutos",
      "Seis lecciones alineadas al Ciclo de Kolb",
      "Constructor interactivo de prompts RTFC",
      "Evaluación final de cinco preguntas con retroalimentación",
      "Tres microvideos con guion propio",
    ],
    links: [
      {
        label: "Abrir el mini-curso",
        url: "https://ingenieria-de-prompt-ecru.vercel.app/",
      },
    ],
  },

  {
    slug: "academia-del-conocimiento",
    title: "Academia del Conocimiento",
    category: ["Diseño instruccional"],
    categoryLabel: "Diseño instruccional / Experiencia de aprendizaje",
    shortDescription:
      "Modelo de gestión y transferencia del conocimiento que convierte la experiencia de los expertos en aprendizaje organizacional.",
    featured: true,
    tags: ["Diseño instruccional", "Experiencia de aprendizaje"],
    role: ["Diseñadora instruccional"],
    roleDescription:
      "Mi función no es ser la experta técnica de cada área, sino el puente entre el experto del negocio, el diseño instruccional, el proveedor o desarrollador y el colaborador. Converso con ingenieros, líderes y expertos para comprender qué necesitan saber y hacer las personas, estructuro ese conocimiento pedagógicamente y lo convierto en una solución de aprendizaje que un proveedor externo puede desarrollar y publicar en la plataforma.",
    audience:
      "Colaboradores de la organización, líderes de área y expertos de negocio.",
    context:
      "La organización cuenta con conocimiento valioso distribuido entre diferentes áreas y colaboradores. Parte de ese conocimiento puede estar en documentos y sistemas, pero otra parte permanece en la experiencia de los expertos.",
    challenge:
      "El principal reto es evitar que el conocimiento crítico dependa exclusivamente de determinadas personas. También existe el desafío de identificar qué conocimiento es realmente prioritario, capturarlo y convertirlo en aprendizaje útil para otros colaboradores.",
    objective:
      "Transformar el conocimiento individual en conocimiento organizacional, de manera que pueda ser documentado, transferido, actualizado y utilizado para desarrollar las competencias de los colaboradores.",
    process: [
      {
        name: "A — Análisis",
        description:
          "Comprender el negocio, las áreas, puestos, procesos, brechas y conocimiento crítico.",
      },
      {
        name: "D — Diseño",
        description:
          "Definir objetivos de aprendizaje, estructura, malla curricular, metodología y modalidades.",
      },
      {
        name: "D — Desarrollo",
        description:
          "Convertir el diseño instruccional en cursos, materiales, recursos y actividades, en coordinación con los proveedores.",
      },
      {
        name: "I — Implementación",
        description:
          "Publicar los contenidos en la plataforma, desplegar las rutas y acompañar a los colaboradores.",
      },
      {
        name: "E — Evaluación",
        description:
          "Medir aprendizaje, transferencia al puesto e impacto en el negocio para mejorar continuamente.",
      },
    ],
    solution:
      "La Academia del Conocimiento no es simplemente una plataforma de cursos. Es un modelo de gestión y transferencia del conocimiento apoyado por soluciones de aprendizaje. El ciclo recorre identificar, priorizar, capturar, diseñar, transferir, evaluar y actualizar, de modo que el saber de los expertos se vuelva utilizable para toda la organización.",
    methodologies: ["ADDIE"],
    pillars: [
      "Identificar",
      "Priorizar",
      "Capturar",
      "Diseñar",
      "Transferir",
      "Evaluar",
      "Actualizar",
    ],
    links: [
      {
        label: "Ver experiencia",
        url: "https://academia-del-conocimiento-6jgf2mid6.vercel.app/",
      },
    ],
  },

  {
    slug: "stenam-preescolar",
    title: "STENAM para Preescolar",
    category: ["Diseño instruccional", "Educación & STEM"],
    categoryLabel: "Diseño instruccional / Formación docente",
    shortDescription:
      "Curso-taller autogestionado que da a docentes de preescolar herramientas prácticas para integrar ciencia, tecnología, ingeniería, naturaleza, arte y matemática en la primera infancia.",
    featured: true,
    tags: ["Diseño instruccional", "Formación docente"],
    role: ["Diseñadora instruccional"],
    context:
      "Curso-taller dirigido a docentes de preescolar, publicado como una experiencia autogestionada que recorre las seis áreas STENAM: ciencia, tecnología, ingeniería, naturaleza, arte y matemática.",
    audience: "Docentes de preescolar y primera infancia.",
    challenge:
      "Integrar seis áreas de conocimiento en el aula de preescolar no se resuelve con contenido teórico. Las docentes necesitan herramientas concretas, actividades aplicables y recursos accesibles, pensados para las posibilidades reales de la primera infancia.",
    objective:
      "Brindar herramientas prácticas para integrar ciencia, tecnología, ingeniería, naturaleza, arte y matemática en experiencias de aprendizaje significativas y adecuadas para la primera infancia.",
    process: [
      {
        name: "Diseño",
        description:
          "Definición de competencias, de la ruta de aprendizaje y de la secuencia de misiones que ordena el recorrido del curso.",
      },
      {
        name: "Desarrollo",
        description:
          "Producción de las actividades prácticas, los recursos descargables y los materiales de apoyo de cada área STENAM.",
      },
      {
        name: "Implementación",
        description:
          "Publicación del curso-taller como experiencia autogestionada, disponible para que cada docente avance a su propio ritmo.",
      },
      {
        name: "Evaluación",
        description:
          "Instrumentos de evaluación integrados en la ruta para verificar el avance y la aplicación de lo aprendido.",
      },
    ],
    solution:
      "Un curso-taller autogestionado organizado como una ruta de aprendizaje por misiones. Combina actividades prácticas, exploración, creatividad, principios básicos de robótica, pensamiento computacional y recursos accesibles, de forma que cada docente pueda llevar lo aprendido directamente a su aula.",
    designDecisions: [
      {
        title: "Microlearning",
        description:
          "El contenido se fragmenta en unidades breves y autónomas, para que una docente pueda avanzar en los tiempos reales de su jornada sin perder el hilo del recorrido.",
      },
      {
        title: "Gamificación",
        description:
          "La ruta se estructura en misiones, lo que da progresión visible y un sentido de logro que sostiene la motivación en un curso sin acompañamiento presencial.",
      },
      {
        title: "Aprendizaje experiencial",
        description:
          "Cada área STENAM se aborda haciendo: exploración y actividades prácticas antes que explicación teórica, con materiales accesibles y replicables en el aula.",
      },
      {
        title: "Andragogía",
        description:
          "El curso reconoce a la docente como profesional con experiencia previa: parte de su práctica, respeta su autonomía y prioriza la aplicación inmediata frente a la acumulación de teoría.",
      },
      {
        title: "Pensamiento de diseño",
        description:
          "Las actividades invitan a explorar, prototipar y ajustar, de modo que la docente viva el mismo proceso creativo que después propondrá a sus estudiantes.",
      },
    ],
    methodologies: [
      "Aprendizaje basado en proyectos",
      "Aprendizaje basado en retos",
      "Aprendizaje colaborativo",
      "Aprendizaje experiencial",
      "Aprendizaje activo",
      "Pensamiento computacional",
      "Principios básicos de robótica",
    ],
    deliverables: [
      "Curso autogestionado con las seis áreas STENAM",
      "Ruta de aprendizaje organizada en misiones",
      "Actividades prácticas de exploración y creatividad",
      "Recursos descargables para el aula",
      "Instrumentos de evaluación",
    ],
    tools: [TBD],
    results: [TBD],
    learnings: TBD,
    improvements: TBD,
    links: [
      {
        label: "Explorar experiencia",
        url: "https://stenam-pre-escolar.vercel.app/",
      },
    ],
  },

  {
    slug: "novatech",
    title: "NovaTech",
    category: ["Diseño instruccional", "Tecnología & Programación"],
    categoryLabel: "Proyecto de diseño instruccional",
    shortDescription:
      "Prototipo de experiencia de aprendizaje digital para transformar el proceso de inducción.",
    featured: true,
    tags: ["Diseño instruccional", "Experiencia digital", "Proyecto propio"],
    role: ["Developer", "Implementadora"],
    context:
      "NovaTech es un prototipo de experiencia de aprendizaje digital pensado para repensar el proceso de inducción. La experiencia publicada identifica a Lissy como desarrolladora e implementadora del proyecto.",
    challenge:
      "La inducción tradicional puede resultar poco interactiva y poco centrada en el usuario: entrega mucha información de una sola vez y deja a la persona en un rol pasivo.",
    objective:
      "Convertir la inducción en un proceso más interactivo, intuitivo y centrado en quien aprende, con espacio para el avance autónomo.",
    process: [
      {
        name: "Diseño",
        description:
          "Definición de la estructura de aprendizaje, la navegación y las interacciones de la experiencia.",
      },
      {
        name: "Desarrollo",
        description:
          "Construcción del prototipo digital integrando diseño instruccional, tecnología y experiencia de usuario.",
      },
      {
        name: "Implementación",
        description:
          "Puesta en marcha de la experiencia para su recorrido de forma autónoma.",
      },
    ],
    solution:
      "Una experiencia de aprendizaje digital que sustituye la inducción expositiva por un recorrido interactivo e intuitivo, donde la persona avanza de forma autónoma y la información aparece cuando la necesita.",
    pillars: [
      "Diseño instruccional",
      "Experiencia de usuario",
      "Estructura de aprendizaje",
      "Interacción",
      "Navegación",
      "Tecnología",
      "Implementación",
    ],
    tools: [TBD],
    results: [TBD],
    learnings: TBD,
    improvements: TBD,
    links: [
      {
        label: "Explorar NovaTech",
        url: "https://elearning-seven-blue.vercel.app/",
      },
    ],
  },

  {
    slug: "ejercicio-empresa-ingenieria",
    title: "Ejercicio para empresa de ingeniería",
    category: ["Diseño instruccional", "Colaboraciones"],
    categoryLabel: "Diseño / Solución / Proyecto",
    shortDescription:
      "Caso profesional de diseño y desarrollo de una solución para una empresa del sector de ingeniería.",
    featured: true,
    tags: ["Diseño instruccional", "Colaboraciones"],
    role: [TBD],
    context: TBD,
    audience: TBD,
    challenge: TBD,
    objective: TBD,
    solution: TBD,
    deliverables: [TBD],
    tools: [TBD],
    results: [TBD],
    learnings: TBD,
    improvements: TBD,
  },

  {
    slug: "edukids",
    title: "EDUKIDS",
    category: ["Educación & STEM"],
    categoryLabel: "Proyecto propio / Educación & tecnología",
    shortDescription:
      "Proyecto propio creado por Lissy Amador en el cruce entre educación y tecnología.",
    tags: ["Educación & STEM", "Proyecto propio"],
    role: ["Fundadora"],
    context: TBD,
    audience: TBD,
    challenge: TBD,
    objective: TBD,
    solution: TBD,
    deliverables: [TBD],
    tools: [TBD],
    results: [TBD],
    learnings: TBD,
    improvements: TBD,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/** Resumen para las tarjetas, sin arrastrar el caso de estudio completo. */
export function projectSummaries(): ProjectSummary[] {
  return projects.map((project) => ({
    slug: project.slug,
    title: project.title,
    category: project.category,
    categoryLabel: project.categoryLabel,
    shortDescription: project.shortDescription,
    image: project.image,
    comingSoon: project.comingSoon,
    tags: list(project.tags),
  }));
}
