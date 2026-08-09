"use client";

import { CiInstagram } from "react-icons/ci";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer(): React.ReactNode {
  const t = useTranslations("nav");
  return (
    <footer className="text-xs italic">
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
          &#169; Anker Tattoo & Piercing Studio Freiburg. All rights reserved |{" "}
          <a
            href="https://www.google.de/maps/place/Anchor+Tattoo+%26+Piercing/@47.992937,7.8459964,17z"
            target="_blank"
            rel="noopener noreferrer"
          >
            An der Mehlwaage 2, 79098 Freiburg
          </a>{" "}
          | <a href="tel:+4976151462878">0761-51 46 28 78</a> |{" "}
          <a href="mailto:info@anker-tattoo.de">info@anker-tattoo.de</a> |{" "}
          <Link href="datenschutz">{t("data")}</Link> |{" "}
          <Link href="impressum">{t("legal")}</Link> |{" "}
          <a
            href="https://www.matt-williams.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dev
          </a>
        </p>
      </div>
    </footer>
  );
}
