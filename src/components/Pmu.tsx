interface PmuProps {
  profileImage: string;
}

export default function Pmu({ profileImage }: PmuProps) {
  const links = [
    { label: "View Services", href: "https://www.niahopepmu.com/services" },
    {
      label: "Portfolio",
      href: "https://www.niahopepmu.com/portfolioprojects",
    },
    { label: "Contact & Book", href: "https://www.niahopepmu.com/contact" },
  ];

  return (
    <div className="min-h-screen text-stone-800 px-6 py-20 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Profile Section */}
      <div className="mb-10 relative">
        <div className="absolute inset-0 bg-[var(--ankerBeige)] rounded-full blur-3xl opacity-40 scale-125 animate-pulse" />
        <img
          src={profileImage}
          alt="Nia Tucker"
          className="relative w-36 h-36 md:w-48 md:h-48 object-cover rounded-full border-4 border-white shadow-2xl"
        />
      </div>

      {/* Brand Identity */}
      <header className="mb-14 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-stone-900">
          Nia Hope
        </h1>
        <div className="h-[1px] w-12 bg-[var(--ankerBeige)] mx-auto mb-6 opacity-60" />
        <p className="uppercase tracking-[0.5em] text-[10px] md:text-xs text-stone-400 font-bold">
          Permanent Makeup Artistry
        </p>
      </header>

      {/* Action Links */}
      <nav className="flex flex-col gap-5 items-center w-full max-w-sm">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group flex items-center justify-center
              w-full h-20 text-lg font-medium uppercase tracking-[0.2em]
              bg-white/80 backdrop-blur-sm text-stone-700 border border-stone-100
              rounded-full shadow-sm shadow-stone-200/50
              transition-all duration-500 ease-in-out
              hover:bg-[var(--ankerBeige)] hover:border-[var(--ankerBeige)]
              hover:text-stone-900 hover:scale-[1.03] hover:shadow-xl
              active:scale-95
            "
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Footer Branding */}
      <footer className="mt-20 text-center">
        <p className="text-[10px] uppercase tracking-[0.6em] text-stone-300">
          Freiburg • UK • Bespoke
        </p>
      </footer>

      {/* Soft Background Blur */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--ankerBeige)] rounded-full blur-[180px] opacity-[0.08] pointer-events-none -z-10" />
    </div>
  );
}
