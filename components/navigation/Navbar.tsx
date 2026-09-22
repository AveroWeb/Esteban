"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { scrollToTarget } from "@/lib/scrollTo";
import MobileMenu from "./MobileMenu";

const LINKS = [
  { label: "Accueil", href: "/", anchor: null },
  { label: "Prestations", href: "/#prestations", anchor: "prestations" },
  { label: "Collections", href: "/collections", anchor: null },
  { label: "À propos", href: "/#about", anchor: "about" },
  { label: "Contact", href: "/#contact", anchor: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string, anchor: string | null) => {
    setMenuOpen(false);
    if (!anchor) return;

    if (pathname !== "/") {
      router.push(href);
      return;
    }
    scrollToTarget(`#${anchor}`);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[120] transition-colors duration-500 ${
          scrolled
            ? "border-b border-ink/10 bg-paper/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-2 sm:px-10">
          <Link href="/" aria-label="Esteban — Accueil" className="block">
            <Image
              src="/images/brand/esteban-logo.png"
              alt="Esteban"
              width={1254}
              height={1254}
              priority
              className="h-16 w-16 object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-8 font-sans text-[13px] tracking-[0.02em] text-ink lg:flex">
            {LINKS.map((link) =>
              link.anchor ? (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href, link.anchor)}
                  className="link-underline"
                >
                  {link.label}
                </button>
              ) : (
                <Link key={link.label} href={link.href} className="link-underline">
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNav("/#contact", "contact");
              }}
              className="hidden rounded-full border border-ink px-5 py-2.5 font-sans text-[13px] text-ink transition-colors duration-300 hover:bg-ink hover:text-paper sm:inline-block"
            >
              Parler de votre projet
            </Link>

            <button
              aria-label="Menu"
              onClick={() => setMenuOpen(true)}
              className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] lg:hidden"
            >
              <span className="h-px w-6 bg-ink" />
              <span className="h-px w-6 bg-ink" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={LINKS}
        onNavigate={handleNav}
      />
    </>
  );
}
