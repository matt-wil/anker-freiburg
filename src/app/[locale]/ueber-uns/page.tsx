import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";

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

const Page = (): React.JSX.Element => {
  const t = useTranslations("about");
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative flex flex-col items-center justify-center px-6 py-32">
        <div className="about-clip-path w-[360px] h-[360px] lg:w-[460px] lg:h-[460px]">
          <Image
            src="/team.JPG"
            alt="Photo of the Anker tattoo and piercing team"
            width={800}
            height={800}
          />
        </div>
        <h1 className="about-header text-6xl sm:text-9xl font-bold mb-4">
          {t("header")}
        </h1>
        <h2 className="text-center text-3xl mb-4">{t("subHeader")}</h2>
        <div className="md:max-w-[75dvw] w-auto">
          <article className="m-6 max-w-150 text-center">{t("text1")}</article>
          <article className="m-6 max-w-150 text-center">{t("text2")}</article>
          <article className="m-6 max-w-150 text-center">{t("text3")}</article>
          <article className="m-6 max-w-150 text-center">{t("text4")}</article>
          <article className="m-6 max-w-150 text-center">{t("text5")}</article>
        </div>
      </div>
    </div>
  );
};

export default Page;
