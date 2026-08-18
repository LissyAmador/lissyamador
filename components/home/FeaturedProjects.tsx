import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/projects/ProjectCard";
import { featuredProjects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section className="border-b border-hairline bg-cream py-16 md:py-24">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            labelTone="moss"
            label="Proyectos destacados"
            title="Casos de estudio: del problema al resultado"
            description="Cada proyecto abre una página propia con contexto, reto, rol, proceso, solución y evidencias."
          />
          <Button href="/proyectos" variant="secondary" className="shrink-0">
            Ver todos los proyectos
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={(index % 2) * 0.1}
              className="h-full"
            >
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
