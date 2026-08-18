import type { Metadata } from "next";
import Image from "next/image";
import { Briefcase, Laptop, Lightbulb, Rocket } from "lucide-react";
import Container from "@/components/ui/Container";
import SocialLinks from "@/components/ui/SocialLinks";
import ProcessSection from "@/components/home/ProcessSection";
import CtaBand from "@/components/ui/CtaBand";
import Reveal from "@/components/ui/Reveal";
import Tag from "@/components/ui/Tag";
import { skillGroups } from "@/data/skills";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Lissy Amador, profesional en tecnología educativa, diseño instruccional e innovación, con más de 10 años de experiencia en tecnología y formación.",
  alternates: { canonical: "/sobre-mi" },
};

const paragraphs = [
  "Soy Lissy Amador, profesional en tecnología educativa, diseño instruccional e innovación, con más de 10 años de experiencia trabajando en tecnología y formación. Mi trayectoria comenzó en áreas de programación y telecomunicaciones y evolucionó hacia el diseño de experiencias de aprendizaje, la coordinación de equipos y el desarrollo de proyectos tecnológicos y educativos.",
  "He liderado el diseño de currículos y rutas de aprendizaje implementados en programas dirigidos a más de 200 estudiantes y docentes, coordinado equipos de instructores en programación, robótica e impresión 3D, y organizado talleres y eventos orientados al desarrollo de habilidades digitales. También he participado en la gestión de infraestructura tecnológica, plataformas LMS y laboratorios de tecnología.",
  "Uso la tecnología como herramienta para la educación, creando experiencias que facilitan el aprendizaje y la apropiación de habilidades digitales. Actualmente, también me estoy desarrollando en el área de desarrollo de software, fortaleciendo mis competencias técnicas para ampliar el alcance de los proyectos en los que participo.",
  "Mi experiencia combina gestión de proyectos, diseño instruccional, tecnología y educación, permitiéndome conectar las necesidades de las personas con soluciones concretas y llevar una idea desde su conceptualización hasta su implementación.",
  "Creo que la tecnología solo transforma cuando va acompañada de una buena estrategia y una experiencia diseñada para las personas.",
];

const metrics = [
  { value: "10+", label: "Años de experiencia", tone: "moss" },
  { value: "200+", label: "Estudiantes y docentes impactados", tone: "orange" },
  { value: "8+", label: "Talleres y eventos coordinados", tone: "mustard" },
] as const;

const metricTones = {
  moss: { card: "border-moss/30 bg-moss-tint", label: "text-moss-dark" },
  orange: { card: "border-orange/35 bg-orange-tint", label: "text-orange-dark" },
  mustard: {
    card: "border-mustard/40 bg-mustard-tint",
    label: "text-mustard-dark",
  },
} as const;

/** El tono alterna para que dos etiquetas contiguas nunca repitan acento. */
const skills = [
  { title: "Gestión de proyectos", icon: Briefcase, tone: "moss" },
  { title: "Diseño instruccional", icon: Lightbulb, tone: "orange" },
  { title: "Tecnología educativa", icon: Laptop, tone: "mustard" },
  { title: "Innovación", icon: Rocket, tone: "moss" },
] as const;

export default function AboutPage() {
  return (
    <>
      <section data-surface="dark" className="relative overflow-hidden bg-navy">
        <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-moss/25 blur-3xl"
        />

        <Container className="relative pb-10 pt-7 md:pb-12 md:pt-8">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-mustard/40 bg-mustard/10 px-4 py-1.5">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-mustard" />
            <span className="label text-mustard">
              Innovación · Tecnología · Educación
            </span>
          </p>
        </Container>
      </section>

      <section className="relative z-10 -mt-6 overflow-hidden border-b border-hairline bg-cream">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid-light opacity-70"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-moss-tint blur-3xl"
        />

        <Container className="relative pb-16 pt-8 md:pb-20 md:pt-10">
          <h1 className="sr-only">Sobre mí</h1>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
            <figure className="relative shrink-0">
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -left-3 -top-3 h-14 w-14 rounded-br-[1.25rem] border-l-2 border-t-2 border-mustard"
                />
                <div
                  aria-hidden
                  className="absolute -bottom-3 -right-3 h-14 w-14 rounded-tl-[1.25rem] border-b-2 border-r-2 border-orange"
                />
                <div className="relative aspect-[4/5] w-[120px] overflow-hidden rounded-2xl border border-hairline bg-navy shadow-card sm:w-[150px]">
                  <Image
                    src={site.photo}
                    alt="Retrato profesional de Lissy Amador"
                    fill
                    sizes="150px"
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
              <div aria-hidden className="mt-4 flex h-1 w-16 gap-0.5">
                <span className="h-full flex-[6] rounded-[2px] bg-navy" />
                <span className="h-full flex-[3] rounded-[2px] bg-moss" />
                <span className="h-full flex-1 rounded-[2px] bg-mustard" />
              </div>
            </figure>

            <div className="max-w-prose space-y-5">
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="hyphens-auto text-justify font-body text-base leading-relaxed text-graphite"
                  lang="es"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {metrics.map((metric, index) => {
              const tone = metricTones[metric.tone];
              return (
                <Reveal
                  key={metric.value}
                  delay={index * 0.08}
                  className="h-full"
                >
                  <article
                    className={`h-full rounded-2xl border p-6 ${tone.card}`}
                  >
                    <p className="font-display text-4xl font-semibold tracking-tight text-navy">
                      {metric.value}
                    </p>
                    <p className={`label mt-3 ${tone.label}`}>{metric.label}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <Tag
                key={skill.title}
                tone={skill.tone}
                className="gap-2 px-4 py-2 text-sm"
              >
                <skill.icon aria-hidden className="h-4 w-4" />
                {skill.title}
              </Tag>
            ))}
          </div>

          <SocialLinks
            label="Conecta"
            className="mt-10 border-t border-hairline pt-7"
          />
        </Container>
      </section>

      <section className="border-b border-hairline bg-canvas py-16 md:py-20">
        <Container>
          <h2 className="label text-moss-dark">En qué trabajo</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {skillGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.08} className="h-full">
                <article className="h-full rounded-2xl border border-hairline bg-cream p-6">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-navy">
                    {group.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 font-body text-sm leading-relaxed text-muted"
                      >
                        <span
                          aria-hidden
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-moss"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ProcessSection tone="light" />

      <CtaBand
        title="¿Conversamos sobre tu proyecto?"
        primary={{ href: "/contacto", label: "Hablemos" }}
        secondary={{ href: "/proyectos", label: "Ver proyectos" }}
      />
    </>
  );
}
