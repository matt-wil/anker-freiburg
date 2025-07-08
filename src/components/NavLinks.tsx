"use client"

import NavigationLink from "./NavigationLink"
import { useState } from "react"
import { CiMenuFries } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { useTranslations } from "next-intl";
import type {JSX} from "react";

interface NavItem {
    key: string;
    path: string;
    label: string;
}

const navLinks: NavItem[] = [
        { key: 'home', path: '', label: 'nav.home' },
        { key: 'about', path: 'ueber-uns', label: 'nav.about' },
        { key: 'tattoo', path: 'tattoo', label: 'nav.tattoo' },
        { key: 'piercing', path: 'piercing', label: 'nav.piercing' },
        { key: 'kontakt', path: 'kontakt', label: 'nav.contact' },
        { key: 'aktionen', path: 'aktionen', label: 'nav.promo' },
        { key: 'faq', path: 'haeufige-gestellte-fragen', label: 'nav.faq' },
        //{ key: 'data', path: '/datenschutz', label: 'nav.data' },
        //{ key: 'legal', path: '/impressum', label: 'nav.legal' },
      ];

const NavLinks = () => {
    const t = useTranslations()

    const [showNavLinks, setShowNavLinks] = useState<boolean>(false);

    const toggleNavLinks = (): void => {
        setShowNavLinks((prev: boolean) => !prev);
    };

    const menuIcon = showNavLinks ? <IoIosClose className="w-10 h-10 cursor-pointer" onClick={toggleNavLinks} /> : <CiMenuFries className="w-10 h-10 cursor-pointer" onClick={toggleNavLinks} />
    
  return (
    <nav className="m-1">
        {menuIcon}
        {showNavLinks &&
            navLinks.map((link: NavItem): JSX.Element => (
                <div key={link.key}>
                    <NavigationLink href={`/${link.path}`}>{t(link.label)}</NavigationLink>
                </div>
            ))}
    </nav>
  )
}

export default NavLinks