"use client"

import Link from "next/link"
import { useState } from "react"
import { CiMenuFries } from "react-icons/ci";
import type {JSX} from "react"

const NavLinks = () => {
    const navLinks: string[] = ["home", "tattoo", "piercing", "contact", "data", "legal", "faq", "promo"]
    const [showNavLinks, setShowNavLinks] = useState(false);

    const toggleNavLinks = (): void => {
        setShowNavLinks(prev => !prev);
    };
    
  return (
    <nav className="m-1">
        <CiMenuFries className="w-10 h-10 cursor-pointer" onClick={toggleNavLinks} />
        {showNavLinks &&
            navLinks.map((link: string): JSX.Element => (
                <div key={link}>
                    <Link href={`/${link}`}>{link}</Link>
                </div>
            ))}
    </nav>
  )
}

export default NavLinks