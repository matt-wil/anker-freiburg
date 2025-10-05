import { useTranslations } from "next-intl";

const AboutUs: React.FC = () => {
  const t = useTranslations("about");

  return (
    <>
      <h1 className="about-header text-6xl sm:text-9xl font-bold mb-4">
        {t("header")}
      </h1>
      <h2 className="text-center text-3xl mb-4">{t("subHeader")}</h2>
      <div className="md:max-w-[75dvw] w-auto">
        <article className="m-6 max-w-150 text-center">{t("text1")}</article>
        <article className="m-6 max-w-150 text-center">{t("text2")}</article>
        <article className="m-6 max-w-150 text-center">{t("text3")}</article>
        <article className="m-6 max-w-150 text-center">{t("text4")}</article>
        <article className="m-6 max-w-150 text-center">{t("text5")}</article>
      </div>
    </>
  );
};

export default AboutUs;
