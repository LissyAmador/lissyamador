import { Award } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import PendingNote from "@/components/ui/PendingNote";
import { recognitions } from "@/data/experience";
import { showPending, text } from "@/lib/content";

export default function Recognitions() {
  const visible = recognitions
    .map((item) => ({
      title: text(item.title),
      organization: text(item.organization),
      year: text(item.year),
      description: text(item.description),
    }))
    .filter((item) => Boolean(item.title));

  if (!visible.length && !showPending) return null;

  return (
    <section className="border-b border-hairline bg-canvas py-16 md:py-20">
      <Container>
        <SectionHeading
          labelTone="orange"
          label="Trayectoria"
          title="Reconocimientos & participaciones"
          description="Reconocimientos, hackathones, competencias y programas relacionados con innovación, tecnología, liderazgo, emprendimiento y educación."
        />

        {visible.length ? (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06} className="h-full">
                <article className="h-full rounded-2xl border border-hairline bg-cream p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-mustard/40 bg-mustard-tint text-mustard-dark">
                    <Award aria-hidden className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold tracking-tight text-navy">
                    {item.title}
                  </h3>
                  {item.organization || item.year ? (
                    <p className="mt-1.5 font-body text-sm text-moss-dark">
                      {[item.organization, item.year]
                        .filter(Boolean)
                        .join(" · ")}
                    </p>
                  ) : null}
                  {item.description ? (
                    <p className="mt-3 font-body text-sm leading-relaxed text-muted text-pretty">
                      {item.description}
                    </p>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <PendingNote>
            reconocimientos, hackathones, competencias, programas o
            certificaciones relevantes en data/experience.ts
          </PendingNote>
        )}
      </Container>
    </section>
  );
}
