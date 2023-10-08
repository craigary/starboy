const TinyCard = () => {
  return (
    <div className="grid h-full w-full grid-cols-1 gap-4 md:gap-6">
      <div
        className="relative h-full before:absolute before:inset-0 before:top-1/2  before:h-[calc(100%+16px)] before:w-full before:-translate-y-1/2 before:border-x before:border-dashed
    after:absolute after:inset-0  after:left-1/2 after:h-full after:w-[calc(100%+16px)] after:-translate-x-1/2 after:border-y after:border-dashed
    dark:before:border-border dark:after:border-border"
      >
        Music Player
      </div>
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        <div
          className="relative h-full w-full before:absolute before:inset-0 before:top-1/2  before:h-[calc(100%+16px)] before:w-full before:-translate-y-1/2 before:border-x before:border-dashed
    after:absolute after:inset-0  after:left-1/2 after:h-full after:w-[calc(100%+16px)] after:-translate-x-1/2 after:border-y after:border-dashed
    dark:before:border-border dark:after:border-border"
        >
          Music Player
        </div>
        <div
          className="relative h-full w-full before:absolute before:inset-0 before:top-1/2  before:h-[calc(100%+16px)] before:w-full before:-translate-y-1/2 before:border-x before:border-dashed
    after:absolute after:inset-0  after:left-1/2 after:h-full after:w-[calc(100%+16px)] after:-translate-x-1/2 after:border-y after:border-dashed
    dark:before:border-border dark:after:border-border"
        >
          Music Player
        </div>
      </div>
    </div>
  )
}

export default TinyCard
