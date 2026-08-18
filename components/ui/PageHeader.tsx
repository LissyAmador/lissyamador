import type { ReactNode } from "react";
import Container from "./Container";

const labelTones = {
  moss: "text-moss-dark",
  orange: "text-orange-dark",
  mustard: "text-mustard-dark",
} as const;

const glows = {
  moss: "bg-moss-tint",
  orange: "bg-orange-tint",
  mustard: "bg-mustard-tint",
} as const;

export default function PageHeader({
  label,
  title,
  description,
  tone = "moss",
  action,
}: {
  label?: string;
  title: string;
  description?: string;
  tone?: keyof typeof labelTones;
  /** Acción secundaria alineada a la derecha, como descargar el CV. */
  action?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-hairline bg-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-light opacity-70"
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl ${glows[tone]}`}
      />
      <Container className="relative py-16 md:py-24">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-12">
          <div>
            {label ? (
              <span className={`label ${labelTones[tone]}`}>{label}</span>
            ) : null}
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-navy text-balance md:text-6xl">
              {title}
            </h1>
            <div aria-hidden className="mt-6 flex h-1 w-24 gap-1">
              <span className="h-full flex-[6] rounded-full bg-navy" />
              <span className="h-full flex-[3] rounded-full bg-moss" />
              <span className="h-full flex-1 rounded-full bg-mustard" />
            </div>
            {description ? (
              <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-muted text-pretty">
                {description}
              </p>
            ) : null}
          </div>

          {action ? <div className="shrink-0">{action}</div> : null}
        </div>
      </Container>
    </header>
  );
}
