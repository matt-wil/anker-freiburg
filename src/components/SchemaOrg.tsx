import React from "react";
import { getAlldata } from "@/lib/queries/artists";

interface SchemaOrgProps {
  locale: string;
}

export async function SchemaOrg({ locale }: SchemaOrgProps) {
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
    staffMembers = [];
    console.log(error);
  }

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TattooParlor", "HealthAndBeautyBusiness"],
        "@id": "https://www.anker-tattoo.de/#studio",
        name: "Anker Tattoo & Piercing Studio Freiburg",
        alternateName: "Anker Tattoo, Piercing & PMU Studio",
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
        makesOffer: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Tattooing",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Professional Body Piercing",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Permanent Makeup (PMU)",
            },
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.anker-tattoo.de/#website",
        url: "https://www.anker-tattoo.de",
        name: "Anker Tattoo & Piercing Studio Freiburg",
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
