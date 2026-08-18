import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

const variants = {
  /** Naranja sobre texto azul marino: el acento de acción, con contraste 5:1. */
  primary: "bg-orange text-navy hover:bg-orange-hover shadow-sm hover:shadow-card",
  secondary:
    "border border-navy/20 bg-cream text-navy hover:border-navy/50 hover:shadow-card",
  mustard: "bg-mustard text-navy hover:bg-mustard/85 shadow-sm hover:shadow-card",
  inverse: "bg-cream text-navy hover:bg-mustard-tint",
  outlineInverse:
    "border border-cream/25 text-cream hover:border-cream/60 hover:bg-cream/10",
  quiet: "text-navy hover:text-moss-dark",
} as const;

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-sm md:text-base",
} as const;

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  showIcon = true,
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  showIcon?: boolean;
  external?: boolean;
}) {
  const isExternal = external ?? /^(https?:|mailto:|tel:)/.test(href);
  const base = `group inline-flex items-center gap-2 rounded-full font-body font-medium transition-all duration-300 ease-soft ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {showIcon ? (
        isExternal ? (
          <ArrowUpRight
            aria-hidden
            className="h-4 w-4 transition-transform duration-300 ease-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        ) : (
          <ArrowRight
            aria-hidden
            className="h-4 w-4 transition-transform duration-300 ease-soft group-hover:translate-x-1"
          />
        )
      ) : null}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
        className={base}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={base}>
      {content}
    </Link>
  );
}
