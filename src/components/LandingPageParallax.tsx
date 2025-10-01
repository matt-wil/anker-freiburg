"use client";

import type { R2Asset } from "@/types";
import { useMemo } from "react";
import { ReactLenis } from "lenis/react";
import ParallaxImage from "./ParallaxMedia";
import Testimonials from "./Testimonials";

const PLACEHOLDER_IMG = "/whiteLogo.svg";

const parallaxSections = [
  {
    id: "intro",
    imageKey: "sticker",
    alt: "A sticker from Anker Tattoo & Piercing Studio in Freiburg",
  },
  {
    id: "team",
    imageKey: "team",
    alt: "The team at Anker Tattoo & Piercing Studio in Freiburg",
    overlayText: "Meet the team",
  },
  {
    id: "sign",
    imageKey: "sign",
    alt: "A neon sign inside the studio",
  },
  {
    id: "bell",
    imageKey: "bell",
    alt: "The captain's bell in the studio",
  },
];

const LandingPageParallax = ({ images }: { images: R2Asset[] }) => {
  const imageUrlMap = useMemo(() => {
    if (!Array.isArray(images)) return new Map();

    return new Map(images.map((img) => [img.key, img.url]));
  }, [images]);

  return (
    <ReactLenis root>
      <div className="space-y-0">
        {parallaxSections.map((section, index) => {
          const fullImageKey = Array.from(imageUrlMap.keys()).find((key) =>
            key.includes(section.imageKey),
          );
          const imageUrl = fullImageKey
            ? imageUrlMap.get(fullImageKey)
            : PLACEHOLDER_IMG;

          return (
            <section key={section.id} className="h-screen w-full relative">
              <ParallaxImage
                src={imageUrl}
                alt={section.alt}
                priority={index < 2}
                containerClassName="w-full h-full"
              />
              {section.overlayText && (
                <div className="absolute inset-0 flex items-center justify-center text-white text-center z-10">
                  <p className="text-2xl md:text-6xl font-bold">
                    {section.overlayText}
                  </p>
                </div>
              )}
            </section>
          );
        })}
        <Testimonials />
      </div>
    </ReactLenis>
  );
};

export default LandingPageParallax;
