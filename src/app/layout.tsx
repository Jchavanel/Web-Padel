import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Padel Club MVP",
  description: "Base técnica inicial para una plataforma web de clubes de pádel."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
