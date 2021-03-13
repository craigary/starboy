import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Head from 'next/head'
import PropTypes from 'prop-types'

const Container = ({ children, layout, ...customMeta }) => {
  const meta = {
    title: 'Craig Hart',
    type: 'website',
    ...customMeta
  }
  return (
    <div>
      <Head>
        {/* Add more Meta Info */}
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.Description} name="description" />
      </Head>
      <div className="wrapper">
      <Header navBarTitle={layout === 'blog' ? meta.title : null} />
      <main className="m-auto max-w-3xl px-4 font-sans flex-grow w-full">
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
