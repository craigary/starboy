'use client'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import Card from '@/components/bento/card/Card'
import CardBg from '@/components/bento/card/CardBg'
import { Separator } from '@radix-ui/themes'

const CornerCard = ({ delay }) => {
  return (
    <Card className="h-full p-3" delay={delay}>
      <div className="relative h-full w-full rounded border border-border/50 bg-muted/20 py-0.5 transition-all hover:bg-muted/50">
        <CardBg />
        <div className="relative flex h-full w-full items-center justify-around px-2">
          <p className="hidden text-sm opacity-40 md:block">ver 0.9</p>
          <Separator orientation="vertical" className="hidden md:block" />
          <ThemeSwitcher />
        </div>
      </div>
    </Card>
  )
}

export default CornerCard
