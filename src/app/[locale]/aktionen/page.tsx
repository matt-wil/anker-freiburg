import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { getAssetsByFolder } from "@/lib/cloudflare";
import type { R2AssetsList } from "@/types";
import AktionenClient from "@/components/AktionenClient";

type RouteParams = { locale: string };

type SegmentProps = {
  params: Promise<RouteParams>;
};

export async function generateMetadata({
  params,
}: SegmentProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "aktionen.metadata" });

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
  const resources: R2AssetsList = await getAssetsByFolder("Aktionen");
  console.log(resources);
  return <AktionenClient resources={resources} />;
};
export default page;
