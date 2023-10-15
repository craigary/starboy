import Card from '@/components/bento/card/Card'

const LabCard = ({ delay = 0 }) => {
  return (
    <Card className="h-full grow p-3" delay={delay}>
      <div className="relative z-10 flex h-full flex-col items-center justify-center rounded border border-border/50 bg-background dark:bg-muted/20">
        <p className="w-fit bg-gradient-to-r from-primary/60 to-primary bg-clip-text text-3xl font-semibold">
          LAB
        </p>
        {/* <div className="relative p-3">
          <div className="flex flex-col md:flex-row lg:flex-col">
            <IconMicroscope
              stroke="1.5"
              className="mb-2 mr-auto md:mb-auto md:mr-2 lg:mb-2 lg:mr-auto"
            />
            <p className="mb-2 font-medium">Craig&apos;s LAB</p>
          </div>
          <p className="mb-3 text-sm md:hidden lg:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Button variant="soft" size="1">
            <IconRocket stroke="1.5" />
            Go
          </Button>
        </div> */}
      </div>
    </Card>
  )
}

export default LabCard
