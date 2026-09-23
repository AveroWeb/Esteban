"use client";

import { useState } from "react";
import Link from "next/link";
import { collections, categoryToFilter } from "@/data/collections";
import CollectionFilters from "@/components/collections/CollectionFilters";
import CollectionGrid from "@/components/collections/CollectionGrid";

export default function CollectionsSection() {
  const [active, setActive] = useState("Toutes");

  const filtered =
    active === "Toutes"
      ? collections
      : collections.filter((c) => categoryToFilter[c.category] === active);

  return (
    <section id="collections" className="bg-paper px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="editorial-reveal font-serif-display text-4xl tracking-tight text-ink sm:text-5xl">
              Histoires en images
            </h2>
            <p className="editorial-reveal mt-3 max-w-xl font-sans text-sm leading-relaxed text-slate">
              Du mouvement d&apos;un sportif aux gestes d&apos;une équipe, explorez des séries
              qui montrent ma façon de regarder les personnes et les lieux.
            </p>
          </div>
        </div>

        <div className="mb-10 border-b border-ink/10 pb-6">
          <CollectionFilters active={active} onChange={setActive} />
        </div>

        <CollectionGrid collections={filtered} filterKey={active} />

        <div className="mt-14 text-center">
          <Link
            href="/collections"
            className="inline-block rounded-full border border-ink px-7 py-3.5 font-sans text-sm text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
          >
            Explorer toutes les séries
          </Link>
        </div>
      </div>
    </section>
  );
}
