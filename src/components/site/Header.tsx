import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navLinks, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { WhatsAppLink } from "./WhatsAppLink";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-navy-deep/95 shadow-lg backdrop-blur-md"
          : "bg-gradient-to-b from-navy-deep/80 to-transparent",
      )}
    >
      <div className="mx-auto grid h-18 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:flex lg:justify-between">
        <a href="#inicio" aria-label={`${siteConfig.name} — inicio`} className="min-w-0">
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className="rounded-full px-3 py-2 text-sm font-medium text-navy-foreground/85 transition-colors hover:bg-navy-foreground/10 hover:text-navy-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <WhatsAppLink
            message={siteConfig.messages.quote}
            variant="hero"
            size="sm"
            className="hidden h-10 rounded-full px-4 sm:inline-flex"
          >
            <WhatsAppIcon className="size-4" />
            Cotizar
          </WhatsAppLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="grid size-11 place-items-center rounded-full text-navy-foreground transition-colors hover:bg-navy-foreground/10 lg:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Menú móvil" className="border-t border-navy-foreground/10 lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3.5 text-base font-medium text-navy-foreground/90 hover:bg-navy-foreground/10"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
