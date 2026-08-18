"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import { navigation, site } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-cream/90 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between gap-6 md:h-20">
          <Link
            href="/"
            className="font-display text-base font-semibold uppercase tracking-[0.12em] text-navy transition-colors hover:text-moss-dark"
          >
            {site.name}
          </Link>

          <nav aria-label="Navegación principal" className="hidden md:block">
            <ul className="flex items-center gap-2">
              {navigation.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`inline-flex items-center rounded-[16px] px-[14px] py-[7px] font-body text-sm uppercase tracking-[0.5px] transition-colors duration-300 ${
                        active
                          ? "bg-navy font-semibold text-cream"
                          : "font-medium text-muted hover:text-navy"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contacto"
              className="hidden rounded-full bg-orange px-5 py-2.5 font-body text-sm font-medium text-navy transition-colors duration-300 hover:bg-orange-hover md:inline-flex"
            >
              Hablemos
            </Link>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="menu-movil"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-cream text-navy transition-colors hover:border-navy/30 md:hidden"
            >
              {open ? (
                <X aria-hidden className="h-5 w-5" />
              ) : (
                <Menu aria-hidden className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </Container>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id="menu-movil"
            initial={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            animate={reduceMotion ? undefined : { height: "auto", opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-hairline bg-cream md:hidden"
          >
            <Container className="py-4">
              <nav aria-label="Navegación principal móvil">
                <ul className="flex flex-col gap-1">
                  {navigation.map((item) => {
                    const active = isActive(item.href);
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          aria-current={active ? "page" : undefined}
                          className={`inline-flex items-center rounded-[16px] px-[14px] py-[7px] font-body text-sm uppercase tracking-[0.5px] transition-colors duration-300 ${
                            active
                              ? "bg-navy font-semibold text-cream"
                              : "font-medium text-muted"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <Link
                href="/contacto"
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-orange px-5 py-3 font-body text-sm font-medium text-navy transition-colors hover:bg-orange-hover"
              >
                Hablemos
              </Link>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
