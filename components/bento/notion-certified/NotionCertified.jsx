import Card from '@/components/bento/card/Card'

const NotionCertified = ({ delay }) => {
  return (
    <Card delay={delay} className="h-full p-3">
      <div className="flex h-full w-full items-center justify-between gap-3 rounded-lg border bg-gradient-to-tr from-muted/50 to-muted/10 px-2 py-1">
        <p className="text-lg leading-5 tracking-tighter text-primary/50">
          <span className="font-bold">Notion</span>
          <br />
          Essentials
        </p>
        {/* <div className="relative aspect-square h-full rounded-full border dark:border-none">
          <Image
            alt="Notion Certified Essentials"
            style={{ objectFit: 'contain' }}
            className="opacity-50 contrast-200 dark:invert"
            fill
            sizes="300px"
            src={notionEssentialsBadge.src}
          ></Image>
        </div> */}
      </div>
    </Card>
  )
}

export default NotionCertified
