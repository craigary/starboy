'use client'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt'

const PodcastItemWrapper = ({ podcast }) => {
  return (
    <div className="mb-4">
      <Tilt
        glareEnable
        tiltEnable={false}
        scale={1.05}
        glareMaxOpacity={0.8}
        glareColor="white"
        glarePosition="all"
      >
        <div
          className="flex aspect-square h-full w-full scale-100 cursor-pointer overflow-hidden rounded border shadow-sm transition-all duration-150 active:scale-[93%]"
          title={podcast.description}
          onClick={() => window.open(podcast.url, '_blank')}
        >
          <Image
            src={podcast.coverImgUrl}
            width={200}
            height={200}
            quality={100}
            placeholder="blur"
            blurDataURL={podcast.coverImgBlur}
            alt={podcast.title}
          />
        </div>
      </Tilt>
      <p
        className="w-full cursor-default truncate py-3 pt-2 text-center text-sm leading-5 dark:text-white"
        title={podcast.title}
      >
        {/* {podcast.unplayed && (
          <span className="inline-block h-[6px] w-[6px] bg-red-500 rounded-full align-middle mr-[6px]"></span>
        )} */}
        <span className="align-middle">{podcast.title}</span>
      </p>
    </div>
  )
}

export default PodcastItemWrapper
