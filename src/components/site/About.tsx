import { Check } from "lucide-react";

import { services, siteConfig } from "@/config/site";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const { about } = siteConfig;

  return (
    <section id="nosotros" className="bg-mist py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 lg:order-1">
          <figure className="overflow-hidden rounded-3xl bg-navy shadow-card">
            <img src="/images/nosotros-asesoria-ilustrativa.webp" alt="Asesor técnico revisando un sistema hidráulico — imagen ilustrativa" loading="lazy" className="h-auto w-full object-contain" />
            <figcaption className="bg-navy px-4 py-2 text-center text-xs text-white/80">Asesoría y soluciones para el agua · Imagen ilustrativa</figcaption>
          </figure>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading eyebrow="Nosotros" title={about.title} align="left" />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.id} className="flex items-start gap-3 font-medium text-navy">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-water text-primary-foreground">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                {s.shortTitle}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
