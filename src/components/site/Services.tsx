import { Check } from "lucide-react";

import { services, siteConfig, type Service, type ServiceId } from "@/config/site";
import { buildServiceQuoteMessage } from "@/lib/whatsapp";
import { SectionHeading } from "./SectionHeading";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { WhatsAppLink } from "./WhatsAppLink";

const desktopColumns: ServiceId[][] = [
  ["cisternas", "osmosis"],
  ["filtracion", "sarro"],
  ["purificacion", "indicadores"],
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group mb-6 flex break-inside-avoid flex-col overflow-hidden rounded-3xl border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      {service.photo ? (
        // Las imágenes promocionales llevan logotipo y texto: se muestran completas, con su proporción original.
        <img
          src={service.photo.src}
          alt={service.photo.alt}
          width={service.photo.width}
          height={service.photo.height}
          loading="lazy"
          className="block h-auto w-full object-contain"
        />
      ) : (
        <div className="bg-navy-gradient grid h-28 place-items-center">
          <img
            src={siteConfig.logo.mark}
            alt=""
            aria-hidden="true"
            width={303}
            height={320}
            loading="lazy"
            className="h-16 w-auto"
          />
        </div>
      )}

      <div className="flex flex-col p-6 sm:p-7">
        <h3 className="text-xl font-bold text-navy sm:text-2xl">{service.title}</h3>
        <p className="mt-3 leading-relaxed text-muted-foreground">{service.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {service.highlights.map((h) => (
            <li
              key={h}
              className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-sm font-medium text-accent-foreground"
            >
              <Check className="size-3.5 text-ocean" strokeWidth={3} />
              {h}
            </li>
          ))}
        </ul>
        <WhatsAppLink
          message={buildServiceQuoteMessage(service.title)}
          variant="navy"
          size="lg"
          className="mt-6 h-12 w-full rounded-full sm:w-auto sm:self-start"
        >
          <WhatsAppIcon />
          Solicitar cotización
        </WhatsAppLink>
      </div>
    </article>
  );
}

export function Services() {
  return (
    <section id="servicios" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Servicios"
          title="Nuestros servicios"
          description="Seis soluciones para el tratamiento, almacenamiento y monitoreo del agua en tu hogar o negocio."
        />
        {/* Móvil y tableta: una o dos columnas en el orden del catálogo. */}
        <div className="mt-14 columns-1 gap-6 md:columns-2 lg:hidden">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
        {/* Escritorio: tres columnas repartidas para que queden parejas, aunque las imágenes tengan proporciones distintas. */}
        <div className="mt-14 hidden items-start gap-6 lg:grid lg:grid-cols-3">
          {desktopColumns.map((ids, i) => (
            <div key={i}>
              {ids.map((id) => (
                <ServiceCard key={id} service={services.find((s) => s.id === id)!} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
