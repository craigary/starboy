'use client'
import { notionImageLoader } from '@/lib/notion-next/notion-image-loader'
import { cn } from '@/lib/utils'
import { Dialog } from '@radix-ui/themes'
import { unstable_getImgProps as getImgProps } from 'next/image'

const BookItem = ({ book }) => {
  const bookImage = book.cover

  const common = {
    alt: book.name,
    width: 400,
    height: 400 * bookImage.aspectRatio,
    loader: notionImageLoader,
    placeholder: 'blur',
    blurDataURL: bookImage.blur
  }
  const res = getImgProps({ ...common, src: bookImage.url })

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <div
          className={cn(
            'group flex aspect-square items-center justify-center rounded-sm bg-secondary/50 p-6 text-sm transition-all hover:bg-[--accent-a2] md:p-10'
          )}
        >
          <div
            className="flex h-full w-auto items-center justify-between overflow-hidden rounded-l-sm bg-cover transition-all group-hover:scale-[102%]"
            style={{
              ...res.props.style,
              // backgroundImage: `url(${res.props.src})`,
              backgroundImage: `image-set(${res.props.srcSet
                .split(' ')
                .map((item, i) => (i % 2 === 0 ? '"' + item + '"' : item))
                .join(' ')})`,
              aspectRatio: `1/${bookImage.aspectRatio}`,
              boxShadow: `0 1.8px 3.6px rgba(0,0,0,.05), 0 10.8px 21.6px rgba(0,0,0,.08), inset 0 -0.9px 0 rgba(0,0,0,.1), inset 0 1.8px 1.8px hsla(0,0%,100%,.1), inset 3.6px 0 3.6px rgba(0,0,0,.1)`
            }}
          >
            <div
              className="h-full w-3 border-r opacity-20"
              style={{
                backgroundImage: `linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,0) 12%,hsla(0,0%,100%,.25) 29.25%,hsla(0,0%,100%,0) 50.5%,hsla(0,0%,100%,0) 75.25%,hsla(0,0%,100%,.25) 91%,hsla(0,0%,100%,0)),linear-gradient(90deg,rgba(0,0,0,.03),rgba(0,0,0,.1) 12%,transparent 30%,rgba(0,0,0,.02) 50%,rgba(0,0,0,.2) 73.5%,rgba(0,0,0,.5) 75.25%,rgba(0,0,0,.15) 85.25%,transparent)`
              }}
            ></div>
          </div>
        </div>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 600 }}>
        <Dialog.Title>{book.name}</Dialog.Title>
        <div className="flex h-full w-full items-center justify-between">
          <div className="flex h-full w-1/2 items-center justify-center gap-4 ">
            <div
              className="flex h-56 w-auto items-center justify-between overflow-hidden rounded-l-sm bg-cover"
              style={{
                ...res.props.style,
                backgroundImage: `url(${res.props.src})`,
                aspectRatio: `1/${bookImage.aspectRatio}`,
                boxShadow: `0 1.8px 3.6px rgba(0,0,0,.05), 0 10.8px 21.6px rgba(0,0,0,.08), inset 0 -0.9px 0 rgba(0,0,0,.1), inset 0 1.8px 1.8px hsla(0,0%,100%,.1), inset 3.6px 0 3.6px rgba(0,0,0,.1)`
              }}
            >
              <div
                className="h-full w-3 border-r opacity-20"
                style={{
                  backgroundImage: `linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,0) 12%,hsla(0,0%,100%,.25) 29.25%,hsla(0,0%,100%,0) 50.5%,hsla(0,0%,100%,0) 75.25%,hsla(0,0%,100%,.25) 91%,hsla(0,0%,100%,0)),linear-gradient(90deg,rgba(0,0,0,.03),rgba(0,0,0,.1) 12%,transparent 30%,rgba(0,0,0,.02) 50%,rgba(0,0,0,.2) 73.5%,rgba(0,0,0,.5) 75.25%,rgba(0,0,0,.15) 85.25%,transparent)`
                }}
              ></div>
            </div>
          </div>
          <div className="h-full w-1/2">Lorem ipsum dolor sit</div>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  )
}

export default BookItem
