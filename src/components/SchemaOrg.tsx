import React from "react";
import { getAlldata } from "@/lib/queries/artists";

interface SchemaOrgProps {
  locale: string;
}

export async function SchemaOrg({ locale }: SchemaOrgProps) {
  // Fetch active studio team dynamically from Supabase
  let staffMembers: Array<{ "@type": string; name: string; jobTitle: string }> =
    [];

  try {
    const artists = await getAlldata();
    if (Array.isArray(artists)) {
      staffMembers = artists.map((artist) => {
        const rawRole = (artist.category || artist.role || "").toLowerCase();
        let jobTitle = "Tattoo Artist";
        if (rawRole.includes("pierc")) {
          jobTitle = "Body Piercer";
        } else if (rawRole.includes("pmu") || rawRole.includes("permanent")) {
          jobTitle = "PMU Artist";
        }

        return {
          "@type": "Person",
          name: artist.name,
          jobTitle,
        };
      });
    }
  } catch (error) {
    console.error(
      "Fehler beim Laden der Künstler für JSON-LD (Error loading artists for JSON-LD):",
      error,
    );
  }

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TattooParlor", "HealthAndBeautyBusiness"],
        "@id": "https://www.anker-tattoo.de/#studio",
        name: "Anchor Tattoo & Piercing",
        alternateName: "Anker Tattoo & Piercing Studio Freiburg",
        url: `https://www.anker-tattoo.de/${locale}`,
        logo: "https://www.anker-tattoo.de/anker_logo.png",
        image: "https://www.anker-tattoo.de/anker_og.png",
        telephone: "+49 761 51462878",
        priceRange: "€€",
        address: {
          "@type": "PostalAddress",
          streetAddress: "An d. Mehlwaage 2",
          addressLocality: "Freiburg im Breisgau",
          postalCode: "79098",
          addressCountry: "DE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 47.9959,
          longitude: 7.8508,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "12:00",
            closes: "18:30",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: "11:00",
            closes: "16:00",
          },
        ],
        sameAs: [
          "https://share.google/skyeo1jGwuejwyb8A",
          "https://www.instagram.com/anker.tattoo.freiburg",
          "https://www.facebook.com/profile.php?id=61579347080829",
        ],
        employee: staffMembers,
        areaServed: {
          "@type": "City",
          name: "Freiburg im Breisgau",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.anker-tattoo.de/#website",
        url: "https://www.anker-tattoo.de",
        name: "Anchor Tattoo & Piercing Studio",
        inLanguage: ["de", "en"],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
}
