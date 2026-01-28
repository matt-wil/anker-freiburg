"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const PiercingJewelleryGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        containerRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 1 },
      ).fromTo(
        ".gsap-reveal",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 },
        "-=0.5",
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full bg-zinc-950/60 border border-zinc-900 rounded-2xl overflow-hidden py-20 px-6"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="gsap-reveal mb-4 flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-widest">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          Vorbereitung
        </div>

        <h2 className="gsap-reveal text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
          Handverlesene Stücke. <br />
          <span className="text-zinc-600 text-3xl md:text-5xl">
            Bald auch online.
          </span>
        </h2>

        <p className="gsap-reveal max-w-xl text-zinc-400 text-lg md:text-xl mb-10 leading-relaxed">
          Wir führen ein umfangreiches Sortiment an hochwertigem Schmuck direkt
          im Studio. Während wir die **Produktfotografie** finalisieren, beraten
          wir dich gerne persönlich vor Ort.
        </p>

        <div className="gsap-reveal grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-2xl text-sm border-t border-zinc-900 pt-10">
          <div>
            <p className="text-zinc-200 font-semibold mb-1">
              Steriler Ersteinsatz
            </p>
            <p className="text-zinc-500">Titan Grad 23</p>
          </div>
          <div>
            <p className="text-zinc-200 font-semibold mb-1">Große Auswahl</p>
            <p className="text-zinc-500">Sofort verfügbar im Studio</p>
          </div>
          <div>
            <p className="text-zinc-200 font-semibold mb-1">
              Erhältliche Materialien
            </p>
            <p className="text-zinc-500">
              Chirurgenstahl, PTFE, Bioplast, Echtgold, Silber, Messing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PiercingJewelleryGallery;
