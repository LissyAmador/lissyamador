import type { Metadata } from "next";
import { CalendarPlus } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import CtaBand from "@/components/ui/CtaBand";
import Reveal from "@/components/ui/Reveal";
import TalkCard from "@/components/conferences/TalkCard";
import { conferences } from "@/data/conferences";

export const metadata: Metadata = {
  title: "Conferencias & Charlas",
  description:
    "Charlas de Lissy Amador sobre tecnología, educación, innovación y creatividad, con evidencia audiovisual.",
  alternates: { canonical: "/conferencias" },
};

export default function ConferencesPage() {
  return (
    <>
      <PageHeader
        tone="orange"
        label="Divulgación"
        title="Conferencias & Charlas"
        description="Experiencias compartiendo ideas sobre tecnología, educación, innovación y creatividad."
      />

      <section className="border-b border-hairline bg-canvas py-14 md:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {conferences.map((talk, index) => (
              <Reveal
                key={talk.slug}
                delay={(index % 2) * 0.08}
                className="h-full"
              >
                <TalkCard talk={talk} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-6 flex flex-col items-start gap-4 rounded-2xl border border-dashed border-hairline bg-cream p-8 md:flex-row md:items-center">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-moss/30 bg-moss-tint text-moss-dark">
                <CalendarPlus aria-hidden className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-display text-lg font-semibold tracking-tight text-navy">
                  Más charlas en documentación
                </h2>
                <p className="mt-2 max-w-2xl font-body text-sm leading-relaxed text-muted text-pretty">
                  Estoy reuniendo el registro y las evidencias de otras
                  participaciones para incorporarlas a esta sección.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title="¿Te gustaría invitarme a una charla?"
        description="Comparto temas de tecnología, inteligencia artificial, innovación educativa, diseño de experiencias de aprendizaje y creatividad."
        primary={{ href: "/contacto", label: "Escribirme" }}
      />
    </>
  );
}
