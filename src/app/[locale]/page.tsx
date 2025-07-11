import CTAButton from "@/components/CTAButton";

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-start pl-10">
        <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[15rem] xl:text-[20rem] font-bold pt-5 mb-0 leading-none">Anker</h1>
        <p className="text-[2.5rem]">Tattoo und Piercing Studio in Freiburg</p>
        <p className="uppercase tracking-widest">Seit 2011</p>
        <div className="flex justify-end w-full pr-4 md:pr-[10rem] xl:pr-[20rem]">
          <CTAButton 
            href="/contact"
            className="flex items-center bg-[var(--ankerMidAqua)]/80 justify-center text-3xl border text-black px-5 py-2 mt-5 uppercase shadow-lg transition-all hover:bg-[var(--ankerMidAqua)] hover:text-black hover:shadow-2xl hover:scale-3d w-[12rem] h-[6rem]"
            >Kontakt</CTAButton>
        </div>
      </div>
    </>
  )
}