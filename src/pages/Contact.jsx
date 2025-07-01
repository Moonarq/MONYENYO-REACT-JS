import React from 'react'
import { Helmet } from 'react-helmet-async'
import './Contact.css'

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact - Monyenyo</title>
        <meta name="description" content="Get in touch with Monyenyo. Contact us for inquiries, orders, or collaboration opportunities." />
      </Helmet>
      
      <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#fafafa' }}>
        <div className="container">
          <div style={{ textAlign: 'center', padding: '100px 0' }}>
            <h1 style={{ fontSize: '3rem', color: '#2c2c2c', marginBottom: '20px' }}>Contact Us</h1>
            <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              Get in touch with us for inquiries, orders, or collaboration opportunities. We'd love to hear from you!
            </p>
            <div style={{ marginTop: '40px', padding: '40px', background: 'white', borderRadius: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <p style={{ color: '#666', lineHeight: '1.8' }}>
                Coming soon... Full contact page content will be migrated from the original HTML structure.
              </p>
              <div style={{ marginTop: '20px' }}>
                <p style={{ color: '#8B4513', fontWeight: '600' }}>
                  📞 +62 822-9502-9308<br />
                  📧 mail@example.com<br />
                  📍 Jl. Indonesia Raya, Sudirman, Jakarta Selatan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
