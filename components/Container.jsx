import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SITE from '@/site.config'
import Head from 'next/head'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

const Container = ({ children, ...customMeta }) => {
  const router = useRouter()
  const meta = {
    title: SITE.title,
    type: 'website',
    ...customMeta
  }
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta content="#111827" name="theme-color" />
        <meta name="robots" content="follow, index" />
        <meta charset="utf-8" />
        {SITE.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={SITE.googleSiteVerification}
          />
        )}
        {SITE.keywords.length && (
          <meta name="keywords" content={SITE.keywords.join(', ')} />
        )}
        <meta name="description" content={SITE.description} />
        <meta property="og:locale" content={SITE.lang} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={`${SITE.link}/${router.asPath}`} />
        <meta
          property="og:image"
          content={`https://cdn.statically.io/og/theme=dark/${meta.title}.png`}
        />
        <meta property="og:type" content={meta.type} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:title" content={meta.title} />
        <meta
          name="twitter:image"
          content={`https://cdn.statically.io/og/theme=dark/${meta.title}.png`}
        />
      </Head>
      <div className="wrapper">
        <Header
          navBarTitle={meta.title}
          navBarDescription={router.asPath === '/' ? SITE.description : null}
        />
        <main className="m-auto font-sans flex-grow w-full transition-all max-w-2xl px-4">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node
}

export default Container
