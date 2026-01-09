"use client";

import { cn } from "@/lib/utils";
import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

interface ImageCardProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  showHoverEffect?: boolean;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
}

const ImageCard = ({
  showHoverEffect = false,
  className,
  alt = "Image from Anker Tattoo & Piercing Studio",
  fill,
  src,
  ...props
}: ImageCardProps): React.JSX.Element => {
  return (
    <div
      className={cn("relative overflow-hidden group", {
        "w-full h-full": fill,
        "mx-auto w-fit": !fill,
      })}
    >
      <img
        {...props}
        src={src}
        alt={alt}
        className={cn(
          "transition-transform duration-300 ease-in-out group-hover:scale-110",
          fill ? "absolute inset-0 w-full h-full object-cover" : "h-auto",
          className,
        )}
        loading="lazy"
      />
      {showHoverEffect && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-white
                     transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-60"
        >
          <span className="text-black text-3xl font-bold">Gallery</span>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
