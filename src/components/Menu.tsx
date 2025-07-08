"use client"

import Link from "next/link"
import NavLinks from "./NavLinks"
import { useRef, useState, useEffect } from "react"

const Menu = (): React.JSX.Element => {
    const container = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = (): void => {
        setIsMenuOpen((prev: boolean) => !prev);
    }
  return (
    <div>Menu</div>
  )
}

export default Menu