import { getPiercingArtists } from "@/lib/queries/artists";
import PiercingPriceList from "./PiercingPriceList";
import PiercingJewelleryGallery from "./PiercingJewelleryGallery";
import ScrollButton from "./ScrollButton";
import DownloadButton from "./DownloadButton";
import ArtistCard from "./ArtistCard";
import { getPresignedUrlForKey } from "@/lib/cloudflare";

export default async function Piercers() {
  const artists = await getPiercingArtists();
  const artistsWithImages = await Promise.all(
    artists.map(async (artist) => {
      let finalImageUrl = artist.profile_img;

      if (artist.r2_profile_key) {
        finalImageUrl = await getPresignedUrlForKey(artist.r2_profile_key);
      }
      return {
        ...artist,
        imageUrl: finalImageUrl,
      };
    }),
  );

  return (
    <section className="px-6 max-w-6xl mx-auto">
      <h1 className="page-header font-bold mb-8">Professional Body Piercers</h1>
      <div className="flex flex-wrap gap-4 mb-8">
        <ScrollButton targetId="price-list">Preisliste</ScrollButton>
        <ScrollButton targetId="schmuck">Schmuck</ScrollButton>
        <DownloadButton
          text="U18 Einverständniserklärung PDF"
          document="U18-doc.pdf"
          downloadName="Anker-U18-Einverständniserklärung.pdf"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {artistsWithImages.map((artist) => (
          <ArtistCard
            key={artist.id}
            artist={artist}
            imageUrl={artist.imageUrl}
          />
        ))}
      </div>
      <div id="price-list">
        <PiercingPriceList />
      </div>
      <div id="schmuck">
        <PiercingJewelleryGallery />
      </div>
    </section>
  );
}
