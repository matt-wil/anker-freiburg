import Image from "next/image"
import CTAButton from "@/components/CTAButton"
import testimonials from "@/lib/testimonials.json"
import type { Testimonial } from "@/types"
import OptimizedVideo from "./OptimizedVideo"

export default function LandingPageMobile(): React.JSX.Element {
  return (
    <div className="flex flex-col">
      <p className="text-center text-3xl m-4">Meet the team</p>
      <Image
        src="/parallax_images/team.JPG"
        alt="Anker Team"
        width={800}
        height={600}
        className="shadow-lg w-full object-cover"
      />

      <Image
        src="/parallax_images/sign.JPG"
        alt="Piercing Me Baby Neon Sign"
        width={800}
        height={600}
        className="shadow-lg w-full object-cover"
      />

      <Image
        src="/parallax_images/piercingSetup.JPG"
        alt="Studio Setup"
        width={800}
        height={600}
        className="shadow-lg w-full object-cover"
      />

      <Image 
        src="/parallax_images/stickers.JPG"
        alt="A Photo taken in Anker Tattoo & Piercing Studio in Freiburg"
        width={800}
        height={600}
        className="shadow-lg w-full object-cover"
      />

      <div className="text-center space-y-2 py-5">
        <p className="text-lg font-semibold">Check out</p>
        <p className="text-2xl">The Studio</p>
      </div>

      {/* Intro Video Section */}
      <section className="h-auto w-full relative overflow-hidden">
        <OptimizedVideo
          src="AnkerInstaVideo_xkzaxf"
          className="w-full h-full"
        />
      </section>

      <CTAButton
        href="/contact"
        className="w-auto text-center m-4 bg-white border text-black py-4 my-4 rounded-xl text-lg shadow-md uppercase hover:bg-[var(--ankerBeige)] transition"
      >
        Kontakt
      </CTAButton>

    {/* Testimonials */}
              <section className="min-h-screen w-full px-4 text-white">
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
  )
}
