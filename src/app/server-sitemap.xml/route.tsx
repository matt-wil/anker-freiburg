import { getServerSideSitemap, ISitemapField } from "next-sitemap";

interface Artist {
  slug: string;
}

const siteUrl = process.env.NEXT_SITE_URL ?? "http://localhost:3000";

export async function GET() {
  const res = await fetch(`${siteUrl}/api/artists`, {
    cache: "no-store",
  });

  const json: { items: Artist[] } = await res.json();
  const data = json.items;

  const fields: ISitemapField[] = data.map((artist) => ({
    loc: `${siteUrl}/artists/${artist.slug}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(fields);
}
