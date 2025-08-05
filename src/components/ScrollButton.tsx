// components/ScrollButton.tsx
'use client';

export default function ScrollButton({ targetId, children }: { 
  targetId: string; 
  children: React.ReactNode 
}) {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button onClick={handleClick} className="p-4 m-4 rounded bg-white text-[var(--ankerBlue)] cursor-pointer">
      {children}
    </button>
  );
}   