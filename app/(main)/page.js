import Bento from '@/components/bento/Bento'
import Container from '@/components/container/Container'

export const runtime = 'edge'

export default async function Home() {
  return (
    <Container className="max-w-screen-lg">
      <Bento />
    </Container>
  )
}
