import { describe, expect, it } from "vitest";

import { services, siteConfig } from "@/config/site";
import { buildContactMessage, buildWhatsAppUrl } from "./whatsapp";

describe("WhatsApp links", () => {
  it("does not open any number while the WhatsApp number is not configured", () => {
    expect(buildWhatsAppUrl("", "Hola")).toBeNull();
    expect(buildWhatsAppUrl("123", "Hola")).toBeNull();
  });

  it("opens wa.me with the configured number and the pre-filled message", () => {
    const url = buildWhatsAppUrl("+52 1 55 1234 5678", siteConfig.messages.quote);
    expect(url).toBe(
      "https://wa.me/5215512345678?text=" + encodeURIComponent(siteConfig.messages.quote),
    );
  });

  it("uses the exact quote message requested", () => {
    expect(siteConfig.messages.quote).toBe(
      "Hola, vi la página de HydroZen y me gustaría solicitar una cotización.",
    );
  });

  it("builds the contact form message with all captured fields", () => {
    const msg = buildContactMessage({
      name: "Ana López",
      phone: "5512345678",
      service: "Purificación de Agua",
      message: "Un sistema bajo tarja",
    });
    expect(msg).toBe(
      "Hola HydroZen, mi nombre es Ana López.\nEstoy interesado en: Purificación de Agua.\nMi teléfono es: 5512345678.\nNecesito lo siguiente: Un sistema bajo tarja.\nMe gustaría recibir una cotización.",
    );
  });
});

describe("Service catalog", () => {
  it("offers exactly the six defined services", () => {
    expect(services.map((s) => s.title)).toEqual([
      "Instalación de Cisternas Verticales",
      "Filtración de Sedimentos",
      "Sistemas para Control de Sarro",
      "Purificación de Agua",
      "Sistemas de Ósmosis Inversa",
      "Indicadores Electrónicos de Nivel de Agua",
    ]);
  });

  it("never offers tinacos, underground cisterns or consumption meters", () => {
    const text = services.map((s) => `${s.title} ${s.description}`).join(" ").toLowerCase();
    expect(text).not.toContain("tinaco");
    expect(text).not.toContain("subterr");
    expect(text).not.toContain("medidor");
  });
});
