import Container from '@/components/Container'
import Tweet from '@/components/Tweet'
import { getTimeline } from '@/lib/twitter'

export async function getStaticProps() {
  const tweets = await getTimeline(298095373)
  return { props: { tweets } }
}

const tweets = ({ tweets }) => {
  return (
    <Container>
      <h1 className="heading">Tweets</h1>
      {tweets && tweets.map(tweet => <Tweet tweet={tweet} key={tweet.id} />)}
    </Container>
  )
}

export default tweets
