/**
 * Áreas de experiencia y método de trabajo. `icon` corresponde al nombre del
 * icono de lucide-react que resuelve el componente que lo renderiza.
 */
export type ExpertiseArea = {
  title: string;
  description: string;
  icon: "ClipboardList" | "Route" | "Cpu" | "Lightbulb";
  /** Un color de la paleta por área, para que ninguna sección los mezcle todos. */
  accent: "navy" | "moss" | "orange" | "mustard";
};

export const expertiseAreas: ExpertiseArea[] = [
  {
    title: "Gestión de proyectos",
    description:
      "Planificación, coordinación, seguimiento e implementación de iniciativas.",
    icon: "ClipboardList",
    accent: "navy",
  },
  {
    title: "Diseño instruccional",
    description:
      "Diseño curricular, rutas de aprendizaje y experiencias educativas digitales.",
    icon: "Route",
    accent: "moss",
  },
  {
    title: "Tecnología",
    description: "Programación, IA, IoT, robótica y tecnologías emergentes.",
    icon: "Cpu",
    accent: "orange",
  },
  {
    title: "Innovación",
    description: "Diseño y desarrollo de soluciones, programas y experiencias.",
    icon: "Lightbulb",
    accent: "mustard",
  },
];

export type WorkStep = {
  number: string;
  title: string;
  description: string;
};

export const workProcess: WorkStep[] = [
  {
    number: "01",
    title: "Analizar",
    description: "Comprender necesidades, usuarios y objetivos.",
  },
  {
    number: "02",
    title: "Diseñar",
    description: "Convertir necesidades en experiencias y soluciones.",
  },
  {
    number: "03",
    title: "Coordinar",
    description: "Organizar personas, recursos, tiempos y entregables.",
  },
  {
    number: "04",
    title: "Implementar",
    description: "Llevar el diseño a la práctica.",
  },
  {
    number: "05",
    title: "Evaluar",
    description: "Analizar resultados y oportunidades de mejora.",
  },
];

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Proyectos y coordinación",
    items: [
      "Planificación",
      "Coordinación",
      "Seguimiento",
      "Implementación",
      "Gestión de entregables",
    ],
  },
  {
    title: "Diseño instruccional",
    items: [
      "Diseño curricular",
      "Rutas de aprendizaje",
      "Experiencias educativas digitales",
      "Evaluación del aprendizaje",
    ],
  },
  {
    title: "Tecnología",
    items: [
      "Programación",
      "Inteligencia artificial",
      "IoT",
      "Robótica",
      "Tecnologías emergentes",
    ],
  },
];
