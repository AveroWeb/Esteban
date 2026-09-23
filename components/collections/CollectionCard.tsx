"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Collection } from "@/data/collections";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function CollectionCard({
  collection,
  wide = false,
  tall = false,
}: {
  collection: Collection;
  wide?: boolean;
  tall?: boolean;
}) {
  const [previewIndex, setPreviewIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isMobile = useIsMobile();

  const previews = [collection.cover.src, ...collection.previewImages];

  const startCycle = () => {
    if (isMobile) return;
    intervalRef.current = setInterval(() => {
      setPreviewIndex((i) => (i + 1) % previews.length);
    }, 550);
  };

  const stopCycle = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
    setPreviewIndex(0);
  };

  useEffect(() => () => stopCycle(), []);

  return (
    <Link
      href={`/collections/${collection.slug}`}
      onMouseEnter={startCycle}
      onMouseLeave={stopCycle}
      className={`group relative block overflow-hidden rounded-sm bg-mist ${
        wide ? "sm:col-span-2" : ""
      } ${tall ? "sm:row-span-2" : ""}`}
    >
      <div
        className={`relative w-full overflow-hidden ${tall ? "h-full" : ""}`}
        style={{ aspectRatio: tall ? undefined : wide ? "16/9" : "4/5" }}
      >
        {previews.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={collection.title}
            fill
            quality={100}
            sizes="(max-width: 640px) 100vw, 45vw"
            className="object-cover transition-[opacity,transform] duration-500 ease-out group-hover:scale-[1.03]"
            style={{ opacity: i === previewIndex ? 1 : 0, position: "absolute" }}
            priority={false}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 sm:p-6">
        <div className="transition-transform duration-500 ease-out group-hover:-translate-y-1">
          <p className="font-serif-display text-xl text-paper sm:text-2xl">
            {collection.title}
          </p>
          <p className="mt-1 font-sans text-xs uppercase tracking-[0.15em] text-paper/75">
            {collection.category} — {collection.location} — {collection.year}
          </p>
        </div>
        <span className="font-sans text-lg text-paper transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
          ↗
        </span>
      </div>
    </Link>
  );
}
