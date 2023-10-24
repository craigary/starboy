import Giscus from '@/components/Giscus'
import Heading from '@/components/Heading'
import Container from '@/components/container/Container'
export const dynamic = 'force-dynamic'

const GuestPage = () => {
  return (
    <Container>
      <Heading title="Guestbook" className="relative">
        <p className="mb-4 w-full leading-6 md:w-3/4 md:leading-8">
          Hey, feel free to leave a message below~
        </p>
      </Heading>
      <Giscus />
    </Container>
  )
}

export default GuestPage
