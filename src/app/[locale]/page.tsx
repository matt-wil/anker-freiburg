import CTAButton from "@/components/CTAButton";
import { Playfair_Display } from "next/font/google";
import LandingPageParralax from "@/components/LandingPageParallax";
import LandingPageMobile from "@/components/LandingPageMobile";
import Image from "next/image";
import { getAssetsByFolder } from "@/lib/cloudflare";
import Services from "@/components/Services";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import U18Info from "@/components/U18Info";

type RouteParams = { locale: string };

type SegmentProps = {
  params: Promise<RouteParams>;
};
const font = Playfair_Display({
  weight: "900",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: SegmentProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("homepage.metadata");

  return createPageMetadata({
    title: t("title"),
    description: t("description"),
    keywords: t("keywords").split(", "),
    ogTitle: t("ogTitle"),
    ogDescription: t("ogDescription"),
    ogImageAlt: t("ogImageAlt"),
    path: "/",
    locale,
  });
}

export default async function Page() {
  const images = await getAssetsByFolder("Parallax/");

  return (
    <>
      {/** DESKTOP */}
      <section className="hidden lg:flex flex-col items-start pl-10 mt-10 h-[100dvh]">
        <h1 className="text-2xl sm:text-[2.5rem]">
          <span
            className={`text-8xl md:text-9xl lg:text-[15rem] xl:text-[20rem] font-bold pt-5 mb-0 leading-none ${font.className}`}
          >
            Anker
          </span>
          <br />
          Tattoo & Piercing Studio in Freiburg
        </h1>
        <p className="uppercase tracking-widest">Seit 2011</p>
        <div className="flex justify-center md:justify-end w-full pr-4 md:pr-[10rem] xl:pr-[20rem]">
          <CTAButton
            href="/contact"
            className="flex items-center bg-white justify-center text-3xl border text-black px-5 py-2 mt-5 uppercase shadow-lg transition-all hover:bg-[var(--ankerBeige)] hover:shadow-2xl hover:scale-3d w-[12rem] h-[6rem] rounded-2xl max-sm:mt-15"
          >
            Kontakt
          </CTAButton>
        </div>
      </section>

      {/** MOBILE */}
      <section className="flex lg:hidden relative flex-col justify-between h-[100dvh] text-white overflow-hidden">
        {/* Top Content Area */}
        <div className="flex flex-col items-center justify-center flex-grow pb-48 z-10 text-center">
          {/* Logo and Name */}
          <div className="flex item-center mb-4">
            <div className="mt-10 w-30 h-30">
              <Image
                src="/whiteLogo.svg"
                alt="Anker Logo"
                width={30}
                height={30}
                className="mr-2 h-auto w-auto"
                priority={true}
              />
            </div>
          </div>
          <span className={`${font.className} text-5xl font-semibold m-10`}>
            Anker
          </span>
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mx-auto max-w-xl w-full mb-6">
            Tattoo & Piercing <br />
            Studio in Freiburg
          </h1>
          {/* Description */}
          <p className="text-base md:text-lg mx-auto max-w-xl w-full mb-10 leading-relaxed uppercase tracking-widest">
            Seit 2011
          </p>
          {/* Button */}
          <CTAButton
            className="flex items-center bg-white justify-center text-3xl border text-black px-5 py-2 mt-5 uppercase shadow-lg transition-all hover:bg-[var(--ankerBeige)] hover:shadow-2xl hover:scale-3d w-[12rem] h-[6rem] rounded-2xl max-sm:mt-15"
            href="/contact"
          >
            Kontakt
          </CTAButton>
        </div>
      </section>

      {/* Services */}
      <Services />

      {/* Under 18 Important Info */}
      <U18Info />

      {/* Desktop Parallax */}
      <section className="hidden lg:block">
        <LandingPageParralax images={images} />
      </section>

      {/* Mobile/Tablet Static Layout */}
      <section className="block lg:hidden">
        <LandingPageMobile images={images} />
      </section>
    </>
  );
}
