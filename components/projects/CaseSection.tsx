import type { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";

const accents = {
  navy: {
    number: "text-navy",
    rule: "bg-navy",
    dot: "bg-navy",
  },
  moss: {
    number: "text-moss-dark",
    rule: "bg-moss",
    dot: "bg-moss",
  },
  orange: {
    number: "text-orange-dark",
    rule: "bg-orange",
    dot: "bg-orange",
  },
  mustard: {
    number: "text-mustard-dark",
    rule: "bg-mustard",
    dot: "bg-mustard",
  },
} as const;

export type CaseAccent = keyof typeof accents;

export const caseAccentOrder: CaseAccent[] = [
  "navy",
  "orange",
  "moss",
  "mustard",
];

export default function CaseSection({
  number,
  title,
  accent = "navy",
  children,
}: {
  number: string;
  title: string;
  accent?: CaseAccent;
  children: ReactNode;
}) {
  const tone = accents[accent];

  return (
    <section className="border-t border-hairline py-12 first:border-t-0 md:py-16">
      <Reveal>
        <div className="grid gap-6 md:grid-cols-[13rem_1fr] md:gap-12">
          <div>
            <span className={`label ${tone.number}`}>{number}</span>
            <h2 className="mt-2 font-display text-xl font-semibold tracking-tight text-navy md:text-2xl">
              {title}
            </h2>
            <span
              aria-hidden
              className={`mt-3 block h-1 w-12 rounded-full ${tone.rule}`}
            />
          </div>
          <div className="min-w-0">{children}</div>
        </div>
      </Reveal>
    </section>
  );
}

export function CaseText({ children }: { children: string }) {
  return (
    <p className="max-w-prose font-body text-base leading-relaxed text-navy/80 text-pretty md:text-lg">
      {children}
    </p>
  );
}

export function CaseList({
  items,
  accent = "moss",
}: {
  items: string[];
  accent?: CaseAccent;
}) {
  const tone = accents[accent];

  return (
    <ul className="max-w-prose space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 font-body text-base leading-relaxed text-navy/80"
        >
          <span
            aria-hidden
            className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${tone.dot}`}
          />
          <span className="text-pretty">{item}</span>
        </li>
      ))}
    </ul>
  );
}
