import Heading from '@/components/Heading'
import Container from '@/components/container/Container'
import StackList from '@/components/uses/MyServiceList'
import { getStackInfo } from '@/lib/notion/get-stack-info'

const StackPage = async () => {
  const data = await getStackInfo()
  return (
    <Container>
      <Heading title="Stack">
        <p className="leading-6 md:w-3/4 md:leading-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
          magnam vero est aperiam dolores. Officia ab a, atque voluptatum odit
          possimus exercitationem necessitatibus quam praesentium eligendi
          dolorem ea! Quas, nesciunt?
        </p>
      </Heading>
      <StackList stackList={data} />
    </Container>
  )
}

export default StackPage
