import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../hooks/useLanguage'
import './About.css'

const About = () => {
  const { t } = useLanguage()

  // Apply About page styles to header
  React.useEffect(() => {
    document.body.classList.add('about-page')
    return () => {
      document.body.classList.remove('about-page')
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>About Us - Monyenyo</title>
        <meta name="description" content="Learn about Monyenyo's heritage, tradition, and commitment to authentic Indonesian brownies and pastries." />
        <link rel="icon" href="/images/favicon_large.ico" type="image/x-icon" />
      </Helmet>
      
      {/* About Hero Section */}
      <section className="about-hero" id="about">
        <div className="container">
          <div className="about-hero-split">
            <div className="hero-image-side">
              <div className="hero-image-container">
                <img src="/images/about.png" alt="Monyenyo About" className="hero-image" />
              </div>
            </div>
            <div className="hero-content-side">
              <div className="hero-content">
                <span className="company-label">{t('OUR COMPANY')}</span>
                <h1 
                  className="hero-main-title"
                  dangerouslySetInnerHTML={{ __html: t('TRADITIONAL<br>INDONESIAN FOODS<br>AND HERITAGE') }}
                />
                
                <div className="hero-features">
                  <div className="hero-feature">
                    <div className="feature-check">
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.25 6.25L8.125 14.375L3.75 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="feature-text">
                      <h3>{t('The Heart of Every Kitchen')}</h3>
                      <p>{t('Restaurants are much more than just places where food is sold—they are hubs of tradition, culture, and creativity.')}</p>
                    </div>
                  </div>
                  
                  <div className="hero-feature">
                    <div className="feature-check">
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.25 6.25L8.125 14.375L3.75 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="feature-text">
                      <h3>{t('Innovation Meets Tradition')}</h3>
                      <p>{t("Restaurants will continue to evolve, balancing the rich traditions of cooking with the modern consumer's needs.")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fresh From The Kitchen Section */}
      <section className="fresh-section">
        <div className="container">
          <div className="fresh-header">
            <span className="fresh-label">{t('SPECIALTY DISHES')}</span>
            <h2 className="fresh-title">{t('FRESH FROM THE KITCHEN')}</h2>
            <p className="fresh-description">
              {t('Experience the perfect fusion of traditional Indonesian flavors with modern culinary techniques, crafted daily with the finest ingredients.')}
            </p>
          </div>
          
          <div className="fresh-grid">
            <div className="fresh-item">
              <div className="fresh-image">
                <img src="/images/about1.png" alt={t('Traditional Indonesian')} />
              </div>
              <div className="fresh-content">
                <h3>{t('Traditional Indonesian')}</h3>
                <p>{t('Authentic recipes passed down through generations with original spices and cooking methods')}</p>
              </div>
            </div>
            
            <div className="fresh-item">
              <div className="fresh-image">
                <img src="/images/about2.png" alt={t('Modern Presentation')} />
              </div>
              <div className="fresh-content">
                <h3>{t('Modern Presentation')}</h3>
                <p>{t('Contemporary plating and presentation techniques while preserving authentic flavors')}</p>
              </div>
            </div>
            
            <div className="fresh-item">
              <div className="fresh-image">
                <img src="/images/about3.png" alt={t('Premium Quality')} />
              </div>
              <div className="fresh-content">
                <h3>{t('Premium Quality')}</h3>
                <p>{t('Only the finest local ingredients sourced directly from trusted Indonesian suppliers')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
