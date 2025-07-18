import OptimizedVideo from '@/components/OptimizedVideo'
import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'

export const metadata: Metadata = {
    title: 'Über uns',
}

const page = (): React.JSX.Element => {
  const t = useTranslations()
  return (
    <div className="relative w- min-h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
          <OptimizedVideo
            src="splash2_jx9amn"
            width='150dvw'
            height='150dvh'
            className="w-full h-full object-cover opacity-50"
            />
      </div>

      <div className="relative flex flex-col items-center justify-center px-6 py-32">
        <h1 className="about-header text-6xl sm:text-9xl font-bold mb-4">{t("about.header")}</h1>
        <h2 className="text-3xl mb-4">{t('about.subHeader')}</h2>
        <div className="md:max-w-[75dvw] w-auto">
          <div className="m-6 max-w-150 text-center">{t("about.text1")}</div>
          <div className="m-6 max-w-150 text-center">{t("about.text2")}</div>
          <div className="m-6 max-w-150 text-center">{t("about.text3")}</div>
          <div className="m-6 max-w-150 text-center">{t("about.text4")}</div>
          <div className="m-6 max-w-150 text-center">{t("about.text5")}</div>
        </div>
      </div>
    </div>
  )
}

export default page