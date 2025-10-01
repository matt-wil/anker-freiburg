"use client";

import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import type { R2Asset } from "@/types";
import Testimonials from "./Testimonials";
import { useMemo } from "react";

const PLACEHOLDER_IMG = "/whiteLogo.svg";

// 1. Define the content for the mobile page in a structured array.
const mobileSections = [
  { id: "team", imageKey: "team", alt: "Anker Team" },
  { id: "sign", imageKey: "sign", alt: "Piercing Me Baby Neon Sign" },
  { id: "piercingSetup", imageKey: "piercingSetup", alt: "Studio Setup" },
  {
    id: "tattooing",
    imageKey: "tattooing",
    alt: "A photo taken in Anker Tattoo & Piercing Studio",
  },
  {
    id: "tattooSetup",
    imageKey: "tattooSetup",
    alt: "A photo taken in Anker Tattoo & Piercing Studio",
  },
  {
    id: "anmeldung",
    imageKey: "anmeldung",
    alt: "The anmeldung sign in the studio",
  },
];

export default function LandingPageMobile({
  images,
}: {
  images: R2Asset[];
}): React.JSX.Element {
  // 2. Create the same efficient, one-time lookup map.
  const imageUrlMap = useMemo(() => {
    if (!Array.isArray(images)) return new Map();

    const newMap = new Map<string, string>();
    images.forEach((img) => {
      // Extracts "team" from a full key like "Parallax/team_blq97r.jpg"
      const shortKey = img.key.split("/").pop()?.split("_")[0];
      if (shortKey) {
        newMap.set(shortKey, img.url);
      }
    });
    return newMap;
  }, [images]);

  return (
    <div className="flex flex-col">
      <p className="text-center text-4xl font-bold m-8 p-8">Meet the Team</p>

      {/* 3. Render the images by mapping over the structured array. */}
      {mobileSections.map((section) => {
        const imageUrl = imageUrlMap.get(section.imageKey) || PLACEHOLDER_IMG;

        return (
          <Image
            key={section.id}
            src={imageUrl}
            alt={section.alt}
            width={800}
            height={600}
            className="shadow-lg w-full object-cover mb-4"
          />
        );
      })}

      <CTAButton
        href="/contact"
        className="w-auto text-center m-4 bg-white border text-black py-4 my-4 rounded-xl text-lg shadow-md uppercase hover:bg-[var(--ankerBeige)] transition"
      >
        Kontakt
      </CTAButton>

      <Testimonials />
    </div>
  );
}
