import { cn } from "@/lib/utils/cn";

interface SectionTitleProps {
  title: string;
  description?: string;
  tone?: "default" | "inverse";
  className?: string;
}

export function SectionTitle({ title, description, tone = "default", className }: SectionTitleProps) {
  return (
    <div className={cn("space-y-1", className)}>
      <h2 className={cn("text-xl font-semibold", tone === "default" ? "text-slate-900" : "text-white")}>
        {title}
      </h2>
      {description ? (
        <p className={cn("text-sm", tone === "default" ? "text-slate-600" : "text-slate-300")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
