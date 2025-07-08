import Tattooists from '@/components/Tattooists'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Tattoo',
}

const page = (): React.JSX.Element => {
  return (
    <>
        <Tattooists/>
    </>
  )
}

export default page