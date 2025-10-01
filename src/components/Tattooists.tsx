import { getTattooArtists } from "@/lib/queries/artists";
import ArtistCard from "./ArtistCard";
import { getPresignedUrlForKey } from "@/lib/cloudflare";

export default async function Tattooists() {
  const artists = await getTattooArtists();
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
    <div className="px-6 max-w-6xl mx-auto">
      <h1 className="page-header font-bold mb-8">Tattoo Artists</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {artistsWithImages.map((artist) => (
            <ArtistCard
              key={artist.id}
              artist={artist}
              imageUrl={artist.imageUrl}
            />
          ))}
          ;
        </div>
      </div>
    </div>
  );
}
