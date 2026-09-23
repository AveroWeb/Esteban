export type Service = {
  index: string;
  title: string;
  description: string;
  priceFrom: string;
};

export const services: Service[] = [
  {
    index: "01",
    title: "Concerts",
    description: "La scène, les artistes, les coulisses et le public : des images qui restituent l'énergie du live.",
    priceFrom: "À partir de 350€",
  },
  {
    index: "02",
    title: "Mariages",
    description: "Des préparatifs à la fête, un récit de votre journée fait de regards, de liens et de détails.",
    priceFrom: "À partir de 950€",
  },
  {
    index: "03",
    title: "Festivals",
    description: "Plusieurs scènes, une foule, des rencontres : je saisis l'ambiance et les moments forts du festival.",
    priceFrom: "À partir de 600€ / jour",
  },
  {
    index: "04",
    title: "Événements privés",
    description: "Une présence discrète pour garder des images vivantes de vos proches et de votre célébration.",
    priceFrom: "À partir de 300€",
  },
  {
    index: "05",
    title: "Entreprises",
    description: "Reportages sur le terrain, portraits d'équipe et images de vos métiers pour raconter votre activité.",
    priceFrom: "À partir de 450€",
  },
  {
    index: "06",
    title: "Automobile",
    description: "Des lignes d'un véhicule aux gestes autour de lui, des photos pensées pour montrer son caractère.",
    priceFrom: "À partir de 250€",
  },
];
