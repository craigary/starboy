'use client'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import Card from '@/components/bento/card/Card'
import CardBg from '@/components/bento/card/CardBg'
import { Separator } from '@radix-ui/themes'

const CornerCard = ({ delay }) => {
  return (
    <Card className="h-full p-3" delay={delay}>
      <div className="relative h-full w-full rounded border bg-gradient-to-br from-muted/0 via-muted/40 to-muted/0 py-1 transition-all hover:shadow-md hover:shadow-muted/50">
        <CardBg />
        <div className="relative flex h-full w-full items-center justify-around px-2">
          <p className="hidden text-sm opacity-40 md:block">ver 0.9.0</p>
          <Separator orientation="vertical" className="hidden md:block" />
          <ThemeSwitcher />
        </div>
      </div>
    </Card>
  )
}

export default CornerCard
