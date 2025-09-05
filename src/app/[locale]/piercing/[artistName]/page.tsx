import InfiniteGallery from "@/components/InfiniteGallery";
import { getArtistAssets } from "@/lib/cloudinary";
import { getArtistByName } from "@/lib/queries/artists";
import type { ParamsProps } from "@/types";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";

type Props = {
  params: Awaited<{ artistName: string; locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { artistName, locale } = await params;
  const upperedName = artistName.charAt(0).toUpperCase() + artistName.slice(1);
  const t = await getTranslations({ locale, namespace: "artistPortfolio" });

  const { portfolioImages } = await getArtistAssets("Piercing", upperedName);
  const firstImage = portfolioImages[0]?.secure_url;

  return createPageMetadata({
    title: t("title", {
      artistName: upperedName,
      artistType: t("piercerType"),
    }),
    description: t("description", {
      artistName: upperedName,
      artistType: t("piercerType"),
    }),
    ogTitle: t("ogTitle", { artistName: upperedName }),
    ogDescription: t("ogDescription", {
      artistName: upperedName,
      artistType: t("piercerType"),
    }),
    ogImage: firstImage,
    path: `/piercing/${artistName}`,
    locale,
  });
}
const page = async ({ params }: { params: Promise<ParamsProps> }) => {
  const { artistName, locale } = await params;
  const upperedName = artistName.charAt(0).toUpperCase() + artistName.slice(1);
  const { portfolioImages } = await getArtistAssets("Piercing", upperedName);
  const artistData = await getArtistByName(upperedName);

  const bioKey = `bio_${locale}`;
  const biography = artistData[bioKey] || artistData.bio_en;

  return (
    <div>
      <h1 className="page-header ml-2 px-6">{upperedName}&apos;s Portfolio</h1>
      <p className="m-2 px-6">{biography}</p>
      <InfiniteGallery images={portfolioImages} />
    </div>
  );
};

export default page;
