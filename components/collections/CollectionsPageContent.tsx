"use client";

import { useState } from "react";
import { collections, categoryToFilter } from "@/data/collections";
import CollectionFilters from "./CollectionFilters";
import CollectionGrid from "./CollectionGrid";

export default function CollectionsPageContent() {
  const [active, setActive] = useState("Toutes");

  const filtered =
    active === "Toutes"
      ? collections
      : collections.filter((c) => categoryToFilter[c.category] === active);

  return (
    <>
      <div className="mb-10 border-b border-ink/10 pb-6">
        <CollectionFilters active={active} onChange={setActive} />
      </div>
      <CollectionGrid collections={filtered} filterKey={active} />
    </>
  );
}
