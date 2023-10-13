import Card from '@/components/bento/card/Card'
import CardBg from '@/components/bento/card/CardBg'
import {
  SiFigma,
  SiNotion,
  SiVisualstudiocode
} from '@icons-pack/react-simple-icons'
import { Button } from '@radix-ui/themes'
import { IconChevronRight } from '@tabler/icons-react'

const ProjectCard = ({ delay }) => {
  return (
    <Card className="relative h-full p-3" delay={delay}>
      <div
        className="group relative z-10 flex h-full w-full flex-col items-center justify-end overflow-hidden rounded border transition-all hover:scale-[102%] hover:shadow-md hover:shadow-muted/50
      "
      >
        <CardBg />
        <SiNotion
          size={'20%'}
          className="pointer-events-none absolute right-6 top-1 z-0 rotate-12 opacity-10 transition-all group-hover:text-black group-hover:opacity-40"
        />
        <SiVisualstudiocode
          size={'25%'}
          className="pointer-events-none absolute right-24 top-28 z-0 rotate-[-30deg] text-[#007ACC] opacity-10 transition-all group-hover:top-14 group-hover:rotate-0 group-hover:opacity-40"
        />
        <SiFigma
          size={'25%'}
          className="pointer-events-none absolute left-8 top-6 z-0 -rotate-12 text-[#F24E1E] opacity-10 transition-all group-hover:opacity-40"
        />
        <div className="translate-y-12 p-4 transition-all group-hover:translate-y-0">
          <div className="text-primary/60 group-hover:text-primary">
            <p className="bg-gradient-to-r from-primary/60 to-primary bg-clip-text text-xl font-bold  transition-all">
              Projects
            </p>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="pt-4">
            <Button variant="soft" color="gray" radius="full">
              View Projects
              <IconChevronRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ProjectCard
