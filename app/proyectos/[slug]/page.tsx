import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import CtaBand from "@/components/ui/CtaBand";
import PendingNote from "@/components/ui/PendingNote";
import CaseSection, {
  CaseList,
  CaseText,
} from "@/components/projects/CaseSection";
import ProcessFlow from "@/components/projects/ProcessFlow";
import VideoEmbed from "@/components/media/VideoEmbed";
import { getProject, projects } from "@/data/projects";
import { links, list, pendingLinks, showPending, text } from "@/lib/content";
import { youTubeId } from "@/lib/youtube";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return { title: "Proyecto no encontrado" };

  return {
    title: project.title,
    description: project.shortDescription,
    alternates: { canonical: `/proyectos/${project.slug}` },
    openGraph: {
      title: `${project.title} | Lissy Amador`,
      description: project.shortDescription,
      type: "article",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const roles = list(project.role);
  const organization = text(project.organization);
  const audience = text(project.audience);
  const context = text(project.context);
  const challenge = text(project.challenge);
  const objective = text(project.objective);
  const solution = text(project.solution);
  const tools = list(project.tools);
  const methodologies = list(project.methodologies);
  const deliverables = list(project.deliverables);
  const results = list(project.results);
  const learnings = text(project.learnings);
  const improvements = text(project.improvements);
  const visibleLinks = links(project.links);
  const missingLinks = pendingLinks(project.links);
  const videoIds = (project.videos ?? [])
    .map((video) => youTubeId(video))
    .filter((id): id is string => Boolean(id));
  const hasEvidence = Boolean(project.gallery?.length) || videoIds.length > 0;

  const sections: { title: string; content: ReactNode }[] = [];

  if (context) {
    sections.push({ title: "Contexto", content: <CaseText>{context}</CaseText> });
  }
  if (challenge) {
    sections.push({ title: "El reto", content: <CaseText>{challenge}</CaseText> });
  }
  if (objective) {
    sections.push({ title: "Objetivo", content: <CaseText>{objective}</CaseText> });
  }
  if (roles) {
    sections.push({
      title: "Mi rol",
      content: (
        <div>
          <div className="flex flex-wrap gap-2">
            {roles.map((role) => (
              <Tag key={role} tone="orange">
                {role}
              </Tag>
            ))}
          </div>
          {audience ? (
            <p className="mt-5 max-w-prose font-body text-base leading-relaxed text-navy/80">
              <span className="font-medium text-navy">Audiencia:</span>{" "}
              {audience}
            </p>
          ) : null}
        </div>
      ),
    });
  }
  if (project.process?.length) {
    sections.push({
      title: "Proceso",
      content: <ProcessFlow steps={project.process} />,
    });
  }
  if (solution) {
    sections.push({ title: "Solución", content: <CaseText>{solution}</CaseText> });
  }
  if (project.designDecisions?.length) {
    sections.push({
      title: "Decisiones de diseño",
      content: (
        <div>
          <div className="grid gap-4 sm:grid-cols-2">
            {project.designDecisions.map((decision) => (
              <article
                key={decision.title}
                className="rounded-xl border border-hairline bg-canvas p-5"
              >
                <h3 className="font-display text-base font-semibold tracking-tight text-navy">
                  {decision.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-muted text-pretty">
                  {decision.description}
                </p>
              </article>
            ))}
          </div>

          {methodologies ? (
            <div className="mt-8">
              <p className="label text-moss-dark">Metodologías y enfoques</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {methodologies.map((item) => (
                  <Tag key={item} tone="moss">
                    {item}
                  </Tag>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ),
    });
  } else if (methodologies) {
    sections.push({
      title: "Metodologías",
      content: (
        <div className="flex flex-wrap gap-2">
          {methodologies.map((item) => (
            <Tag key={item} tone="moss">
              {item}
            </Tag>
          ))}
        </div>
      ),
    });
  }
  if (project.pillars?.length) {
    sections.push({
      title: "Ejes del proyecto",
      content: (
        <div className="flex flex-wrap gap-2">
          {project.pillars.map((pillar) => (
            <Tag key={pillar} tone="mustard">
              {pillar}
            </Tag>
          ))}
        </div>
      ),
    });
  }
  if (tools) {
    sections.push({
      title: "Herramientas",
      content: (
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <Tag key={tool} tone="outline">
              {tool}
            </Tag>
          ))}
        </div>
      ),
    });
  }
  if (results || deliverables) {
    sections.push({
      title: results && deliverables ? "Resultados y entregables" : results ? "Resultados" : "Entregables",
      content: (
        <div className="space-y-8">
          {deliverables ? (
            <div>
              {results ? (
                <p className="label mb-3 text-moss-dark">Entregables</p>
              ) : null}
              <CaseList items={deliverables} />
            </div>
          ) : null}
          {results ? (
            <div>
              {deliverables ? (
                <p className="label mb-3 text-moss-dark">Resultados</p>
              ) : null}
              <CaseList items={results} />
            </div>
          ) : null}
        </div>
      ),
    });
  }
  if (hasEvidence || showPending) {
    sections.push({
      title: "Evidencias",
      content: (
        <div className="space-y-6">
          {project.gallery?.length ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {project.gallery.map((item) => (
                <figure
                  key={item.src}
                  className="overflow-hidden rounded-xl border border-hairline bg-canvas"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-auto w-full object-cover"
                  />
                </figure>
              ))}
            </div>
          ) : null}

          {videoIds.length ? (
            <div className="grid gap-6 lg:grid-cols-2">
              {videoIds.map((id) => (
                <VideoEmbed key={id} videoId={id} title={project.title} />
              ))}
            </div>
          ) : null}

          {!hasEvidence ? (
            <PendingNote>
              capturas, imágenes, videos o documentos del proyecto
            </PendingNote>
          ) : null}
        </div>
      ),
    });
  }
  if (learnings || improvements) {
    sections.push({
      title: "Reflexión profesional",
      content: (
        <div className="grid gap-5 md:grid-cols-2">
          {learnings ? (
            <div className="rounded-xl border border-hairline bg-canvas p-6">
              <h3 className="font-display text-base font-semibold tracking-tight text-navy">
                ¿Qué aprendí?
              </h3>
              <p className="mt-2.5 font-body text-sm leading-relaxed text-muted text-pretty">
                {learnings}
              </p>
            </div>
          ) : null}
          {improvements ? (
            <div className="rounded-xl border border-hairline bg-canvas p-6">
              <h3 className="font-display text-base font-semibold tracking-tight text-navy">
                ¿Qué mejoraría?
              </h3>
              <p className="mt-2.5 font-body text-sm leading-relaxed text-muted text-pretty">
                {improvements}
              </p>
            </div>
          ) : null}
        </div>
      ),
    });
  }
  if (visibleLinks.length) {
    sections.push({
      title: "Enlaces",
      content: (
        <div className="flex flex-wrap gap-3">
          {visibleLinks.map((link) => (
            <Button key={link.url} href={link.url} variant="secondary">
              {link.label}
            </Button>
          ))}
        </div>
      ),
    });
  }

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <header
        data-surface="dark"
        className="relative overflow-hidden bg-navy text-cream"
      >
        <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-moss/25 blur-3xl"
        />

        <Container className="relative py-14 md:py-20">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 font-body text-sm text-cream/70 transition-colors hover:text-cream"
          >
            <ArrowLeft aria-hidden className="h-4 w-4" />
            Proyectos
          </Link>

          <p className="label mt-8 text-mustard">{project.categoryLabel}</p>

          <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance md:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-cream/75 text-pretty">
            {project.shortDescription}
          </p>

          {organization || project.year || roles ? (
            <dl className="mt-10 grid gap-6 border-t border-cream/10 pt-8 sm:grid-cols-3">
              {roles ? (
                <div>
                  <dt className="label text-cream/40">Rol</dt>
                  <dd className="mt-2 font-body text-sm text-cream/85">
                    {roles.join(" · ")}
                  </dd>
                </div>
              ) : null}
              {organization ? (
                <div>
                  <dt className="label text-cream/40">Organización</dt>
                  <dd className="mt-2 font-body text-sm text-cream/85">
                    {organization}
                  </dd>
                </div>
              ) : null}
              {project.year ? (
                <div>
                  <dt className="label text-cream/40">Año</dt>
                  <dd className="mt-2 font-body text-sm text-cream/85">
                    {project.year}
                  </dd>
                </div>
              ) : null}
            </dl>
          ) : null}

          {visibleLinks.length ? (
            <div className="mt-10 flex flex-wrap gap-3">
              {visibleLinks.map((link) => (
                <Button key={link.url} href={link.url} variant="inverse">
                  {link.label}
                </Button>
              ))}
            </div>
          ) : null}

          {missingLinks.length ? (
            <PendingNote>
              URL de: {missingLinks.map((link) => link.label).join(", ")}
            </PendingNote>
          ) : null}
        </Container>
      </header>

      <div className="bg-cream">
        <Container className="py-6 md:py-10">
          {sections.length ? (
            sections.map((section, index) => (
              <CaseSection
                key={section.title}
                number={String(index + 1).padStart(2, "0")}
                title={section.title}
              >
                {section.content}
              </CaseSection>
            ))
          ) : (
            <p className="py-12 font-body text-base text-muted">
              El caso de estudio de este proyecto está en preparación.
            </p>
          )}
        </Container>
      </div>

      <section className="border-y border-hairline bg-canvas py-12">
        <Container>
          <Link
            href={`/proyectos/${nextProject.slug}`}
            className="group flex flex-col gap-2 rounded-2xl border border-hairline bg-cream p-6 transition-all duration-300 ease-soft hover:border-orange/40 hover:shadow-card md:flex-row md:items-center md:justify-between"
          >
            <div>
              <span className="label text-moss-dark">Siguiente proyecto</span>
              <p className="mt-2 font-display text-xl font-semibold tracking-tight text-navy">
                {nextProject.title}
              </p>
            </div>
            <ArrowRight
              aria-hidden
              className="h-5 w-5 text-navy transition-transform duration-300 ease-soft group-hover:translate-x-1"
            />
          </Link>
        </Container>
      </section>

      <CtaBand
        title="¿Te interesa este tipo de trabajo?"
        primary={{ href: "/contacto", label: "Hablemos" }}
        secondary={{ href: "/proyectos", label: "Ver más proyectos" }}
      />
    </>
  );
}
