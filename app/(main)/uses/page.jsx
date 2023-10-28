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
        <div className="space-y-3 leading-6 tracking-[0.015em] md:w-3/4 md:leading-8">
          <div>We shape our tools, and thereafter our tools shape us.</div>
        </div>
      </Heading>
      <MyServicesList myServicesList={data} />
    </Container>
  )
}

export default UsePage
