import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://drattaraquafeed.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "",
    "/shrimp-feed-manufacturer",
    "/vannamei-feed-program",
    "/feed-management-guide",
    "/dealer-network",
    "/about-plant-quality-process",
    "/contact-by-region",
    "/products/starter-feed",
    "/products/grower-feed",
    "/products/finisher-feed",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
