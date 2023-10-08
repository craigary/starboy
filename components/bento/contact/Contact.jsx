import Card from '@/components/bento/card/Card'
import BookAMettingBtn from '@/components/bento/contact/BookAMettingBtn'
import { Button } from '@radix-ui/themes'
import { IconRipple } from '@tabler/icons-react'
import Link from 'next/link'

const ContactCard = ({ delay }) => {
  return (
    <Card delay={delay} className="h-full p-3">
      <div className="group relative z-10 flex h-full w-full flex-col justify-center rounded-lg border px-4 py-6 transition-all">
        <IconRipple
          className="absolute right-0 top-0 text-primary/10"
          size="160"
          stroke={1}
        />

        <h3 className="mb-4 w-fit bg-gradient-to-r from-primary/60 to-primary bg-clip-text text-2xl font-bold text-transparent md:mb-6 md:text-3xl">
          Just say hi?
        </h3>
        <p>
          Don&apos;t be afraid to email me, it just might take a few days (or
          weeks) for me to get back to you 😃.
        </p>
        <div className="mt-4 flex gap-2">
          <Button variant="soft" color="gray" asChild>
            <Link href="/about">Contact</Link>
          </Button>
          <BookAMettingBtn />
        </div>
      </div>
    </Card>
  )
}

export default ContactCard
