import InfiniteGallery from "@/components/InfiniteGallery";
import { getArtistAssets } from "@/lib/cloudinary";
import type { ParamsProps } from "@/types";

const page = async ({ params }: { params: ParamsProps }) => {
  const { artistName } = await params;
  const upperedName = artistName.charAt(0).toUpperCase() + artistName.slice(1);
  const { portfolioImages } = await getArtistAssets("Piercing", upperedName);

  return (
    <div>
      <h1 className="page-header ml-2">{upperedName}&apos;s Portfolio</h1>
      <InfiniteGallery images={portfolioImages} />
    </div>
  );
};

export default page;
