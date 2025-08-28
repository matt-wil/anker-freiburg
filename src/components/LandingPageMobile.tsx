"use client";

import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import type { CloudinaryImage } from "@/types";
import Testimonials from "./Testimonials";

const PLACEHOLDER_IMG = "/whiteLogo.svg";

const findImageUrl = (publicId: string, images: CloudinaryImage[]): string => {
  const image = images.find((img) => img.public_id.startsWith(publicId));
  return image?.secure_url ?? PLACEHOLDER_IMG;
};

export default function LandingPageMobile({
  images,
}: {
  images: CloudinaryImage[];
}): React.JSX.Element {
  const imageMap = {
    stickers: findImageUrl("stickers", images),
    team: findImageUrl("team", images),
    sign: findImageUrl("sign", images),
    piercingSetup: findImageUrl("piercingSetup", images),
    tattooing: findImageUrl("tattooing", images),
    tattooSetup: findImageUrl("tattooSetup", images),
    anmeldung: findImageUrl("anmeldung", images),
  };

  return (
    <div className="flex flex-col">
      <p className="text-center text-4xl font-bold m-8 p-8">Meet the Team</p>
      <Image
        src={imageMap.team}
        alt="Anker Team"
        width={800}
        height={600}
        className="shadow-lg w-full object-cover"
      />

      <Image
        src={imageMap.sign}
        alt="Piercing Me Baby Neon Sign"
        width={800}
        height={600}
        className="shadow-lg w-full object-cover"
      />

      <Image
        src={imageMap.piercingSetup}
        alt="Studio Setup"
        width={800}
        height={600}
        className="shadow-lg w-full object-cover"
      />

      <Image
        src={imageMap.tattooing}
        alt="A Photo taken in Anker Tattoo & Piercing Studio in Freiburg"
        width={800}
        height={600}
        className="shadow-lg w-full object-cover"
      />

      <Image
        src={imageMap.tattooSetup}
        alt="A Photo taken in Anker Tattoo & Piercing Studio in Freiburg"
        width={800}
        height={600}
        className="shadow-lg w-full object-cover"
      />

      <Image
        src={imageMap.anmeldung}
        alt="Anker Tattoo & Piercing Studio in Freiburg"
        width={800}
        height={600}
        className="shadow-lg w-full object-cover mb-10"
      />

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
