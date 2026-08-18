import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { workProcess } from "@/data/skills";

export default function ProcessSection({
  tone = "dark",
}: {
  tone?: "dark" | "light";
}) {
  const isDark = tone === "dark";

  return (
    <section
      data-surface={isDark ? "dark" : undefined}
      className={`relative overflow-hidden border-b py-16 md:py-24 ${
        isDark ? "border-navy bg-navy" : "border-hairline bg-canvas"
      }`}
    >
      {isDark ? (
        <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
      ) : null}

      <Container className="relative">
        <SectionHeading
          label="Cómo trabajo"
          title="De la idea a la implementación"
          description="Un método que ordena el trabajo y hace visible el avance en cada etapa del proyecto."
          tone={isDark ? "dark" : "light"}
        />

        <ol
          className="mt-12 grid gap-px overflow-hidden rounded-2xl border sm:grid-cols-2 lg:grid-cols-5 lg:gap-0 lg:divide-x"
          style={{ borderColor: isDark ? "rgba(250,246,239,0.14)" : "#E7DFD2" }}
        >
          {workProcess.map((step, index) => (
            <li key={step.number} className="h-full">
              <Reveal delay={index * 0.07} className="h-full">
                <div
                  className={`flex h-full flex-col gap-3 p-6 ${
                    isDark ? "bg-navy-soft/40" : "bg-cream"
                  }`}
                >
                  <span
                    className={`font-display text-2xl font-semibold ${
                      isDark ? "text-mustard" : "text-mustard-dark"
                    }`}
                  >
                    {step.number}
                  </span>
                  <h3
                    className={`font-display text-lg font-semibold tracking-tight ${
                      isDark ? "text-cream" : "text-navy"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`font-body text-sm leading-relaxed text-pretty ${
                      isDark ? "text-cream/65" : "text-muted"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
