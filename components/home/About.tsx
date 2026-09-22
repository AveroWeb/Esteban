"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: "+50", label: "Séances réalisées" },
  { value: "4 ans", label: "D'expérience" },
  { value: "Millau", label: "Aveyron, disponible partout" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const overlapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const overlap = overlapRef.current;
    if (!section || !overlap) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        overlap,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 70%" },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="bg-paper px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-[1600px]">
        <p className="mb-16 font-sans text-xs uppercase tracking-[0.25em] text-slate">
          Derrière l&apos;objectif
        </p>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
              <Image
                src="/images/client/A7409809.jpg"
                alt="Le photographe en action"
                fill
                quality={100}
                sizes="45vw"
                className="object-cover"
              />
            </div>
            <div
              ref={overlapRef}
              className="absolute -bottom-10 -right-6 h-[45%] w-[55%] overflow-hidden rounded-sm shadow-2xl sm:-right-10"
            >
              <Image
                src="/images/client/A7409454.jpg"
                alt="Détail du travail du photographe"
                fill
                quality={100}
                sizes="30vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-10">
            <h2 className="font-serif-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
              Je capture ce qui se passe vraiment.
            </h2>
            <p className="mt-6 max-w-xl font-sans text-base text-slate-dark">
              Je m&apos;appelle Esteban, photographe basé à Millau, en Aveyron. Pas de mise en
              scène forcée, pas de poses artificielles. Qu&apos;il s&apos;agisse d&apos;un concert, d&apos;un
              mariage, d&apos;un événement professionnel ou d&apos;un projet portrait et lifestyle, je
              documente ce qui se passe vraiment — pour vous laisser des images qui vous
              ressemblent.
            </p>

            <div className="mt-14 grid grid-cols-3 gap-8 border-t border-ink/10 pt-10">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif-display text-3xl text-ink sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 font-sans text-xs uppercase tracking-[0.15em] text-slate">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
