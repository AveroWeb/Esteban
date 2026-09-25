"use client";

import Image from "next/image";
import ArrowUpRight from "@/components/ui/ArrowUpRight";

const EVENT_TYPES = [
  "Concert",
  "Mariage",
  "Festival",
  "Entreprise",
  "Automobile",
  "Sport & aventure",
  "Vol libre",
  "Portrait",
  "Lifestyle",
  "Privé",
  "Autre",
];

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fields = new FormData(e.currentTarget);
    const value = (name: string) => String(fields.get(name) ?? "").trim();
    const subject = `Demande photo — ${value("eventType")}`;
    const body = [
      `Nom : ${value("name")}`,
      `Email : ${value("email")}`,
      `Téléphone : ${value("phone") || "Non renseigné"}`,
      `Type de séance : ${value("eventType")}`,
      `Date : ${value("date") || "À définir"}`,
      `Lieu : ${value("location") || "À définir"}`,
      "",
      value("message"),
    ].join("\n");

    window.location.href = `mailto:esteban.dcs@icloud.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="bg-paper px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <h2 className="editorial-reveal font-serif-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl">
            Racontez-moi
            <br />
            votre projet.
          </h2>
          <p className="editorial-reveal mt-6 max-w-md font-sans text-base leading-relaxed text-slate-dark">
            Un événement, une équipe, une aventure ou simplement une idée ? Dites-moi
            ce que vous préparez, où cela se passe et les images que vous aimeriez garder.
            Nous verrons ensemble la formule qui vous convient.
          </p>

          <div className="mt-10 flex flex-col gap-2 font-sans text-sm text-ink">
            <a href="mailto:esteban.dcs@icloud.com" className="link-underline w-fit">
              esteban.dcs@icloud.com
            </a>
            <a
              href="https://www.instagram.com/s.t.b.a.m/"
              target="_blank"
              rel="noreferrer"
              className="link-underline w-fit"
            >
              <span className="inline-flex items-center gap-1.5">
                Voir le profil Instagram
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </a>
            <a href="tel:+33680062075" className="link-underline w-fit">
              +33 6 80 06 20 75
            </a>
          </div>

          <div className="relative mt-14 hidden h-56 w-44 overflow-hidden rounded-sm shadow-xl sm:block">
            <div className="relative h-full w-full -rotate-2">
              <Image
                src="/images/client/A7409801.jpg"
                alt="Photographe en séance"
                fill
                quality={92}
                sizes="200px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7"
        >
          <Field label="Nom" name="name" required />
          <Field label="Email" name="email" type="email" required />
          <Field label="Téléphone (facultatif)" name="phone" />

          <label className="flex flex-col gap-2 font-sans text-sm text-ink">
            Type de séance
            <select
              name="eventType"
              required
              defaultValue=""
              className="border-b border-ink/20 bg-transparent py-2.5 font-sans text-sm text-ink outline-none transition-colors focus:border-ink"
            >
              <option value="" disabled>
                Sélectionner
              </option>
              {EVENT_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>

          <Field label="Date de l'événement" name="date" type="date" />
          <Field label="Lieu" name="location" />

          <label className="flex flex-col gap-2 font-sans text-sm text-ink sm:col-span-2">
            Message
            <textarea
              name="message"
              rows={4}
              required
              className="resize-none border-b border-ink/20 bg-transparent py-2.5 font-sans text-sm text-ink outline-none transition-colors focus:border-ink"
            />
          </label>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="rounded-full bg-ink px-8 py-3.5 font-sans text-sm text-paper transition-transform duration-300 hover:-translate-y-0.5"
            >
              Préparer ma demande
            </button>
            <p className="mt-3 font-sans text-sm text-slate">
              Votre messagerie s&apos;ouvrira avec votre message prérempli ; il ne restera qu&apos;à l&apos;envoyer.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2 font-sans text-sm text-ink">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="border-b border-ink/20 bg-transparent py-2.5 font-sans text-sm text-ink outline-none transition-colors focus:border-ink"
      />
    </label>
  );
}
