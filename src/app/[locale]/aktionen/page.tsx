import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { getAktionen } from "@/lib/cloudinary";
import type { AktionenResponse } from "@/types";
import AktionenClient from "@/components/AktionenClient";

type Props = {
  params: Awaited<{ locale: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale } = await props.params;
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
  const { resources }: AktionenResponse = await getAktionen("Aktionen");

  return <AktionenClient resources={resources} />;
};
export default page;
