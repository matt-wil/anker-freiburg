import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Häufige gestellte Fragen',
}

const page = (): React.JSX.Element => {
  return (
    <div>
      FAQ
    </div>
  )
}

export default page