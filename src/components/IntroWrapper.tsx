'use client'

import dynamic from "next/dynamic"
const IntroAnimation = dynamic(() => import("./IntroAnimation"), { ssr: false })

export default function IntroWrapper() {
  return <IntroAnimation />
}
