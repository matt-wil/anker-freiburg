import FAQ from "@/components/FAQ";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { FAQSchema } from "@/components/FAQSchema";

type RouteParams = { locale: string };

type SegmentProps = {
  params: Promise<RouteParams>;
};

const faqCategories = [
  { headerKeyPart: "1", prefix: "General", count: 5 },
  { headerKeyPart: "2", prefix: "Tattoo", count: 7 },
  { headerKeyPart: "3", prefix: "TattooCare", count: 5 },
  { headerKeyPart: "4", prefix: "Piercing", count: 6 },
  { headerKeyPart: "5", prefix: "PiercingCare", count: 5 },
  { headerKeyPart: "6", prefix: "Jewellery", count: 2 },
  { headerKeyPart: "7", prefix: "Safety", count: 1 },
  { headerKeyPart: "8", prefix: "Specials", count: 1 },
];

export async function generateMetadata({
  params,
}: SegmentProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "faq.metadata" });

  const translatedPath = t("pathSlug");

  return createPageMetadata({
    title: t("title"),
    description: t("description"),
    keywords: t("keywords").split(", "),
    ogTitle: t("ogTitle"),
    ogDescription: t("ogDescription"),
    ogImageAlt: t("ogImageAlt"),
    path: `/${translatedPath}`,
    locale,
  });
}

export default async function Page({ params }: SegmentProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "faq" });

  // Pre-calculate all FAQ items on the server so crawlers see them instantly in raw HTML
  const allFaqs = faqCategories.flatMap((category) => {
    return [...Array(category.count)]
      .map((_, questionIndex) => {
        const questionNum = questionIndex + 1;
        const questionKey = `question${category.prefix}${questionNum}`;
        const answerKey = `answer${category.prefix}${questionNum}`;
        const questionText = t(questionKey);
        const answerText = t(answerKey);

        if (!questionText || questionText === questionKey) {
          return null;
        }

        return {
          question: questionText,
          answer: answerText,
        };
      })
      .filter(
        (item): item is { question: string; answer: string } => item !== null,
      );
  });

  return (
    <>
      <FAQSchema faqs={allFaqs} />
      <FAQ />
    </>
  );
}
