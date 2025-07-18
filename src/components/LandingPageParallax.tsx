"use client"

import testimonials from "@/lib/testimonials.json"
import type { Testimonial } from "@/types"
import { ReactLenis } from "lenis/react"
import ParallaxMedia from "./ParallaxMedia"

const LandingPageParralax = (): React.JSX.Element => {
  return (
    <ReactLenis root>
      <div className="parralax-page">

        {/* Intro Video Section */}
        <section className="intro-video">
          <div className="img">
            <ParallaxMedia mediaType="video" src="AnkerInstaVideo_xkzaxf" className="parallax-img" />
          </div>
          <div className="intro-text text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            {['How', 'To', 'Find', 'Us'].map((word, i) => <p key={i}>{word}</p>)}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials">
          <div className="img">
            <ParallaxMedia src="/parallax_images/wheel.jpg" alt="" className="parallax-img" />
          </div>
          <div className="col testimonials-cover">
            <div className="img">
              <ParallaxMedia mediaType="image" src="/parallax_images/tattoo1.png" alt="" className="parallax-img" />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team">
          <div className="team-inner flex flex-col md:flex-row w-full">
            <div className="col intro">
              <p className="text-center">Meet the team</p>
              <p className="text-center">Here we have the full Team of Anker. Sabrina, Laura, Fatou, Karo und Phillip (Regular Guest).</p>
            </div>
            <div className="col photo">
              <div className="photo-container relative w-full aspect-[4/3]">
                <ParallaxMedia src="/parallax_images/tattooMachine.jpeg" alt="" mediaType="image" className="w-full h-full object-cover rounded-lg shadow-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Studio Image Section */}
        <section className="studio">
          <div className="img">
            <ParallaxMedia src="/parallax_images/desk.jpg" mediaType="image" alt="" className="parallax-img" />
          </div>
          <div className="studio-copy">
            <p>Check out</p>
            <p>The Studio</p>
          </div>
        </section>

        {/* Studio Video Section */}
        <section className="studio-video">
          <div className="img">
            <ParallaxMedia src="AnkerInstaVideo_xkzaxf" mediaType="video" className="parallax-img" />
          </div>
          <div className="col">
            <p className="page-header">See</p>
            <p className="page-header">The Team</p>
            <p className="page-header">in Action</p>
          </div>
        </section>

        {/* Testimonials List Section */}
        <section>
          <div className="testimonials-list">
            <h1 className="page-header">Our Happy Customers</h1>
            <div className="marquee-content">
              {testimonials.map((testimonial: Testimonial) => (
                <div key={testimonial.id} className="testimonial-item flex flex-col justify-center items-center bg-gray-900 p-4 rounded-2xl shadow-2xl border-2 border-white/20">
                  <h2 className="font-bold text-3xl">{testimonial.name}</h2>
                  <span>{testimonial.stars}</span>
                  <span>{testimonial.date}</span>
                  <p className="text-sm">{testimonial.review}</p>
                  <a className="text-blue-300" href={testimonial.link} target="_blank" rel="noopener noreferrer">review</a>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </ReactLenis>
  )
}

export default LandingPageParralax
