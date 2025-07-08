import { getPiercingArtists } from '@/lib/queries/artists';
import ImageCard from './ImageCard';

export default async function Piercers() {
  const artists = await getPiercingArtists();
  console.log(artists);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Professional Body Piercers</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {artists.map((artist) => {
          const publicId = artist.profile_img;
          if (!publicId) {
            return null;
          }
          return (
          <a
            key={artist.slug}
            href={`/tattoo/${artist.slug}`}
            className="group border rounded-xl p-4 hover:shadow-lg transition"
          >
            <div className="aspect-square mb-4 overflow-hidden rounded-full w-48 h-48 mx-auto">
              <ImageCard
                src={`${publicId}`}
                alt={`${artist.name} profile`}
                width={300}
                height={300}
                crop="thumb"
                gravity="face"
                className="rounded-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <h2 className="text-xl font-semibold text-center">{artist.name}</h2>
            <p className="text-sm text-gray-600 text-center">{artist.bio}</p>
          </a>)
        })}
      </div>
    </div>
  );
}
