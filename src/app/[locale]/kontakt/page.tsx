import type { Metadata } from "next";
import Contact from "@/components/Contact";
import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";

type Props = {
  params: { locale: string };
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "contact.metadata" });

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

const Page = () => {
  return (
    <>
      <Contact />
    </>
  );
};
export default Page;
