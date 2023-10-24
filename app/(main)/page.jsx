import Bento from '@/components/bento/Bento'
import Container from '@/components/container/Container'
import { generateMetaData } from '@/lib/metadata'

const pathName = '/'
export const metadata = generateMetaData(pathName)

export default function Home() {
  return (
    <Container className="max-w-screen-lg">
      <Bento />
    </Container>
  )
}
