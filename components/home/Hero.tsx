import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import PhotoFrame from "@/components/ui/PhotoFrame";
import SocialLinks from "@/components/ui/SocialLinks";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-hairline bg-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-light opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-16 h-72 w-72 rounded-full bg-moss-tint blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-mustard-tint blur-3xl"
      />

      <Container className="relative pb-16 pt-8 md:pb-20 md:pt-10 lg:pb-24 lg:pt-12">
        <div className="grid items-center gap-12 lg:grid-cols-[260px_1fr] lg:gap-14">
          <div className="mx-auto w-full max-w-[220px] self-center sm:max-w-[240px] lg:max-w-none">
            <PhotoFrame
              src={site.photo}
              alt="Retrato profesional de Lissy Amador"
              aspect="aspect-square"
              sizes="260px"
              priority
            />
          </div>

          <div className="flex flex-col items-center text-center">
            <p className="flex w-fit items-center gap-2.5 rounded-[20px] border border-mustard/45 bg-mustard-soft px-4 py-1.5">
              <span
                aria-hidden
                className="h-1.5 w-1.5 rounded-full bg-mustard"
              />
              <span className="font-display text-[13px] font-semibold uppercase leading-[1.25] tracking-[0.06em] text-mustard-deep">
                {site.heroTagline}
              </span>
            </p>

            <h1 className="mt-4 font-display text-[2.75rem] font-semibold uppercase leading-[0.95] tracking-tight text-navy sm:text-6xl lg:text-7xl">
              Lissy Amador
            </h1>

            <div aria-hidden className="mt-6 flex h-1 w-28 gap-1">
              <span className="h-full flex-[6] rounded-full bg-navy" />
              <span className="h-full flex-[3] rounded-full bg-moss" />
              <span className="h-full flex-1 rounded-full bg-mustard" />
            </div>

            <p className="mt-7 max-w-2xl font-display text-2xl font-medium leading-snug tracking-tight text-navy text-balance md:text-[2rem]">
              Conecto educación, tecnología e innovación para convertir ideas en
              proyectos con impacto.
            </p>

            <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-muted text-pretty md:text-lg">
              Profesional de innovación educativa y tecnológica con experiencia
              en diseño instruccional, desarrollo de proyectos, tecnología y
              creación de experiencias de aprendizaje.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button href="/proyectos" size="lg">
                Explorar proyectos
              </Button>
              <Button href="/experiencia" variant="secondary" size="lg">
                Ver experiencia
              </Button>
            </div>

            <SocialLinks
              label="Conecta"
              className="mt-8 justify-center border-t border-hairline pt-7"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
