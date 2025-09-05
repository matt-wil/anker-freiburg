import ImpressumComponent from "@/components/ImpressumComponent";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";

type Props = {
  params: Awaited<{ locale: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "impressum.metadata" });

  const translatedPath = t("pathSlug");

  return createPageMetadata({
    title: t("title"),
    description: t("description"),
    path: `/${translatedPath}`,
    locale,
    robots: t.raw("robots"),
  });
}

const page = () => {
  return (
    <>
      <ImpressumComponent />
    </>
  );
};

export default page;
