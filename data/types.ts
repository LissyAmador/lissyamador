export type ActionLink = {
  label: string;
  url: string;
};

export type ProcessStep = {
  /** Etapa: Investigación, Análisis, Diseño, Desarrollo, Implementación, Evaluación. */
  name: string;
  description?: string;
};

export type DesignDecision = {
  title: string;
  description: string;
};

export type ProjectCategory =
  | "Diseño instruccional"
  | "Tecnología & Programación"
  | "Educación & STEM"
  | "Colaboraciones";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory[];
  /** Subtítulo de categoría tal como se muestra en la tarjeta. */
  categoryLabel: string;
  year?: string;
  role?: string[];
  /** Párrafo que explica el rol más allá de las etiquetas. */
  roleDescription?: string;
  /** Etiquetas de la tarjeta; si falta, se usan los roles. */
  tags?: string[];
  shortDescription: string;
  image?: string;
  featured?: boolean;
  /** Marca la ficha como "Próximamente" en lugar de abrir un caso de estudio. */
  comingSoon?: boolean;
  context?: string;
  organization?: string;
  audience?: string;
  challenge?: string;
  objective?: string;
  process?: ProcessStep[];
  solution?: string;
  designDecisions?: DesignDecision[];
  /** Ejes que definen el proyecto: disciplinas y capacidades implicadas. */
  pillars?: string[];
  methodologies?: string[];
  tools?: string[];
  deliverables?: string[];
  results?: string[];
  gallery?: { src: string; alt: string }[];
  videos?: string[];
  learnings?: string;
  improvements?: string;
  links?: ActionLink[];
};

/** Datos mínimos para las tarjetas: evita enviar el caso de estudio al cliente. */
export type ProjectSummary = Pick<
  Project,
  | "slug"
  | "title"
  | "category"
  | "categoryLabel"
  | "shortDescription"
  | "image"
  | "comingSoon"
  | "tags"
>;

export type Experience = {
  role: string;
  /** Institución y periodo, tal como se muestra bajo el rol. */
  organization?: string;
  /** Varias instituciones para un mismo rol, como los colegios de docencia. */
  organizations?: string[];
  /** Ejes que se destacan visualmente: coordinación, tecnología, proyectos… */
  focus?: string[];
  responsibilities?: string[];
  achievements?: string[];
  /** Experiencias que se resaltan por su relación con gestión e innovación. */
  highlight?: boolean;
  projectSlug?: string;
};

export type Recognition = {
  title: string;
  organization?: string;
  year?: string;
  description?: string;
};

export type Conference = {
  slug: string;
  title: string;
  type: string;
  event?: string;
  organization?: string;
  date?: string;
  audience?: string;
  role?: string;
  description?: string;
  /** ID o URL de YouTube. */
  video?: string;
  links?: ActionLink[];
};
