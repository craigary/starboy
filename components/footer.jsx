import SITE from '@/site.config'
const Footer = () => {
  const d = new Date()
  const y = d.getFullYear()
  const from = +SITE.since
  return (
    <div className="mt-6 flex-shrink-0 m-auto font-noEmoji w-full text-gray-500 dark:text-gray-500 transition-all max-w-2xl px-4">
      <hr className="border-gray-200 dark:border-gray-600" />
      <div className="my-4 text-sm leading-6 font-medium">
        <p>Built with ♥ and ⚛ Next.js. Proudly deployed on ▲Vercel.</p>
        <p>
          © {SITE.author} {from === y || !from ? y : `${from} - ${y}`}
        </p>
      </div>
    </div>
  )
}

export default Footer
