import Image from "next/image";

const IMAGES = [
  "/images/client/A7400218.jpg",
  "/images/client/A7400116.jpg",
  "/images/client/A7401591.jpg",
  "/images/client/A7408309.jpg",
  "/images/client/A7409454.jpg",
  "/images/client/A7409811.jpg",
];

export default function PhotoMarquee() {
  const items = [...IMAGES, ...IMAGES];

  return (
    <section className="overflow-hidden bg-paper py-6">
      <div
        className="marquee-track flex w-max gap-4"
        style={{ animationDuration: "34s" }}
      >
        {items.map((src, i) => (
          <div
            key={i}
            className="relative h-[180px] w-[260px] flex-none overflow-hidden rounded-sm sm:h-[250px] sm:w-[360px]"
          >
            <Image
              src={src}
              alt="Photographie par Esteban"
              fill
              quality={92}
              sizes="360px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
