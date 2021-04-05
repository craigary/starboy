import Image from 'next/image'
import dayjs from 'dayjs'
import { commafy } from 'commafy-anything'
import * as entities from 'entities'
import PropTypes from 'prop-types'

const Tweet = ({ tweet }) => {
  const formattedText = tweet.text.replace(/https:\/\/[\n\S]+/g, '')
  return (
    <div className="p-4 border rounded mb-4">
      <div className="flex justify-between">
        <div className="flex items-center">
          <div className="mr-2">
            <a
              className="flex h-12 w-12"
              href={tweet.author.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt={tweet.author.username}
                height={48}
                width={48}
                src={tweet.author.profile_image_url}
                className="rounded-full"
              />
            </a>
          </div>
          <div>
            <div className="flex items-center">
              <p>{tweet.author.name}</p>
              {tweet.author.verified && (
                <svg
                  aria-label="Verified Account"
                  className="ml-1 text-blue-500 dark:text-white inline h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <g fill="currentColor">
                    <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                  </g>
                </svg>
              )}
            </div>
            <p>@{tweet.author.username}</p>
          </div>
        </div>
        <div>
          <svg
            width="19"
            height="16"
            viewBox="0 0 19 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.0042 4.02275C17.0157 4.19295 17.0157 4.36314 17.0157 4.53491C17.0157 9.76863 13.1238 15.8047 6.0072 15.8047V15.8016C3.90495 15.8047 1.84636 15.1882 0.0765991 14.0259C0.382285 14.0635 0.689502 14.0824 0.997486 14.0831C2.73966 14.0847 4.43204 13.4863 5.80265 12.3843C4.14704 12.3522 2.69523 11.2471 2.18805 9.63373C2.76801 9.74824 3.36559 9.72471 3.93482 9.5655C2.12982 9.19216 0.831236 7.56863 0.831236 5.68314C0.831236 5.66589 0.831236 5.64942 0.831236 5.63295C1.36906 5.93961 1.97124 6.10981 2.5872 6.12863C0.887164 4.9655 0.363131 2.6502 1.38974 0.840006C3.3541 3.31452 6.25236 4.81883 9.36361 4.97805C9.0518 3.60236 9.47777 2.16079 10.4829 1.19373C12.0412 -0.305877 14.4921 -0.229014 15.9569 1.3655C16.8234 1.19059 17.6539 0.865104 18.4139 0.403927C18.1251 1.32079 17.5206 2.09961 16.7131 2.59452C17.48 2.50197 18.2293 2.29177 18.9349 1.97099C18.4154 2.76785 17.7612 3.46197 17.0042 4.02275Z"
              fill="#1D9BF0"
            />
          </svg>
        </div>
      </div>
      <p className="whitespace-pre-line leading-6">
        {entities.decodeHTML(formattedText)}
      </p>
      <p className="text-gray-500 dark:text-gray-300">
        {dayjs(tweet.created_at).format('HH:mm · MMM D, YYYY')}
      </p>
      <div className="flex text-gray-500 dark:text-gray-300 mt-2">
        <a
          className="flex items-center mr-4 text-gray-500 hover:text-blue-600 transition hover:underline"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24">
            <path
              className="fill-current"
              d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.045.286.12.403.143.225.385.347.633.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.368-3.43-7.788-7.8-7.79zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.334-.75-.75-.75h-.395c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"
            />
          </svg>
          <span>{commafy(tweet.public_metrics.reply_count)}</span>
        </a>
        <a
          className="flex items-center mr-4 text-gray-500 hover:text-green-600 transition hover:underline"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24">
            <path
              className="fill-current"
              d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"
            />
          </svg>
          <span>{commafy(tweet.public_metrics.retweet_count)}</span>
        </a>
        <a
          className="flex items-center text-gray-500 hover:text-red-600 transition hover:underline"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24">
            <path
              className="fill-current"
              d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.813-1.148 2.353-2.73 4.644-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.375-7.454 13.11-10.037 13.156H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.035 11.596 8.55 11.658 1.52-.062 8.55-5.917 8.55-11.658 0-2.267-1.822-4.255-3.902-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.015-.03-1.426-2.965-3.955-2.965z"
            />
          </svg>
          <span>{commafy(tweet.public_metrics.like_count)}</span>
        </a>
      </div>
    </div>
  )
}

Tweet.propTypes = {
  tweet: PropTypes.object
}

export default Tweet
