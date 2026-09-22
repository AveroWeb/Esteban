"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export default function SplitReveal({
  lines,
  className,
  lineClassName,
  start = "top 85%",
  stagger = 0.08,
}: {
  lines: string[];
  className?: string;
  lineClassName?: string;
  start?: string;
  stagger?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const rows = container.querySelectorAll("[data-line]");

    if (reduceMotion) {
      gsap.set(rows, { yPercent: 0, opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        rows,
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power4.out",
          stagger,
          scrollTrigger: {
            trigger: container,
            start,
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, [start, stagger]);

  return (
    <div ref={containerRef} className={className}>
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <div data-line className={cn(lineClassName)}>
            {line}
          </div>
        </div>
      ))}
    </div>
  );
}
