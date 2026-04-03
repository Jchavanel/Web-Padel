import "server-only";

import { cache } from "react";
import { createClient } from "@/lib/supabase/server";

export interface HeroStat {
  label: string;
  value: string;
}

export interface PromoCard {
  title: string;
  description: string;
  href: string;
  eyebrow: string;
  ctaLabel?: string;
  metric?: string;
}

export interface CourtShowcase {
  id: string;
  name: string;
  subtitle: string;
  type: string;
  lighting: string;
  schedule: string;
  features: string[];
}

export interface TournamentShowcase {
  id: string;
  title: string;
  month: string;
  day: string;
  status: string;
  category: string;
  level: string;
  price: string;
  prize: string;
  description: string;
  href?: string;
  ctaLabel?: string;
  venue?: string;
  accent?: "emerald" | "indigo" | "amber" | "rose";
}

export interface EventShowcase {
  id: string;
  title: string;
  date: string;
  time: string;
  type: string;
  price: string;
  capacity: string;
  description: string;
  href?: string;
  ctaLabel?: string;
  accent?: "emerald" | "indigo" | "amber" | "rose";
}

export interface PlanShowcase {
  id: string;
  name: string;
  price: string;
  audience: string;
  benefits: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export interface PublicSiteContent {
  clubName: string;
  tagline: string;
  city: string;
  heroDescription: string;
  heroStats: HeroStat[];
  quickLinks: PromoCard[];
  featuredCourts: CourtShowcase[];
  tournaments: TournamentShowcase[];
  events: EventShowcase[];
  academyPlans: PlanShowcase[];
  testimonials: Testimonial[];
  amenities: string[];
  address: string;
  phone: string;
  email: string;
  schedule: string;
}

type MarketingHighlightRow = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta_label: string | null;
  metric: string | null;
  display_order: number;
};

type MarketingTournamentRow = {
  slug: string;
  title: string;
  start_date: string;
  status: string;
  category: string;
  level: string;
  price_label: string;
  prize_label: string;
  description: string;
  href: string | null;
  cta_label: string | null;
  venue: string | null;
  accent: TournamentShowcase["accent"] | null;
  is_featured: boolean;
  display_order: number;
};

type MarketingEventRow = {
  slug: string;
  title: string;
  event_date: string;
  time_label: string;
  event_type: string;
  price_label: string;
  capacity_label: string;
  description: string;
  href: string | null;
  cta_label: string | null;
  accent: EventShowcase["accent"] | null;
  is_featured: boolean;
  display_order: number;
};

const basePublicSiteContent: PublicSiteContent = {
  clubName: "Padel District Club",
  tagline: "Tu club de pádel en Las Palmas para reservar, entrenar y competir todo el año.",
  city: "Las Palmas de Gran Canaria",
  heroDescription:
    "Pistas premium, torneos con identidad propia, escuela para todos los niveles y una agenda viva de eventos para que siempre tengas un plan dentro y fuera de la pista.",
  heroStats: [
    { label: "Pistas disponibles", value: "6" },
    { label: "Eventos al mes", value: "12+" },
    { label: "Torneos al trimestre", value: "4" },
    { label: "Jugadores activos", value: "850" }
  ],
  quickLinks: [
    {
      eyebrow: "Reserva rápida",
      title: "Consulta disponibilidad y reserva en segundos",
      description: "Elige fecha, hora y duración, revisa el precio final y confirma tu pista sin llamadas ni esperas.",
      href: "/disponibilidad",
      ctaLabel: "Reservar pista",
      metric: "Disponibilidad en tiempo real"
    },
    {
      eyebrow: "Torneos del club",
      title: "Competiciones con categorías, premios e inscripción abierta",
      description: "Consulta los próximos torneos y asegura tu plaza antes de que se complete el cuadro.",
      href: "/torneos",
      ctaLabel: "Ver torneos",
      metric: "Inscripciones abiertas"
    },
    {
      eyebrow: "Agenda viva",
      title: "Eventos, americanos y experiencias para cada semana",
      description: "Encuentra planes sociales, clinics y actividades especiales para seguir conectado al club.",
      href: "/eventos",
      ctaLabel: "Ver agenda",
      metric: "Nuevos planes cada semana"
    }
  ],
  featuredCourts: [
    {
      id: "court-1",
      name: "Pista Central",
      subtitle: "Nuestra pista insignia. Ideal para torneos, exhibiciones, partidos importantes y una experiencia de juego premium.",
      type: "Cristal panorámico",
      lighting: "Iluminación LED profesional",
      schedule: "07:00 - 23:00",
      features: ["Gradas laterales", "Cámara para highlights", "Zona de coaches"]
    },
    {
      id: "court-2",
      name: "Indoor Pro 2",
      subtitle: "La opción perfecta para entrenamientos intensivos, clases técnicas y partidos con condiciones de juego estables todo el año.",
      type: "Indoor competición",
      lighting: "LED sin sombras",
      schedule: "07:00 - 23:00",
      features: ["Climatización", "Césped premium", "Marcador digital"]
    },
    {
      id: "court-3",
      name: "Outdoor Sunset",
      subtitle: "La pista ideal para americanos, partidos afterwork y planes con ambiente relajado y buena energía.",
      type: "Outdoor social",
      lighting: "Luz cálida de tarde y focos nocturnos",
      schedule: "08:00 - 22:30",
      features: ["Acceso a terraza", "Zona chill out", "Iluminación nocturna"]
    }
  ],
  tournaments: [
    {
      id: "torneo-primavera",
      title: "Open Primavera P500",
      month: "ABR",
      day: "18",
      status: "Inscripción abierta",
      category: "Masculino / Femenino / Mixto",
      level: "2ª, 3ª y 4ª categoría",
      price: "28 € por jugador",
      prize: "1.200 € en premios y material",
      description:
        "Nuestro gran torneo del mes. Categorías masculina, femenina y mixta, cuadro principal y consolación, premios, patrocinadores y un fin de semana completo de pádel y ambiente de club.",
      href: "/contacto?motivo=torneos",
      ctaLabel: "Inscribirme",
      venue: "Pista central y pistas indoor",
      accent: "emerald"
    },
    {
      id: "torneo-empresa",
      title: "Corporate Padel Cup",
      month: "MAY",
      day: "09",
      status: "Últimas plazas",
      category: "Equipos empresa",
      level: "Intermedio - avanzado",
      price: "190 € por equipo",
      prize: "Trofeo, networking y welcome pack",
      description: "Un torneo orientado a empresas, networking y patrocinio con formato competitivo y experiencia premium.",
      href: "/contacto?motivo=eventos",
      ctaLabel: "Solicitar información",
      venue: "Zona hospitality y terrace club",
      accent: "indigo"
    },
    {
      id: "torneo-junior",
      title: "Junior Weekend Series",
      month: "MAY",
      day: "23",
      status: "Próximamente",
      category: "Sub-12 / Sub-16",
      level: "Iniciación y competición",
      price: "18 € por jugador",
      prize: "Medallas, ranking y regalos de academia",
      description: "Una cita pensada para cantera, familias y jugadores jóvenes que quieren competir y seguir creciendo.",
      href: "/contacto?motivo=escuela",
      ctaLabel: "Avisarme",
      venue: "Academia y zona junior",
      accent: "amber"
    }
  ],
  events: [
    {
      id: "evento-americano",
      title: "Americano Sunset",
      date: "Viernes 12 de abril",
      time: "20:00 - 22:30",
      type: "Social competition",
      price: "16 €",
      capacity: "24 plazas",
      description: "Música, ranking exprés, welcome drink y ambiente perfecto para empezar el fin de semana dentro de la pista.",
      href: "/contacto?motivo=eventos",
      ctaLabel: "Reservar plaza",
      accent: "emerald"
    },
    {
      id: "evento-clinic",
      title: "Clinic de bandeja y transición",
      date: "Sábado 20 de abril",
      time: "10:30 - 12:00",
      type: "Formación técnica",
      price: "22 €",
      capacity: "12 plazas",
      description: "Una sesión centrada en mejorar la toma de red, la salida de pared y la construcción del punto con entrenador certificado.",
      href: "/contacto?motivo=escuela",
      ctaLabel: "Reservar plaza",
      accent: "indigo"
    },
    {
      id: "evento-family",
      title: "Family Padel Day",
      date: "Domingo 28 de abril",
      time: "11:00 - 14:00",
      type: "Evento familiar",
      price: "Gratis para socios · 8 € invitados",
      capacity: "Aforo abierto",
      description: "Juegos, retos y mini torneo infantil para que las familias conozcan el club y vivan una mañana diferente.",
      href: "/contacto?motivo=eventos",
      ctaLabel: "Reservar plaza",
      accent: "amber"
    }
  ],
  academyPlans: [
    {
      id: "academy-start",
      name: "Programa Iniciación",
      price: "49 €/mes",
      audience: "Adultos que empiezan",
      benefits: ["2 sesiones semanales", "Grupos reducidos", "Seguimiento técnico mensual"]
    },
    {
      id: "academy-performance",
      name: "Tecnificación",
      price: "89 €/mes",
      audience: "Jugadores intermedios y avanzados",
      benefits: ["Trabajo táctico", "Preparación física específica", "Vídeo análisis"]
    },
    {
      id: "academy-kids",
      name: "Escuela Junior",
      price: "Desde 39 €/mes",
      audience: "Niños y adolescentes",
      benefits: ["Grupos por edades", "Entrenadores especializados", "Actividades y torneos internos"]
    }
  ],
  testimonials: [
    {
      name: "Marta R.",
      role: "Socia premium",
      quote: "Reservar es fácil, las pistas están impecables y siempre hay ambiente."
    },
    {
      name: "Álvaro P.",
      role: "Jugador de liga",
      quote: "Los torneos y los partidos abiertos hacen que siempre tengas plan."
    },
    {
      name: "Claudia S.",
      role: "Madre escuela junior",
      quote: "La escuela junior está muy bien organizada y transmite mucha confianza."
    }
  ],
  amenities: [
    "Vestuarios completos",
    "Terraza y cafetería",
    "Parking para clientes",
    "Tienda técnica",
    "Zona recovery",
    "Wifi y espacio de trabajo",
    "Sala de vídeo análisis",
    "Espacio para patrocinadores y activaciones"
  ],
  address: "Calle León y Castillo 220, Las Palmas de Gran Canaria",
  phone: "+34 600 123 456",
  email: "hola@padeldistrictclub.com",
  schedule: "Abierto todos los días · 07:00 a 23:00"
};

function formatShortMonth(dateValue: string) {
  return new Intl.DateTimeFormat("es-ES", { month: "short" })
    .format(new Date(dateValue))
    .replace(".", "")
    .slice(0, 3)
    .toUpperCase();
}

function formatDay(dateValue: string) {
  return new Intl.DateTimeFormat("es-ES", { day: "2-digit" }).format(new Date(dateValue));
}

function formatLongDate(dateValue: string) {
  const formatted = new Intl.DateTimeFormat("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long"
  }).format(new Date(dateValue));

  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

async function getDynamicHighlights() {
  const supabase = createClient();

  if (!supabase) {
    return null;
  }

  const result = await supabase
    .from("marketing_highlights")
    .select("slug, eyebrow, title, description, href, cta_label, metric, display_order")
    .eq("is_active", true)
    .order("display_order", { ascending: true });

  if (result.error) {
    return null;
  }

  const rows = (result.data ?? []) as MarketingHighlightRow[];

  return rows.map((row) => ({
    eyebrow: row.eyebrow,
    title: row.title,
    description: row.description,
    href: row.href,
    ctaLabel: row.cta_label ?? "Abrir sección",
    metric: row.metric ?? undefined
  })) satisfies PromoCard[];
}

async function getDynamicTournaments() {
  const supabase = createClient();

  if (!supabase) {
    return null;
  }

  const result = await supabase
    .from("marketing_tournaments")
    .select(
      "slug, title, start_date, status, category, level, price_label, prize_label, description, href, cta_label, venue, accent, is_featured, display_order"
    )
    .eq("is_active", true)
    .order("is_featured", { ascending: false })
    .order("display_order", { ascending: true })
    .order("start_date", { ascending: true });

  if (result.error) {
    return null;
  }

  const rows = (result.data ?? []) as MarketingTournamentRow[];

  return rows.map((row) => ({
    id: row.slug,
    title: row.title,
    month: formatShortMonth(row.start_date),
    day: formatDay(row.start_date),
    status: row.status,
    category: row.category,
    level: row.level,
    price: row.price_label,
    prize: row.prize_label,
    description: row.description,
    href: row.href ?? "/contacto?motivo=torneos",
    ctaLabel: row.cta_label ?? "Inscribirme",
    venue: row.venue ?? "Club principal",
    accent: row.accent ?? "emerald"
  })) satisfies TournamentShowcase[];
}

async function getDynamicEvents() {
  const supabase = createClient();

  if (!supabase) {
    return null;
  }

  const result = await supabase
    .from("marketing_events")
    .select(
      "slug, title, event_date, time_label, event_type, price_label, capacity_label, description, href, cta_label, accent, is_featured, display_order"
    )
    .eq("is_active", true)
    .order("is_featured", { ascending: false })
    .order("display_order", { ascending: true })
    .order("event_date", { ascending: true });

  if (result.error) {
    return null;
  }

  const rows = (result.data ?? []) as MarketingEventRow[];

  return rows.map((row) => ({
    id: row.slug,
    title: row.title,
    date: formatLongDate(row.event_date),
    time: row.time_label,
    type: row.event_type,
    price: row.price_label,
    capacity: row.capacity_label,
    description: row.description,
    href: row.href ?? "/contacto?motivo=eventos",
    ctaLabel: row.cta_label ?? "Reservar plaza",
    accent: row.accent ?? "emerald"
  })) satisfies EventShowcase[];
}

export const getPublicSiteContent = cache(async (): Promise<PublicSiteContent> => {
  const [highlights, tournaments, events] = await Promise.all([
    getDynamicHighlights().catch(() => null),
    getDynamicTournaments().catch(() => null),
    getDynamicEvents().catch(() => null)
  ]);

  return {
    ...basePublicSiteContent,
    quickLinks: highlights && highlights.length > 0 ? highlights : basePublicSiteContent.quickLinks,
    tournaments: tournaments && tournaments.length > 0 ? tournaments : basePublicSiteContent.tournaments,
    events: events && events.length > 0 ? events : basePublicSiteContent.events
  };
});
