import type { ReactNode } from "react";
import { SiteHeader } from "@/components/layout/site-header";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-6 py-10">{children}</main>
    </div>
  );
}
