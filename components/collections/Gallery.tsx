import type { ReactNode } from "react";
import RevealImage from "@/components/ui/RevealImage";
import type { CollectionImage } from "@/data/collections";

export default function Gallery({ images }: { images: CollectionImage[] }) {
  const blocks: ReactNode[] = [];
  let patternIndex = 0;

  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    const pattern = patternIndex % 5;
    patternIndex++;

    if (pattern === 0) {
      blocks.push(
        <RevealImage
          key={img.src}
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
          hover
          parallax
          className="w-full px-6 sm:px-10"
          sizes="100vw"
        />
      );
      continue;
    }

    if (pattern === 1) {
      const next = images[i + 1];
      if (next) {
        blocks.push(
          <div
            key={img.src}
            className="grid grid-cols-1 gap-4 px-6 sm:grid-cols-2 sm:gap-6 sm:px-10"
          >
            <RevealImage
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              hover
              className="w-full"
              sizes="48vw"
            />
            <RevealImage
              src={next.src}
              alt={next.alt}
              width={next.width}
              height={next.height}
              hover
              className="w-full sm:mt-12"
              sizes="48vw"
            />
          </div>
        );
        i++;
        continue;
      }
    }

    if (pattern === 2) {
      blocks.push(
        <div key={img.src} className="flex justify-center px-6 sm:px-10">
          <RevealImage
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            hover
            className="w-[80vw] sm:w-[38vw]"
            sizes="40vw"
          />
        </div>
      );
      continue;
    }

    if (pattern === 3) {
      blocks.push(
        <RevealImage
          key={img.src}
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
          hover
          parallax
          className="w-full px-6 sm:px-10"
          sizes="100vw"
        />
      );
      continue;
    }

    blocks.push(
      <div key={img.src} className="flex justify-end px-6 sm:px-10">
        <RevealImage
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
          hover
          className="w-[85vw] sm:w-[42vw]"
          sizes="45vw"
        />
      </div>
    );
  }

  return <div className="flex flex-col gap-16 py-20 sm:gap-24 sm:py-28">{blocks}</div>;
}
