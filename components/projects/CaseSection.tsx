import type { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";

export default function CaseSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-hairline py-12 first:border-t-0 md:py-16">
      <Reveal>
        <div className="grid gap-6 md:grid-cols-[13rem_1fr] md:gap-12">
          <div>
            <span className="label text-mustard-dark">{number}</span>
            <h2 className="mt-2 font-display text-xl font-semibold tracking-tight text-navy md:text-2xl">
              {title}
            </h2>
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

export function CaseList({ items }: { items: string[] }) {
  return (
    <ul className="max-w-prose space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 font-body text-base leading-relaxed text-navy/80"
        >
          <span
            aria-hidden
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-moss"
          />
          <span className="text-pretty">{item}</span>
        </li>
      ))}
    </ul>
  );
}
