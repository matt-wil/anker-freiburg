import DatenschutzComponent from "@/components/DatenschutzComponent";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";

type RouteParams = { locale: string };

type SegmentProps = {
  params: Promise<RouteParams>;
};

export async function generateMetadata({
  params,
}: SegmentProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "datenschutz.metadata",
  });

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
      <DatenschutzComponent />
    </>
  );
};

export default page;
