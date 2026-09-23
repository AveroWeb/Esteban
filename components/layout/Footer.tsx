import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink px-6 pb-8 pt-16 text-paper sm:px-10 sm:pt-24">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-2 gap-10 border-b border-paper/15 pb-14 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Image
              src="/images/brand/esteban-logo.png"
              alt="Esteban"
              width={1254}
              height={1254}
              className="h-32 w-32 object-contain invert"
            />
            <p className="mt-3 max-w-[220px] font-sans text-sm text-paper/60">
              Reportages photo à Millau et ailleurs : événements, personnes, métiers et plein air.
            </p>
          </div>

          <div>
            <p className="mb-4 font-sans text-xs uppercase tracking-[0.2em] text-paper/50">
              Navigation
            </p>
            <ul className="flex flex-col gap-2 font-sans text-sm text-paper/85">
              <li><Link href="/" className="link-underline">Accueil</Link></li>
              <li><Link href="/#prestations" className="link-underline">Prestations</Link></li>
              <li><Link href="/collections" className="link-underline">Collections</Link></li>
              <li><Link href="/#about" className="link-underline">À propos</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-4 font-sans text-xs uppercase tracking-[0.2em] text-paper/50">
              Prestations
            </p>
            <ul className="flex flex-col gap-2 font-sans text-sm text-paper/85">
              <li>Concerts</li>
              <li>Mariages</li>
              <li>Festivals</li>
              <li>Entreprises</li>
              <li>Automobile</li>
            </ul>
          </div>

          <div>
            <p className="mb-4 font-sans text-xs uppercase tracking-[0.2em] text-paper/50">
              Contact
            </p>
            <ul className="flex flex-col gap-2 font-sans text-sm text-paper/85">
              <li>
                <a href="mailto:esteban.dcs@icloud.com" className="link-underline">
                  esteban.dcs@icloud.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/s.t.b.a.m/"
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 pt-6 font-sans text-xs text-paper/50 sm:flex-row sm:items-center">
          <span>© 2026 Esteban. Tous droits réservés.</span>
          <span>Photographe basé à Millau, Aveyron.</span>
        </div>
      </div>
    </footer>
  );
}
