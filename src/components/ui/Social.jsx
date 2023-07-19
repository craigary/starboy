import { socialLinks } from '@/utils/social'
const Social = () => {
  return (
    <ul className="flex items-center gap-4">
      {socialLinks.map(Social => (
        <li
          key={Social.key}
          className="flex items-center text-gray-500 hover:text-gray-800 dark:hover:text-white"
          title={Social.title}
        >
          <a
            target="_blank"
            href={Array.isArray(Social.path) ? Social.path[0] : Social.path}
          >
            <Social.icon />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Social
