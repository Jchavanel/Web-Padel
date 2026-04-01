export interface HeroStat {
  label: string;
  value: string;
}

export interface PromoCard {
  title: string;
  description: string;
  href: string;
  eyebrow: string;
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

const publicSiteContent: PublicSiteContent = {
  clubName: "Padel District Club",
  tagline: "Compite, entrena y reserva en un club diseñado para jugar todo el año.",
  city: "Las Palmas de Gran Canaria",
  heroDescription:
    "Una experiencia de club completa: pistas premium, torneos con cartel propio, eventos sociales, escuela y reserva online clara desde cualquier dispositivo.",
  heroStats: [
    { label: "Pistas disponibles", value: "6" },
    { label: "Eventos al mes", value: "12+" },
    { label: "Torneos al trimestre", value: "4" },
    { label: "Jugadores activos", value: "850" }
  ],
  quickLinks: [
    {
      eyebrow: "Reserva inmediata",
      title: "Consulta disponibilidad en tiempo real",
      description: "Encuentra pista en segundos, revisa el precio final y confirma sin llamadas ni esperas.",
      href: "/disponibilidad"
    },
    {
      eyebrow: "Calendario deportivo",
      title: "Torneos con carteles, categorías y premios",
      description: "Destaca la actividad competitiva del club con fichas preparadas para vender cada evento.",
      href: "/torneos"
    },
    {
      eyebrow: "Comunidad",
      title: "Partidos abiertos y eventos especiales",
      description: "Rellena huecos, capta jugadores nuevos y mantén viva la agenda del club todo el mes.",
      href: "/eventos"
    }
  ],
  featuredCourts: [
    {
      id: "court-1",
      name: "Pista Central",
      subtitle: "La pista insignia para torneos, exhibiciones y partidos premium.",
      type: "Cristal panorámico",
      lighting: "Iluminación LED profesional",
      schedule: "07:00 - 23:00",
      features: ["Gradas laterales", "Cámara para highlights", "Zona de coaches"]
    },
    {
      id: "court-2",
      name: "Indoor Pro 2",
      subtitle: "Condiciones estables para entrenamientos intensivos y clases técnicas.",
      type: "Indoor competición",
      lighting: "LED sin sombras",
      schedule: "07:00 - 23:00",
      features: ["Climatización", "Césped premium", "Marcador digital"]
    },
    {
      id: "court-3",
      name: "Outdoor Sunset",
      subtitle: "La pista social del club, ideal para americanos y eventos afterwork.",
      type: "Outdoor social",
      lighting: "Luz cálida de tarde y focos nocturnos",
      schedule: "08:00 - 22:30",
      features: ["Acceso a terraza", "DJ booth para eventos", "Zona chill out"]
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
      description: "El torneo bandera del mes, con cuadro principal, consolación y experiencia de village durante todo el fin de semana."
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
      description: "Formato orientado a marcas y patrocinadores con visibilidad comercial, hospitality y networking posterior."
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
      description: "Evento de cantera pensado para fidelizar familias, activar escuela y dar continuidad al calendario juvenil."
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
      description: "Música, ranking exprés, welcome drink y ambiente social para llenar la franja nocturna del viernes."
    },
    {
      id: "evento-clinic",
      title: "Clinic de bandeja y transición",
      date: "Sábado 20 de abril",
      time: "10:30 - 12:00",
      type: "Formación técnica",
      price: "22 €",
      capacity: "12 plazas",
      description: "Sesión enfocada en toma de red, salida de pared y patrones ofensivos con entrenador certificado."
    },
    {
      id: "evento-family",
      title: "Family Padel Day",
      date: "Domingo 28 de abril",
      time: "11:00 - 14:00",
      type: "Evento familiar",
      price: "Gratuito socios / 8 € invitados",
      capacity: "Aforo abierto",
      description: "Juegos, retos, mini torneo infantil y activación perfecta para captar nuevas familias al club."
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
      price: "59 €/mes",
      audience: "Niños y adolescentes",
      benefits: ["Itinerario por niveles", "Liga interna", "Eventos con familias"]
    }
  ],
  testimonials: [
    {
      name: "Marta R.",
      role: "Socia premium",
      quote:
        "La reserva es clara, los eventos se comunican muy bien y el club transmite actividad real todo el tiempo."
    },
    {
      name: "Álvaro P.",
      role: "Jugador de liga",
      quote:
        "Los partidos abiertos y los torneos están tan bien presentados que siempre sabes qué plan hay cada semana."
    },
    {
      name: "Claudia S.",
      role: "Madre escuela junior",
      quote:
        "La parte de escuela y eventos familiares hace que el club se vea profesional y fácil de recomendar."
    }
  ],
  amenities: [
    "Vestuarios completos",
    "Terraza y cafetería",
    "Parking de clientes",
    "Tienda técnica",
    "Zona recovery",
    "Wifi y coworking",
    "Sala de vídeo análisis",
    "Espacio para patrocinadores"
  ],
  address: "Calle León y Castillo 220, Las Palmas de Gran Canaria",
  phone: "+34 600 123 456",
  email: "hola@padeldistrictclub.com",
  schedule: "Lunes a domingo · 07:00 - 23:00"
};

export function getPublicSiteContent(): PublicSiteContent {
  return publicSiteContent;
}
