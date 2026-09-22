export type Service = {
  index: string;
  title: string;
  description: string;
  image: string;
  priceFrom: string;
};

export const services: Service[] = [
  {
    index: "01",
    title: "Concerts",
    description: "Photographie live, backstage, artistes et ambiance.",
    image: "/images/client/A7401068.jpg",
    priceFrom: "À partir de 350€",
  },
  {
    index: "02",
    title: "Mariages",
    description: "Reportage naturel et spontané de votre journée.",
    image: "/images/client/A7400114.jpg",
    priceFrom: "À partir de 950€",
  },
  {
    index: "03",
    title: "Festivals",
    description: "Couverture complète de festivals et événements culturels.",
    image: "/images/client/A7400218.jpg",
    priceFrom: "À partir de 600€ / jour",
  },
  {
    index: "04",
    title: "Événements privés",
    description: "Soirées, anniversaires, cérémonies et événements privés.",
    image: "/images/client/A7401314.jpg",
    priceFrom: "À partir de 300€",
  },
  {
    index: "05",
    title: "Entreprises",
    description: "Séminaires, lancements, événements professionnels et communication.",
    image: "/images/client/A7401591.jpg",
    priceFrom: "À partir de 450€",
  },
  {
    index: "06",
    title: "Automobile",
    description: "Shooting automobile, rassemblements et événements auto.",
    image: "/images/client/A7409814.jpg",
    priceFrom: "À partir de 250€",
  },
];
