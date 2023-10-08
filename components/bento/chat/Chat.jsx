'use client'
import Card from '@/components/bento/card/Card'
import CardBg from '@/components/bento/card/CardBg'
import ChatBubble from '@/components/bento/chat/ChatBubble'
import { Badge, IconButton } from '@radix-ui/themes'
import {
  IconAntennaBars5,
  IconBatteryFilled,
  IconChevronLeft,
  IconMicrophone,
  IconPlus,
  IconVideo,
  IconWifi
} from '@tabler/icons-react'

const ChatCard = ({ delay }) => {
  const date = new Date()
  return (
    <Card className="grow p-3" delay={delay}>
      <div className="relative flex h-full flex-col rounded-lg border bg-gradient-to-br from-muted/0 via-muted/40 to-muted/0">
        <CardBg />
        <div className="h-16 w-full">
          <div className="flex h-6 w-full items-center justify-between border-b px-3">
            <span className="scale-90 text-xs text-primary/70">
              {date.getHours() % 12}:
              {date.getMinutes() > 9
                ? date.getMinutes()
                : `0${date.getMinutes()}`}{' '}
            </span>
            <div className="flex items-center gap-0.5">
              <IconAntennaBars5 size="12" />
              <IconWifi size="12" />
              <IconBatteryFilled size="12" />
            </div>
          </div>
          <div className="flex h-10 items-center justify-between border-b bg-gradient-to-br from-muted/0 via-muted/40 to-muted/0 px-2">
            <div className="flex items-center justify-start">
              <IconChevronLeft size="12" />
              <Badge size="1" radius="full" variant="soft" color="blue">
                2
              </Badge>
            </div>
            <div className="flex aspect-square h-4/5 items-center justify-center rounded-full bg-muted text-sm">
              LW
            </div>
            <IconVideo size="12" />
          </div>
        </div>
        <div className="grow px-2 pt-2">
          <div className="mb-2 scale-90 text-center text-xs text-primary/40">
            Thursday, October 5
          </div>

          <div className="mb-2 w-[90%]">
            <ChatBubble direction="left" showArrow>
              <div className="relative z-10 w-full rounded-lg bg-primary px-3 py-2 text-sm text-primary-foreground">
                <p>Are there any way to contact you?</p>
              </div>
            </ChatBubble>
          </div>
          <div className="mb-3 ml-auto mr-0 w-[90%]">
            <ChatBubble direction="right" showArrow>
              <div className="relative z-10 w-full rounded-lg bg-[#278EFF] px-3 py-2 text-sm text-primary-foreground">
                <p>Glad you love it, How about check out my contact page?</p>
              </div>
            </ChatBubble>
            <p className="text-right text-xs text-primary/40">
              Read:{' '}
              <span className="text-primary/70">
                {date.getHours() % 12}:
                {date.getMinutes() > 9
                  ? date.getMinutes()
                  : `0${date.getMinutes()}`}{' '}
                {date.getHours() > 12 ? 'PM' : 'AM'}
              </span>
            </p>
          </div>
        </div>
        <div className="flex shrink-0 items-center justify-between gap-2 px-2 pb-2 pt-1">
          <IconButton
            variant="soft"
            color="gray"
            radius="full"
            size="1"
            className="shrink-0"
          >
            <IconPlus size="12" />
          </IconButton>
          <div className="flex h-full grow items-center justify-end rounded-full border px-2">
            <p className="grow text-left text-xs text-primary/40">iMessage</p>
            <IconMicrophone size="12" className="shrink-0" />
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ChatCard
