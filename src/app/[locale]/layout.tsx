import "@/globals.css";
import { inter, playfair, sourceSans, lora, openSans } from "@/app/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";
import IntroWrapper from "@/components/IntroWrapper";
import { getMessages, getTranslations } from "next-intl/server";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Metadata } from "next";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

// Resilient Server-Side Metadata Generator
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  let title = "Anchor Tattoo & Piercing Studio Freiburg";
  let description =
    "Dein professionelles Tattoo & Piercing Studio in Freiburg im Breisgau.";
  let siteName = "Anchor Studio";

  try {
    const t = await getTranslations({ locale, namespace: "Metadata" });
    title = t("title");
    description = t("description");
    siteName = t("siteName");
  } catch (error) {
    console.warn(
      `[i18n] Fallback triggered for locale "${locale}" in generateMetadata. "${error}"`,
    );
  }

  return {
    metadataBase: new URL("https://www.anker-tattoo.de"),
    title: {
      default: title,
      template: `%s | ${siteName}`,
    },
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "de-DE": "/de",
        "en-US": "/en",
        "x-default": "/de",
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`
        ${inter.variable}
        ${playfair.variable}
        ${sourceSans.variable}
        ${lora.variable}
        ${openSans.variable}
      `}
    >
      <head>
        {/* Dynamic JSON-LD Graph for Search Engines and AI Crawlers */}
        <SchemaOrg locale={locale} />
      </head>
      <body className="font-sans antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <IntroWrapper>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </IntroWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
