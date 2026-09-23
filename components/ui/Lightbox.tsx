"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";

export type LightboxImage = { src: string; alt: string };

export default function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const isOpen = index !== null;

  const goNext = useCallback(() => {
    if (index === null) return;
    onNavigate((index + 1) % images.length);
  }, [index, images.length, onNavigate]);

  const goPrev = useCallback(() => {
    if (index === null) return;
    onNavigate((index - 1 + images.length) % images.length);
  }, [index, images.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose, goNext, goPrev]);

  if (!isOpen || index === null) return null;
  const image = images[index];

  return (
    <div className="fixed inset-0 z-[250] flex items-center justify-center bg-ink/95 px-4 backdrop-blur-sm">
      <button
        onClick={onClose}
        aria-label="Fermer"
        className="absolute right-6 top-6 font-sans text-2xl text-paper transition-opacity hover:opacity-70"
      >
        ×
      </button>

      <button
        onClick={goPrev}
        aria-label="Précédent"
        className="absolute left-4 font-sans text-2xl text-paper transition-opacity hover:opacity-70 sm:left-8"
      >
        ←
      </button>

      <div className="relative h-[75vh] w-full max-w-4xl">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          quality={92}
          sizes="90vw"
          className="object-contain"
        />
      </div>

      <button
        onClick={goNext}
        aria-label="Suivant"
        className="absolute right-4 font-sans text-2xl text-paper transition-opacity hover:opacity-70 sm:right-8"
      >
        →
      </button>

      <p className="absolute bottom-6 font-sans text-xs tracking-[0.2em] text-paper/60">
        {index + 1} / {images.length}
      </p>
    </div>
  );
}
