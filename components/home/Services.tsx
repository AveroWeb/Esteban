"use client";

import Image from "next/image";
import { services } from "@/data/services";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function Services() {
  const isMobile = useIsMobile();

  return (
    <section id="prestations" className="bg-paper px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="font-serif-display text-4xl tracking-tight text-ink sm:text-5xl">
            Nos prestations
          </h2>
          <p className="max-w-sm font-sans text-sm text-slate">
            Chaque événement mérite une approche différente.
            <br />
            <span className="text-slate/70">
              Tarifs indicatifs, devis personnalisé selon vos besoins.
            </span>
          </p>
        </div>

        <div>
          {services.map((service) => (
            <a
              key={service.title}
              href="#contact"
              className="group flex w-full items-center justify-between gap-6 border-b border-ink/10 py-6 text-left first:border-t sm:grid sm:grid-cols-[minmax(0,1fr)_minmax(280px,380px)_24px] sm:py-8"
            >
              <div className="flex items-baseline gap-4 sm:gap-8">
                <span className="font-sans text-xs text-slate">{service.index}</span>
                <div>
                  <span className="font-serif-display text-2xl text-ink transition-transform duration-500 group-hover:translate-x-3 sm:text-4xl">
                    {service.title}
                  </span>
                  {isMobile && (
                    <p className="mt-1 font-sans text-xs text-slate">{service.priceFrom}</p>
                  )}
                </div>
              </div>

              {isMobile ? (
                <div className="relative h-16 w-16 flex-none overflow-hidden rounded-sm">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    quality={100}
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="hidden max-w-xs sm:block">
                  <p className="font-sans text-sm text-slate">{service.description}</p>
                  <p className="mt-2 font-sans text-xs uppercase tracking-[0.1em] text-ink">
                    {service.priceFrom}
                  </p>
                </div>
              )}

              <span className="font-sans text-xl text-ink transition-transform duration-500 group-hover:rotate-45">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
