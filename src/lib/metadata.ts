import { Metadata } from "next";

const baseUrl = "https://www.anker-tattoo.de";

interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogImageAlt?: string;
  path: string;
  locale: string;
  robots?: {
    index: boolean;
    follow: boolean;
  };
}

export function createPageMetadata({
  title,
  description,
  keywords = [],
  ogImage = `${baseUrl}/anker_og.png`,
  ogImageAlt = "Anker Tattoo & Piercing Studio in Freiburg",
  ogDescription,
  ogTitle,
  path,
  locale,
  robots = { index: true, follow: true },
}: PageMetadata): Metadata {
  const pageUrl = `${baseUrl}/${locale}${path === "/" ? "" : path}`;
  const deUrl = `${baseUrl}/de${path === "/" ? "" : path}`;
  const enUrl = `${baseUrl}/en${path === "/" ? "" : path}`;
  const finalOgTitle = ogTitle || title;
  const finalOgDescription = ogDescription || description;

  return {
    // Core
    title,
    description,
    keywords,

    // Social Media
    openGraph: {
      title: finalOgTitle,
      description: finalOgDescription,
      url: pageUrl,
      siteName: "Anker Tattoo & Piercing Studio",
      images: [{ url: ogImage, width: 1200, height: 630, alt: ogImageAlt }],
      locale: locale === "de" ? "de_DE" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },

    // International & URLS
    alternates: {
      canonical: pageUrl,
      languages: {
        "de-DE": deUrl,
        "en-US": enUrl,
        "x-default": deUrl
      },
    },

    // Site-wide boilerplate
    robots: robots,
    icons: {
      icon: "/favicon-96x96.png",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    authors: [{ name: "Anker Tattoo & Piercing Studio", url: baseUrl }],
    creator: "Anker Tattoo & Piercing Studio",
  };
}
