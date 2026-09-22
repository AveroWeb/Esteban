import type { Collection } from "@/data/collections";
import CollectionCard from "./CollectionCard";

export default function CollectionGrid({
  collections,
  filterKey,
}: {
  collections: Collection[];
  filterKey: string;
}) {
  if (collections.length === 0) {
    return (
      <p className="py-20 text-center font-sans text-sm text-slate">
        Aucune collection dans cette catégorie pour le moment.
      </p>
    );
  }

  return (
    <div
      key={filterKey}
      className="fade-in-up grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {collections.map((collection, i) => (
        <CollectionCard
          key={collection.id}
          collection={collection}
          wide={i % 5 === 0}
          tall={i % 5 === 2}
        />
      ))}
    </div>
  );
}
