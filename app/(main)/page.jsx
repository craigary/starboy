import Bento from '@/components/bento/Bento'
import Container from '@/components/container/Container'
import { generateMetaData } from '@/lib/metadata'

export const revalidate = 60
const pathName = '/'

export const metadata = generateMetaData(pathName)

export default function Home() {
  return (
    <Container className="max-w-screen-lg">
      <Bento />
    </Container>
  )
}
