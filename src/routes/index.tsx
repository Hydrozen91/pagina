import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/site/About";
import { ContactForm } from "@/components/site/ContactForm";
import { Footer } from "@/components/site/Footer";
import { Gallery } from "@/components/site/Gallery";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { QuoteCTA } from "@/components/site/QuoteCTA";
import { Services } from "@/components/site/Services";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { WhyUs } from "@/components/site/WhyUs";

const title = "HydroZen — Soluciones en Agua | Cisternas verticales, filtración, purificación y ósmosis inversa";
const description =
  "Instalación de cisternas verticales, filtración de sedimentos, control de sarro, purificación de agua, ósmosis inversa e indicadores electrónicos de nivel de agua. Cotiza por WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_MX" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <WhyUs />
        <QuoteCTA />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
