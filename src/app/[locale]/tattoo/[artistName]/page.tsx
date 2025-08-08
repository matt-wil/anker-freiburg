import InfiniteGallery from "@/components/InfiniteGallery";
import { getArtistAssets } from "@/lib/cloudinary";
import type { ParamsProps } from "@/types";
import { getArtistByName } from "@/lib/queries/artists";

const page = async ({ params }: { params: Promise<ParamsProps> }) => {
  const { artistName, locale } = await params;
  const upperedName = artistName.charAt(0).toUpperCase() + artistName.slice(1);
  const { portfolioImages } = await getArtistAssets("Tattoo", upperedName);
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
