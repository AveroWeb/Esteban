import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-paper px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-[1600px]">
        <h2 className="mb-16 font-serif-display text-4xl tracking-tight text-ink sm:text-5xl">
          Ils m&apos;ont fait confiance
        </h2>

        <div className="flex snap-x snap-mandatory gap-8 overflow-x-auto pb-4 sm:grid sm:grid-cols-3 sm:overflow-visible">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="w-[85vw] flex-none snap-start border-t border-ink/10 pt-8 sm:w-auto"
            >
              <p className="mb-4 font-sans text-sm tracking-[0.2em] text-ink">
                {"★".repeat(t.rating)}
              </p>
              <p className="font-serif-display text-xl leading-snug text-ink sm:text-2xl">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-6 font-sans text-sm text-slate">
                {t.name} — <span className="text-slate/70">{t.category}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
