import type { ReactNode } from "react";

/**
 * Cada tono combina un fondo suave con su borde del mismo color, para que los
 * grupos de etiquetas puedan alternar acentos sin que ninguno domine.
 */
const tones = {
  navy: "border border-navy/15 bg-navy/5 text-navy",
  moss: "border border-moss/30 bg-moss-tint text-moss-dark",
  orange: "border border-orange/35 bg-orange-tint text-orange-dark",
  mustard: "border border-mustard/40 bg-mustard-tint text-mustard-dark",
  outline: "border border-hairline bg-cream text-muted",
  inverse: "border border-cream/20 bg-cream/10 text-cream",
} as const;

export default function Tag({
  children,
  tone = "navy",
  className = "",
}: {
  children: ReactNode;
  tone?: keyof typeof tones;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 font-body text-xs font-medium leading-5 ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
