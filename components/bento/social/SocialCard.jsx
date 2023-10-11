'use client'
import Card from '@/components/bento/card/Card'

import { cn } from '@/lib/utils'
import { IconButton } from '@radix-ui/themes'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import { useState } from 'react'
import styles from './style.module.css'

const SocialCard = () => {
  const [cards, setCards] = useState([
    { color: '130, 65%, 98%', id: 1 },
    { color: '48, 100%, 98%', id: 2 },
    { color: '3, 100%, 98%', id: 3 },
    { color: '198, 71%, 98%', id: 4 },
    { color: '35, 100%, 98%', id: 5 }
  ])

  const [activeIndex, setActiveIndex] = useState(cards.length - 1)

  // handlePrev
  const handlePrev = () => {
    updateIndex(1)
  }

  // handleNext
  const handleNext = () => {
    updateIndex(-1)
  }

  const updateIndex = delta => {
    let newIndex = (activeIndex + delta + cards.length) % cards.length
    setActiveIndex(newIndex)
  }

  const getCardStyle = (index, activeIndex) => {
    const backgroundColor = `hsl(${cards[index].color})`
    console.log(backgroundColor)
    const width =
      index <= activeIndex
        ? (10 - (activeIndex - index)) * 10 + '%'
        : (10 - (cards.length - index) - activeIndex) * 10 + '%'

    const top =
      index <= activeIndex
        ? (cards.length - 1 - (activeIndex - index)) * 10 + 'px'
        : (cards.length - 1 - (cards.length - index) - activeIndex) * 10 + 'px'

    const height = `calc(100% - ${top})`

    const zIndex =
      index <= activeIndex
        ? (cards.length - 1 - (activeIndex - index)) * 2
        : (cards.length - 1 - (cards.length - index) - activeIndex) * 2

    return {
      backgroundColor,
      width,
      top,
      height,
      zIndex
    }
  }

  return (
    <Card className="h-full min-h-[16rem] px-3 pb-0 pt-3">
      <div
        className={`group relative flex h-full w-full items-center text-3xl text-primary/30 ${styles['card-stack']}`}
      >
        <IconButton
          radius="full"
          variant="soft"
          className="absolute bottom-2 left-0 z-10 opacity-0 transition-all group-hover:left-2 group-hover:opacity-100"
          onClick={handlePrev}
        >
          <IconArrowLeft width="16" height="16" />
        </IconButton>

        <ul className="h-full w-full overflow-hidden">
          {cards.map((card, index) => {
            return (
              <li
                key={card.id}
                className={cn(
                  'bg-background transition-all duration-1000',
                  styles.card
                )}
                style={getCardStyle(index, activeIndex)}
              >
                <div className="h-full w-full rounded-t-md border bg-gradient-to-br from-muted/0 via-muted/40 to-muted/0 px-2 py-1 transition-all hover:shadow-md hover:shadow-muted/50">
                  <div className="flex items-center justify-start border-b py-2">
                    <div className="mr-2 h-9 w-9 rounded-full bg-red-500/80"></div>
                    <div className="flex flex-col items-start">
                      <p className="text-sm text-primary">craigaryhart</p>
                      <p className="text-xs leading-3">Craig Hart</p>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>

        <IconButton
          radius="full"
          variant="soft"
          className="absolute bottom-2 right-0 z-10 opacity-0 transition-all group-hover:right-2 group-hover:opacity-100"
          onClick={handleNext}
        >
          <IconArrowRight width="16" height="16" />
        </IconButton>
      </div>
    </Card>
  )
}

export default SocialCard
