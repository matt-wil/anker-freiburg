import { getPiercingArtists } from '@/lib/queries/artists';
import ImageCard from './ImageCard';
import PiercingPriceList from './PiercingPriceList';
import PiercingJewelleryGallery from './PiercingJewelleryGallery';
import ScrollButton from './ScrollButton';

export default async function Piercers() {
  const artists = await getPiercingArtists();

  return (
    <section className="px-6 max-w-6xl mx-auto">
      <h1 className="page-header font-bold mb-8">Professional Body Piercers</h1>

      <ScrollButton targetId='price-list'>Preiselist</ScrollButton>
      <ScrollButton targetId='schmuck'>Schmuck</ScrollButton>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {artists.map((artist) => {
          const publicId = artist.profile_img;
          if (!publicId) {
            return null;
          }
          return (
          <a
            key={artist.slug}
            href={`/piercing/${artist.slug}`}
            className="text-black border rounded-xl p-4 bg-white/60 hover:shadow-lg transition"
          >
            <div className="mb-4 overflow-hidden mx-auto">
              <ImageCard
                src={`${publicId}`}
                alt={`Anker Tattoo & Piercing Studio in Freiburg Artist ${artist.name} Profile Image`}
                width={300}
                height={300}
                crop="fill"
                gravity="face"
                className="rounded object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <h2 className="text-xl font-semibold text-center">{artist.name}</h2>
            <p className="text-sm text-gray-600 text-center">{artist.bio}</p>
          </a>)
        })}
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
