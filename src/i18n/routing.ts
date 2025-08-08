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
      de: "/aktionen", // Add German path
      en: "/promotions",
    },
    "/kontakt": {
      de: "/kontakt", // Add German path
      en: "/contact",
    },
    "/datenschutz": {
      de: "/datenschutz", // Add German path
      en: "/data-protection",
    },
    "/impressum": {
      de: "/impressum", // Add German path
      en: "/legal-notice",
    },
    "/ueber-uns": {
      de: "/ueber-uns", // Add German path
      en: "/about-us",
    },
    "/tattoo": {
      de: "/tattoo", // Add German path
      en: "/tattoo",
    },
    "/piercing": {
      de: "/piercing", // Add German path
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
