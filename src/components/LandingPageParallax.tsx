"use client";

import type { CloudinaryImage } from "@/types";
import { ReactLenis } from "lenis/react";
import ParallaxMedia from "./ParallaxMedia";
import Testimonials from "./Testimonials";

const PLACEHOLDER_IMG = "/whiteLogo.svg";

const findImageUrl = (publicId: string, images: CloudinaryImage[]): string => {
  const image = images.find((img) => img.public_id.startsWith(publicId));
  return image?.secure_url ?? PLACEHOLDER_IMG;
};

const LandingPageParralax = ({ images }: { images: CloudinaryImage[] }) => {
  const imageMap = {
    intro: findImageUrl("sticker", images),
    team: findImageUrl("team", images),
    sign: findImageUrl("sign", images),
    bell: findImageUrl("bell", images),
    piercingSetup: findImageUrl("piercingSetup", images),
    tattooing: findImageUrl("tattooing", images),
    anmeldung: findImageUrl("anmeldung", images),
  };

  return (
    <ReactLenis root>
      <div className="space-y-0">
        <section className="h-screen w-full relative overflow-hidden">
          <ParallaxMedia
            src={imageMap.intro}
            alt="A Photo taken in Anker Tattoo & Piercing Studio in Freiburg"
            mediaType="image"
            className="w-full h-full"
            containerHeight="112vh"
          />
        </section>

        <section className="h-screen w-full relative overflow-hidden">
          <ParallaxMedia
            src={imageMap.team}
            alt="The Team of Anker Tattoo & Piercing Studio in Freiburg"
            mediaType="image"
            className="w-full h-full"
            containerHeight="112vh"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 z-10">
            <p className="text-2xl md:text-6xl">Meet the team</p>
          </div>
        </section>

        <section className="h-screen w-full relative overflow-hidden">
          <ParallaxMedia
            src={imageMap.sign}
            alt="Piercing Me Baby Neon sign inside of Anker Tattoo & Piercing Studio in Freiburg"
            mediaType="image"
            className="w-full h-full"
            containerHeight="112vh"
          />
        </section>

        <section className="h-screen w-full relative overflow-hidden">
          <ParallaxMedia
            src={imageMap.bell}
            alt="The Captains Bell in Anker Tattoo & Piercing Studio in Freiburg"
            mediaType="image"
            className="w-full h-full"
            containerHeight="112vh"
          />
        </section>

        <section className="h-screen w-full relative overflow-hidden">
          <ParallaxMedia
            src={imageMap.piercingSetup}
            alt="Setup for piercing in Anker Tattoo & Piercing Studio in Freiburg"
            mediaType="image"
            className="w-full h-full"
            containerHeight="112vh"
          />
        </section>

        <section className="h-screen w-full relative overflow-hidden">
          <ParallaxMedia
            src={imageMap.tattooing}
            mediaType="image"
            className="w-full h-full"
            containerHeight="112vh"
          />
        </section>

        <section className="h-screen w-full relative overflow-hidden">
          <ParallaxMedia
            src={imageMap.anmeldung}
            mediaType="image"
            className="w-full h-full"
            containerHeight="112vh"
          />
        </section>

        <Testimonials />
      </div>
    </ReactLenis>
  );
};

export default LandingPageParralax;
