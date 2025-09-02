"use client";

import Aktionen from "./Aktionen";
import type { CloudinaryImage } from "@/types";
import { useTranslations } from "next-intl";

export default function AktionenClient({
  resources,
}: {
  resources: CloudinaryImage[];
}) {
  const t = useTranslations("nav");
  return (
    <section>
      <div className="flex justify-center">
        <h1 className="page-header">{t("promo")}</h1>
      </div>
      <Aktionen resources={resources} />
    </section>
  );
}
