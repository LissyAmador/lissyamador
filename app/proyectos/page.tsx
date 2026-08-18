import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import CtaBand from "@/components/ui/CtaBand";
import ComingSoon from "@/components/home/ComingSoon";
import ProjectsExplorer from "@/components/projects/ProjectsExplorer";
import { projectCategories, projectSummaries } from "@/data/projects";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Proyectos y casos de estudio de Lissy Amador en diseño instruccional, tecnología, innovación y colaboración.",
  alternates: { canonical: "/proyectos" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        tone="moss"
        label="Portafolio"
        title="Proyectos"
        description="Una selección de proyectos que reflejan mi experiencia en diseño, tecnología, innovación y colaboración."
      />

      <section className="border-b border-hairline bg-canvas py-14 md:py-20">
        <Container>
          <ProjectsExplorer
            projects={projectSummaries()}
            categories={projectCategories}
          />
        </Container>
      </section>

      <ComingSoon />

      <CtaBand
        title="¿Quieres conocer el detalle de algún proyecto?"
        description="Cada caso de estudio incluye contexto, reto, rol, proceso y resultados. Si necesitas profundizar en alguno, escríbeme."
        primary={{ href: "/contacto", label: "Hablemos" }}
        secondary={{ href: "/experiencia", label: "Ver experiencia" }}
      />
    </>
  );
}
