/** Returns the digits of a WhatsApp number, or null when it isn't configured/valid. */
export function normalizeWhatsAppNumber(raw: string | undefined | null): string | null {
  const digits = (raw ?? "").replace(/\D/g, "");
  // E.164 allows up to 15 digits; anything shorter than 10 can't be a real number.
  if (digits.length < 10 || digits.length > 15) return null;
  return digits;
}

/** Builds a wa.me link, or null when no real number is configured (never a fictitious one). */
export function buildWhatsAppUrl(number: string | undefined | null, message: string): string | null {
  const digits = normalizeWhatsAppNumber(number);
  if (!digits) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export interface ContactRequest {
  name: string;
  phone: string;
  service: string;
  message: string;
}

export function buildContactMessage({ name, phone, service, message }: ContactRequest): string {
  return [
    `Hola HydroZen, mi nombre es ${name.trim()}.`,
    `Estoy interesado en: ${service.trim()}.`,
    `Mi teléfono es: ${phone.trim()}.`,
    `Necesito lo siguiente: ${message.trim() || "Sin detalles adicionales"}.`,
    "Me gustaría recibir una cotización.",
  ].join("\n");
}

export function buildServiceQuoteMessage(serviceTitle: string): string {
  return `Hola, vi la página de HydroZen y me gustaría solicitar una cotización del servicio: ${serviceTitle}.`;
}
