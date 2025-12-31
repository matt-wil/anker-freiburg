import CTAButton from "./CTAButton";

export default function Pmu() {
  return (
    <div className="px-6 max-w-6xl text-center flex-col items-start mx-auto">
      <h1 className="page-header font-bold mb-8">Nia Tucker</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <CTAButton
            href="https://www.niahopepmu.com/"
            className="flex items-center bg-white justify-center text-3xl border text-black px-5 py-2 mt-5 uppercase shadow-lg transition-all hover:bg-[var(--ankerBeige)] hover:shadow-2xl hover:scale-3d w-[12rem] h-[6rem] rounded-2xl max-sm:mt-15"
          >
            Contact
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
