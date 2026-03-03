interface SkillCardProps {
  category: string;
  items: string[];
}

export default function SkillCard({ category, items }: SkillCardProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <h3 className="font-serif text-lg font-semibold text-slate-800 mb-3">
        {category}
      </h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
