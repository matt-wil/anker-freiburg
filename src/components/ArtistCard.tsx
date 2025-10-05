"use client";

import ImageCard from "./ImageCard";
import type { DBArtist } from "@/types";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "@/i18n/routing";

type ArtistCardProps = {
  artist: DBArtist;
  imageUrl: string;
};

const ArtistCard = ({
  artist,
  imageUrl,
}: ArtistCardProps): React.JSX.Element => {
  const locale = useLocale();
  const t = useTranslations("artistCard");
  const artistSpecs = artist[
    `specialities_${locale}` as keyof typeof artist
  ] as string[];
  const pathname = usePathname();
  return (
    <Link
      key={artist.slug}
      href={`${pathname}/${artist.slug}`}
      className="text-black border rounded-xl p-4 bg-white/60 hover:shadow-lg transition"
      passHref
    >
      <div className="mb-4 overflow-hidden mx-auto">
        <ImageCard
          showHoverEffect={true}
          src={`${imageUrl}`}
          alt={`Anker Tattoo & Piercing Studio in Freiburg Artist ${artist.name} Profile Image`}
          width={500}
          height={500}
          className="rounded group-hover:scale-105 transition-transform"
        />
      </div>
      <h2 className="text-xl font-semibold">{artist.name}</h2>
      <p>
        {artist.experience}+ {t("xp")}
      </p>
      <div className="flex flex-wrap gap-2 my-1">
        {artistSpecs.map((spec: string, index: number) => (
          <div key={index} className="border-1 p-1 rounded my-1 text-cyan-100">
            {spec}
          </div>
        ))}
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          window.open(artist.instagram_link, "_blank");
        }}
        className="p-1 rounded bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 cursor-pointer"
      >
        <BsInstagram className="w-10 h-10" />
      </button>
    </Link>
  );
};

export default ArtistCard;
