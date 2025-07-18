import FAQ from '@/components/FAQ'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Häufige gestellte Fragen',
}

const page = (): React.JSX.Element => {
  return (
    <>
      <FAQ />
    </>
  )
}

export default page