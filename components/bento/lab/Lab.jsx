import Card from '@/components/bento/card/Card'
import { Button } from '@radix-ui/themes'
import { IconMicroscope, IconRocket } from '@tabler/icons-react'

const LabCard = ({ delay = 0 }) => {
  return (
    <Card className="grow p-3" delay={delay}>
      <div className="relative z-10 flex h-full flex-col rounded border transition-all hover:shadow-md hover:shadow-muted/50">
        <div className="relative p-4">
          <IconMicroscope stroke="1.5" className="mb-2" />
          <p className="mb-2 font-medium">Craig&apos;s LAB</p>
          <p className="mb-3 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Button variant="soft">
            <IconRocket stroke="1.5" />
            Take a ride
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default LabCard
