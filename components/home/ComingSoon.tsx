import { Code2, Cpu, Globe, Sparkles, Wrench } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const upcoming = [
  { label: "Aplicaciones", icon: Code2 },
  { label: "Páginas web", icon: Globe },
  { label: "IoT", icon: Cpu },
  { label: "Inteligencia artificial", icon: Sparkles },
  { label: "Prototipos", icon: Wrench },
];

export default function ComingSoon() {
  return (
    <section className="border-b border-hairline bg-canvas py-16 md:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-hairline bg-cream p-8 md:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-grid-light opacity-60"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-mustard-tint blur-3xl"
            />

            <div className="relative max-w-2xl">
              <span className="label text-moss-dark">
                Tecnología &amp; Programación
              </span>

              <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">
                Próximamente
              </h2>

              <p className="mt-5 font-body text-base leading-relaxed text-muted text-pretty md:text-lg">
                Estoy documentando nuevos proyectos de programación, desarrollo y
                tecnología para incorporarlos al portafolio.
              </p>

              <ul className="mt-8 flex flex-wrap gap-2.5">
                {upcoming.map((item) => (
                  <li
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-full border border-hairline bg-canvas px-3.5 py-2 font-body text-sm text-navy"
                  >
                    <item.icon aria-hidden className="h-4 w-4 text-moss-dark" />
                    {item.label}
                  </li>
                ))}
              </ul>

              <div
                aria-hidden
                className="mt-10 h-1 w-full overflow-hidden rounded-full bg-hairline"
              >
                <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-moss to-mustard" />
              </div>
              <p className="mt-3 font-body text-xs text-muted">
                Sección en crecimiento · nuevos casos de estudio en preparación
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
