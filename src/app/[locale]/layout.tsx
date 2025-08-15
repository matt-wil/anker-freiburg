import "@/globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";
import IntroWrapper from "@/components/IntroWrapper";
import { getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Anker - Tattoo und Piercing Studio in Freiburg",
    template: "%s | Anker - Tattoo und Piercing Studio in Freiburg",
  },
  description:
    "Dein neues Tattoo oder Piercing in Freiburg? Bei uns bist du goldrichtig! Professionelle Beratung - Top-Künstler - Kurze Wartezeiten",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <meta name="apple-mobile-web-app-title" content="AnkerFr" />
      <body className={inter.className}>
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
