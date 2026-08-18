import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="border-b border-hairline bg-cream py-24 md:py-32">
      <Container>
        <span className="label text-moss-dark">Error 404</span>
        <h1 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight text-navy md:text-5xl">
          Esta página no existe
        </h1>
        <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-muted">
          El enlace puede haber cambiado. Desde el portafolio puedes llegar a
          todos los proyectos y casos de estudio.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button href="/proyectos" size="lg">
            Ver proyectos
          </Button>
          <Button href="/" variant="secondary" size="lg">
            Volver al inicio
          </Button>
        </div>
      </Container>
    </section>
  );
}
