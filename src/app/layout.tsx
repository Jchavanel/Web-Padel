import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Padel District Club",
    template: "%s · Padel District Club"
  },
  description:
    "Club de pádel en Las Palmas con reservas online, torneos, eventos, escuela y comunidad durante todo el año."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
