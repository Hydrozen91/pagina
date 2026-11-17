import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { WhatsAppLink, whatsappConfigured } from "./WhatsAppLink";

export function QuoteCTA() {
  return (
    <section id="cotizacion" className="bg-navy-gradient relative isolate overflow-hidden py-20 sm:py-28">
      <div className="absolute -left-24 top-10 -z-10 size-80 rounded-full bg-turquoise/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-20 bottom-0 -z-10 size-96 rounded-full bg-ocean/30 blur-3xl" aria-hidden="true" />
      <svg
        className="absolute inset-x-0 bottom-0 -z-10 h-24 w-full text-turquoise/20"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path fill="currentColor" d="M0 64c180 40 360 40 540 8s360-56 540-24 270 56 360 40v32H0z" />
      </svg>

      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <img src={siteConfig.logo.full} alt="HydroZen — Soluciones en agua" width={860} height={730} className="mx-auto h-28 w-auto max-w-full object-contain" />
        <h2 className="mt-6 text-3xl font-bold leading-tight text-navy-foreground sm:text-4xl lg:text-5xl">
          {siteConfig.quote.title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-navy-foreground/80">
          {siteConfig.quote.subtitle}
        </p>
        <WhatsAppLink
          message={siteConfig.messages.quote}
          variant="hero"
          size="xl"
          className="mt-10 h-16 w-full whitespace-normal px-8 text-base sm:w-auto sm:text-lg"
        >
          <WhatsAppIcon />
          Solicitar cotización por WhatsApp
        </WhatsAppLink>
        {!whatsappConfigured && (
          <p className="mt-4 text-sm text-navy-foreground/60">
            Número de WhatsApp pendiente de configuración.
          </p>
        )}
      </div>
    </section>
  );
}
