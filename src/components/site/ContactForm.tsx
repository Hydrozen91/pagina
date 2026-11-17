import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { services, siteConfig } from "@/config/site";
import { buildContactMessage } from "@/lib/whatsapp";
import { openWhatsApp, whatsappConfigured } from "./WhatsAppLink";
import { SectionHeading } from "./SectionHeading";

type Fields = { name: string; phone: string; service: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", phone: "", service: "", message: "" };

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Escribe tu nombre completo.";
  const digits = f.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15) e.phone = "Escribe un teléfono válido (10 dígitos o más).";
  if (!f.service) e.service = "Selecciona un servicio.";
  if (f.message.length > 800) e.message = "El mensaje es demasiado largo (máximo 800 caracteres).";
  return e;
}

const fieldClass = "h-12 rounded-xl bg-background text-base";

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});

  const set = (k: keyof Fields) => (v: string) => {
    setFields((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate(fields);
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    openWhatsApp(buildContactMessage(fields));
  };

  return (
    <section id="contacto" className="bg-mist py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Contacto"
            title="Cuéntanos qué necesitas"
            description="Llena el formulario y se abrirá WhatsApp con tu solicitud lista para enviar."
            align="left"
          />
          <ul className="mt-8 space-y-3 text-muted-foreground">
            <li>• Tus datos no se guardan en esta página.</li>
            <li>• La conversación continúa directamente por WhatsApp.</li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="rounded-3xl border bg-card p-6 shadow-card sm:p-9"
          aria-label="Formulario de solicitud de cotización"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <Label htmlFor="name" className="text-navy">Nombre completo *</Label>
              <Input
                id="name"
                autoComplete="name"
                value={fields.name}
                onChange={(e) => set("name")(e.target.value)}
                maxLength={100}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={`mt-2 ${fieldClass}`}
              />
              {errors.name && <p id="name-error" className="mt-1.5 text-sm text-destructive">{errors.name}</p>}
            </div>

            <div>
              <Label htmlFor="phone" className="text-navy">Teléfono *</Label>
              <Input
                id="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                value={fields.phone}
                onChange={(e) => set("phone")(e.target.value)}
                maxLength={20}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                className={`mt-2 ${fieldClass}`}
              />
              {errors.phone && <p id="phone-error" className="mt-1.5 text-sm text-destructive">{errors.phone}</p>}
            </div>

            <div>
              <Label htmlFor="service" className="text-navy">Servicio de interés *</Label>
              <select
                id="service"
                value={fields.service}
                onChange={(e) => set("service")(e.target.value)}
                aria-invalid={!!errors.service}
                aria-describedby={errors.service ? "service-error" : undefined}
                className={`mt-2 w-full border border-input px-3 text-navy shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ${fieldClass}`}
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                {services.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
              {errors.service && <p id="service-error" className="mt-1.5 text-sm text-destructive">{errors.service}</p>}
            </div>

            <div className="sm:col-span-2">
              <Label htmlFor="message" className="text-navy">Mensaje</Label>
              <Textarea
                id="message"
                rows={5}
                value={fields.message}
                onChange={(e) => set("message")(e.target.value)}
                maxLength={800}
                placeholder="Describe brevemente lo que necesitas"
                aria-invalid={!!errors.message}
                className="mt-2 rounded-xl bg-background text-base"
              />
              {errors.message && <p className="mt-1.5 text-sm text-destructive">{errors.message}</p>}
            </div>
          </div>

          <Button type="submit" variant="whatsapp" size="xl" className="mt-7 w-full whitespace-normal">
            <Send />
            Enviar solicitud por WhatsApp
          </Button>
          {!whatsappConfigured && (
            <p className="mt-3 text-center text-sm text-muted-foreground">
              Número de WhatsApp de {siteConfig.name} pendiente de configuración.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
