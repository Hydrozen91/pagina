import { Wrench, Droplets, Headset, ShieldCheck } from "lucide-react";

import { whyUs } from "@/config/site";
import { SectionHeading } from "./SectionHeading";

const icons = {
  sliders: Wrench,
  message: Headset,
  cpu: Droplets,
  camera: ShieldCheck,
} as const;

export function WhyUs() {
  return (
    <section id="por-que" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="¿Por qué HydroZen?" title="¿Por qué elegir HydroZen?" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item) => {
            const Icon = icons[item.icon];
            return (
              <div
                key={item.title}
                className="group rounded-3xl border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-turquoise/50 hover:shadow-lift"
              >
                <span className="grid size-20 place-items-center rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-800 text-white shadow-glow">
                  <Icon className="size-11" />
                </span>
                <h3 className="mt-6 text-xl font-bold text-navy">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
