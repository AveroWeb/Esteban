import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.GITHUB_PAGES === "true"
    ? "https://averoweb.github.io/Esteban"
    : "https://www.esteban-photographie.com";

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
