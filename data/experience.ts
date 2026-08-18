import { TBD } from "@/lib/content";
import type { Experience, Recognition } from "./types";

/**
 * Trayectoria profesional resumida para web: cada entrada deja el rol, la
 * institución con su periodo, dos responsabilidades y un logro. El detalle
 * completo vive en el PDF del CV, no aquí.
 */
export const experiences: Experience[] = [
  {
    role: "Coordinadora de Educación Secundaria y Experta en Tecnología",
    organization: "Colegio Mesoamericano de Chimaltenango · 2026",
    highlight: true,
    focus: ["Coordinación", "Gestión de proyectos", "Innovación"],
    responsibilities: [
      "Coordinación de operaciones académicas y soporte técnico del nivel secundario",
      "Acompañamiento a docentes en metodologías activas y herramientas tecnológicas",
      "Coordiné el soporte técnico y mantenimiento operativo de las plataformas tecnológicas del nivel secundario",
      "Impulsé iniciativas de innovación y mejora continua alineadas a la estrategia institucional",
    ],
    achievements: [
      "Optimización de recursos tecnológicos internos y continuidad de sistemas institucionales",
      "Implementé soluciones de infraestructura inalámbrica que mejoraron la comunicación entre dos edificios corporativos",
    ],
  },
  {
    role: "Coordinadora de Formación Virtual",
    organization: "Buro Business School · 2024 – 2025",
    highlight: true,
    focus: ["Diseño instruccional", "Formación virtual", "LMS"],
    responsibilities: [
      "Coordinación de proyectos de formación virtual para profesionales",
      "Gestión de contenidos, cronogramas y plataformas LMS",
      "Colaboré con especialistas y equipos multidisciplinarios para garantizar la calidad de los programas",
      "Supervisé cronogramas, entregables y procesos de implementación de cursos virtuales",
      "Gestioné plataformas LMS (control de acceso y mantenimiento)",
    ],
    achievements: [
      "Implementación de mejoras continuas en la experiencia de aprendizaje virtual",
    ],
  },
  {
    role: "Coordinadora Académica de Tecnología",
    organization: "EDU KIDS · 2018 – 2024",
    highlight: true,
    focus: ["Tecnología educativa", "Robótica", "Currículo"],
    responsibilities: [
      "Diseño de rutas de aprendizaje en programación, robótica, impresión 3D y desarrollo de videojuegos",
      "Coordinación de instructores e infraestructura técnica (redes, laboratorios)",
      "Lideré la planificación y ejecución de programas académicos enfocados en tecnología e innovación",
      "Gestioné proyectos educativos promoviendo metodologías STENAM",
      "Desarrollé alianzas estratégicas con instituciones, empresas y comunidades tecnológicas",
    ],
    achievements: [
      "Currículos implementados en programas dirigidos a más de 200 estudiantes y docentes",
    ],
  },
  {
    role: "Docente de Tecnología",
    organization: "2016 – 2024",
    organizations: [
      "Colegio Continental Americano",
      "Colegio Suizo Americano",
      "Village School",
      "Colegio CEAR",
      "Colegio La Asunción",
      "Colegio Loyola",
      "Colegio Lensen",
    ],
    focus: [
      "Tecnología Educativa",
      "Programación",
      "Robótica",
      "Electrónica",
      "Ofimática",
      "STEM",
    ],
    responsibilities: [
      "Diseño e impartición de clases de tecnología para distintos niveles educativos.",
      "Desarrollo de experiencias de aprendizaje basadas en proyectos.",
      "Enseñanza de programación y pensamiento computacional en diferentes plataformas y lenguajes.",
      "Diseño e implementación de proyectos de robótica educativa con LEGO.",
      "Desarrollo de proyectos de Arduino y electrónica, integrando sensores, actuadores y circuitos.",
      "Impartición de cursos de ofimática y herramientas digitales (documentos, presentaciones y hojas de cálculo).",
      "Implementación de metodologías de aprendizaje práctico e interdisciplinario.",
      "Acompañamiento a estudiantes en el desarrollo y presentación de proyectos tecnológicos.",
      "Integración de herramientas digitales en los procesos de aprendizaje.",
      "Participación en ferias y actividades de innovación tecnológica.",
    ],
    achievements: [
      "Más de 10 años de experiencia en formación tecnológica y educación digital.",
      "Desarrollo de experiencias educativas integrando programación, robótica, electrónica y herramientas digitales.",
      "Experiencia en proyectos con LEGO, Arduino y electrónica aplicada.",
      "Formación de estudiantes en competencias digitales, pensamiento computacional y resolución de problemas mediante proyectos prácticos.",
    ],
  },
];

/**
 * Solo reconocimientos que refuercen innovación, tecnología, liderazgo,
 * emprendimiento y educación. No es un listado de cursos.
 */
export const recognitions: Recognition[] = [
  {
    title: TBD,
    organization: TBD,
    year: TBD,
    description: TBD,
  },
];
