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
  title: "Sobre Lissy",
  description:
    "Lissy Amador, profesional en tecnología educativa y formación digital con más de 10 años impartiendo clases de tecnología, diseño instruccional y coordinación de proyectos.",
  alternates: { canonical: "/sobre-mi" },
};

const paragraphs = [
  "Soy Lissy Amador, profesional en tecnología educativa y formación digital con más de 10 años impartiendo clases de tecnología. Mi camino empezó en programación y telecomunicaciones, y fue evolucionando hacia la docencia, el diseño instruccional y la coordinación de proyectos tecnológicos en instituciones educativas y empresariales.",
  "He liderado el diseño de currículos y rutas de aprendizaje implementados en programas dirigidos a más de 200 estudiantes y docentes, coordinado equipos de instructores en programación, robótica e impresión 3D, y organizado más de ocho talleres y eventos tecnológicos enfocados en fortalecer habilidades digitales. También he gestionado la infraestructura técnica detrás del aprendizaje: redes, plataformas LMS y laboratorios de tecnología.",
  "Creo que la tecnología solo transforma cuando va acompañada de buena pedagogía. Por eso mi trabajo combina gestión de proyectos, diseño instruccional e innovación, siempre con el objetivo de llevar una idea desde el aula hasta la implementación real.",
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

        <Container className="relative py-9 md:py-11">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-mustard/40 bg-mustard/10 px-4 py-1.5">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-mustard" />
            <span className="label text-mustard">
              Innovación · Tecnología · Educación
            </span>
          </p>

          <h1 className="mt-4 font-display text-[1.375rem] font-semibold tracking-tight text-cream md:text-2xl">
            Sobre Lissy
          </h1>
        </Container>
      </section>

      <section className="relative overflow-hidden border-b border-hairline bg-cream">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid-light opacity-70"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-moss-tint blur-3xl"
        />

        <Container className="relative py-16 md:py-20">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
            <figure className="shrink-0">
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
              <span
                aria-hidden
                className="mt-3 block h-1 w-12 rounded-full bg-mustard"
              />
            </figure>

            <div className="max-w-prose space-y-5">
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="font-body text-base leading-relaxed text-graphite text-pretty"
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
