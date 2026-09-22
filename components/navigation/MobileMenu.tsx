"use client";

import Link from "next/link";

type NavLink = { label: string; href: string; anchor: string | null };

export default function MobileMenu({
  open,
  onClose,
  links,
  onNavigate,
}: {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
  onNavigate: (href: string, anchor: string | null) => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[130] flex flex-col bg-paper transition-transform duration-500 ease-[cubic-bezier(0.83,0,0.17,1)] lg:hidden"
      style={{
        transform: open ? "translateY(0)" : "translateY(-100%)",
        pointerEvents: open ? "auto" : "none",
      }}
    >
      <div className="flex items-center justify-between px-6 py-5">
        <span className="font-serif-display text-lg text-ink">Esteban</span>
        <button
          aria-label="Fermer le menu"
          onClick={onClose}
          className="text-sm tracking-[0.15em] text-ink"
        >
          FERMER
        </button>
      </div>

      <nav className="flex flex-1 flex-col justify-center gap-2 px-6">
        {links.map((link) =>
          link.anchor ? (
            <button
              key={link.label}
              onClick={() => onNavigate(link.href, link.anchor)}
              className="border-b border-ink/10 py-4 text-left font-serif-display text-4xl text-ink"
            >
              {link.label}
            </button>
          ) : (
            <Link
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="border-b border-ink/10 py-4 font-serif-display text-4xl text-ink"
            >
              {link.label}
            </Link>
          )
        )}
      </nav>

      <div className="px-6 pb-10">
        <Link
          href="/#contact"
          onClick={(e) => {
            e.preventDefault();
            onNavigate("/#contact", "contact");
          }}
          className="block rounded-full border border-ink px-5 py-4 text-center font-sans text-sm text-ink"
        >
          Parler de votre projet
        </Link>
      </div>
    </div>
  );
}
