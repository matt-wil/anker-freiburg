"use client"

import { CldImage } from "next-cloudinary"


type CldImageProps = React.ComponentProps<typeof CldImage>


type ImageCardProps = CldImageProps



const ImageCard = ( {...props }: ImageCardProps): React.JSX.Element => {
  return (
    <div>
        <CldImage 
          {...props}
        />
    </div>
  )
}

export default ImageCard