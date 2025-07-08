import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.NEXT_CLOUDINARY_APIKEY!,
  api_secret: process.env.NEXT_CLOUDINARY_APISECRET!,
});

export async function getArtistAssets(category: 'Tattoo' | 'Piercing', artistName: string) {
  const folder = `${category}/${artistName}`;

  const { resources } = await cloudinary.search
    .expression(`folder:${folder}`)
    .sort_by('public_id', 'desc')
    .max_results(100)
    .execute();

  const profileImage = resources.find((r) => r.public_id.endsWith('profile'));
  const portfolioImages = resources.filter((r) => !r.public_id.endsWith('profile'));

  return {
    profileImage,
    portfolioImages,
  };
}
