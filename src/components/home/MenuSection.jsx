import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../hooks/useLanguage'
import './MenuSection.css'

const MenuSection = () => {
  const { t } = useLanguage()
  
  const menuItems = [
    {
      id: 1,
      image: '/images/menu1.png',
      name: t('Chocolate Brownies'),
      description: t('Rich and fudgy chocolate brownies made with premium cocoa and traditional Indonesian spices. Perfect balance of sweetness and texture.'),
      price: 'Rp 45,000',
      category: t('Brownies'),
      rating: '4.9'
    },
    {
      id: 2,
      image: '/images/menu2.png',
      name: t('Traditional Pastry'),
      description: t('Authentic Indonesian pastry with crispy exterior and soft interior. Made with traditional recipes passed down through generations.'),
      price: 'Rp 35,000',
      category: t('Pastry'),
      rating: '4.8'
    },
    {
      id: 3,
      image: '/images/menu5.png',
      name: t('Premium Cake'),
      description: t('Luxurious layered cake with premium ingredients and modern presentation. A perfect fusion of traditional taste and contemporary style.'),
      price: 'Rp 55,000',
      category: t('Cake'),
      rating: '5.0'
    }
  ]

  return (
    <section className="menu-section" id="menu">
      <div className="container">
        <div className="menu-section-header">
          <span className="menu-section-label">{t('OUR SPECIALTY')}</span>
          <h2 className="menu-section-title">{t('DELICIOUS MENU')}</h2>
          <p className="menu-section-description">
            {t('Discover our signature collection of traditional Indonesian brownies and pastries.')}
          </p>
        </div>
        
        <div className="menu-section-grid">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-section-item">
              <div className="menu-section-image">
                <img src={item.image} alt={item.name} />
                <div className="menu-section-overlay">
                  <div className="menu-section-price">{item.price}</div>
                </div>
              </div>
              <div className="menu-section-content">
                <h3 className="menu-section-name">{item.name}</h3>
                <p className="menu-section-desc">{item.description}</p>
                <div className="menu-section-details">
                  <span className="menu-section-category">{item.category}</span>
                  <div className="menu-section-rating">
                    {[...Array(5)].map((_, index) => (
                      <i key={index} className="fas fa-star"></i>
                    ))}
                    <span>{item.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="menu-section-cta">
          <Link to="/menu" className="menu-section-btn">{t('View Full Menu')}</Link>
        </div>
      </div>
    </section>
  )
}

export default MenuSection
