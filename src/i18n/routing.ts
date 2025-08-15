import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export type Pathnames = {
  [key: string]: string | { en: string };
};

export const routing = defineRouting({
  locales: ["en", "de"],
  pathnames: {
    "/": "/",
    "/aktionen": {
      de: "/aktionen",
      en: "/promotions",
    },
    "/kontakt": {
      de: "/kontakt",
      en: "/contact",
    },
    "/datenschutz": {
      de: "/datenschutz",
      en: "/data-protection",
    },
    "/impressum": {
      de: "/impressum",
      en: "/legal-notice",
    },
    "/ueber-uns": {
      de: "/ueber-uns",
      en: "/about-us",
    },
    "/tattoo": {
      de: "/tattoo",
      en: "/tattoo",
    },
    "/piercing": {
      de: "/piercing",
      en: "/piercing",
    },
    "/haeufige-gestellte-fragen": {
      de: "/haeufige-gestellte-fragen",
      en: "/frequently-asked-questions",
    },
  },

  defaultLocale: "de",
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
