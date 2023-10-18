import Clock from '@/components/Clock'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import Card from '@/components/bento/card/Card'

const CornerCard = ({ delay }) => {
  return (
    <Card className="h-full p-3" delay={delay}>
      <div className="relative h-full w-full rounded-md border border-border bg-muted/20 py-0.5 transition-shadow hover:bg-muted/50">
        <div className="relative flex h-full w-full items-center justify-between px-1 sm:justify-around">
          <Clock />
          <ThemeSwitcher />
        </div>
      </div>
    </Card>
  )
}

export default CornerCard
