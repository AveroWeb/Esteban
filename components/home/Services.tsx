import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="prestations" className="bg-paper px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="editorial-reveal font-serif-display text-4xl tracking-tight text-ink sm:text-5xl">
            Mes prestations
          </h2>
          <p className="editorial-reveal max-w-md font-sans text-sm leading-relaxed text-slate">
            Chaque projet a son rythme. Je prends le temps de comprendre les moments,
            les personnes et les détails qui comptent pour vous.
            <span className="mt-2 block text-slate/70">Tarifs de départ ; devis adapté à votre projet.</span>
          </p>
        </div>

        <div>
          {services.map((service) => (
            <a
              key={service.title}
              href="#contact"
              className="group relative grid w-full gap-3 border-b border-ink/10 py-6 pr-8 text-left first:border-t sm:grid-cols-[minmax(0,1fr)_minmax(280px,400px)] sm:items-center sm:gap-8 sm:py-8"
            >
              <div className="flex items-baseline gap-4 sm:gap-8">
                <span className="font-sans text-xs text-slate">{service.index}</span>
                <span className="inline-block font-serif-display text-2xl text-ink transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl">
                  {service.title}
                </span>
              </div>

              <div className="pl-8 sm:pl-0">
                <p className="max-w-sm font-sans text-sm leading-relaxed text-slate">{service.description}</p>
                <p className="mt-2 font-sans text-xs uppercase tracking-[0.1em] text-ink">
                  {service.priceFrom}
                </p>
              </div>

              <span aria-hidden="true" className="absolute right-0 top-7 font-sans text-xl text-ink transition-transform duration-500 group-hover:translate-x-1 sm:top-1/2 sm:-translate-y-1/2">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
