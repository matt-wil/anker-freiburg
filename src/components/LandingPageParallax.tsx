"use client";

import testimonials from "@/lib/testimonials.json";
import type { Testimonial, CloudinaryImage } from "@/types";
import { ReactLenis } from "lenis/react";
import ParallaxMedia from "./ParallaxMedia";

const PLACEHOLDER_IMG =
  "https://res.cloudinary.com/demo/image/upload/w_1600,h_900,c_fill,q_auto,f_auto/placeholder.jpg";

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
    tatt: findImageUrl("tatt", images),
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
            src={imageMap.tatt}
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

        <section className="min-h-screen w-full py-16 px-4 text-white">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Happy Customers
          </h1>
          <div className="flex flex-wrap justify-center gap-6">
            {testimonials.map((testimonial: Testimonial) => (
              <div
                key={testimonial.id}
                className="w-full sm:w-[300px] flex flex-col justify-center items-center bg-gray-900 p-6 rounded-2xl shadow-2xl border-2 border-white/20 space-y-2"
              >
                <h2 className="font-bold text-xl text-white">
                  {testimonial.name}
                </h2>
                <span className="text-yellow-400">{testimonial.stars}</span>
                <span className="text-gray-400">{testimonial.date}</span>
                <p className="text-sm text-white">{testimonial.review}</p>
                <a
                  className="text-blue-300 underline"
                  href={testimonial.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  review
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </ReactLenis>
  );
};

export default LandingPageParralax;
