import type { Metadata } from "next";
import { Briefcase, Handshake, Mic } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import SocialLinks from "@/components/ui/SocialLinks";
import { LinkedInIcon } from "@/components/ui/SocialIcons";
import ContactForm from "@/components/contact/ContactForm";
import { linkedinUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a Lissy Amador para oportunidades profesionales, proyectos, colaboraciones y conferencias.",
  alternates: { canonical: "/contacto" },
};

const options = [
  {
    title: "Oportunidades profesionales",
    description:
      "Si buscas a alguien para coordinar un proyecto o sumarse a tu equipo, empecemos por una conversación.",
    icon: Briefcase,
    chip: "border border-orange/35 bg-orange-tint text-orange-dark",
  },
  {
    title: "Proyectos y colaboraciones",
    description:
      "¿Tienes una idea de aprendizaje o un proyecto conjunto? Me encantaría conocerla y ver cómo puedo aportar.",
    icon: Handshake,
    chip: "border border-moss/30 bg-moss-tint text-moss-dark",
  },
  {
    title: "Conferencias",
    description:
      "Charlas y talleres sobre tecnología, IA e innovación educativa. Lo armamos según tu audiencia.",
    icon: Mic,
    chip: "border border-mustard/40 bg-mustard-tint text-mustard-dark",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contacto"
        title="¿Hablamos?"
        description="Escríbeme con lo que tienes en mente: un proyecto, una vacante o una charla. Respondo a todos los mensajes."
      />

      <section className="border-b border-hairline bg-canvas py-14 md:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {options.map((option, index) => (
              <Reveal key={option.title} delay={index * 0.08} className="h-full">
                <article className="h-full rounded-2xl border border-hairline bg-cream p-7">
                  <span
                    className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${option.chip}`}
                  >
                    <option.icon aria-hidden className="h-8 w-8" strokeWidth={1.75} />
                  </span>
                  <h2 className="mt-5 font-display text-lg font-semibold tracking-tight text-navy">
                    {option.title}
                  </h2>
                  <p className="mt-2.5 font-body text-sm leading-relaxed text-muted text-pretty">
                    {option.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-navy">
                Escríbeme
              </h2>
              <p className="mt-3 max-w-prose font-body text-base leading-relaxed text-muted text-pretty">
                Cuéntame quién eres, desde dónde escribes y qué tienes en mente.
                Respondo a todos los mensajes.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            <aside className="lg:pt-16">
              <div className="rounded-2xl border border-hairline bg-cream p-6">
                <h2 className="font-display text-lg font-semibold tracking-tight text-navy">
                  También en LinkedIn
                </h2>
                <p className="mt-2.5 font-body text-sm leading-relaxed text-muted text-pretty">
                  Para conversaciones profesionales, procesos de selección y
                  colaboraciones.
                </p>

                {linkedinUrl ? (
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-navy/20 px-5 py-2.5 font-body text-sm font-medium text-navy transition-colors hover:border-navy/50"
                  >
                    <LinkedInIcon />
                    Ver perfil de LinkedIn
                  </a>
                ) : null}

                <div className="mt-6 border-t border-hairline pt-6">
                  <SocialLinks label="También aquí" />
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
