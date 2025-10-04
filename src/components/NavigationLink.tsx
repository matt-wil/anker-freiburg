"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { ComponentProps, useRef } from "react";
import { Link } from "@/i18n/routing";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText);
}

export default function NavigationLink({
  href,
  ...rest
}: ComponentProps<typeof Link>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;

  const container = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      if (!container.current) return;

      const split = new SplitText(container.current, { type: "chars" });
      const chars = split.chars;

      const tl = gsap.timeline({ paused: true });

      tl.to(chars, {
        x: 10,
        color: "#ffffff",
        stagger: {
          each: 0.05,
          from: "end",
        },
        ease: "power2.inOut",
      });

      const onEnter = () => tl.play();
      const onLeave = () => tl.reverse();

      container.current.addEventListener("mouseenter", onEnter);
      container.current.addEventListener("mouseleave", onLeave);
    },
    { scope: container },
  );

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      href={href}
      style={{ fontWeight: isActive ? "bold" : "normal" }}
      ref={container}
      {...rest}
    />
  );
}
