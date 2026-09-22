const CATEGORIES = [
  "CONCERT",
  "MARIAGE",
  "FESTIVAL",
  "ENTREPRISE",
  "AUTOMOBILE",
  "LIFESTYLE",
];

export default function CategoryStrip() {
  const items = [...CATEGORIES, ...CATEGORIES];

  return (
    <div className="overflow-hidden border-y border-ink/10 py-4">
      <div className="category-marquee flex w-max gap-8 whitespace-nowrap">
        {[...items, ...items].map((c, i) => (
          <span
            key={i}
            className="flex items-center gap-8 font-sans text-xs tracking-[0.25em] text-slate"
          >
            {c}
            <span className="text-slate/40">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
