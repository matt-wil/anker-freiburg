"use client"

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ImageCard from '@/components/ImageCard'
import type { CloudinaryImage } from '@/types'

export default function InfiniteGallery({ images }: { images: CloudinaryImage[] }) {
  const gridRef = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const [fullscreenImage, setFullscreenImage] = useState<CloudinaryImage | null>(null)

  useGSAP(() => {
    if (!gridRef.current) return

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
      }
    )
  }, [])

  useGSAP(() => {
    if (fullscreenImage && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
      )
    }
  }, { dependencies: [fullscreenImage] })

  const closeModal = () => {
    if (modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.3,
        ease: "power3.in",
        onComplete: () => setFullscreenImage(null),
      })
    } else {
      setFullscreenImage(null)
    }
  }

  return (
    <div className="w-full min-h-screen p-8">
      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        {images.map((img, idx) => (
          <div
            key={`${img.public_id}-${idx}`}
            className="group rounded-2xl border-2 border-white/20 overflow-hidden shadow-2xl relative transition-transform duration-300 cursor-pointer transform-gpu hover:scale-105 hover:z-10"
            onClick={() => setFullscreenImage(img)}
          >
            <ImageCard
              src={img.secure_url}
              width={500}
              height={500}
              alt={`Art Image ${idx}`}
              crop="fill"
              gravity="face"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-transparent text-white px-4 py-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            &#x25B2;
            </div>
          </div>
        ))}
      </div>

      {fullscreenImage && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <ImageCard
            src={fullscreenImage.secure_url}
            width={1200}
            height={1200}
            alt="Fullscreen artwork"
            className="md:max-w-[40dvw] md:max-h-[90dvh] rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </div>
  )
}
