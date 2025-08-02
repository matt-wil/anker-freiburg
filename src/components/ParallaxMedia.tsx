"use client"

import { useEffect, useRef } from "react"
import { useLenis } from "lenis/react"
import Image from "next/image"
import OptimizedVideo from "./OptimizedVideo"
import { useMediaQuery } from "react-responsive"

const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(value, max))

type MediaType = "image" | "video"

type ParallaxMediaProps = {
  src: string,
  alt?: string,
  mediaType?: MediaType,
  children?: React.ReactNode,
  className?: string,
  containerHeight?: string | number,
  containerAspectRatio?: string
}

const ParallaxMedia = ({ src, alt = "", mediaType, children, className = "", containerHeight, containerAspectRatio }: ParallaxMediaProps): React.JSX.Element => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const innerRef = useRef<HTMLDivElement | null>(null)
  const bounds = useRef<{ top: number, bottom: number } | null>(null)
  const currentTranslateY = useRef(0)
  const targetTranslateY = useRef(0)
  const refId = useRef<number | null>(null)
  const isMobile = useMediaQuery({ maxWidth: 768 })

  const inferMediaType = (): MediaType => {
    if (mediaType) return mediaType
    return src.match(/\.(mp4|webm)$/i) ? "video" : "image"
  }

  const type = inferMediaType()

  useEffect(() => {
    window.scrollTo(0, 0)

    const updateBounds = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        bounds.current = {
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY
        }
      }
    }
    updateBounds()
    window.addEventListener("resize", updateBounds)

    const animate = () => {
      if (innerRef.current) {
        currentTranslateY.current = lerp(
          currentTranslateY.current,
          targetTranslateY.current,
          0.2
        )
        const baseScale = isMobile ? 1.005 : 1.1
        const scale = baseScale + Math.min(Math.abs(currentTranslateY.current) / 800, 0.15)
        innerRef.current.style.transform = `translateY(${currentTranslateY.current}px) scale(${scale})`
      }
      refId.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener("resize", updateBounds)
      if (refId.current) cancelAnimationFrame(refId.current)
    }
  }, [isMobile])

  useLenis(({ scroll }) => {
    if (!bounds.current) {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        bounds.current = {
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY
        }
      } else {
        return
      }
    }
    const relativeScroll = scroll - (bounds.current.top || 0)
    const parallaxFactor = isMobile ? 0.15 : 0.6
    const rawOffset = relativeScroll * parallaxFactor

    const containerHeight = containerRef.current?.offsetHeight || 0
    const maxOffset = containerHeight * 0.6
    targetTranslateY.current = clamp(rawOffset, -maxOffset, maxOffset)
  })

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        willChange: "transform",
        overflow: "hidden",
        position: "relative",
        height: containerHeight,
        aspectRatio: containerAspectRatio,
      }}
    >
      <div
        ref={innerRef}
        style={{
          height: "100%",
          width: "100%",
          transform: `translateY(${currentTranslateY.current}px) scale(1.25)`,
          transition: "transform 0.1s ease-out",
          willChange: "transform",
          position: "absolute",
          top: 0,
          left: 0
        }}
      >
        {type === "image" ? (
          <Image
            src={src}
            alt={alt}
            fill
            unoptimized
            quality={90}
            priority
            className="object-cover object-top lg:object-contain"
            sizes="100vw"
          />
        ) : (
          <OptimizedVideo src={src} />
        )}
        {children}
      </div>
    </div>
  )
}

export default ParallaxMedia
