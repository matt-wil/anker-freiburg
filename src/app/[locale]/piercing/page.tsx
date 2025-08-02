import Piercers from '@/components/Piercers'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Professional Body Piercers',
}

const page = (): React.JSX.Element => {
  return (
    <>
        <Piercers />
    </>
  )
}

export default page