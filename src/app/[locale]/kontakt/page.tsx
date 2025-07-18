import type { Metadata } from 'next'
import Contact from '@/components/Contact'


export const metadata: Metadata = {
    title: 'Kontakt',
}

const Page = () => {
  return (
    <>
      <Contact />
    </>
  )
};
export default Page;