import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../hooks/useLanguage'
import './AboutSection.css'

const AboutSection = () => {
  const { t } = useLanguage()
  
  return (
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
              <span className="company-label">{t('MONYENYO')}</span>
              <h2 
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
              
              <div className="about-cta">
                <Link to="/about" className="about-btn">{t('Learn More About Us')}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
