'use client'

import dynamic from "next/dynamic"
import { useState, useEffect } from "react"
const IntroAnimation = dynamic(() => import("./IntroAnimation"), { ssr: false })

export default function IntroWrapper() {
  const [showIntro, setShowIntro] = useState<boolean>(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('introShown');
    if (!hasVisited) {
      setShowIntro(true);
      sessionStorage.setItem('introShown', 'true');
    }
  }, []);

  return showIntro ? <IntroAnimation /> : null
}
