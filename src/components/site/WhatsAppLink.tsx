import type { ReactNode } from "react";
import { toast } from "sonner";

import { Button, type ButtonProps } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const whatsappConfigured = buildWhatsAppUrl(siteConfig.whatsappNumber, "x") !== null;

export function notifyWhatsAppPending() {
  toast.warning("WhatsApp pendiente de configuración", {
    description: "El número de WhatsApp de HydroZen aún no se ha agregado a la página.",
  });
}

/** Opens WhatsApp with a message; returns false when the number isn't configured yet. */
export function openWhatsApp(message: string): boolean {
  const url = buildWhatsAppUrl(siteConfig.whatsappNumber, message);
  if (!url) {
    notifyWhatsAppPending();
    return false;
  }
  window.open(url, "_blank", "noopener,noreferrer");
  return true;
}

interface WhatsAppLinkProps extends Omit<ButtonProps, "asChild" | "onClick"> {
  message: string;
  children: ReactNode;
}

/** Button that opens WhatsApp — never links to a fictitious number. */
export function WhatsAppLink({ message, children, ...buttonProps }: WhatsAppLinkProps) {
  const url = buildWhatsAppUrl(siteConfig.whatsappNumber, message);
  if (url) {
    return (
      <Button asChild {...buttonProps}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      </Button>
    );
  }
  return (
    <Button type="button" onClick={notifyWhatsAppPending} {...buttonProps}>
      {children}
    </Button>
  );
}
