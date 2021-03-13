import { useRouter } from 'next/router'
import { useState } from 'react'
import BlogPost from '@/components/BlogPost'
import Container from '@/components/Container'
import Tags from '@/components/Tags'

const SearchLayout = ({ tags, posts, currentTag }) => {
  const router = new useRouter()
  const [searchValue, setSearchValue] = useState('')
  const [selectedTag, setSelectedTag] = useState('')
  const filteredBlogPosts = posts.filter(post => {
    const searchContent = post.Title + post.Description + post.Tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  const handleTagClick = key => {
    if (key === currentTag) {
      setSelectedTag('')
      router.push('/search')
    } else {
      router.push(`/tag/${encodeURIComponent(key)}`)
    }
  }
  return (
    <Container>
      <div className="relative">
        <input
          type="text"
          placeholder={
            currentTag ? `Search in #${currentTag}` : 'Search Articles'
          }
          className="block w-full border px-4 py-2 rounded-md"
          onChange={e => setSearchValue(e.target.value)}
        />
        <svg
          className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <Tags
        tags={tags}
        handleTagClick={handleTagClick}
        selectedTag={selectedTag || currentTag}
      />
      {!filteredBlogPosts.length && (
        <p className="text-gray-500">No posts found.</p>
      )}
      {filteredBlogPosts.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}
    </Container>
  )
}

export default SearchLayout
