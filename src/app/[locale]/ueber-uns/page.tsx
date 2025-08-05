import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
export const metadata: Metadata = {
    title: 'Über uns',
}

const page = (): React.JSX.Element => {
  const t = useTranslations()
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative flex flex-col items-center justify-center px-6 py-32">
      <div className='about-clip-path w-[360px] h-[360px] lg:w-[460px] lg:h-[460px]'>
          <Image src="/parallax_images/team.JPG" alt="Photo of the Anker tattoo and piercing team" width={800} height={800}/>
      </div>
        <h1 className="about-header text-6xl sm:text-9xl font-bold mb-4">{t("about.header")}</h1>
        <h2 className="text-3xl mb-4">{t('about.subHeader')}</h2>
        <div className="md:max-w-[75dvw] w-auto">
          <article className="m-6 max-w-150 text-center">{t("about.text1")}</article>
          <article className="m-6 max-w-150 text-center">{t("about.text2")}</article>
          <article className="m-6 max-w-150 text-center">{t("about.text3")}</article>
          <article className="m-6 max-w-150 text-center">{t("about.text4")}</article>
          <article className="m-6 max-w-150 text-center">{t("about.text5")}</article>
        </div>
      </div>
    </div>
  )
}

export default page