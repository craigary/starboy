import Header from './Header'
import Footer from './Footer'
// import React, { useState, useEffect } from 'react'
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
        <meta content={meta.description} name="description" />
      </Head>
      <Header navBarTitle={layout ? meta.title : null} />
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
