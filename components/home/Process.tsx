"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    index: "01",
    title: "Échange",
    description: "On discute de votre événement et de vos besoins.",
  },
  {
    index: "02",
    title: "Préparation",
    description: "Je prépare le shooting, les horaires et les moments importants.",
  },
  {
    index: "03",
    title: "Reportage",
    description: "Je capture l'événement de manière naturelle et discrète.",
  },
  {
    index: "04",
    title: "Livraison",
    description: "Vous recevez votre sélection retouchée en haute qualité.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const fill = fillRef.current;
    if (!section || !fill) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      gsap.set(fill, { scaleX: 1, scaleY: 1 });
      return;
    }

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 640px)",
        isMobile: "(max-width: 639px)",
      },
      (context) => {
        const { isDesktop } = context.conditions as { isDesktop: boolean };

        gsap.fromTo(
          fill,
          isDesktop ? { scaleX: 0 } : { scaleY: 0 },
          {
            scaleX: isDesktop ? 1 : undefined,
            scaleY: isDesktop ? undefined : 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 65%",
              end: "bottom 70%",
              scrub: 0.6,
            },
          }
        );
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-paper px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-[1600px]">
        <h2 className="mb-4 font-serif-display text-4xl tracking-tight text-ink sm:text-5xl">
          Comment ça se passe ?
        </h2>
        <p className="mb-16 max-w-md font-sans text-sm text-slate">
          Un déroulement simple, du premier échange à la livraison finale.
        </p>

        <div className="relative flex flex-col gap-12 sm:flex-row sm:gap-6">
          <div className="absolute left-[9px] top-2 h-[calc(100%-2rem)] w-px bg-ink/10 sm:left-0 sm:top-2 sm:h-px sm:w-full">
            <div
              ref={fillRef}
              className="h-full w-full origin-top bg-ink sm:origin-left"
            />
          </div>

          {STEPS.map((step) => (
            <div key={step.index} className="relative flex gap-5 pl-8 sm:flex-1 sm:flex-col sm:gap-6 sm:pl-0">
              <div className="absolute left-0 top-0 h-[19px] w-[19px] rounded-full border-2 border-ink bg-paper sm:relative sm:mb-2" />
              <div>
                <span className="font-sans text-xs text-slate">{step.index}</span>
                <h3 className="mt-1 font-serif-display text-xl text-ink sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[220px] font-sans text-sm text-slate">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
