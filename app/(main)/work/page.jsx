import Heading from '@/components/Heading'
import Container from '@/components/container/Container'
import WorkItem from '@/components/work/WorkItem'
import { generateMetaData } from '@/lib/metadata'
import { getWorkList } from '@/lib/notion-next/get-work-list'

export const revalidate = 60

const pathName = '/work'
export const metadata = generateMetaData(pathName)

const WorksPage = async () => {
  const works = await getWorkList()
  return (
    <Container>
      <Heading title="Works">
        <div className="space-y-3 leading-6 tracking-[0.015em] md:w-3/4 md:leading-8">
          <p>
            The project pages are currently being organized. The content shown
            currently contains a mix of work projects, open source projects,
            designs, and other items.
          </p>
          <p>More detailed information will be added later.</p>
        </div>
      </Heading>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {works.map(item => (
          <WorkItem key={item.id} item={item} delay={0.25} />
        ))}
      </div>
      {/* <div className="flex flex-col gap-4 sm:flex-row md:gap-6">
        <div className="flex w-full flex-col gap-4 sm:w-1/2 md:gap-6">
          {works
            .filter((_, i) => i % 3 === 0)
            .map((item, index) => (
              <WorkItem key={item._id} item={item} delay={index * 0.125} />
            ))}
        </div>
        <div className="flex w-full flex-col gap-4 sm:w-1/2 md:gap-6">
          {works
            .filter((_, i) => i % 3 === 1)
            .map((item, index) => (
              <WorkItem key={item._id} item={item} delay={index * 0.125} />
            ))}
        </div>
        <div className="flex w-full flex-col gap-4 sm:w-1/2 md:gap-6">
          {works
            .filter((_, i) => i % 3 === 2)
            .map((item, index) => (
              <WorkItem key={item._id} item={item} delay={index * 0.125} />
            ))}
        </div>
      </div> */}
    </Container>
  )
}

export default WorksPage
