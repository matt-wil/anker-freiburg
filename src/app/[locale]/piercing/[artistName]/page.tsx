import { getArtistAssets } from "@/lib/cloudinary"
import ImageCard from "@/components/ImageCard"
import type {ParamsProps, CloudinaryImage } from "@/types"

const page = async ({ params }: { params: ParamsProps }): Promise<React.JSX.Element> => {
  const {locale, artistName} = await params
  const upperedName = artistName.charAt(0).toUpperCase() + artistName.slice(1);
  const { profileImage, portfolioImages} = await getArtistAssets('Piercing', upperedName);
  console.log("IMAGE DATA: ", portfolioImages )

  return (
    <div>
      <h1 className="page-header ml-2">{upperedName}&apos;s Portfolio</h1>
      {portfolioImages.map((image: CloudinaryImage): React.JSX.Element => (
        <ImageCard 
          key={`${image.public_id}`} 
          src={`${image.secure_url}`} 
          width={300}
          height={300}
          crop="fill"
          gravity="face"
          alt={`An image of a Piercing done by Professional Body Piercer ${artistName} at Anker Tattoo & Piercing in Freiburg`}
          className=""
          />
      ))}
    </div>
  )
}

export default page