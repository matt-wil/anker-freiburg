import CTAButton from "@/components/CTAButton";
import { Oldenburg } from "next/font/google"
import LandingPageParralax from "@/components/LandingPageParallax";


const font = Oldenburg({
  weight: "400",
  subsets: ["latin"],

})

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-start pl-10 mt-10 h-[100dvh]">
        <h1 className="text-[2.5rem]"><span className={`text-6xl sm:text-8xl md:text-9xl lg:text-[15rem] xl:text-[20rem] font-bold pt-5 mb-0 leading-none ${font.className}`}>Anker</span><br/>Tattoo & Piercing Studio in Freiburg</h1>
        <p className="uppercase tracking-widest">Seit 2011</p>
        <div className="flex justify-end w-full pr-4 md:pr-[10rem] xl:pr-[20rem]">
          <CTAButton 
            href="/contact"
            className="flex items-center bg-white justify-center text-3xl border text-black px-5 py-2 mt-5 uppercase shadow-lg transition-all hover:bg-[var(--ankerBeige)] hover:shadow-2xl hover:scale-3d w-[12rem] h-[6rem] rounded-2xl"
            >Kontakt</CTAButton>
        </div>
      </div>
      <section>
        <LandingPageParralax />
      </section>
      {/** 
      <section className="w-full h-full">
        <IntroVideo />
      </section>
      */}
    </>
  )
}