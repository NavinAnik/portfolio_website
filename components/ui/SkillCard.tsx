interface SkillCardProps {
  category: string;
  items: string[];
}

export default function SkillCard({ category, items }: SkillCardProps) {
  return (
    <div
      className="rounded-xl border bg-white p-5 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5"
      style={{ borderColor: "var(--color-border)" }}
    >
      <h3 className="font-serif text-lg font-normal mb-3" style={{ color: "var(--color-text-strong)" }}>
        {category}
      </h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item}>
            <span
              className="inline-block px-3 py-1 text-sm rounded-full transition-colors hover:bg-accent/10"
              style={{ color: "var(--color-text)", backgroundColor: "var(--color-surface-muted)" }}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
