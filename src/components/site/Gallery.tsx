import { ChevronLeft, ChevronRight, Expand, ImageOff } from "lucide-react";
import { useMemo, useState } from "react";

import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { gallery, services, type ServiceId } from "@/config/site";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

type Filter = "todos" | ServiceId;

export function Gallery() {
  const [filter, setFilter] = useState<Filter>("todos");
  const [active, setActive] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === "todos" ? gallery : gallery.filter((g) => g.service === filter)),
    [filter],
  );
  const current = active !== null ? items[active] : null;
  const serviceTitle = (id: ServiceId) => services.find((s) => s.id === id)?.shortTitle ?? "";

  const step = (dir: 1 | -1) =>
    setActive((i) => (i === null ? i : (i + dir + items.length) % items.length));

  // Solo se ofrecen filtros de servicios que tienen fotografías.
  const filters: { id: Filter; label: string }[] = [
    { id: "todos", label: "Todos" },
    ...services
      .filter((s) => gallery.some((g) => g.service === s.id))
      .map((s) => ({ id: s.id as Filter, label: s.shortTitle })),
  ];

  return (
    <section id="galeria" className="bg-mist py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Galería"
          title="Equipos y soluciones para el agua"
          description="Selecciona una fotografía para verla en tamaño completo."
        />

        <div
          role="tablist"
          aria-label="Filtrar por servicio"
          className="-mx-4 mt-10 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
        >
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors",
                filter === f.id
                  ? "border-navy bg-navy text-navy-foreground"
                  : "border-border bg-background text-navy hover:border-ocean hover:text-ocean",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        {items.length === 0 ? (
          <div className="mx-auto mt-10 flex max-w-md flex-col items-center rounded-3xl border border-dashed bg-background p-10 text-center">
            <ImageOff className="size-10 text-ocean" />
            <p className="mt-4 font-display text-lg font-semibold text-navy">Fotografías próximamente</p>
            <p className="mt-2 text-muted-foreground">
              Pronto agregaremos imágenes de este servicio.
            </p>
          </div>
        ) : (
          <div
            className={cn(
              "mt-10 columns-1 gap-5 sm:columns-2",
              items.length > 2 ? "lg:columns-3" : "mx-auto max-w-3xl",
            )}
          >
            {items.map((item, i) => (
              <button
                key={`${item.photo.src}-${i}`}
                type="button"
                onClick={() => setActive(i)}
                className="group mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl bg-white text-left shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={`Ampliar: ${item.caption}`}
              >
                <img
                  src={item.photo.src}
                  alt={item.photo.alt}
                  width={item.photo.width}
                  height={item.photo.height}
                  loading="lazy"
                  className="h-auto w-full object-contain"
                />
                <span className="flex items-center justify-between gap-3 bg-navy-deep p-4">
                  <span className="min-w-0">
                    <span className="eyebrow block text-[0.65rem] text-turquoise">
                      {serviceTitle(item.service)}
                    </span>
                    <span className="mt-1 block font-medium text-navy-foreground">{item.caption}</span>
                  </span>
                  <Expand className="size-5 shrink-0 text-navy-foreground/80" />
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      <Dialog open={current !== null} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-5xl border-none bg-navy-deep p-3 text-navy-foreground sm:p-4">
          {current && (
            <>
              <DialogTitle className="sr-only">{current.caption}</DialogTitle>
              <DialogDescription className="sr-only">{current.photo.alt}</DialogDescription>
              <div className="relative flex items-center justify-center">
                <img
                  src={current.photo.src}
                  alt={current.photo.alt}
                  width={current.photo.width}
                  height={current.photo.height}
                  className="max-h-[78vh] w-auto rounded-xl object-contain"
                />
                {items.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => step(-1)}
                      aria-label="Fotografía anterior"
                      className="absolute left-2 grid size-11 place-items-center rounded-full bg-navy-deep/70 hover:bg-navy"
                    >
                      <ChevronLeft className="size-6" />
                    </button>
                    <button
                      type="button"
                      onClick={() => step(1)}
                      aria-label="Fotografía siguiente"
                      className="absolute right-2 grid size-11 place-items-center rounded-full bg-navy-deep/70 hover:bg-navy"
                    >
                      <ChevronRight className="size-6" />
                    </button>
                  </>
                )}
              </div>
              <p className="px-1 pt-2 text-sm">
                <span className="font-semibold text-turquoise">{serviceTitle(current.service)}</span>
                <span className="text-navy-foreground/80"> · {current.caption}</span>
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
