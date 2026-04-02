import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Padel District Club",
    template: "%s · Padel District Club"
  },
  description:
    "Web comercial y operativa para un club de pádel: reservas, pistas, torneos, eventos, escuela y experiencia de club en una sola plataforma."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
