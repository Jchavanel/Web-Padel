import Link from "next/link";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

interface EmptyStateProps {
  title: string;
  description: string;
  ctaHref?: string;
  ctaLabel?: string;
}

export function EmptyState({ title, description, ctaHref, ctaLabel }: EmptyStateProps) {
  return (
    <Card className="text-center">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
      {ctaHref && ctaLabel ? (
        <div className="mt-4">
          <Link href={ctaHref} className={buttonVariants()}>
            {ctaLabel}
          </Link>
        </div>
      ) : null}
    </Card>
  );
}
