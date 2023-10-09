import Bento from '@/components/bento/Bento'
import Container from '@/components/container/Container'
export const metadata = {
  referrer: 'no-referrer'
}

export default async function Home() {
  return (
    <Container className="max-w-screen-lg">
      <Bento />
    </Container>
  )
}
