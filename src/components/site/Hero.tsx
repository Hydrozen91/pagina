import { ArrowDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { WhatsAppLink } from "./WhatsAppLink";

export function Hero() {
  const { hero } = siteConfig;
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-navy-deep md:items-center"
    >
      <img
        src={hero.photo.src}
        alt={hero.photo.alt}
        width={hero.photo.width}
        height={hero.photo.height}
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[35%_18%] md:left-auto md:right-0 md:w-[62%] md:object-[50%_22%] md:[mask-image:linear-gradient(to_right,transparent,black_20%)] lg:w-[60%]"
      />
      <div className="bg-hero-overlay absolute inset-0 -z-10" aria-hidden="true" />

      <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 md:py-32">
        <div className="max-w-xl animate-fade-up">
          <p className="eyebrow flex items-center gap-3 text-turquoise">
            <span className="h-px w-10 bg-turquoise" aria-hidden="true" />
            Tratamiento · Almacenamiento · Monitoreo
          </p>
          <h1 className="mt-6">
            <span className="sr-only">HydroZen — Soluciones en agua</span>
            <img
              src={siteConfig.logo.full}
              alt=""
              width={850}
              height={720}
              className="block h-auto w-[220px] max-w-full drop-shadow-[0_4px_18px_rgba(0,0,0,0.35)] sm:w-[260px] md:w-[300px]"
            />
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-navy-foreground/85">
            {hero.tagline}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="hero-outline" size="xl">
              <a href="#servicios">
                Conoce nuestros servicios
                <ArrowDown />
              </a>
            </Button>
            <WhatsAppLink message={siteConfig.messages.quote} variant="hero" size="xl">
              <WhatsAppIcon />
              Solicita tu cotización
            </WhatsAppLink>
          </div>
        </div>
      </div>
    </section>
  );
}
