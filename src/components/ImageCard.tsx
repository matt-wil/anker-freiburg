"use client";

import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface ImageCardProps extends ImageProps {
  showHoverEffect?: boolean;
}

const ImageCard = ({
  showHoverEffect = false,
  className,
  alt = "Image from Anker Tattoo & Piercing Studio",
  priority,
  fill,
  ...props
}: ImageCardProps): React.JSX.Element => {
  return (
    <div
      className={cn("relative overflow-hidden group", {
        "w-full h-full": fill,
        "mx-auto w-fit": !fill,
      })}
    >
      <Image
        {...props}
        fill={fill}
        priority={priority}
        alt={alt}
        className={cn(
          "transition-transform duration-300 ease-in-out group-hover:scale-110",
          className,
        )}
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
