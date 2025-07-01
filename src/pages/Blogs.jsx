import React from 'react'
import { Helmet } from 'react-helmet-async'

const Blogs = () => {
  return (
    <>
      <Helmet>
        <title>Blogs - Monyenyo</title>
        <meta name="description" content="Read our latest stories about Indonesian culinary heritage, recipes, and behind-the-scenes insights." />
      </Helmet>
      
      <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#fafafa' }}>
        <div className="container">
          <div style={{ textAlign: 'center', padding: '100px 0' }}>
            <h1 style={{ fontSize: '3rem', color: '#2c2c2c', marginBottom: '20px' }}>Our Blog</h1>
            <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              Discover the passion, tradition, and innovation behind every Monyenyo creation through our stories.
            </p>
            <div style={{ marginTop: '40px', padding: '40px', background: 'white', borderRadius: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <p style={{ color: '#666', lineHeight: '1.8' }}>
                Coming soon... Full blogs page content will be migrated from the original HTML structure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogs
