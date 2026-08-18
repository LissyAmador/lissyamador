import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Tag from "@/components/ui/Tag";
import { list, text } from "@/lib/content";
import type { Experience } from "@/data/types";

export default function Timeline({ items }: { items: Experience[] }) {
  const visible = items.filter((item) => text(item.role));

  if (!visible.length) {
    return (
      <p className="rounded-2xl border border-dashed border-hairline bg-cream p-8 font-body text-sm text-muted">
        La trayectoria profesional se publicará próximamente.
      </p>
    );
  }

  return (
    <ol className="relative space-y-5 border-l-2 border-navy/25 pl-6 md:pl-10">
      {visible.map((item, index) => {
        const role = text(item.role) as string;
        const organization = text(item.organization);
        const organizations = list(item.organizations);
        const focus = list(item.focus);
        const responsibilities = list(item.responsibilities);
        const achievements = list(item.achievements);

        return (
          <li key={`${role}-${index}`} className="relative">
            <span
              aria-hidden
              className={`absolute -left-[1.71rem] top-7 h-3 w-3 rounded-full border-2 border-canvas md:-left-[2.96rem] ${
                item.highlight ? "bg-orange" : "bg-hairline"
              }`}
            />

            <Reveal delay={index * 0.05}>
              <article
                className={`rounded-2xl border bg-cream p-6 md:p-7 ${
                  item.highlight
                    ? "border-moss/40 shadow-card"
                    : "border-hairline"
                }`}
              >
                <h3 className="font-display text-xl font-semibold tracking-tight text-navy">
                  {role}
                </h3>

                {organization ? (
                  <p className="mt-1.5 font-body text-sm text-moss-dark">
                    {organization}
                  </p>
                ) : null}

                {organizations ? (
                  <div className="mt-4">
                    <p className="label text-moss-dark">Instituciones</p>
                    <ul className="mt-2.5 space-y-1.5">
                      {organizations.map((entity) => (
                        <li
                          key={entity}
                          className="flex gap-2.5 font-body text-sm text-navy/80"
                        >
                          <span
                            aria-hidden
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy"
                          />
                          {entity}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {focus ? (
                  <div className="mt-4">
                    {organizations ? (
                      <p className="label text-moss-dark">Áreas</p>
                    ) : null}
                    <div
                      className={`flex flex-wrap gap-2 ${organizations ? "mt-2.5" : ""}`}
                    >
                      {focus.map((tag) => (
                        <Tag
                          key={tag}
                          tone={item.highlight ? "moss" : "outline"}
                        >
                          {tag}
                        </Tag>
                      ))}
                    </div>
                  </div>
                ) : null}

                {responsibilities ? (
                  <div className="mt-5">
                    <p className="label text-moss-dark">Responsabilidades</p>
                    <ul className="mt-3 space-y-2">
                      {responsibilities.map((responsibility) => (
                        <li
                          key={responsibility}
                          className="flex gap-3 font-body text-sm leading-relaxed text-navy/80"
                        >
                          <span
                            aria-hidden
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-moss"
                          />
                          <span className="text-pretty">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {achievements ? (
                  <div className="mt-5">
                    <p className="label text-moss-dark">Logros</p>
                    <ul className="mt-3 space-y-2">
                      {achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex gap-3 font-body text-sm leading-relaxed text-navy/80"
                        >
                          <span
                            aria-hidden
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mustard"
                          />
                          <span className="text-pretty">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {item.projectSlug ? (
                  <Link
                    href={`/proyectos/${item.projectSlug}`}
                    className="group mt-6 inline-flex items-center gap-2 font-body text-sm font-medium text-navy transition-colors hover:text-orange-dark"
                  >
                    Ver caso de estudio
                    <ArrowUpRight
                      aria-hidden
                      className="h-4 w-4 transition-transform duration-300 ease-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                ) : null}
              </article>
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}
