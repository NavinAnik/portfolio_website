interface SectionTitleProps {
  title: string;
  subtitle?: string;
  id?: string;
  label?: string;
}

export default function SectionTitle({ title, subtitle, id, label }: SectionTitleProps) {
  return (
    <div className="mb-10 md:mb-12">
      {label && (
        <p className="text-section-label font-medium uppercase tracking-widest text-accent-muted mb-2">
          {label}
        </p>
      )}
      <h2
        id={id}
        className="font-serif text-3xl md:text-4xl font-normal tracking-heading-tight"
        style={{ color: "var(--color-text-strong)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg max-w-2xl" style={{ color: "var(--color-text-muted)" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
