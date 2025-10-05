"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ImageCard from "@/components/ImageCard";
import type { R2Asset } from "@/types";
import { cn } from "@/lib/utils";

export default function InfiniteGallery({
  images,
  artistName,
  type,
}: {
  images: R2Asset[];
  artistName: string;
  type: string;
}) {
  const gridRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [fullscreenImage, setFullscreenImage] = useState<R2Asset | null>(null);

  useGSAP(() => {
    if (!gridRef.current || images.length === 0) return;

    gsap.fromTo(
      gridRef.current.children,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: {
          each: 0.15,
          from: "edges",
        },
        ease: "power4.out",
      },
    );
  }, []);

  useGSAP(
    () => {
      if (fullscreenImage && modalRef.current) {
        gsap.fromTo(
          modalRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" },
        );
      }
    },
    { dependencies: [fullscreenImage] },
  );

  const closeModal = () => {
    if (modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.3,
        ease: "power3.in",
        onComplete: () => setFullscreenImage(null),
      });
    } else {
      setFullscreenImage(null);
    }
  };

  return (
    <div className="w-full min-h-screen p-4 md:p-8">
      <div
        ref={gridRef}
        className="grid sm:grid-cols-2 md:grid-cols-4 auto-rows-[250px] gap-4 grid-auto-flow-dense"
      >
        {images.map((img, idx) => {
          const { key, width, height } = img;
          const hash = key
            .split("")
            .reduce((acc, char) => acc + char.charCodeAt(0), 0);
          let colSpan = "col-span-1";
          let rowSpan = "row-span-1";
          if (width && height) {
            if (hash % 11 === 0) {
              colSpan = "md:col-span-2";
              rowSpan = "md:row-span-2";
            } else if (hash % 7 === 0 && width && width > height) {
              colSpan = "md:col-span-2";
            } else if (hash % 5 === 0 && height && height > width) {
              rowSpan = "md:row-span-2";
            }
          }
          return (
            <div
              key={`${img.key}-${idx}`}
              className={cn(
                "group flex items-center justify-center rounded-2xl border-2 border-white/20 overflow-hidden shadow-2xl relative transition-transform duration-300 cursor-pointer transform-gpu hover:scale-105 hover:z-10",
                colSpan,
                rowSpan,
              )}
              onClick={() => setFullscreenImage(img)}
            >
              <ImageCard
                src={img.url}
                alt={`A beautiful ${type} done by ${artistName}, one of Anker Tattoo & Piercings professional artists `}
                fill
                priority={idx < 4}
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
            </div>
          );
        })}
      </div>

      {fullscreenImage && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <ImageCard
            src={fullscreenImage.url}
            alt="Fullscreen artwork"
            width={fullscreenImage.width}
            height={fullscreenImage.height}
            className="h-auto w-auto max-w-[90vw] max-h-[90vh] rounded-2xl shadow-2xl"
            sizes="90vw"
          />
        </div>
      )}
    </div>
  );
}
