import Piercers from "@/components/Piercers";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";

type Props = {
  params: Awaited<{ locale: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "piercing.metadata" });

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
const page = (): React.JSX.Element => {
  return (
    <>
      <Piercers />
    </>
  );
};

export default page;
