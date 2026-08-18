import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";
import Tag from "@/components/ui/Tag";
import { list } from "@/lib/content";
import type { ProjectSummary } from "@/data/types";

const covers = {
  "Diseño instruccional": "bg-navy",
  "Tecnología & Programación": "bg-navy-soft",
  "Educación & STEM": "bg-moss",
  Colaboraciones: "bg-moss-dark",
} as const;

function initials(title: string): string {
  return title
    .split(/\s+/)
    .filter((word) => word.length > 3)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("");
}

export default function ProjectCard({
  project,
  index,
}: {
  project: ProjectSummary;
  index?: number;
}) {
  const tags = list(project.tags);
  const cover = covers[project.category[0]] ?? "bg-navy";

  return (
    <article className="group h-full">
      <Link
        href={`/proyectos/${project.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-cream shadow-card transition-all duration-300 ease-soft hover:-translate-y-1 hover:border-orange/40 hover:shadow-lift"
      >
        <div className={`relative aspect-[16/10] w-full overflow-hidden ${cover}`}>
          {project.image ? (
            <Image
              src={project.image}
              alt={`Vista del proyecto ${project.title}`}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover transition-transform duration-500 ease-soft group-hover:scale-[1.03]"
            />
          ) : (
            <>
              <div aria-hidden className="absolute inset-0 bg-grid opacity-50" />
              <div
                aria-hidden
                className="absolute -bottom-12 -right-8 h-40 w-40 rounded-full bg-orange/25 blur-2xl transition-transform duration-500 ease-soft group-hover:scale-110"
              />
              <span
                aria-hidden
                className="absolute left-6 top-5 font-display text-sm font-medium text-mustard"
              >
                {typeof index === "number"
                  ? String(index + 1).padStart(2, "0")
                  : null}
              </span>
              <span
                aria-hidden
                className="absolute bottom-5 left-6 font-display text-4xl font-semibold tracking-tight text-cream/90"
              >
                {initials(project.title) || project.title[0]}
              </span>
            </>
          )}

          {project.comingSoon ? (
            <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-cream/95 px-3 py-1 font-body text-xs font-medium text-navy">
              <Clock3 aria-hidden className="h-3.5 w-3.5" />
              Próximamente
            </span>
          ) : null}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="label text-moss-dark">{project.categoryLabel}</p>

          <h3 className="mt-3 font-display text-xl font-semibold leading-snug tracking-tight text-navy transition-colors group-hover:text-moss-dark">
            {project.title}
          </h3>

          <p className="mt-3 font-body text-sm leading-relaxed text-muted text-pretty">
            {project.shortDescription}
          </p>

          {tags ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Tag key={tag} tone="moss">
                  {tag}
                </Tag>
              ))}
            </div>
          ) : null}

          <span className="mt-6 inline-flex items-center gap-2 font-body text-sm font-medium text-navy transition-colors group-hover:text-orange-dark">
            Ver caso de estudio
            <ArrowRight
              aria-hidden
              className="h-4 w-4 transition-transform duration-300 ease-soft group-hover:translate-x-1"
            />
          </span>
        </div>
      </Link>
    </article>
  );
}
