import Pmu from "@/components/Pmu";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { getSingleImage } from "@/lib/cloudflare";
type RouteParams = { locale: string };

type SegmentProps = { params: Promise<RouteParams> };

export async function generateMetadata({
  params,
}: SegmentProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pmu.metadata" });

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

const page = async (): Promise<React.JSX.Element> => {
  const profileImageUrl = await getSingleImage("Beauty/nia_profile.jpg");
  return (
    <>
      <Pmu profileImage={profileImageUrl} />
    </>
  );
};

export default page;
