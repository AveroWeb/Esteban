import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { collections, getCollectionBySlug } from "@/data/collections";
import Gallery from "@/components/collections/Gallery";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) return {};
  return {
    title: collection.title,
    description: collection.description,
    openGraph: { images: [collection.cover.src] },
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) notFound();

  const currentIndex = collections.findIndex((c) => c.slug === slug);
  const nextCollection = collections[(currentIndex + 1) % collections.length];

  return (
    <main className="bg-paper">
      <div className="relative h-[65vh] w-full overflow-hidden sm:h-[75vh]">
        <Image
          src={collection.cover.src}
          alt={collection.cover.alt}
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 px-6 pb-10 sm:px-10 sm:pb-14">
          <h1 className="font-serif-display text-[11vw] leading-[0.95] tracking-tight text-paper sm:text-[5vw]">
            {collection.title}
          </h1>
          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 font-sans text-xs uppercase tracking-[0.2em] text-paper/85">
            <span>{collection.category}</span>
            <span>{collection.location}</span>
            <span>{collection.year}</span>
          </div>
        </div>
      </div>

      <div className="px-6 pt-16 sm:px-10">
        <p className="max-w-xl font-sans text-lg text-slate-dark">
          {collection.description}
        </p>
      </div>

      <Gallery images={collection.images} />

      <div className="border-t border-ink/10 px-6 py-16 sm:px-10 sm:py-20">
        <Link href="/collections" className="link-underline font-sans text-sm text-ink">
          ← Retour aux collections
        </Link>
      </div>

      <div className="border-t border-ink/10 bg-ink px-6 py-16 text-paper sm:px-10 sm:py-24">
        <p className="mb-4 font-sans text-xs uppercase tracking-[0.25em] text-paper/50">
          Collection suivante
        </p>
        <Link
          href={`/collections/${nextCollection.slug}`}
          className="link-underline font-serif-display text-[11vw] leading-[0.95] tracking-tight text-paper sm:text-[5vw]"
        >
          {nextCollection.title}
        </Link>
        <p className="mt-4 font-sans text-sm text-paper/60">
          {nextCollection.category} — {nextCollection.year}
        </p>
      </div>
    </main>
  );
}
