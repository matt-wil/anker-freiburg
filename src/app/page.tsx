import CTAButton from "@/components/CTAButton";

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-start pl-5">
        <h1 className="text-7xl font-bold pt-5">Anker</h1>
        <p>Tattoo und Piercing Studio in Freiburg</p>
        <p className="uppercase tracking-widest">Seit 2011</p>
        <CTAButton href="/contact">Kontakt</CTAButton>
      </div>
    </>
  )
}