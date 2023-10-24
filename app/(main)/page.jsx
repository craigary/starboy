import Bento from '@/components/bento/Bento'
import Container from '@/components/container/Container'

export const metadata = {
  title: 'Craig Hart'
}

export const revalidate = 60

export default async function Home() {
  return (
    <Container className="max-w-screen-lg">
      <Bento />
    </Container>
  )
}
