import { TBD } from "@/lib/content";

export const site = {
  name: "Lissy Amador",
  tagline: "Innovación · Tecnología · Diseño · Proyectos",
  heroTagline: "Innovación · Tecnología · Diseño · Proyectos",
  title: "Lissy Amador | Innovación, Tecnología y Gestión de Proyectos",
  description:
    "Lissy Amador — profesional de innovación educativa y tecnológica, diseño instruccional, tecnología y gestión de proyectos.",
  /** Ajustar al dominio definitivo, o definir NEXT_PUBLIC_SITE_URL en el entorno. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://lissyamador.com",
  photo: "/lissy/lissy-amador.png",
  /** PDF del CV en /public. Vacío = el botón de descarga no se muestra. */
  cv: "",
  email: TBD,
} as const;

/** Redes profesionales. Una red sin URL simplemente no se muestra. */
export const socials = [
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/lissyamadorsazo/",
  },
  {
    id: "facebook",
    label: "Facebook",
    url: "https://www.facebook.com/lissy.amadorsazo.3",
  },
  {
    id: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/lissyamadors/",
  },
] as const;

export type SocialId = (typeof socials)[number]["id"];

export const linkedinUrl =
  socials.find((social) => social.id === "linkedin")?.url ?? "";

export const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/experiencia", label: "Experiencia" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/conferencias", label: "Conferencias" },
  { href: "/contacto", label: "Contacto" },
] as const;
