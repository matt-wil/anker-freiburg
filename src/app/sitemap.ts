import { MetadataRoute } from "next";
import { getAlldata } from "@/lib/queries/artists";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.anker-tattoo.de";
const LOCALES = ["de", "en"] as const;

type LocalizedRoute = {
  de: string;
  en: string;
};

const STATIC_ROUTES: LocalizedRoute[] = [
  { de: "", en: "" },
  { de: "/ueber-uns", en: "/about-us" },
  { de: "/kontakt", en: "/contact" },
  { de: "/haeufige-gestellte-fragen", en: "/faq" },
  { de: "/aktionen", en: "/promotions" },
  { de: "/tattoo", en: "/tattoo" },
  { de: "/piercing", en: "/piercing" },
  { de: "/pmu", en: "/pmu" },
  { de: "/datenschutz", en: "/datenschutz" },
  { de: "/impressum", en: "/impressum" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapEntries: MetadataRoute.Sitemap = [];
  const now = new Date();

  // 1. Process Static Localized Routes
  for (const routeMap of STATIC_ROUTES) {
    for (const locale of LOCALES) {
      const currentPath = routeMap[locale];
      const url = `${BASE_URL}/${locale}${currentPath}`;

      const languages = {
        ...Object.fromEntries(
          LOCALES.map((loc) => [loc, `${BASE_URL}/${loc}${routeMap[loc]}`]),
        ),
        "x-default": `${BASE_URL}/de${routeMap.de}`,
      };

      sitemapEntries.push({
        url,
        lastModified: now,
        changeFrequency: currentPath === "" ? "daily" : "weekly",
        priority: currentPath === "" ? 1.0 : 0.8,
        alternates: {
          languages,
        },
      });
    }
  }

  // 2. Process Dynamic Artist Routes
  try {
    const artists = await getAlldata();

    if (Array.isArray(artists)) {
      for (const artist of artists) {
        const rawCategory =
          artist.category?.toLowerCase() ||
          artist.role?.toLowerCase() ||
          "tattoo";
        const category = rawCategory.includes("pierc") ? "piercing" : "tattoo";
        const rawSlug =
          artist.slug || artist.name.toLowerCase().replace(/\s+/g, "-");

        // Clean paths to prevent double slashes
        const slug = rawSlug.replace(/^\/+|\/+$/g, "");
        const path = `/${category}/${slug}`;

        for (const locale of LOCALES) {
          const url = `${BASE_URL}/${locale}${path}`;

          const languages = {
            ...Object.fromEntries(
              LOCALES.map((loc) => [loc, `${BASE_URL}/${loc}${path}`]),
            ),
            "x-default": `${BASE_URL}/de${path}`,
          };

          sitemapEntries.push({
            url,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.6,
            alternates: {
              languages,
            },
          });
        }
      }
    }
  } catch (error) {
    console.error("Error hydrating dynamic artist sitemap entries:", error);
  }

  return sitemapEntries;
}
