"use client";

import { useEffect, useRef } from "react";
import Image, { ImageProps } from "next/image";
import { useLenis } from "lenis/react";
import { useMediaQuery } from "react-responsive";

// Helper function for smooth linear interpolation (smoothing the animation)
const lerp = (start: number, end: number, factor: number) =>
  start + (end - start) * factor;

// Helper function to keep a value within a specific range
const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(value, max));

// Define the component's props, extending the standard Next.js ImageProps
type ParallaxImageProps = Omit<ImageProps, "alt"> & {
  alt: string;
  containerClassName?: string;
};

const ParallaxImage = ({
  src,
  alt,
  containerClassName,
  ...props
}: ParallaxImageProps): React.JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const bounds = useRef<{ top: number; bottom: number } | null>(null);
  const currentTranslateY = useRef(0);
  const targetTranslateY = useRef(0);
  const animationFrameId = useRef<number | null>(null);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" }); // The main animation loop that applies the parallax and scale effects

  useEffect(() => {
    const animate = () => {
      if (innerRef.current) {
        // Smoothly move the current Y position towards the target Y position
        currentTranslateY.current = lerp(
          currentTranslateY.current,
          targetTranslateY.current,
          0.1,
        ); // Apply a subtle scaling effect based on the parallax movement

        const baseScale = isMobile ? 1.05 : 1.15;
        const scale = baseScale + Math.abs(currentTranslateY.current) / 2000;
        innerRef.current.style.transform = `translateY(${currentTranslateY.current}px) scale(${scale})`;
      }
      animationFrameId.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isMobile]); // Hook into the Lenis scroll event to calculate the target parallax offset

  useLenis(({ scroll }) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      bounds.current = {
        top: rect.top + window.scrollY,
        bottom: rect.bottom + window.scrollY,
      };

      const relativeScroll = scroll - bounds.current.top;
      const parallaxFactor = isMobile ? 0.1 : 0.25;
      const rawOffset = relativeScroll * parallaxFactor;
      const maxOffset = rect.height * 0.2;

      targetTranslateY.current = clamp(rawOffset, -maxOffset, maxOffset);
    }
  });

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${containerClassName}`}
      style={{ willChange: "transform" }}
    >
           {" "}
      <div
        ref={innerRef}
        className="absolute top-0 left-0 h-full w-full"
        style={{ willChange: "transform" }}
      >
               {" "}
        <Image
          {...props}
          src={src}
          alt={alt}
          fill
          quality={90}
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
             {" "}
      </div>
         {" "}
    </div>
  );
};

export default ParallaxImage;
