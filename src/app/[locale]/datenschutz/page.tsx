import DatenschutzComponent from "@/components/DatenschutzComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
};
const page = () => {
  return (
    <>
      <DatenschutzComponent />
    </>
  );
};

export default page;
