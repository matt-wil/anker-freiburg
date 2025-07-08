'use client';
import Link from 'next/link';

export default function CTAButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="border text-white px-5 py-2 mt-5 uppercase shadow-lg transition-all hover:animate-pulse hover:bg-white/20 hover:text-black hover:shadow-2xl hover:scale-3d"
    >
      {children}
    </Link>
  );
}