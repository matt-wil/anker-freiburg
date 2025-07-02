import type { Metadata } from 'next'
import type {JSX} from 'react'

export const metadata: Metadata = {
    title: 'About',
}
const page = (): JSX.Element => {
  return (
    <div>page</div>
  )
}

export default page