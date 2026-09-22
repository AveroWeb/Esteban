import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import PageTransition from "@/components/layout/PageTransition";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppBubble from "@/components/layout/WhatsAppBubble";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const siteUrl = process.env.GITHUB_PAGES === "true"
  ? "https://averoweb.github.io/Esteban"
  : "https://www.esteban-photographie.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Esteban — Photographe à Millau, Aveyron",
    template: "%s — Esteban Photographie",
  },
  description:
    "Esteban, photographe basé à Millau en Aveyron, disponible partout en France : concerts, mariages, festivals, entreprises, automobile et projets lifestyle. Des images qui racontent vos moments.",
  keywords: [
    "photographe Millau",
    "photographe Aveyron",
    "photographe événementiel",
    "photographe concert",
    "photographe mariage",
    "photographe festival",
    "photographe entreprise",
    "photographe automobile",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Esteban Photographie",
    title: "Esteban — Photographe à Millau, Aveyron",
    description:
      "Des images qui racontent vos moments. Concerts, mariages, festivals, entreprises, automobile et projets lifestyle.",
    images: [`${siteUrl}/images/hero/hero-01.jpg`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Esteban — Photographe à Millau, Aveyron",
    description:
      "Des images qui racontent vos moments. Concerts, mariages, festivals, entreprises, automobile et projets lifestyle.",
    images: [`${siteUrl}/images/hero/hero-01.jpg`],
  },
  icons: {
    icon: `${siteUrl}/images/brand/esteban-logo.png`,
    apple: `${siteUrl}/images/brand/esteban-logo.png`,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper text-ink">
        <SmoothScrollProvider>
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <WhatsAppBubble />
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
