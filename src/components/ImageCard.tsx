"use client";

import Image from "next/image";

type ImageProps = React.ComponentProps<typeof Image>;

interface ImageCardProps extends ImageProps {
  showHoverEffect?: boolean;
}

const ImageCard = ({
  showHoverEffect = false,
  ...props
}: ImageCardProps): React.JSX.Element => {
  return (
    <div className="relative overflow-hidden group mx-auto w-fit">
      <Image
        {...props}
        className={`transition-transform duration-300 ease-in-out w-full h-auto group-hover:scale-110`}
        priority={true}
        alt="Image from one of the amazing artists at Anker Tattoo & Piercing Studio in Freiburg"
      />
      {showHoverEffect && (
        <div
          className={`absolute inset-0 flex items-center justify-center bg-white
                     transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-60`}
        >
          <span className="text-black text-3xl font-bold">Gallery</span>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
