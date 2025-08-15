import ImpressumComponent from "@/components/ImpressumComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
};

const page = () => {
  return (
    <>
      <ImpressumComponent />
    </>
  );
};

export default page;
