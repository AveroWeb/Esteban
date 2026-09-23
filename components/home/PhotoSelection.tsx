import FramerThumbnails, { type PortfolioItem } from "@/components/ui/framer-thumbnails";

const PHOTOS: PortfolioItem[] = [
  { id: "table", src: "/images/client/A7400114.jpg", alt: "Table dressée pour une réception en extérieur", title: "Table d'été", eyebrow: "Événement privé" },
  { id: "kayak", src: "/images/client/A7400218.jpg", alt: "Kayak rose dans les rapides", title: "Eaux vives", eyebrow: "Sport" },
  { id: "dj", src: "/images/client/A7401075.jpg", alt: "DJ en plein air", title: "Session solaire", eyebrow: "Musique" },
  { id: "highline", src: "/images/client/A7401147.jpg", alt: "Athlète sur une highline", title: "En équilibre", eyebrow: "Outdoor" },
  { id: "portrait", src: "/images/client/A7401313.jpg", alt: "Portrait urbain devant une fresque", title: "Passage", eyebrow: "Portrait" },
  { id: "industrie", src: "/images/client/A7401591.jpg", alt: "Collaborateur dans un centre de tri", title: "Matière & métier", eyebrow: "Entreprise" },
  { id: "pilote", src: "/images/client/A7407488.jpg", alt: "Portrait d'un parapentiste", title: "Avant l'envol", eyebrow: "Portrait" },
  { id: "parapente", src: "/images/client/A7408309.jpg", alt: "Décollage en parapente au-dessus de la ville", title: "Prendre l'air", eyebrow: "Vol libre" },
  { id: "urbex", src: "/images/client/A7409454.jpg", alt: "Portrait dans un lieu abandonné", title: "Lumière brute", eyebrow: "Lifestyle" },
  { id: "freeride", src: "/images/client/A7409806.jpg", alt: "Freeride dans la neige profonde", title: "Ligne blanche", eyebrow: "Montagne" },
  { id: "photographe", src: "/images/client/A7409809.jpg", alt: "Photographe en action sur les pistes", title: "Sur le terrain", eyebrow: "Backstage" },
  { id: "voile", src: "/images/client/A7409816.jpg", alt: "Voile dans le ciel au coucher du soleil", title: "Dernière lumière", eyebrow: "Aventure" },
];

export default function PhotoSelection() {
  return (
    <section className="scroll-mt-24 bg-paper px-6 pb-20 pt-28 sm:px-10 sm:pb-24 sm:pt-36">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 font-sans text-xs uppercase tracking-[0.25em] text-slate">Portfolio</p>
            <h2 className="editorial-reveal font-serif-display text-4xl tracking-tight text-ink sm:text-5xl">Des instants, des univers</h2>
          </div>
          <p className="editorial-reveal max-w-md font-sans text-sm leading-relaxed text-slate">Une sélection de portraits, de reportages et de scènes en plein air. Faites défiler les images ou choisissez une miniature pour découvrir ces regards.</p>
        </div>
        <FramerThumbnails items={PHOTOS} />
      </div>
    </section>
  );
}
