import Heading from '@/components/Heading'
import Container from '@/components/container/Container'
import WorkItem from '@/components/work/WorkItem'
import { getAllWorks } from '@/lib/sanity/get-works'

export const revalidate = 60

const WorksPage = async () => {
  const works = await getAllWorks()
  return (
    <Container>
      <Heading title="Works">
        <p className="leading-6 md:w-3/4 md:leading-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
          magnam vero est aperiam dolores. Officia ab a, atque voluptatum odit
          possimus exercitationem necessitatibus quam praesentium eligendi
          dolorem ea! Quas, nesciunt?
        </p>
      </Heading>
      <div className="flex flex-col gap-4 sm:flex-row md:gap-6">
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
      </div>
    </Container>
  )
}

export default WorksPage
