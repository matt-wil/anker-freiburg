import { MetadataRoute } from "next";
import { getAlldata } from "@/lib/queries/artists";

const baseUrl = "https://www.anker-tattoo.de";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/ueber-uns",
    "/kontakt",
    "/haeufige-gestellte-fragen",
    "/aktionen",
    "/tattoo",
    "/piercing",
    "/datenschutz",
    "/impressum",
  ];

  const staticUrls = staticRoutes.flatMap((route) => [
    {
      url: `${baseUrl}/de${route}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/en${route.replace("/ueber-uns", "/about-us").replace("/kontakt", "/contact").replace("/haeufige-gestellte-fragen", "/faq").replace("/aktionen", "/promotions")}`,
      lastModified: new Date(),
    },
  ]);

  const artists = await getAlldata();
  const artistUrls = artists.flatMap((artist) => {
    const artistTypePath = artist.type.toLowerCase();
    const artistSlug = artist.name.toLowerCase();

    return [
      {
        url: `${baseUrl}/de/${artistTypePath}/${artistSlug}`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/en/${artistTypePath}/${artistSlug}`,
        lastModified: new Date(),
      },
    ];
  });

  return [...staticUrls, ...artistUrls];
}
