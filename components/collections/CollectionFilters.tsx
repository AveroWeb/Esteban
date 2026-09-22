"use client";

import { filterCategories } from "@/data/collections";

export default function CollectionFilters({
  active,
  onChange,
}: {
  active: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
      {filterCategories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          data-active={active === cat}
          className={`link-underline font-sans text-sm transition-colors duration-300 ${
            active === cat ? "text-ink" : "text-slate"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
