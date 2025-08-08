import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export type Pathnames = {
  [key: string]: string | { en: string };
};

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "de"],
  pathnames: {
    "/": "/",
    "/aktionen": {
      en: "/promotions",
    },
    "/kontakt": {
      en: "/contact",
    },
    "/datenschutz": {
      en: "/data-protection",
    },
    "/impressum": {
      en: "/legal-notice",
    },
    "/ueber-uns": {
      en: "/about-us",
    },
    "/tattoo": {
      en: "/tattoo",
    },
    "/piercing": {
      en: "/piercing",
    },
    "/faq": {
      de: "/haeufige-gestellte-fragen",
      en: "/frequently-asked-questions",
    },
  },

  // Used when no locale matches
  defaultLocale: "de",
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
