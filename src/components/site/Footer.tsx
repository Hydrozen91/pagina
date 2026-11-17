import { Facebook, Instagram, Mail, ShieldCheck, Music2 } from "lucide-react";
import type { ReactNode } from "react";

import { services, siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

const quickLinks = [
  { id: "inicio", label: "Inicio" },
  { id: "nosotros", label: "Nosotros" },
  { id: "servicios", label: "Servicios" },
  { id: "galeria", label: "Galería" },
  { id: "contacto", label: "Contacto" },
];

function ContactRow({ icon, label, href }: { icon: ReactNode; label: string; href: string | null }) {
  const content = (
    <>
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/10 text-turquoise [&_svg]:size-6">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-medium text-navy-foreground">{label}</span>
        {!href && <span className="block text-xs text-navy-foreground/55">Próximamente</span>}
      </span>
    </>
  );
  return (
    <li>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-turquoise">
          {content}
        </a>
      ) : (
        <span className="flex items-center gap-3">{content}</span>
      )}
    </li>
  );
}

export function Footer() {
  const wa = buildWhatsAppUrl(siteConfig.whatsappNumber, siteConfig.messages.quote);
  return (
    <footer className="bg-navy-deep text-navy-foreground/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={siteConfig.logo.full} alt={`${siteConfig.name} — ${siteConfig.slogan}`} width={860} height={730} loading="lazy" className="h-24 w-auto" />
          <p className="mt-5 max-w-xs leading-relaxed">
            Soluciones para el tratamiento, almacenamiento y monitoreo del agua en tu hogar o negocio.
          </p>
        </div>

        <nav aria-label="Enlaces rápidos">
          <h3 className="font-display text-lg font-semibold text-navy-foreground">Enlaces rápidos</h3>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="hover:text-turquoise">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-lg font-semibold text-navy-foreground">Servicios</h3>
          <ul className="mt-5 space-y-3">
            {services.map((s) => (
              <li key={s.id}>
                <a href="#servicios" className="hover:text-turquoise">{s.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-navy-foreground">Contacto</h3>
          <ul className="mt-5 space-y-4">
            <ContactRow icon={<WhatsAppIcon className="size-4" />} label="WhatsApp" href={wa} />
            <ContactRow
              icon={<Mail className="size-4" />}
              label={siteConfig.email || "Correo electrónico"}
              href={siteConfig.email ? `mailto:${siteConfig.email}` : null}
            />
            <ContactRow icon={<Facebook className="text-blue-400" />} label="Facebook: HydroZen Soluciones en Agua" href={siteConfig.social.facebook || null} />
            <ContactRow icon={<Instagram className="text-pink-400" />} label="Instagram: Hydrozen_México" href={siteConfig.social.instagram || null} />
            <ContactRow icon={<Music2 className="text-white" />} label="TikTok: hydrozen.mexico" href={siteConfig.social.tiktok || null} />
            <ContactRow icon={<ShieldCheck className="size-4" />} label="Aviso de privacidad" href={siteConfig.privacyNoticeUrl || null} />
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10">
        <p className="mx-auto max-w-7xl px-4 py-6 text-sm text-navy-foreground/60 sm:px-6">
          © {new Date().getFullYear()} {siteConfig.name} — {siteConfig.slogan}
        </p>
      </div>
    </footer>
  );
}
