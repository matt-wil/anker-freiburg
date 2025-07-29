"use client"

import testimonials from "@/lib/testimonials.json"
import type { Testimonial } from "@/types"
import { ReactLenis } from "lenis/react"
import ParallaxMedia from "./ParallaxMedia"

const LandingPageParralax = (): React.JSX.Element => {
  return (
    <ReactLenis root>
      <div className="space-y-0">
        {/* Team Section */}
        <section className="h-screen w-full relative overflow-hidden">
          <ParallaxMedia
            src="/parallax_images/team.JPG"
            alt="The Team of Anker Tattoo & Piercing Studio in Freiburg"
            mediaType="image"
            className="w-full h-full"
            containerHeight="100vh"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 z-10">
            <p className="text-2xl md:text-6xl">Meet the team</p>
          </div>
        </section>

        {/* Neon Sign */}
        <section className="h-screen w-full relative overflow-hidden">
          <ParallaxMedia
            src="/parallax_images/sign.JPG"
            alt="Piercing Me Baby Neon sign inside of Anker Tattoo & Piercing Studio in Freiburg"
            className="w-full h-full"
            containerHeight="100vh"
          />
        </section>

        <section className="h-screen w-full relative overflow-hidden">
          <ParallaxMedia
            src="/parallax_images/bell.JPG"
            alt="The Captains Bell in Anker Tattoo & Piercing Studio in Freiburg"
            className="w-full h-full"
            containerHeight="100vh"
          />
        </section>

        {/* Studio Section */}
        <section className="h-screen w-full relative overflow-hidden">
          <ParallaxMedia
            src="/parallax_images/piercingSetup.JPG"
            alt=""
            mediaType="image"
            className="w-full h-full"
            containerHeight="100vh"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10">
          </div>
        </section>

        {/* Tattoo Section */}
        <section className="h-screen w-full relative overflow-hidden">
          <ParallaxMedia
            src="/parallax_images/tatt.JPG"
            mediaType="image"
            className="w-full h-full"
            containerHeight="100vh"
          />
        </section>

        {/* Intro Video Section */}
        <section className="h-screen w-full relative overflow-hidden">
          <ParallaxMedia
            mediaType="video"
            src="AnkerInstaVideo_xkzaxf"
            className="w-full h-full"
            containerHeight="100vh"
          />
        </section>

        {/* Testimonials */}
        <section className="min-h-screen w-full py-16 px-4 text-white">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Happy Customers</h1>
          <div className="flex flex-wrap justify-center gap-6">
            {testimonials.map((testimonial: Testimonial) => (
              <div
                key={testimonial.id}
                className="w-full sm:w-[300px] flex flex-col justify-center items-center bg-gray-900 p-6 rounded-2xl shadow-2xl border-2 border-white/20 space-y-2"
              >
                <h2 className="font-bold text-xl text-white">{testimonial.name}</h2>
                <span className="text-yellow-400">{testimonial.stars}</span>
                <span className="text-gray-400">{testimonial.date}</span>
                <p className="text-sm text-white">{testimonial.review}</p>
                <a className="text-blue-300 underline" href={testimonial.link} target="_blank" rel="noopener noreferrer">review</a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </ReactLenis>
  )
}

export default LandingPageParralax
