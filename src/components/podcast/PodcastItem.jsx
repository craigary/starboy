'use client'
import Image from 'next/image'
import { useState } from 'react'
import Tilt from 'react-parallax-tilt'

const PodcastItemWrapper = ({ podcast }) => {
  const [isReady, setIsReady] = useState(false)
  const onLoadingComplete = () => {
    setIsReady(true)
  }
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
          className="aspect-square h-full w-full overflow-hidden border shadow-sm rounded cursor-pointer flex scale-100 active:scale-[93%] transition-all duration-150"
          title={podcast.description}
          onClick={() => window.open(podcast.url, '_blank')}
        >
          <Image
            src={podcast.coverImgURL}
            width={200}
            height={200}
            quality={100}
            className={`transition-all ${isReady ? 'blur-0' : 'blur'} `}
            onLoadingComplete={onLoadingComplete}
            placeholder="blur"
            alt="Picture of the author"
            blurDataURL={podcast.blurImgData}
          />
        </div>
      </Tilt>
      <p
        className="w-full leading-5 pt-2 py-3 text-sm text-center truncate cursor-default dark:text-white"
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
