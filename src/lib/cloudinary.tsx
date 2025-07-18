import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryImageList } from '@/types';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.NEXT_CLOUDINARY_APIKEY!,
  api_secret: process.env.NEXT_CLOUDINARY_APISECRET!,
});

export async function getArtistAssets(category: 'Tattoo' | 'Piercing', artistName: string) {
  const folder = `Artists/${category}/${artistName}`;

  const {resources}: {resources: CloudinaryImageList} = await cloudinary.search
    .expression(`folder:${folder}`)
    .max_results(100)
    .execute();

  const profileImage = resources.find((r) => r.public_id.includes('profile'));
  const portfolioImages = resources.filter((r) => !r.public_id.includes('profile'));

  return {
    profileImage,
    portfolioImages,
  };
}

export async function getAktionen(folder: "Aktionen") {
  const resources: CloudinaryImageList = await cloudinary.search
    .expression(`folder:${folder}`)
    .max_results(100)
    .execute();

  return resources;
}
