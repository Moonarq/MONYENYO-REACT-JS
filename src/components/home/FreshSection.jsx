import React from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import './FreshSection.css'

const FreshSection = () => {
  const { t } = useLanguage()
  
  return (
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
  )
}

export default FreshSection
