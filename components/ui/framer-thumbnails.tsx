"use client";

import Image from "next/image";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export type PortfolioItem = {
  id: string;
  src: string;
  alt: string;
  title: string;
  eyebrow: string;
};

const ACTIVE_WIDTH = 150;
const COLLAPSED_WIDTH = 42;
const GAP = 4;

export default function FramerThumbnails({ items }: { items: PortfolioItem[] }) {
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const updateWidth = () => setContainerWidth(container.offsetWidth || 1);
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isDragging) return;
    const controls = animate(x, -index * containerWidth, {
      type: "spring",
      stiffness: 280,
      damping: 32,
    });
    return () => controls.stop();
  }, [containerWidth, index, isDragging, x]);

  useEffect(() => {
    const thumbnails = thumbnailsRef.current;
    if (!thumbnails) return;
    const left = index * (COLLAPSED_WIDTH + GAP) - thumbnails.offsetWidth / 2 + ACTIVE_WIDTH / 2;
    thumbnails.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
  }, [index]);

  const select = (nextIndex: number) => {
    setIndex(Math.max(0, Math.min(items.length - 1, nextIndex)));
  };

  return (
    <div
      className="w-full"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") select(index - 1);
        if (event.key === "ArrowRight") select(index + 1);
        if (event.key === "Home") select(0);
        if (event.key === "End") select(items.length - 1);
      }}
    >
      <div
        ref={containerRef}
        className="relative mx-auto aspect-[4/5] w-full max-w-[1280px] overflow-hidden bg-ink sm:aspect-[16/10]"
        aria-roledescription="carrousel"
        aria-label="Portfolio d'Esteban"
      >
        <motion.div
          className="flex h-full cursor-grab active:cursor-grabbing"
          drag="x"
          dragElastic={0.16}
          dragMomentum={false}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={(_, info) => {
            setIsDragging(false);
            const isFast = Math.abs(info.velocity.x) > 500;
            const movedEnough = Math.abs(info.offset.x) > containerWidth * 0.18;
            if (isFast || movedEnough) select(index + (info.offset.x < 0 ? 1 : -1));
          }}
          style={{ x }}
        >
          {items.map((item, itemIndex) => (
            <figure key={item.id} className="relative h-full w-full shrink-0 overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                quality={100}
                priority={itemIndex === 0}
                sizes="(max-width: 640px) 100vw, 1600px"
                draggable={false}
                className="pointer-events-none select-none object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-6 text-paper sm:p-9">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-paper/65">{item.eyebrow}</p>
                  <h3 className="mt-2 font-serif-display text-3xl tracking-tight sm:text-5xl">{item.title}</h3>
                </div>
                <p className="shrink-0 font-sans text-xs tracking-[0.18em] text-paper/70">
                  {String(itemIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                </p>
              </figcaption>
            </figure>
          ))}
        </motion.div>

        <button type="button" disabled={index === 0} onClick={() => select(index - 1)} aria-label="Photo précédente" className="absolute left-4 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-paper/40 bg-ink/25 font-sans text-xl text-paper backdrop-blur-sm transition hover:bg-paper hover:text-ink disabled:pointer-events-none disabled:opacity-25 sm:left-7">
          ←
        </button>
        <button type="button" disabled={index === items.length - 1} onClick={() => select(index + 1)} aria-label="Photo suivante" className="absolute right-4 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-paper/40 bg-ink/25 font-sans text-xl text-paper backdrop-blur-sm transition hover:bg-paper hover:text-ink disabled:pointer-events-none disabled:opacity-25 sm:right-7">
          →
        </button>
      </div>

      <div ref={thumbnailsRef} className="mx-auto mt-2 max-w-[1280px] overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex h-20 w-max min-w-full gap-1 sm:h-24 sm:justify-center">
          {items.map((item, itemIndex) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => select(itemIndex)}
              aria-label={`Afficher ${item.title}`}
              aria-current={itemIndex === index ? "true" : undefined}
              initial={false}
              animate={{ width: itemIndex === index ? ACTIVE_WIDTH : COLLAPSED_WIDTH }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-full shrink-0 overflow-hidden bg-mist focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              <Image src={item.src} alt="" fill quality={100} sizes={itemIndex === index ? "150px" : "42px"} className={`object-cover transition duration-300 ${itemIndex === index ? "opacity-100" : "opacity-55 grayscale hover:opacity-90"}`} />
              {itemIndex === index && <span className="absolute inset-x-0 bottom-0 h-0.5 bg-paper" />}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
