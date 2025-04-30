import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
// import SiteLoader from '../SiteLoader'
import Context from '../Context'

const PublicLayout = ({children}) => {
  return (
    <Context>
      <Header />
      <main>{children}</main>
      <Footer />
      {/* <SiteLoader /> */}
    </Context>
  )
}

export default PublicLayout