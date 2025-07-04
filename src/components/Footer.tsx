"use client"

import { CiInstagram } from "react-icons/ci";
import Link from "next/link";
import { useTranslation } from "react-i18next"

export default function Footer(): React.ReactNode {
  const {t} = useTranslation()
  return (
    <footer className="text-sm italic">
      <div className="flex flex-col justify-center items-center text-center">
        <a
          className="my-5 hover:animate-pulse"
          href="https://www.instagram.com/anker.tattoo.freiburg?igsh=MTdtOxIkYXIxMHE0bw=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiInstagram className="w-10 h-10" />
        </a>
        <p className="max-w-xl px-4">
          &#169; Anker Tattoo & Piercing Freiburg. All rights reserved |{" "}
          <a
            href="https://www.google.de/maps/place/Anchor+Tattoo+%26+Piercing/@47.992937,7.8459964,17z"
            target="_blank"
            rel="noopener noreferrer"
          >
            An der Mehlwaage 2, 79098 Freiburg
          </a>{" "}
          | Telefon:{" "}
          <a href="tel:+4976151462878">0761-51 46 28 78</a> | E-Mail:{" "}
          <a href="mailto:info@anker-tattoo.de">info@anker-tattoo.de</a> |{" "}
          <Link href="datenschutz">{t("nav.data")}</Link> |{" "}
          <Link href="impressum">{t("nav.legal")}</Link> | {" "}
          <Link href="/login">Admin</Link> 
        </p>
      </div>
    </footer>
  );
}
