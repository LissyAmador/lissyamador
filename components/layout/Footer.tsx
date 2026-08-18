import Link from "next/link";
import { Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import SocialLinks from "@/components/ui/SocialLinks";
import PendingNote from "@/components/ui/PendingNote";
import { navigation, site, socials } from "@/data/site";
import { text } from "@/lib/content";

export default function Footer() {
  const email = text(site.email);
  const hasEmailAddress = Boolean(email?.includes("@"));
  const missingSocials = socials
    .filter((social) => !social.url)
    .map((social) => `URL de ${social.label}`);
  const pending = [
    ...missingSocials,
    !hasEmailAddress ? "correo profesional" : null,
  ].filter(Boolean);

  return (
    <footer
      data-surface="dark"
      className="relative overflow-hidden bg-navy text-cream"
    >
      {/* Firma de color de la marca */}
      <div aria-hidden className="flex h-1 w-full">
        <span className="h-full flex-[6] bg-moss" />
        <span className="h-full flex-[2] bg-mustard" />
        <span className="h-full flex-1 bg-orange" />
      </div>

      <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />

      <Container className="relative py-14 md:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div>
            <p className="font-display text-2xl font-semibold uppercase tracking-[0.12em]">
              {site.name}
            </p>
            <p className="mt-3 font-body text-sm text-cream/60">
              {site.tagline}
            </p>

            <SocialLinks tone="dark" className="mt-7" />

            {hasEmailAddress ? (
              <a
                href={`mailto:${email}`}
                className="mt-5 inline-flex items-center gap-2 font-body text-sm text-cream/75 transition-colors hover:text-mustard"
              >
                <Mail aria-hidden className="h-4 w-4" />
                {email}
              </a>
            ) : null}

            {pending.length ? (
              <PendingNote>{pending.join(", ")} en data/site.ts</PendingNote>
            ) : null}
          </div>

          <nav aria-label="Navegación del pie de página">
            <p className="label text-cream/40">Navegación</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-10 gap-y-3 md:grid-cols-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline font-body text-sm text-cream/75 transition-colors hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-cream/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-body text-xs text-cream/45">
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="label text-cream/35">{site.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
