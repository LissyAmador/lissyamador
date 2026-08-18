import Container from "./Container";
import Button from "./Button";

export default function CtaBand({
  title = "¿Trabajamos juntos?",
  description = "Estoy interesada en colaborar en proyectos relacionados con tecnología, innovación, diseño instruccional y gestión de iniciativas.",
  primary = { href: "/contacto", label: "Hablemos" },
  secondary,
}: {
  title?: string;
  description?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="bg-cream py-16 md:py-20">
      <Container>
        <div className="flex flex-col items-start gap-8 rounded-2xl border border-hairline bg-canvas p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-navy text-balance md:text-3xl">
              {title}
            </h2>
            <p className="mt-3 max-w-xl font-body text-base leading-relaxed text-muted text-pretty">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button href={primary.href} size="lg">
              {primary.label}
            </Button>
            {secondary ? (
              <Button href={secondary.href} variant="secondary" size="lg">
                {secondary.label}
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
