"use client"

import { CldImage } from "next-cloudinary";
import { useState } from "react";

type CldImageProps = React.ComponentProps<typeof CldImage>

interface ImageCardProps extends CldImageProps {
  showHoverEffect?: boolean;
}

const ImageCard = ( {showHoverEffect = false, ...props }: ImageCardProps): React.JSX.Element => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <div 
      className="relative overflow-hidden group mx-auto w-fit" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <CldImage 
        {...props}
        className={`transition-transform duration-300 ease-in-out ${isHovered ? 'scale-110' : 'scale-100'}`}
      />
      {/* Optional: Add a semi-transparent overlay for a background effect */}
{ showHoverEffect &&    
      <div 
        className={`absolute inset-0 flex items-center justify-center bg-white transition-opacity duration-300 ease-in-out ${isHovered ? 'opacity-60' : 'opacity-0'}`}
      >
        <span className="text-black text-3xl font-bold">
          Gallery
        </span>
      </div>}
    </div>
  )
}

export default ImageCard