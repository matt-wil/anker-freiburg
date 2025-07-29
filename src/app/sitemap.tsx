import { MetadataRoute } from "next";
import { locales, defaultLocale, routing } from "@/i18n/routing";
import { getPathname } from "@/i18n/navigation";
import { unstable_setRequestLocale } from 'next-intl/server';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";


async function fetchDynamicData(locale: string) {
    
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: `${baseUrl}/${locale}`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/${locale}`,
            lastModified: new Date(),
        }
    ];
}