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
        <title>{meta.Title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.Description} name="description" />
      </Head>
      <Header navBarTitle={layout ? meta.Title : null} />
      <main className="m-auto h-full max-w-3xl px-4 font-sans font-light">
      {children}
      <Footer />
      </main>
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node
}

export default Container
