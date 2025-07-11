
import { getTattooArtists } from '@/lib/queries/artists';
import ImageCard from './ImageCard';

export default async function Tattooists() {
  const artists = await getTattooArtists();
  console.log(artists);

  return (
    <div className="px-6 max-w-6xl mx-auto">
      <h1 className="page-header font-bold mb-8">Tattoo Artists</h1>
    <div className='flex justify-center'>
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
            className="text-black border rounded-xl p-4 bg-white/60 hover:shadow-lg transition"
          >
            <div className="mb-4 overflow-hidden mx-auto">
              <ImageCard
                src={`${publicId}`}
                alt={`${artist.name} profile`}
                width={500}
                height={500}
                crop="fill"
                gravity="face"
                className="rounded group-hover:scale-105 transition-transform"
              />
            </div>
            <h2 className="text-xl font-semibold text-center">{artist.name}</h2>
            <p className="text-sm text-gray-600 text-center">{artist.bio}</p>
          </a>)
        })}
      </div>
    </div>
    </div>
  );
}
