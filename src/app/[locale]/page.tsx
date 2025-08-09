import CTAButton from "@/components/CTAButton";
import { Playfair_Display } from "next/font/google";
import LandingPageParralax from "@/components/LandingPageParallax";
import LandingPageMobile from "@/components/LandingPageMobile";
import Image from "next/image";

const font = Playfair_Display({
  weight: "900",
  subsets: ["latin"],
});

export default function Page() {
  return (
    <>
      {/** DESKTOP */}
      <section className="hidden lg:flex flex-col items-start pl-10 mt-10 h-[100dvh]">
        <h1 className="text-2xl sm:text-[2.5rem]">
          <span
            className={`text-8xl md:text-9xl lg:text-[15rem] xl:text-[20rem] font-bold pt-5 mb-0 leading-none ${font.className}`}
          >
            Anker
          </span>
          <br />
          Tattoo & Piercing Studio in Freiburg
        </h1>
        <p className="uppercase tracking-widest">Seit 2011</p>
        <div className="flex justify-center md:justify-end w-full pr-4 md:pr-[10rem] xl:pr-[20rem]">
          <CTAButton
            href="/contact"
            className="flex items-center bg-white justify-center text-3xl border text-black px-5 py-2 mt-5 uppercase shadow-lg transition-all hover:bg-[var(--ankerBeige)] hover:shadow-2xl hover:scale-3d w-[12rem] h-[6rem] rounded-2xl max-sm:mt-15"
          >
            Kontakt
          </CTAButton>
        </div>
      </section>

      {/** MOBILE */}
      <section className="flex lg:hidden relative flex-col justify-between h-[100dvh] text-white overflow-hidden">
        {/* Top Content Area */}
        <div className="flex flex-col items-center justify-center flex-grow px-6 md:px-12 pt-10 pb-48 z-10">
          {" "}
          {/* pb-48 to make space for illustration */}
          {/* Logo and App Name */}
          <div className="flex items-center mb-10 self-start mx-auto max-w-xl w-full">
            {" "}
            {/* Centered max-width div */}
            <Image
              src="/whiteLogo.svg"
              alt="Anker Logo"
              width={24}
              height={24}
              className="mr-2"
            />{" "}
            {/* Adjust size */}
            <span className={`${font.className} text-3xl font-semibold`}>
              Anker
            </span>
          </div>
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-left self-start mx-auto max-w-xl w-full mb-6">
            Tattoo & Piercing <br />
            Studio in Freiburg
          </h1>
          {/* Description */}
          <p className="text-base md:text-lg text-left self-start mx-auto max-w-xl w-full mb-10 leading-relaxed uppercase tracking-widest">
            Seit 2011
          </p>
          {/* Button */}
          <CTAButton
            className="flex items-center bg-white justify-center text-3xl border text-black px-5 py-2 mt-5 uppercase shadow-lg transition-all hover:bg-[var(--ankerBeige)] hover:shadow-2xl hover:scale-3d w-[12rem] h-[6rem] rounded-2xl max-sm:mt-15"
            href="/contact"
          >
            Kontakt
          </CTAButton>
        </div>
      </section>

      {/* Desktop Parallax */}
      <section className="hidden lg:block">
        <LandingPageParralax />
      </section>

      {/* Mobile/Tablet Static Layout */}
      <section className="block lg:hidden">
        <LandingPageMobile />
      </section>
    </>
  );
}
