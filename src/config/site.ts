/**
 * Configuración editable de HydroZen.
 * Cambia aquí los datos del negocio, textos, servicios y fotografías
 * sin tocar el resto de la página.
 */

export type ServiceId =
  | "cisternas"
  | "filtracion"
  | "sarro"
  | "purificacion"
  | "osmosis"
  | "indicadores";

export interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Service {
  id: ServiceId;
  title: string;
  shortTitle: string;
  description: string;
  highlights: string[];
  /** null = todavía no existe una fotografía propia de este servicio (no se inventa ninguna) */
  photo: Photo | null;
}

export interface GalleryItem {
  service: ServiceId;
  photo: Photo;
  caption: string;
}

export const siteConfig = {
  name: "HydroZen",
  slogan: "Soluciones en Agua",

  /**
   * Número de WhatsApp en formato internacional, solo dígitos y sin "+".
   * Ejemplo para México: "5215512345678".
   * Mientras esté vacío, los botones muestran un aviso de configuración pendiente.
   */
  whatsappNumber: "527718111655",

  /** Correo de contacto. Vacío = se muestra como "Próximamente". */
  email: "ventas@hydrozen.com.mx",

  social: {
    facebook: "https://www.facebook.com/search/top?q=hydrozen%20soluciones%20en%20agua",
    instagram: "https://www.instagram.com/hydrozen_mexico/",
    tiktok: "https://www.tiktok.com/@hydrozen.mexico",
  },

  /** Enlace al aviso de privacidad. Vacío = "Próximamente". */
  privacyNoticeUrl: "",

  logo: {
    full: "/images/hydrozen-logo.png",
    mark: "/images/hydrozen-gota.png",
    wordmark: "/images/hydrozen-logo.png",
  },

  messages: {
    quote: "Hola, vi la página de HydroZen y me gustaría solicitar una cotización.",
  },

  hero: {
    title: "HYDROZEN",
    subtitle: "SOLUCIONES EN AGUA",
    tagline:
      "Soluciones para el tratamiento, almacenamiento y monitoreo del agua en tu hogar o negocio.",
    photo: {
      src: "/images/instalacion.jpeg",
      alt: "Técnico de HydroZen con uniforme azul marino y guantes rojos instalando una cisterna vertical desde una escalera",
      width: 590,
      height: 1280,
    } satisfies Photo,
  },

  about: {
    title: "Soluciones para el cuidado y aprovechamiento del agua",
    paragraphs: [
      "En HydroZen ofrecemos soluciones para mejorar el manejo del agua en hogares y negocios.",
      "Realizamos instalaciones de cisternas verticales, filtración de sedimentos, control de sarro, purificación de agua, sistemas de ósmosis inversa e indicadores electrónicos de nivel de agua.",
      "Buscamos proporcionar soluciones funcionales y adaptadas a las necesidades de cada cliente.",
    ],
  },

  quote: {
    title: "¿Necesitas una solución para el agua de tu hogar o negocio?",
    subtitle: "En HydroZen podemos ayudarte a encontrar una solución adecuada a tus necesidades.",
  },
};

export const services: Service[] = [
  {
    id: "cisternas",
    title: "Instalación de Cisternas Verticales",
    shortTitle: "Cisternas Verticales",
    description:
      "Realizamos instalaciones de cisternas verticales para almacenamiento de agua en hogares y negocios, proporcionando soluciones prácticas para mantener una reserva de agua y aprovechar el espacio disponible.",
    highlights: ["Reserva de agua", "Aprovechamiento de espacio", "Hogares y negocios"],
    photo: {
      src: "/images/cisternas-ilustrativa.webp",
      alt: "Publicidad HydroZen: más agua para tu hogar, instalación de cisternas verticales con filtración de sedimentos",
      width: 1024,
      height: 1280,
    },
  },
  {
    id: "filtracion",
    title: "Filtración de Sedimentos",
    shortTitle: "Filtración",
    description:
      "Instalamos sistemas de filtración que ayudan a retener sedimentos y partículas presentes en el suministro de agua, contribuyendo a proteger las instalaciones hidráulicas y los equipos domésticos.",
    highlights: ["Retención de sedimentos", "Protección de instalaciones", "Cuidado de equipos"],
    photo: {
      src: "/images/filtracion-ilustrativa.webp",
      alt: "Publicidad HydroZen: filtros de sedimentos de tres etapas instalados en la línea de agua",
      width: 1024,
      height: 1280,
    },
  },
  {
    id: "sarro",
    title: "Sistemas para Control de Sarro",
    shortTitle: "Control de Sarro",
    description:
      "Ofrecemos soluciones para ayudar a reducir los problemas relacionados con la acumulación de sarro en tuberías, calentadores y equipos que utilizan agua.",
    highlights: ["Tuberías", "Calentadores", "Equipos que usan agua"],
    photo: { src: "/images/antisarro-nueva-ilustrativa.webp", alt: "Sistemas de filtración y tratamiento del agua — imagen ilustrativa de equipos", width: 1024, height: 1280 },
  },
  {
    id: "purificacion",
    title: "Purificación de Agua",
    shortTitle: "Purificación",
    description:
      "Instalación de sistemas de purificación de agua para uso doméstico, con soluciones diseñadas para mejorar la calidad del agua destinada al consumo.",
    highlights: ["Sistemas bajo tarja", "Equipos de purificación", "Filtros de cartucho"],
    photo: {
      src: "/images/purificacion-ilustrativa.webp",
      alt: "Publicidad HydroZen: equipos de purificación de agua, filtro de mesa, sistema de cartuchos y purificadores",
      width: 1280,
      height: 486,
    },
  },
  {
    id: "osmosis",
    title: "Sistemas de Ósmosis Inversa",
    shortTitle: "Ósmosis Inversa",
    description:
      "Instalamos sistemas de ósmosis inversa para uso doméstico, pensados para mejorar la calidad del agua destinada al consumo.",
    highlights: ["Uso doméstico", "Agua para consumo", "Instalación y asesoría"],
    photo: { src: "/images/osmosis-hydrozen.png", alt: "Sistema HydroZen de ósmosis inversa con filtros, lámpara UV y controlador", width: 1056, height: 1408 },
  },
  {
    id: "indicadores",
    title: "Indicadores Electrónicos de Nivel de Agua",
    shortTitle: "Indicadores de Nivel",
    description:
      "Instalamos indicadores electrónicos, como el AQUA 4, que permiten visualizar el nivel de agua almacenada en cisternas mediante indicadores luminosos, facilitando su supervisión.",
    highlights: [
      "Monitoreo del nivel de agua",
      "Indicadores luminosos",
      "Porcentajes de llenado",
    ],
    photo: {
      src: "/images/indicador-aqua4.jpg",
      alt: "Indicador electrónico AQUA 4 instalado en una pared, con luces de nivel de agua al 100, 75, 50 y 25 por ciento",
      width: 1363,
      height: 1154,
    },
  },
];

// Galería: cada fotografía aparece una sola vez y ninguna se repite en las tarjetas de servicios.
// Para agregar fotografías, añade un elemento aquí; los filtros se generan solos.
// El material promocional se identifica como tal; no se presenta como trabajo real.
export const gallery: GalleryItem[] = [
  { service: "osmosis", caption: "Sistema de ósmosis inversa — imagen ilustrativa", photo: { src: "/images/galeria-osmosis-ilustrativa.webp", alt: "Sistema de ósmosis inversa bajo tarja, imagen ilustrativa", width: 1000, height: 1000 } },
  { service: "indicadores", caption: "Indicador AQUA 4 — material promocional", photo: { src: "/images/aqua4-publicidad.jpeg", alt: "Material promocional AQUA 4", width: 1169, height: 1312 } },
];

export const whyUs = [
  {
    icon: "sliders",
    title: "Soluciones según tus necesidades",
    text: "Propuestas de instalación de acuerdo con las características de cada espacio.",
  },
  {
    icon: "message",
    title: "Atención personalizada",
    text: "Comunicación directa para conocer las necesidades del cliente.",
  },
  {
    icon: "cpu",
    title: "Tecnología aplicada al agua",
    text: "Equipos de filtración, purificación y supervisión del almacenamiento.",
  },
  {
    icon: "camera",
    title: "Trabajos reales",
    text: "Galería de instalaciones realizadas por HydroZen.",
  },
] as const;

export const navLinks = [
  { id: "inicio", label: "Inicio" },
  { id: "nosotros", label: "Nosotros" },
  { id: "servicios", label: "Servicios" },
  { id: "galeria", label: "Galería" },
  { id: "por-que", label: "¿Por qué HydroZen?" },
  { id: "cotizacion", label: "Cotización" },
  { id: "contacto", label: "Contacto" },
] as const;
