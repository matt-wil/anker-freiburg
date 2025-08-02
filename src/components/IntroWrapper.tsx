'use client'

import dynamic from "next/dynamic"
import { useState, useEffect } from "react"
const IntroAnimation = dynamic(() => import("./IntroAnimation"), { ssr: false })

export default function IntroWrapper({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState<boolean>(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('introShown');
    if (!hasVisited) {
      document.body.classList.add("intro-active")
      setShowIntro(true);

      setTimeout(() => {
        document.body.classList.remove("intro-active")
        document.body.classList.add("intro-done")
        setShowIntro(false);
        sessionStorage.setItem('introShown', 'true');
      }, 9000) 
    } else {
      document.body.classList.add("intro-done")
    }
  }, []);

  return (
    <>
      {showIntro && <IntroAnimation />}
      <div className="main-content">{children}</div>
    </>
  )
}
