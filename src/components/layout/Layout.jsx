import React from 'react'
import Header from './Header'
import Footer from './Footer'
import WhatsAppFloat from '../common/WhatsAppFloat'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default Layout
