// import Ackee from '@/components/Ackee'
import PropTypes from 'prop-types'
import SITE from '@/site.config'
import '../styles/globals.css'
import dynamic from 'next/dynamic'
const Ackee = dynamic(() => import('@/components/Ackee'), { ssr: false })

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Ackee
        ackeeServerUrl={SITE.analytics.ackeeConfig.dataAckeeServer}
        ackeeDomainId={SITE.analytics.ackeeConfig.domainId}
      />
      <Component {...pageProps} />
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
}

export default MyApp
