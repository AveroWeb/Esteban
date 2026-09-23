"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const APPROACH = [
  { title: "Observer", description: "Comprendre le lieu, les personnes et le rythme de votre projet." },
  { title: "Anticiper", description: "Être prêt quand un geste, une émotion ou une lumière se présente." },
  { title: "Raconter", description: "Choisir des images qui forment un récit, au-delà d'une seule belle photo." },
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
          Ma façon de travailler
        </p>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
              <Image
                src="/images/client/A7409809.jpg"
                alt="Le photographe en action"
                fill
                quality={92}
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
                alt="Portrait dans un lieu industriel abandonné"
                fill
                quality={92}
                sizes="30vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-10">
            <h2 className="editorial-reveal font-serif-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
              Je cherche ce qui rend chaque histoire unique.
            </h2>
            <p className="editorial-reveal mt-6 max-w-xl font-sans text-base leading-relaxed text-slate-dark">
              Je suis Esteban, photographe basé à Millau, en Aveyron. J&apos;aime être au plus
              près de l&apos;action tout en laissant les moments se dérouler naturellement.
              Une expression entre deux prises de parole, l&apos;énergie d&apos;une foule ou le
              geste précis d&apos;un métier racontent souvent davantage qu&apos;une pose.
            </p>
            <p className="editorial-reveal mt-4 max-w-xl font-sans text-base leading-relaxed text-slate-dark">
              Avant la séance, nous parlons de ce qui compte pour vous. Sur place, je mêle
              vues d&apos;ensemble et détails. Ensuite, je sélectionne et travaille les images
              pour que vous retrouviez l&apos;ambiance de ce moment, pas seulement son décor.
            </p>

            <div className="mt-14 grid gap-8 border-t border-ink/10 pt-10 sm:grid-cols-3">
              {APPROACH.map((item, index) => (
                <div key={item.title} className="editorial-reveal">
                  <p className="font-sans text-xs tracking-[0.2em] text-slate">0{index + 1}</p>
                  <p className="mt-3 font-serif-display text-2xl text-ink">
                    {item.title}
                  </p>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-slate">
                    {item.description}
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
