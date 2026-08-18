import type { Metadata } from "next";
import { Download } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import CtaBand from "@/components/ui/CtaBand";
import Timeline from "@/components/experience/Timeline";
import Recognitions from "@/components/experience/Recognitions";
import { experiences } from "@/data/experience";
import { site } from "@/data/site";
import { skillGroups } from "@/data/skills";

export const metadata: Metadata = {
  title: "Experiencia profesional",
  description:
    "Trayectoria de Lissy Amador en coordinación de proyectos, tecnología, innovación y diseño instruccional.",
  alternates: { canonical: "/experiencia" },
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        label="Trayectoria"
        title="Experiencia profesional"
        description="Una trayectoria construida en la coordinación de proyectos, la tecnología, la innovación y el diseño de experiencias de aprendizaje."
        action={
          site.cv ? (
            <a
              href={site.cv}
              download
              className="group inline-flex items-center gap-2 rounded-full border border-navy/20 bg-cream px-5 py-3 font-body text-sm font-medium text-navy transition-all duration-300 ease-soft hover:border-navy/50 hover:shadow-card"
            >
              <Download
                aria-hidden
                className="h-4 w-4 text-orange-dark transition-transform duration-300 ease-soft group-hover:translate-y-0.5"
              />
              Descargar CV
            </a>
          ) : null
        }
      />

      <section className="border-b border-hairline bg-canvas py-14 md:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_18rem] lg:gap-16">
            <Timeline items={experiences} />

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <h2 className="label text-moss-dark">Capacidades</h2>
              <div className="mt-5 space-y-6">
                {skillGroups.map((group) => (
                  <div
                    key={group.title}
                    className="rounded-2xl border border-hairline bg-cream p-5"
                  >
                    <h3 className="font-display text-sm font-semibold tracking-tight text-navy">
                      {group.title}
                    </h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-full bg-canvas px-3 py-1 font-body text-xs text-muted"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <Recognitions />

      <CtaBand
        title="¿Buscas a alguien para coordinar o diseñar un proyecto?"
        primary={{ href: "/contacto", label: "Hablemos" }}
        secondary={{ href: "/proyectos", label: "Ver proyectos" }}
      />
    </>
  );
}
