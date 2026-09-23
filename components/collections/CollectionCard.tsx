import Image from "next/image";
import Link from "next/link";
import type { Collection } from "@/data/collections";

export default function CollectionCard({
  collection,
  wide = false,
  tall = false,
}: {
  collection: Collection;
  wide?: boolean;
  tall?: boolean;
}) {
  return (
    <Link
      href={"/collections/" + collection.slug}
      className={"group relative block overflow-hidden rounded-sm bg-mist " + (wide ? "sm:col-span-2 " : "") + (tall ? "sm:row-span-2" : "")}
    >
      <div
        className={"relative w-full overflow-hidden " + (tall ? "h-full" : "")}
        style={{ aspectRatio: tall ? undefined : wide ? "16/9" : "4/5" }}
      >
        <Image
          src={collection.cover.src}
          alt={collection.cover.alt}
          fill
          quality={92}
          sizes="(max-width: 640px) 100vw, 45vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 sm:p-6">
        <div>
          <p className="font-serif-display text-xl text-paper sm:text-2xl">
            {collection.title}
          </p>
          <p className="mt-1 font-sans text-xs uppercase tracking-[0.15em] text-paper/75">
            {collection.category}
          </p>
        </div>
        <span className="font-sans text-lg text-paper">↗</span>
      </div>
    </Link>
  );
}
