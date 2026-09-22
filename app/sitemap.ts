import type { MetadataRoute } from "next";
import { collections } from "@/data/collections";

export const dynamic = "force-static";

const siteUrl = process.env.GITHUB_PAGES === "true"
  ? "https://averoweb.github.io/Esteban"
  : "https://www.esteban-photographie.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/collections`, changeFrequency: "weekly", priority: 0.9 },
    ...collections.map((c) => ({
      url: `${siteUrl}/collections/${c.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
