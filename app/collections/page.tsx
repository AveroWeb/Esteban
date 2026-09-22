import type { Metadata } from "next";
import CollectionsPageContent from "@/components/collections/CollectionsPageContent";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Toutes les collections — concerts, mariages, festivals, entreprises et automobile capturés par Esteban, photographe basé à Millau, Aveyron.",
};

export default function CollectionsPage() {
  return (
    <main className="bg-paper px-6 pb-28 pt-36 sm:px-10 sm:pt-44">
      <div className="mx-auto max-w-[1600px]">
        <h1 className="font-serif-display text-4xl tracking-tight text-ink sm:text-5xl">
          Collections
        </h1>
        <p className="mt-4 max-w-md font-sans text-sm text-slate">
          Toutes les histoires capturées, classées par type d&apos;événement.
        </p>

        <div className="mt-14">
          <CollectionsPageContent />
        </div>
      </div>
    </main>
  );
}
