import Piercers from '@/components/Piercers'
import PiercingPriceList from '@/components/PiercingPriceList'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Piercers',
}

const page = (): React.JSX.Element => {
  return (
    <>
        <Piercers />
        <PiercingPriceList />
    </>
  )
}

export default page