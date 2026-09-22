export type Testimonial = {
  quote: string;
  rating: number;
  name: string;
  category: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: "Une super expérience et un résultat incroyable. Les photos racontent vraiment la soirée.",
    rating: 5,
    name: "Lucas M.",
    category: "Concert",
  },
  {
    quote: "Discret pendant toute la journée, et pourtant il n'a raté aucun des moments importants.",
    rating: 5,
    name: "Léa & Hugo",
    category: "Mariage",
  },
  {
    quote: "Un rendu très professionnel, livré rapidement. Exactement ce qu'il fallait pour notre événement.",
    rating: 5,
    name: "Claire D.",
    category: "Entreprise",
  },
];
