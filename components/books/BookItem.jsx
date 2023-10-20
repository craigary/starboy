'use client'
import { notionImageLoader } from '@/lib/notion-next/notion-image-loader'
import { cn } from '@/lib/utils'
import { Badge, Dialog } from '@radix-ui/themes'
import Image from 'next/image'

const BookItem = ({ book }) => {
  const bookImage = book.cover

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <div
          className={cn(
            'group flex aspect-square items-center justify-center rounded-sm bg-secondary/50 p-6 text-sm transition-all hover:bg-[--accent-a2] md:p-10'
          )}
        >
          <div
            className="relative flex h-full w-auto items-center justify-between overflow-hidden rounded-l-sm transition-all group-hover:scale-[102%]"
            style={{
              aspectRatio: `1/${bookImage.aspectRatio}`,
              boxShadow: `0 1.8px 3.6px rgba(0,0,0,.05), 0 10.8px 21.6px rgba(0,0,0,.08), inset 0 -0.9px 0 rgba(0,0,0,.1), inset 0 1.8px 1.8px hsla(0,0%,100%,.1), inset 3.6px 0 3.6px rgba(0,0,0,.1)`
            }}
          >
            <div
              className="relative z-10 h-full w-3 border-r opacity-20"
              style={{
                backgroundImage: `linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,0) 12%,hsla(0,0%,100%,.25) 29.25%,hsla(0,0%,100%,0) 50.5%,hsla(0,0%,100%,0) 75.25%,hsla(0,0%,100%,.25) 91%,hsla(0,0%,100%,0)),linear-gradient(90deg,rgba(0,0,0,.03),rgba(0,0,0,.1) 12%,transparent 30%,rgba(0,0,0,.02) 50%,rgba(0,0,0,.2) 73.5%,rgba(0,0,0,.5) 75.25%,rgba(0,0,0,.15) 85.25%,transparent)`
              }}
            ></div>
            <Image
              alt={book.name}
              loader={notionImageLoader}
              placeholder="blur"
              fill
              src={bookImage.url}
              className="z-0 object-cover"
              blurDataURL={bookImage.blur}
            ></Image>
          </div>
        </div>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 600 }}>
        {/* <Dialog.Title>{book.name}</Dialog.Title> */}
        <div className="flex h-full w-full flex-col items-stretch justify-between  md:flex-row">
          <div className="flex h-full w-full items-center justify-center gap-4 py-4 md:w-1/2 ">
            <div
              className="relative flex h-40 w-auto items-center justify-between overflow-hidden rounded-l-sm md:h-56"
              style={{
                aspectRatio: `1/${bookImage.aspectRatio}`,
                boxShadow: `0 1.8px 3.6px rgba(0,0,0,.05), 0 10.8px 21.6px rgba(0,0,0,.08), inset 0 -0.9px 0 rgba(0,0,0,.1), inset 0 1.8px 1.8px hsla(0,0%,100%,.1), inset 3.6px 0 3.6px rgba(0,0,0,.1)`
              }}
            >
              <div
                className="relative z-10 h-full w-3 border-r opacity-20"
                style={{
                  backgroundImage: `linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,0) 12%,hsla(0,0%,100%,.25) 29.25%,hsla(0,0%,100%,0) 50.5%,hsla(0,0%,100%,0) 75.25%,hsla(0,0%,100%,.25) 91%,hsla(0,0%,100%,0)),linear-gradient(90deg,rgba(0,0,0,.03),rgba(0,0,0,.1) 12%,transparent 30%,rgba(0,0,0,.02) 50%,rgba(0,0,0,.2) 73.5%,rgba(0,0,0,.5) 75.25%,rgba(0,0,0,.15) 85.25%,transparent)`
                }}
              ></div>

              <Image
                alt={book.name}
                loader={notionImageLoader}
                placeholder="blur"
                fill
                src={bookImage.url}
                className="z-0 object-cover"
                blurDataURL={bookImage.blur}
              ></Image>
            </div>
          </div>
          <div className="h-full w-full md:w-1/2">
            <h3 className="my-4 font-serif font-bold md:text-xl">
              {book.name}
            </h3>
            <Badge color={book.status.color}>{book.status.name}</Badge>
            {book.note && <p className="mt-4">{book.note}</p>}
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  )
}

export default BookItem
