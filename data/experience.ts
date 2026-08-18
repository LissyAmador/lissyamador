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
    ],
    achievements: [
      "Optimización de recursos tecnológicos internos y continuidad de sistemas institucionales",
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
    ],
    achievements: [
      "Implementación de mejoras continuas en la experiencia de aprendizaje virtual",
    ],
  },
  {
    role: "Coordinadora Académica de Tecnología",
    organization: "EduKids · 2018 – 2024",
    highlight: true,
    focus: ["Tecnología educativa", "Robótica", "Currículo"],
    responsibilities: [
      "Diseño de rutas de aprendizaje en programación, robótica, impresión 3D y desarrollo de videojuegos",
      "Coordinación de instructores e infraestructura técnica (redes, laboratorios)",
    ],
    achievements: [
      "Currículos implementados en programas dirigidos a más de 200 estudiantes y docentes",
    ],
  },
  {
    role: "Docente de Tecnología",
    organization:
      "Colegio Suizo Americano, Colegio Continental Americano, Village School · 2019 – 2024",
    focus: ["Educación", "Tecnología"],
    responsibilities: [
      "Enseñanza de tecnología y acompañamiento en adopción de herramientas digitales",
    ],
    achievements: ["Más de 10 años de trayectoria docente en tecnología"],
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
