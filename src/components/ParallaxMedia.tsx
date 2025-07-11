"use client"

import { useEffect, useRef } from "react"
import { useLenis } from "lenis/react"
import Image from "next/image"
import OptimizedVideo from "./OptimizedVideo"

const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor

type MediaType = "image" | "video"

type ParallaxMediaProps = {
  src: string,
  alt?: string,
  mediaType?: MediaType,
  children?: React.ReactNode
  className?: string
}

const ParallaxMedia = ({ src, alt = "", mediaType, children, className = "" }: ParallaxMediaProps): React.JSX.Element => {
  const mediaRef = useRef<HTMLDivElement | null>(null)
  const bounds = useRef<{ top: number, bottom: number } | null>(null)
  const currentTranslateY = useRef(0)
  const targetTranslateY = useRef(0)
  const refId = useRef<number | null>(null)

  const inferMediaType = (): MediaType => {
    if (mediaType) return mediaType
    return src.match(/\.(mp4|webm)$/i) ? "video" : "image"
  }

  useEffect(() => {
    const updateBounds = () => {
      if (mediaRef.current) {
        const rect = mediaRef.current.getBoundingClientRect()
        bounds.current = {
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY
        }
      }
    }
    updateBounds()
    window.addEventListener("resize", updateBounds)

    const animate = () => {
      if (mediaRef.current) {
        currentTranslateY.current = lerp(
          currentTranslateY.current,
          targetTranslateY.current,
          0.1
        )

        if (Math.abs(currentTranslateY.current - targetTranslateY.current) > 0.01) {
          mediaRef.current.style.transform = `translateY(${currentTranslateY.current}px) scale(1.25)`
        }
      }
      refId.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener("resize", updateBounds)
      if (refId.current) cancelAnimationFrame(refId.current)
    }
  }, [])

  useLenis(({ scroll }) => {
    if (!bounds.current) return
    const relativeScroll = scroll - bounds.current.top
    targetTranslateY.current = relativeScroll * 0.5
  })

  const type = inferMediaType()

  return (
    <div
      ref={mediaRef}
      style={{
        willChange: "transform",
        transform: "translateY(0) scale(1.25)",
        overflow: "hidden",
      }}
    >
      {type === "image" ? (
        <Image
          src={src}
          alt={alt}
          width={1080}
          height={1860}
          style={{ width: "100%", height: "auto" }}
          className={className}
        />
      ) : (
        <OptimizedVideo
          src={src}
          alt={alt}
          autoPlay
          muted
          loop
          playsInline
          style={{ width: "100%", height: "auto" }}
          className={className}
        />
      )}
      {children}
    </div>
  )
}

export default ParallaxMedia
