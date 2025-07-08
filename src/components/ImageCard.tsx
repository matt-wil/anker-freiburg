"use client"

import { CldImage } from "next-cloudinary"

type ImageCardProps = {
    src: string
    alt: string
    width: number
    height: number
    crop: string
    gravity: string
    className: string
}


const ImageCard = ({src, alt, width, height, crop, gravity, className, ...rest }: ImageCardProps): React.JSX.Element => {
  return (
    <div>
        <CldImage 
            src={src}
            alt={alt}
            width={width}
            height={height}
            crop={crop}
            gravity={gravity}
            className={className}
            {...rest}
        />
    </div>
  )
}

export default ImageCard