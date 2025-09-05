import { FaAnchorCircleExclamation } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import DownloadButton from "./DownloadButton";

type PiercingRule = {
  age: string;
  description: string;
  requirements?: {
    title: string;
    items: string[];
  };
};

export default function U18Info() {
  const t = useTranslations("u18Info");

  const piercingRules: PiercingRule[] = t.raw("piercing.rules");
  const tattooConditions: string[] = t.raw("tattoo.conditions.items");

  return (
    <section className="flex flex-col justify-center items-center overflow-hidden hover:shadow-elegant transition-smooth border-border/50 bg-card/80 backdrop-blur-sm border border-white rounded-xl m-4">
      <div className="p-6 text-center w-full">
        <div className="flex justify-center items-center mb-4 mx-auto w-25 h-25 bg-gradient-to-br from-cyan-800 to-amber-800 rounded">
          <FaAnchorCircleExclamation className="w-20 h-20" />
        </div>
        <h2 className="font-bold text-2xl mb-2">{t("title")}</h2>
        <p className="mt-2 text-gray-300">{t("intro")}</p>
      </div>

      <hr className="w-full border-white/20" />

      {/* Main container for Piercing and Tattoo sections */}
      <div className="flex flex-col md:flex-row w-full text-left">
        {/* Piercing Column */}
        <div className="w-full md:w-1/2 p-6 border-b md:border-b-0 md:border-r border-white/20">
          <h3 className="font-bold text-xl mb-4">{t("piercing.title")}</h3>
          {/* Map over the piercing rules array */}
          {piercingRules.map((rule, index) => (
            <div key={index} className="mb-4">
              <p className="font-semibold">{rule.age}</p>
              <p className="text-gray-400 text-sm">{rule.description}</p>
              {/* Conditionally render the requirements list if it exists */}
              {rule.requirements && (
                <div className="mt-2">
                  <p className="font-semibold text-sm">
                    {rule.requirements.title}
                  </p>
                  <ul className="list-disc pl-5 mt-1">
                    {rule.requirements.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-400 text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tattoo Column */}
        <div className="w-full md:w-1/2 p-6">
          <h3 className="font-bold text-xl mb-4">{t("tattoo.title")}</h3>
          <div className="mb-4">
            <p className="font-semibold">{t("tattoo.ageRule")}</p>
          </div>
          <div>
            <p className="font-semibold">{t("tattoo.conditions.title")}</p>
            <ul className="list-disc pl-5 mt-1">
              {/* Map over the tattoo conditions array */}
              {tattooConditions.map((condition, index) => (
                <li key={index} className="text-gray-400 text-sm">
                  {condition}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <hr className="w-full border-white/20" />

      {/* Display the final warning message */}
      <div className="p-6 text-center bg-gray-900/50 w-full rounded-b-xl">
        <p className="font-bold text-amber-400">{t("warning")}</p>
      </div>

      <div className="m-2 pb-4">
        <DownloadButton
          text="U18 Einverständniserklärung PDF"
          document="U18-doc.pdf"
          downloadName="Anker-U18-Einverständniserklärung.pdf"
        />
      </div>
    </section>
  );
}
