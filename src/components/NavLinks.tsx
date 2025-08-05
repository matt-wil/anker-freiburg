'use client';

import { useState, useRef } from 'react';
import { CiMenuFries} from 'react-icons/ci';
import { IoIosClose } from 'react-icons/io';
import { useTranslations } from 'next-intl';
import NavigationLink from './NavigationLink';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

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
];

const NavLinks = () => {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [shouldRender, setShouldRender] = useState<boolean>(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLDivElement | null)[]>([]);

  // Slide in/out logic with GSAP
  useGSAP(
    () => {
      if (isOpen && menuRef.current) {
        gsap.set(menuRef.current, { y: '-100%' });

        gsap.to(menuRef.current, {
          y: 0,
          duration: 1,
          ease: 'power2.out',
        });

        gsap.from(linksRef.current, {
          y: 50,
          opacity: 0,
          stagger: 0.1,
          delay: 0.2,
          duration: 0.75,
          ease: 'power3.out',
        });
      } else if (!isOpen && menuRef.current) {
        gsap.to(menuRef.current, {
          y: '100%',
          duration: 0.5,
          ease: 'power3.in',
          onComplete: () => {
            setShouldRender(false); // Unmount after animation
          },
        });
      }
    },
    { dependencies: [isOpen] }
  );

  const handleOpen = () => {
    setShouldRender(true); // Mount the overlay
    setIsOpen(true);       // Trigger open animation
  };

  const handleClose = () => {
    setIsOpen(false); // Triggers close animation, then sets shouldRender = false
  };

  return (
    <nav className="relative z-50">
      {isOpen ? (
            <IoIosClose
              className="w-20 h-20 cursor-pointer text-black fixed top-4 right-4 z-60"
              onClick={handleClose}
              role={`button`}
              aria-label={`Close Menu`}
            />
      ) : (
        <CiMenuFries
          className="w-10 h-10 cursor-pointer"
          onClick={handleOpen}
          role={`button`}
          aria-label={`Open Menu`}
        />
      )}

      {shouldRender && (
        <div
          ref={menuRef}
          className="fixed inset-0 bg-[#cbbd93] text-black flex flex-col flex-start pl-10 justify-center gap-6 z-50"
        >
          {navLinks.map((link: NavItem, index: number) => (
            <div
              key={link.key}
              ref={(el) => (linksRef.current[index] = el)}
              className="text-4xl lg:text-6xl lg:ml-30 font-bold uppercase"
              onClick={handleClose}
            >
              <NavigationLink href={`/${link.path}`}>
                {t(link.label)}
              </NavigationLink>
            </div>
          ))}
          <div className='flex flex-row justify-between p-2 text-xs uppercase'>
            <div className='flex flex-col'>
            <a
                className="hover:animate-pulse hover:text-white"
                href="https://www.instagram.com/anker.tattoo.freiburg?igsh=MTdtOxIkYXIxMHE0bw=="
                target="_blank"
                rel="noopener noreferrer"
        >
                <span>instagram &#8599;</span>
            </a>
            <a>
                <span>facebook &#8599;</span>
            </a>
            </div>
            <div className='flex flex-col mr-4'>
                <a href="mailto:info@anker-tattoo.de">info@anker-tattoo.de</a>
                <a href="tel:+4976151462878">076151462878</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavLinks;
