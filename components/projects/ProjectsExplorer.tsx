"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import type { ProjectCategory, ProjectSummary } from "@/data/types";

type Filter = "Todos" | ProjectCategory;

export default function ProjectsExplorer({
  projects,
  categories,
}: {
  projects: ProjectSummary[];
  categories: Filter[];
}) {
  const [active, setActive] = useState<Filter>("Todos");
  const reduceMotion = useReducedMotion();

  const visible = useMemo(
    () =>
      active === "Todos"
        ? projects
        : projects.filter((project) => project.category.includes(active)),
    [active, projects]
  );

  return (
    <div>
      <div
        role="group"
        aria-label="Filtrar proyectos por categoría"
        className="flex flex-wrap gap-2.5"
      >
        {categories.map((category) => {
          const isActive = category === active;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={isActive}
              className={`rounded-full border px-4 py-2 font-body text-sm transition-colors duration-300 ${
                isActive
                  ? "border-navy bg-navy text-cream"
                  : "border-hairline bg-cream text-muted hover:border-navy/30 hover:text-navy"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <p className="mt-6 font-body text-sm text-muted" aria-live="polite">
        {visible.length}{" "}
        {visible.length === 1 ? "proyecto" : "proyectos"}
        {active === "Todos" ? "" : ` en ${active}`}
      </p>

      <div className="mt-6 grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))]">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project, index) => (
            <motion.div
              key={project.slug}
              layout={!reduceMotion}
              initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {visible.length === 0 ? (
        <p className="mt-4 rounded-2xl border border-dashed border-hairline bg-cream p-8 text-center font-body text-sm text-muted">
          Todavía no hay proyectos publicados en esta categoría.
        </p>
      ) : null}
    </div>
  );
}
