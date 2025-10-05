import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { getSingleImage } from "@/lib/cloudflare";
import AboutUs from "@/components/AboutUs";

type RouteParams = { locale: string };

type SegmentProps = {
  params: Promise<RouteParams>;
};

export async function generateMetadata({
  params,
}: SegmentProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about.metadata" });

  const translatedPath = t("pathSlug");

  return createPageMetadata({
    title: t("title"),
    description: t("description"),
    keywords: t("keywords").split(", "),
    ogTitle: t("ogTitle"),
    ogDescription: t("ogDescription"),
    ogImageAlt: t("ogImageAlt"),
    path: `/${translatedPath}`,
    locale,
  });
}

const Page = async (): Promise<React.JSX.Element> => {
  const teamImage = await getSingleImage("Parallax/team.jpg");

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative flex flex-col items-center justify-center px-6 py-32 xl:py-5">
        <div className="relative overflow-hidden about-clip-path w-[360px] h-[206px] lg:w-[460px] lg:h-[263px] xl:w-[800px] xl:h-[457px]">
          <Image
            src={teamImage}
            alt="Photo of the Anker tattoo and piercing team"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 460px, 800px"
          />
        </div>
        <AboutUs />
      </div>
    </div>
  );
};

export default Page;
