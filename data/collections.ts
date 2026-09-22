export type CollectionImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type Collection = {
  id: string;
  slug: string;
  title: string;
  category:
    | "Concert"
    | "Mariage"
    | "Festival"
    | "Entreprise"
    | "Automobile"
    | "Vol libre";
  year: string;
  location: string;
  cover: CollectionImage;
  previewImages: string[];
  description: string;
  images: CollectionImage[];
};

const clientGallery = (
  entries: Array<[string, number, number, string]>
): CollectionImage[] =>
  entries.map(([name, width, height, alt]) => ({
    src: `/images/client/${name}.jpg`,
    width,
    height,
    alt,
  }));

export const collections: Collection[] = [
  {
    id: "festival-horizon",
    slug: "festival-horizon",
    title: "Festival Horizon",
    category: "Festival",
    year: "2026",
    location: "Millau",
    description:
      "Trois jours de musique et de lumière au cœur des gorges — scènes, foule, coulisses et lever de soleil sur le camping.",
    cover: { src: "/images/client/A7400218.jpg", width: 3200, height: 2134, alt: "Kayak dans les rapides" },
    previewImages: [
      "/images/client/A7400198.jpg",
      "/images/client/A7400216.jpg",
      "/images/client/A7401147.jpg",
    ],
    images: clientGallery([
      ["A7400218", 3200, 2134, "Kayak rose dans les rapides"],
      ["A7400198", 2133, 3200, "Kayakiste dans les rochers"],
      ["A7400216", 3200, 2133, "Passage en kayak sur une rivière"],
      ["A7400176", 2133, 3200, "Kayakiste dans les eaux vives"],
      ["A7401147", 2133, 3200, "Figure aérienne sur une highline"],
      ["A7401148", 2133, 3200, "Athlète en équilibre dans le ciel"],
    ]),
  },
  {
    id: "wedding-story",
    slug: "wedding-story",
    title: "Wedding Story",
    category: "Mariage",
    year: "2026",
    location: "Provence",
    description:
      "Une journée de mariage racontée sans mise en scène — préparatifs, cérémonie, émotions et fête jusqu'au bout de la nuit.",
    cover: { src: "/images/client/A7400114.jpg", width: 2133, height: 3200, alt: "Table dressée pour une réception" },
    previewImages: [
      "/images/client/A7400111.jpg",
      "/images/client/A7400116.jpg",
      "/images/client/A7400122.jpg",
    ],
    images: clientGallery([
      ["A7400114", 2133, 3200, "Table dressée pour une réception"],
      ["A7400111", 2133, 3200, "Détail coloré d'une table d'été"],
      ["A7400116", 2133, 3200, "Ambiance d'un repas en extérieur"],
      ["A7400122", 2133, 3200, "Verres et fleurs au soleil"],
    ]),
  },
  {
    id: "night-session",
    slug: "night-session",
    title: "Night Session",
    category: "Concert",
    year: "2026",
    location: "Paris",
    description:
      "Une salle parisienne, une scène, une foule dense — un concert capturé dans l'urgence et la basse qui vibre dans les murs.",
    cover: { src: "/images/client/A7401068.jpg", width: 2133, height: 3200, alt: "DJ aux platines" },
    previewImages: [
      "/images/client/A7401075.jpg",
      "/images/client/A7409445.jpg",
      "/images/client/A7409454.jpg",
    ],
    images: clientGallery([
      ["A7401068", 2133, 3200, "DJ aux platines"],
      ["A7401075", 2133, 3200, "Performance musicale en plein air"],
      ["A7409445", 2134, 3200, "Silhouette dans un lieu brut"],
      ["A7409454", 3200, 2133, "Portrait dans une friche industrielle"],
      ["A7409456", 3200, 2133, "Lumière naturelle dans un bâtiment abandonné"],
    ]),
  },
  {
    id: "track-day",
    slug: "track-day",
    title: "Prendre l'air",
    category: "Vol libre",
    year: "2026",
    location: "Millau",
    description:
      "Une journée au-dessus de Millau — préparation des ailes, décollages et instants suspendus entre ciel et reliefs.",
    cover: { src: "/images/client/A7408309.jpg", width: 2133, height: 3200, alt: "Décollage en parapente" },
    previewImages: [
      "/images/client/A7407412.jpg",
      "/images/client/A7407488.jpg",
      "/images/client/A7408319.jpg",
    ],
    images: clientGallery([
      ["A7408309", 2133, 3200, "Décollage en parapente"],
      ["A7407412", 2133, 3200, "Portrait noir et blanc d'un pilote"],
      ["A7407488", 2133, 3200, "Pilote avant le décollage"],
      ["A7407490", 2133, 3200, "Détail d'un équipement de vol"],
      ["A7408319", 2133, 3200, "Préparation de l'aile sur la pente"],
      ["A7408488", 2133, 3200, "Préparation d'un parapente biplace"],
      ["A7408577", 2133, 3200, "Voile en silhouette dans le ciel"],
    ]),
  },
  {
    id: "corporate-night",
    slug: "corporate-night",
    title: "Corporate Night",
    category: "Entreprise",
    year: "2026",
    location: "Lyon",
    description:
      "Soirée de lancement pour une entreprise lyonnaise — réseautage, scénographie et prises de parole devant les équipes.",
    cover: { src: "/images/client/A7401591.jpg", width: 3200, height: 2133, alt: "Reportage dans un centre de tri" },
    previewImages: [
      "/images/client/A7401507.jpg",
      "/images/client/A7401549.jpg",
      "/images/client/A7401589.jpg",
    ],
    images: clientGallery([
      ["A7401591", 3200, 2133, "Reportage dans un centre de tri"],
      ["A7401507", 2133, 3200, "Portrait métier sur site industriel"],
      ["A7401549", 2133, 3200, "Collaborateur au travail"],
      ["A7401589", 3200, 2133, "Équipe en activité dans l'usine"],
    ]),
  },
  {
    id: "summer-stage",
    slug: "summer-stage",
    title: "Summer Stage",
    category: "Concert",
    year: "2026",
    location: "Nice",
    description:
      "Un concert en plein air sur la Côte d'Azur — golden hour, scène et public qui se mélangent jusqu'à la nuit tombée.",
    cover: { src: "/images/client/A7409816.jpg", width: 3200, height: 2133, alt: "Voile au coucher du soleil" },
    previewImages: [
      "/images/client/A7409806.jpg",
      "/images/client/A7409809.jpg",
      "/images/client/A7409814.jpg",
    ],
    images: clientGallery([
      ["A7409816", 3200, 2133, "Voile dans le ciel au coucher du soleil"],
      ["A7409801", 2133, 3200, "Portrait en montagne avec un chien"],
      ["A7409806", 2134, 3200, "Descente en neige profonde"],
      ["A7409807", 2133, 3200, "Séance photo sur les pistes"],
      ["A7409809", 2133, 3200, "Photographe en action dans la neige"],
      ["A7409811", 2133, 3200, "Freeride sur un versant enneigé"],
      ["A7409814", 2133, 3200, "Rider seul dans la montagne"],
    ]),
  },
];

export const getCollectionBySlug = (slug: string) =>
  collections.find((c) => c.slug === slug);

export const filterCategories = [
  "Toutes",
  "Concerts",
  "Mariages",
  "Festivals",
  "Entreprises",
  "Automobile",
  "Vol libre",
] as const;

export const categoryToFilter: Record<Collection["category"], string> = {
  Concert: "Concerts",
  Mariage: "Mariages",
  Festival: "Festivals",
  Entreprise: "Entreprises",
  Automobile: "Automobile",
  "Vol libre": "Vol libre",
};
