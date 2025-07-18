import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import Aktionen from '@/components/Aktionen'

export const metadata: Metadata = {
    title: 'Aktionen',
}


const Page = (): React.JSX.Element => {
  const t = useTranslations("nav")

  return (
      <section>
        <div className='flex justify-center'>
          <h1 className='page-header'>{t("promo")}</h1>
        </div>
        <Aktionen />
      </section>
  )
}

export default Page