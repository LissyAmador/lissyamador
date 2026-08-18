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
    slug: "academia-del-conocimiento",
    title: "Academia del Conocimiento",
    category: ["Diseño instruccional"],
    categoryLabel: "Diseño instruccional / Experiencia de aprendizaje",
    shortDescription:
      "Proyecto de diseño de una experiencia de aprendizaje digital.",
    featured: true,
    role: [TBD],
    organization: TBD,
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
    links: [{ label: "Ver experiencia", url: "" }],
  },

  {
    slug: "stenam-preescolar",
    title: "STENAM para Preescolar",
    category: ["Diseño instruccional", "Educación & STEM"],
    categoryLabel: "Diseño instruccional / Formación docente",
    shortDescription:
      "Curso-taller autogestionado que da a docentes de preescolar herramientas prácticas para integrar ciencia, tecnología, ingeniería, naturaleza, arte y matemática en la primera infancia.",
    featured: true,
    role: ["Instructional Designer"],
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
    links: [{ label: "Explorar experiencia", url: "" }],
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
    links: [{ label: "Explorar NovaTech", url: "" }],
  },

  {
    slug: "ejercicio-empresa-ingenieria",
    title: "Ejercicio para empresa de ingeniería",
    category: ["Diseño instruccional", "Colaboraciones"],
    categoryLabel: "Diseño / Solución / Proyecto",
    shortDescription:
      "Caso profesional de diseño y desarrollo de una solución para una empresa del sector de ingeniería.",
    featured: true,
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
    role: ["Founder"],
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
    tags: list(project.tags ?? project.role),
  }));
}
