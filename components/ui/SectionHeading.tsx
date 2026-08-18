import type { ReactNode } from "react";

const labelTones = {
  navy: "text-navy",
  moss: "text-moss-dark",
  orange: "text-orange-dark",
  mustard: "text-mustard-dark",
} as const;

export default function SectionHeading({
  label,
  title,
  description,
  align = "left",
  tone = "light",
  labelTone = "moss",
  children,
}: {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  labelTone?: keyof typeof labelTones;
  children?: ReactNode;
}) {
  const isDark = tone === "dark";

  return (
    <div
      className={`flex flex-col gap-4 ${
        align === "center" ? "items-center text-center" : "items-start"
      }`}
    >
      {label ? (
        <span
          className={`label ${isDark ? "text-mustard" : labelTones[labelTone]}`}
        >
          {label}
        </span>
      ) : null}

      <h2
        className={`max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight text-balance md:text-4xl ${
          isDark ? "text-cream" : "text-navy"
        }`}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={`max-w-2xl font-body text-base leading-relaxed text-pretty ${
            isDark ? "text-cream/70" : "text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}

      {children}
    </div>
  );
}
