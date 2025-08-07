import { getServerSideSitemap, ISitemapField } from "next-sitemap";

export async function GET(request: Request) {
    const res = await fetch("https://anker-freiburg.de/api/artists", {cache: 'no-store'});
    const json = await res.json()
    const data: any[] = json['items']

    const fields: ISitemapField[] = data.map((e: any) => ({ loc: `https://anker-freiburg.de/artists/${e['slug']}`, lastmod: new Date().toISOString() }))

    return getServerSideSitemap(fields);
}
