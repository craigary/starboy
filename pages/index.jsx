import Container from '@/components/Container'
import styles from './index.module.css'

export default function Home() {
  return (
    <Container>
      <div className="mb-12">
        <h1 className="heading">Hey, Welcome 👋</h1>
        <div className="leading-7">
          <p className="mb-4">
            My name is Craig Hart, a.k.a <span>craigary</span> on the internet.
            I am currently focusing on front-end development. I write blog posts
            here, and share my daily stuff on{' '}
            <a
              href="https://twitter.com/craigaryhart"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            .
          </p>
          <p>
            I’m also into productivity, typography, fonts, food, country music
            and other random stuff.
          </p>
        </div>
      </div>
      {/* <div className="mb-12">
        <h2 className={styles.title}>Latest Posts</h2>
        <div className="mt-4 leading-7">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis facere
          repudiandae porro tenetur suscipit quisquam excepturi! Debitis,
          repudiandae totam. Praesentium pariatur iure sint enim odit expedita
          facere, officia eius consectetur.
        </div>
      </div> */}
      <div className="mb-12">
        <h2 className={styles.title}>Contact</h2>
        <div className="mt-4 leading-7">
          <p className="mb-4">
            You can send me a DM through{' '}
            <a
              href="https://twitter.com/messages/compose?recipient_id=298095373"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>{' '}
            or{' '}
            <a href="https://t.me/craigary" target="_blank" rel="noreferrer">
              Telegram
            </a>{' '}
            for questions or just say Hi.
          </p>
          <p className="mb-4">
            Still, you can send me an{' '}
            <a href="mailto:i@craigary.net?subject=Hi">email</a> if you need to
            say a lot, or just because that is what you prefer.
          </p>
          <p>
            I’m also on{' '}
            <a
              href="https://weibo.com/u/1837470933"
              target="_blank"
              rel="noreferrer"
            >
              Weibo
            </a>{' '}
            and{' '}
            <a
              href="https://instagram.com/craigaryhart"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            .
          </p>
        </div>
      </div>
    </Container>
  )
}
