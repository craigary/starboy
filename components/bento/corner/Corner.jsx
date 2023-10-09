'use client'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import Card from '@/components/bento/card/Card'
import CardBg from '@/components/bento/card/CardBg'
import { Separator } from '@radix-ui/themes'

const CornerCard = ({ delay }) => {
  return (
    <Card className="h-full p-3" delay={delay}>
      <div className="relative h-full w-full rounded-lg border bg-gradient-to-br from-muted/0 via-muted/40 to-muted/0 py-1 transition-all hover:shadow-md hover:shadow-muted/50">
        <CardBg />
        <div className="relative flex h-full w-full items-center justify-around px-2">
          {/* <Clock /> */}
          <p className="text-sm opacity-40">ver 0.9.0</p>
          <Separator orientation="vertical" />
          <ThemeSwitcher />
        </div>
      </div>

      {/* {isClient && (
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={theme}
            // initial={{ rotateX: -90 }}
            // animate={{ rotateX: 0 }}
            // exit={{ rotateX: -90 }}
            // transition={{ ease: 'easeInOut', duration: 0.3 }}
            className="group relative flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg border bg-gradient-to-tr from-muted/50 to-muted/10 active:scale-[97%]"
            role="button"
            onClick={() => updateTheme()}
          >
            <div className="flex flex-col items-center transition-all hover:scale-[102%] group-active:scale-95">
              {theme === 'light' && (
                <IconSunHigh className="text-primary/70" size="24" />
              )}
              {theme === 'dark' && (
                <IconMoonFilled className="text-primary/70" size="24" />
              )}
              {theme === 'system' && (
                <IconWand className="text-primary/70" size="24" />
              )}
              <Badge
                variant="soft"
                radius="full"
                color="gray"
                size="1"
                className="uppercase"
              >
                {theme}
              </Badge>
            </div>
          </motion.div>
        </AnimatePresence>
      )} */}
    </Card>
  )
}

export default CornerCard
