import { getAllPosts, getAllTags } from '@/lib/notion'

// Move to @/page/search.js
export async function getStaticProps (context) {
  const { tag } = context.params // Get Current Tag
  let posts = await getAllPosts()
  posts = posts.filter(
    post => post.Status === 'Published' && post.Type === 'Post'
  )
  const postsInTag = posts.filter(post => post && post.Tags.includes(tag))
  const tags = await getAllTags()
  return {
    props: {
      tags, // all tags, don't mess with tag
      posts,
      postsInTag
    }
  }
}
export async function getStaticPaths () {
  const tags = await getAllTags()

  return {
    paths: tags.map(tag => ({ params: { tag } })),
    fallback: true
  }
}

const Tag = ({ tags }) => {
  return (
    <Tags
      tags={tags}
      handleTagClick={handleTagClick}
      selectedTag={selectedTag}
    />
  )
}

export default Tag
