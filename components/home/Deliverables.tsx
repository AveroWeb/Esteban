const BENEFITS = [
  {
    number: "01",
    title: "Un récit à revivre",
    description: "Des plans larges, des portraits et des détails pour retrouver l'ambiance d'une journée, pas seulement ses temps forts.",
  },
  {
    number: "02",
    title: "Des images à partager",
    description: "Une sélection cohérente pour vos proches, vos équipes ou votre communication, selon le projet que nous avons défini.",
  },
  {
    number: "03",
    title: "Une finition soignée",
    description: "Chaque photo retenue est travaillée avec attention, en gardant des couleurs et une lumière fidèles à la scène.",
  },
];

export default function Deliverables() {
  return (
    <section className="bg-paper px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-[1600px]">
        <p className="mb-4 font-sans text-xs uppercase tracking-[0.25em] text-slate">
          Au-delà de la séance
        </p>
        <h2 className="editorial-reveal max-w-3xl font-serif-display text-4xl tracking-tight text-ink sm:text-5xl">
          Des photos qui ont encore quelque chose à dire après le jour J.
        </h2>
        <div className="mt-16 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {BENEFITS.map((benefit) => (
            <div key={benefit.number} className="editorial-reveal border-t border-ink/15 pt-7">
              <p className="font-sans text-xs tracking-[0.2em] text-slate">{benefit.number}</p>
              <h3 className="mt-5 font-serif-display text-2xl text-ink">{benefit.title}</h3>
              <p className="mt-4 max-w-sm font-sans text-sm leading-relaxed text-slate-dark">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
