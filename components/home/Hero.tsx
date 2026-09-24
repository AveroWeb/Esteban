"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgARef = useRef<HTMLDivElement>(null);
  const imgBRef = useRef<HTMLDivElement>(null);
  const imgCRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isFine = window.matchMedia("(pointer: fine)").matches;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(textRef.current, { opacity: 0, y: 24, duration: 0.9 })
        .from(imgARef.current, { opacity: 0, y: 30, duration: 0.9 }, "-=0.6")
        .from(imgBRef.current, { opacity: 0, y: 30, duration: 0.9 }, "-=0.7")
        .from(imgCRef.current, { opacity: 0, y: 30, duration: 0.9 }, "-=0.7");

      if (!reduceMotion) {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
          onUpdate: (self) => {
            gsap.set(imgARef.current, { y: self.progress * -40 });
            gsap.set(imgBRef.current, { y: self.progress * -70 });
            gsap.set(imgCRef.current, { y: self.progress * -20 });
          },
        });
      }
    }, section);

    let onMove: ((e: MouseEvent) => void) | null = null;
    if (isFine && !reduceMotion) {
      const aX = gsap.quickTo(imgARef.current, "x", { duration: 0.7, ease: "power3.out" });
      const bX = gsap.quickTo(imgBRef.current, "x", { duration: 0.9, ease: "power3.out" });
      const cX = gsap.quickTo(imgCRef.current, "x", { duration: 0.5, ease: "power3.out" });

      onMove = (e: MouseEvent) => {
        const rect = section.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        aX(px * 10);
        bX(px * 18);
        cX(px * 6);
      };
      section.addEventListener("mousemove", onMove);
    }

    return () => {
      ctx.revert();
      if (onMove) section.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-6 pb-16 pt-32 sm:px-10 sm:pb-24 sm:pt-40"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-14 lg:grid-cols-12">
        <div ref={textRef} className="lg:col-span-6">
          <p className="mb-6 font-sans text-xs uppercase tracking-[0.25em] text-slate">
            Esteban — photographe à Millau
          </p>
          <h1 className="font-serif-display text-[12vw] leading-[1.02] tracking-tight text-ink sm:text-[4.6vw]">
            Vos histoires, telles qu’elles se vivent.
          </h1>
          <p className="mt-8 max-w-md font-sans text-base text-slate-dark">
            Je photographie les personnes, les gestes et l&apos;énergie qui font votre histoire.
            Sur scène, le jour d&apos;un mariage, au travail ou en plein air, je compose un
            reportage fidèle à ce que vous avez vécu.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link
              href="/collections"
              className="rounded-full bg-ink px-7 py-3.5 font-sans text-sm text-paper transition-transform duration-300 hover:-translate-y-0.5"
            >
              Voir les reportages
            </Link>
            <a
              href="#contact"
              className="link-underline font-sans text-sm text-ink"
            >
              Parler de votre projet
            </a>
          </div>
        </div>

        <div className="relative h-[440px] sm:h-[560px] lg:col-span-6 lg:h-[620px]">
          <div
            ref={imgCRef}
            className="absolute right-0 top-6 h-[46%] w-[42%] overflow-hidden rounded-sm sm:top-10"
          >
            <Image
              src="/images/client/A7409801.jpg"
              alt="Photographe en montagne avec son chien"
              fill
              quality={92}
              sizes="30vw"
              className="object-cover scale-x-[-1]"
            />
          </div>

          <div
            ref={imgBRef}
            className="absolute left-[6%] top-0 h-[60%] w-[46%] overflow-hidden rounded-sm shadow-xl"
          >
            <Image
              src="/images/client/A7409809.jpg"
              alt="Photographie événementielle"
              fill
              quality={92}
              sizes="35vw"
              className="object-cover"
            />
          </div>

          <div
            ref={imgARef}
            className="absolute bottom-0 left-[20%] h-[72%] w-[52%] overflow-hidden rounded-sm shadow-2xl"
          >
            <Image
              src="/images/client/A7408319.jpg"
              alt="Reportage événementiel"
              fill
              priority
              quality={92}
              sizes="45vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
