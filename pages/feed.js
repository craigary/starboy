import { getAllPosts } from '@/lib/notion'
import { generateRss } from '@/lib/rss'
export async function getServerSideProps ({ res }) {
  let posts = await getAllPosts()
  posts = posts.filter(post => post.Status === 'Published' && post.Type === 'Post')
  const xmlFeed = generateRss(posts)
  res.setHeader('Content-Type', 'text/xml')
  res.write(xmlFeed)
  res.end()
  return {
    props: {}
  }
}
const feed = () => null
export default feed
