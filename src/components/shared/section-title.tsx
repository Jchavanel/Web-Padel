interface SectionTitleProps {
  title: string;
  description?: string;
}

export function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <div className="space-y-1">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      {description ? <p className="text-sm text-slate-600">{description}</p> : null}
    </div>
  );
}
