import Heading from '@/components/Heading'
import Container from '@/components/container/Container'
import MyServicesList from '@/components/uses/MyServiceList'
import { generateMetaData } from '@/lib/metadata'
import { getMyServices } from '@/lib/notion-next/get-my-services'

const pathName = '/uses'
export const metadata = generateMetaData(pathName)

const UsePage = async () => {
  const data = await getMyServices()

  return (
    <Container>
      <Heading title="Use">
        <p className="leading-6 md:w-3/4 md:leading-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
          magnam vero est aperiam dolores. Officia ab a, atque voluptatum odit
          possimus exercitationem necessitatibus quam praesentium eligendi
          dolorem ea! Quas, nesciunt?
        </p>
      </Heading>
      <MyServicesList myServicesList={data} />
    </Container>
  )
}

export default UsePage
