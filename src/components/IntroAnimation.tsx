"use client"


import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Image from "next/image"
import { useRef } from "react"

gsap.registerPlugin(useGSAP)

const IntroAnimation = () => {
  const logoRef = useRef(null)
  const overlayRef = useRef(null)
  const bgRef = useRef(null)

  useGSAP(() => {
    const timeline = gsap.timeline({ defaults: { ease: "power4.out" } })

    // Fade in overlay
    timeline.fromTo(
      overlayRef.current,
      { opacity: 1 },
      { opacity: 0, duration: 1 },
      0
    )

    // Animate logo in from depth with Y-axis spin
    timeline.fromTo(
      logoRef.current,
      {
        scale: 10,
        rotationY: 0,
        z: -1000,
        opacity: 0,
        filter: "blur(20px)",
        transformPerspective: 1000,
      },
      {
        scale: 1,
        rotationY: 180,
        z: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 2.5,
      },
      ">"
    )

    // Spin 30 degrees more slowly, move to background logo position, and scale up
    timeline.to(
      logoRef.current,
      {
        rotationZ: "+=8",
        scale: 12.5,
        x: "-540px",
        y: "270px",
        duration: 2,
        ease: "power2.inOut",
      },
      ">"
    )

    // Fade out logo and background
    timeline.to(
      [logoRef.current, bgRef.current],
      { opacity: 0, duration: 0.5 },
      ">"
    )
  }, [])

  return (
    <section ref={bgRef} className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      <div ref={overlayRef} className="absolute inset-0 bg-black z-50" />
      <div ref={logoRef} className="absolute z-40" style={{ transformStyle: 'preserve-3d' }}>
        <Image 
          src="/blackLogo.svg" 
          alt="Anker Logo" 
          width={160}
          height={160}
          className="invert"
        />
      </div>
    </section>
  )
}

export default IntroAnimation
