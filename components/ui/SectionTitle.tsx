interface SectionTitleProps {
  title: string;
  subtitle?: string;
  id?: string;
}

export default function SectionTitle({ title, subtitle, id }: SectionTitleProps) {
  return (
    <div className="mb-10 md:mb-12">
      <h2
        id={id}
        className="font-serif text-3xl md:text-4xl font-semibold text-slate-800"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-slate-600 text-lg max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}
