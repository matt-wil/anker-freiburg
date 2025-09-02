import "@/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";
import IntroWrapper from "@/components/IntroWrapper";
import { getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  name: "Anker Tattoo & Piercing Studio",
  address: {
    "@type": "PostalAddress",
    streetAddress: "An der Mehlwaage 2",
    addressLocality: "Freiburg im Breisgau",
    postalCode: "79098",
    addressCountry: "DE",
  },
  telephone: "+49 7651462878",
  url: "https://www.anker-tattoo.de",
  image: "https://www.anker-tattoo.de/anker_logo.png",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "11:00",
      closes: "18:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "11:00",
      closes: "16:00",
    },
  ],
  priceRange: "€€",
  sameAs: [
    "https://www.instagram.com/anker.tattoo.freiburg?igsh=MTdtOxIkYXIxMHE0bw==",
    "https://www.facebook.com/profile.php?id=61579347080829",
  ],
};
{
  /*
export const metadata: Metadata = {
  title: {
    default: "Anker - Tattoo und Piercing Studio in Freiburg",
    template: "%s | Anker - Tattoo und Piercing Studio in Freiburg",
  },
  description:
    "Dein neues Tattoo oder Piercing in Freiburg? Bei uns bist du goldrichtig! Professionelle Beratung - Top-Künstler - Kurze Wartezeiten",
};
*/
}

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
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
