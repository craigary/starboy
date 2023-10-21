import Card from '@/components/bento/card/Card'
import CircleBg from '@/components/bento/project/CircleBg'
import { cn } from '@/lib/utils'
import { Button } from '@radix-ui/themes'
import localFont from 'next/font/local'

// Font files can be colocated inside of `app`
const labFont = localFont({
  src: '../../../assets/Morro-Regular.woff2',
  display: 'swap'
})

const LabCard = ({ delay = 0 }) => {
  return (
    <Card className="h-full min-h-[8rem] grow p-3" delay={delay}>
      <div className="relative z-10 flex h-full flex-col items-center justify-center overflow-hidden rounded-md border border-border bg-background shadow-none transition-shadow hover:shadow-xl hover:shadow-muted/60 dark:bg-muted/20">
        <CircleBg className="z-10" />
        <p
          className={cn(
            'z-10 mb-2 w-fit bg-gradient-to-r from-primary/60 to-primary bg-clip-text text-5xl font-semibold text-transparent ',
            labFont.className
          )}
        >
          LAB
        </p>
        <Button
          size="1"
          radius="full"
          variant="surface"
          highContrast
          color="gray"
          asChild
        >
          <a href="/lab" target="_blank">
            Visit the Lab
          </a>
        </Button>
      </div>
    </Card>
  )
}

export default LabCard
