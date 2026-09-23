import type { Metadata } from "next";
import CollectionsPageContent from "@/components/collections/CollectionsPageContent";

export const metadata: Metadata = {
  title: "Reportages et séries photo",
  description:
    "Découvrez les reportages et séries photo d'Esteban : événementiel, musique, entreprise, sport et vol libre.",
};

export default function CollectionsPage() {
  return (
    <main className="bg-paper px-6 pb-28 pt-36 sm:px-10 sm:pt-44">
      <div className="mx-auto max-w-[1600px]">
        <h1 className="font-serif-display text-4xl tracking-tight text-ink sm:text-5xl">
          Reportages et séries
        </h1>
        <p className="mt-4 max-w-xl font-sans text-sm leading-relaxed text-slate">
          Parcourez les images par univers. Chaque série réunit des détails, des personnes
          et des instants qui racontent une atmosphère.
        </p>

        <div className="mt-14">
          <CollectionsPageContent />
        </div>
      </div>
    </main>
  );
}
