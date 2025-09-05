import { getTattooArtists } from "@/lib/queries/artists";
import ArtistCard from "./ArtistCard";

export default async function Tattooists() {
  const artists = await getTattooArtists();

  return (
    <div className="px-6 max-w-6xl mx-auto">
      <h1 className="page-header font-bold mb-8">Tattoo Artists</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {artists.map((artist) => {
            const publicId = artist.profile_img;
            if (!publicId) {
              return null;
            }
            return (
              <ArtistCard key={artist.id} artist={artist} publicId={publicId} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
