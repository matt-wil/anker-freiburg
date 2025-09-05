import FAQ from "@/components/FAQ";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";

type Props = {
  params: Awaited<{ locale: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "faq.metadata" });

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
      <FAQ />
    </>
  );
};

export default page;
