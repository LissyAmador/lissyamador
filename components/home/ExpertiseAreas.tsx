import { ClipboardList, Cpu, Lightbulb, Route } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { expertiseAreas, type ExpertiseArea } from "@/data/skills";

const icons: Record<ExpertiseArea["icon"], typeof Cpu> = {
  ClipboardList,
  Route,
  Cpu,
  Lightbulb,
};

const accents: Record<
  ExpertiseArea["accent"],
  { chip: string; border: string; rule: string }
> = {
  navy: {
    chip: "border border-navy/15 bg-navy/5 text-navy group-hover:bg-navy group-hover:text-cream",
    border: "hover:border-navy/40",
    rule: "bg-navy",
  },
  moss: {
    chip: "border border-moss/30 bg-moss-tint text-moss-dark group-hover:bg-moss group-hover:text-cream",
    border: "hover:border-moss/45",
    rule: "bg-moss",
  },
  orange: {
    chip: "border border-orange/35 bg-orange-tint text-orange-dark group-hover:bg-orange group-hover:text-navy",
    border: "hover:border-orange/50",
    rule: "bg-orange",
  },
  mustard: {
    chip: "border border-mustard/40 bg-mustard-tint text-mustard-dark group-hover:bg-mustard group-hover:text-navy",
    border: "hover:border-mustard/60",
    rule: "bg-mustard",
  },
};

export default function ExpertiseAreas() {
  return (
    <section className="border-b border-hairline bg-canvas py-16 md:py-24">
      <Container>
        <SectionHeading
          label="Áreas de experiencia"
          title="Cuatro frentes de trabajo que se cruzan en cada proyecto"
          description="Del análisis inicial a la evaluación de resultados: diseño soluciones y las llevo hasta su implementación."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {expertiseAreas.map((area, index) => {
            const Icon = icons[area.icon];
            const accent = accents[area.accent];
            return (
              <Reveal key={area.title} delay={index * 0.08} className="h-full">
                <article
                  className={`group h-full rounded-2xl border border-hairline bg-cream p-6 transition-all duration-300 ease-soft hover:-translate-y-1 hover:shadow-card ${accent.border}`}
                >
                  <span
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-300 ${accent.chip}`}
                  >
                    <Icon aria-hidden className="h-5 w-5" />
                  </span>

                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-navy">
                    {area.title}
                  </h3>

                  <span
                    aria-hidden
                    className={`mt-3 block h-0.5 w-8 rounded-full transition-all duration-300 ease-soft group-hover:w-14 ${accent.rule}`}
                  />

                  <p className="mt-3 font-body text-sm leading-relaxed text-muted text-pretty">
                    {area.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
