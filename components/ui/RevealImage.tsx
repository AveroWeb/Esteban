"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type RevealImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  hover?: boolean;
  parallax?: boolean;
};

export default function RevealImage({
  src,
  alt,
  width,
  height,
  className,
  sizes = "100vw",
  priority = false,
  hover = false,
  parallax = false,
}: RevealImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const imgWrap = imageWrapRef.current;
    if (!container || !imgWrap) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (!reduceMotion) {
        gsap.fromTo(
          imgWrap,
          { scale: 1.12, yPercent: 8 },
          {
            scale: 1,
            yPercent: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: container,
              start: "top 88%",
            },
          }
        );
      }

      if (parallax && !reduceMotion) {
        gsap.fromTo(
          imgWrap,
          { yPercent: -6 },
          {
            yPercent: 6,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }
    }, container);

    let onMove: ((e: MouseEvent) => void) | null = null;
    let onLeave: (() => void) | null = null;

    if (hover && !reduceMotion) {
      const isFine = window.matchMedia("(pointer: fine)").matches;
      if (isFine) {
        onMove = (e: MouseEvent) => {
          const rect = container.getBoundingClientRect();
          const px = (e.clientX - rect.left) / rect.width - 0.5;
          const py = (e.clientY - rect.top) / rect.height - 0.5;
          gsap.to(imgWrap, {
            scale: 1.03,
            x: px * 14,
            y: py * 14,
            duration: 0.6,
            ease: "power3.out",
          });
        };
        onLeave = () => {
          gsap.to(imgWrap, { scale: 1, x: 0, y: 0, duration: 0.6, ease: "power3.out" });
        };
        container.addEventListener("mousemove", onMove);
        container.addEventListener("mouseleave", onLeave);
      }
    }

    return () => {
      ctx.revert();
      if (onMove) container.removeEventListener("mousemove", onMove);
      if (onLeave) container.removeEventListener("mouseleave", onLeave);
    };
  }, [hover, parallax]);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      style={{ aspectRatio: `${width}/${height}` }}
    >
      <div ref={imageWrapRef} className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          quality={100}
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    </div>
  );
}
