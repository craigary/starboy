import BlogPost from '@/components/BlogPost'
import Container from '@/components/Container'
import Tags from '@/components/Tags'
import { getAllPosts, getAllTags } from '@/lib/notion'
import { useState } from 'react'

export async function getStaticProps () {
  let posts = await getAllPosts()
  posts = posts.filter(
    post => post.Status === 'Published' && post.Type === 'Post'
  )
  const tags = await getAllTags()
  return {
    props: {
      tags,
      posts
    }
  }
}

const search = ({ tags, posts }) => {
  // const [leverage, setLeverage] = useState('text')
  const [searchValue, setSearchValue] = useState('')
  const [resultsToShow, setResultsToShow] = useState([])
  const [selectedTag, setSelectedTag] = useState('')

  const handleSearch = e => {
    if (!e.target.value) {
      setSearchValue('')
      setResultsToShow([])
    } else {
      setSearchValue(e.target.value)
      setResultsToShow(getSearchResult(searchValue))
    }
  }

  const handleTagClick = key => {
    if (selectedTag && selectedTag === key) {
      setSelectedTag('')
      setResultsToShow([])
    } else {
      setSelectedTag(key)
      const ans = getFilterResult(key)
      setResultsToShow(ans)
    }
  }

  const getFilterResult = query => {
    const noTagPost = posts.filter(post => !post)
    if (query === 'undefined') return noTagPost
    return posts.filter(post => post && post.Tags.includes(query))
  }

  const getSearchResult = query => {
    return posts.filter(post => {
      return (
        post.Title.toLowerCase().includes(query.toLowerCase()) ||
        post.Description.toLowerCase().includes(query.toLowerCase())
      )
    })
  }

  return (
    <Container>
      <div className="relative">
        <input
          type="text"
          placeholder="Search Articles"
          className="block w-full border px-4 py-2 rounded-md"
          onChange={handleSearch}
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
        selectedTag={selectedTag}
      />
      {!resultsToShow.length && (
        <p className="text-gray-500">No posts found.</p>
      )}
      {resultsToShow &&
        resultsToShow.map(post => {
          return <BlogPost key={post.id} post={post} />
        })}
    </Container>
  )
}

export default search
