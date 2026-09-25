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
    | "Musique"
    | "Événement"
    | "Entreprise"
    | "Vol libre"
    | "Sport & aventure";
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
    title: "À contre-courant",
    category: "Sport & aventure",
    description:
      "Dans les rapides, cette série suit le kayak au plus près : le mouvement de l'eau, l'effort et l'énergie des passages.",
    cover: { src: "/images/client/A7400218.jpg", width: 3200, height: 2134, alt: "Kayak dans les rapides" },
    previewImages: [
      "/images/client/A7400198.jpg",
      "/images/client/A7400216.jpg",
      "/images/client/A7400176.jpg",
    ],
    images: clientGallery([
      ["A7400218", 3200, 2134, "Kayak rose dans les rapides"],
      ["A7400198", 2133, 3200, "Kayakiste dans les rochers"],
      ["A7400216", 3200, 2133, "Passage en kayak sur une rivière"],
      ["A7400176", 2133, 3200, "Kayakiste dans les eaux vives"],
    ]),
  },
  {
    id: "highline",
    slug: "en-equilibre",
    title: "En équilibre",
    category: "Sport & aventure",
    description:
      "Au-dessus du paysage, cette série suit la slackline : la concentration, les gestes précis et l'équilibre suspendu dans le vide.",
    cover: { src: "/images/client/A7401147.jpg", width: 2133, height: 3200, alt: "Athlète sur une slackline" },
    previewImages: ["/images/client/A7401148.jpg"],
    images: clientGallery([
      ["A7401147", 2133, 3200, "Athlète en équilibre sur une slackline"],
      ["A7401148", 2133, 3200, "Slackline au-dessus du paysage"],
    ]),
  },
  {
    id: "wedding-story",
    slug: "wedding-story",
    title: "Autour de la table",
    category: "Événement",
    description:
      "Une réception racontée à travers ses tables, ses couleurs et la lumière. Les détails donnent aussi une mémoire au lieu.",
    cover: { src: "/images/client/A7400114.jpg", width: 2133, height: 3200, alt: "Table dressée pour une réception" },
    previewImages: [
      "/images/client/A7400111.jpg",
      "/images/client/A7400122.jpg",
    ],
    images: clientGallery([
      ["A7400114", 2133, 3200, "Table dressée pour une réception"],
      ["A7400111", 2133, 3200, "Détail coloré d'une table d'été"],
      ["A7400122", 2133, 3200, "Verres et fleurs au soleil"],
    ]),
  },
  {
    id: "night-session",
    slug: "night-session",
    title: "Portraits & rythmes",
    category: "Musique",
    description:
      "Des portraits dans un décor brut ouvrent cette série, suivis de scènes musicales où les gestes et la lumière racontent l'énergie du live.",
    cover: { src: "/images/client/A7409454.jpg", width: 3200, height: 2133, alt: "Portrait dans une friche industrielle" },
    previewImages: [
      "/images/client/A7409454.jpg",
      "/images/client/A7409456.jpg",
      "/images/client/A7409445.jpg",
    ],
    images: clientGallery([
      ["A7409454", 3200, 2133, "Portrait dans une friche industrielle"],
      ["A7409456", 3200, 2133, "Portrait à la lumière naturelle dans un bâtiment abandonné"],
      ["A7409445", 2134, 3200, "Silhouette dans un lieu brut"],
      ["A7401068", 2133, 3200, "DJ aux platines"],
      ["A7401075", 2133, 3200, "Performance musicale en plein air"],
    ]),
  },
  {
    id: "track-day",
    slug: "track-day",
    title: "Prendre l'air",
    category: "Vol libre",
    description:
      "Avant et pendant le vol : pilotes, préparation des ailes, décollages et silhouettes suspendues au-dessus du paysage.",
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
    title: "Gestes de métier",
    category: "Entreprise",
    description:
      "Un reportage au cœur d'un site industriel : les personnes, leurs gestes et l'environnement dans lequel elles travaillent.",
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
    title: "Horizons libres",
    category: "Sport & aventure",
    description:
      "De la neige profonde à la voile dans le ciel, une série sur les grands espaces et celles et ceux qui les traversent.",
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
  "Événements",
  "Musique",
  "Entreprises",
  "Sport & aventure",
  "Vol libre",
] as const;

export const categoryToFilter: Record<Collection["category"], string> = {
  Musique: "Musique",
  Événement: "Événements",
  Entreprise: "Entreprises",
  "Sport & aventure": "Sport & aventure",
  "Vol libre": "Vol libre",
};
