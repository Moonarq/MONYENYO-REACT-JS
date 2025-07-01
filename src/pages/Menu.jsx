import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../hooks/useLanguage'
import './Menu.css'

const Menu = () => {
  const { t } = useLanguage()

  return (
    <>
      <Helmet>
        <title>Menu - Monyenyo</title>
        <meta name="description" content="Explore our delicious menu of traditional Indonesian brownies, pastries, and specialty items." />
        <link rel="icon" href="/images/favicon_large.ico" type="image/x-icon" />
        <link rel="preload" href="/images/menu1.png" as="image" />
        <link rel="preload" href="/images/menu2.png" as="image" />
        <link rel="preload" href="/images/menu5.png" as="image" />
      </Helmet>
      
      <div className="menu-page">
        {/* Menu Header Section */}
        <section className="menu-hero">
          <div className="container">
            <div className="menu-header-content">
              <span className="menu-label">{t('OUR SPECIALTY')}</span>
              <h1 className="menu-title">{t('DELICIOUS MENU')}</h1>
              <p className="menu-description">
                {t('Discover our signature collection of traditional Indonesian brownies and pastries.')}
              </p>
            </div>
          </div>
        </section>

        {/* Menu Items Section */}
        <section className="menu-items">
          <div className="container">
            <div className="menu-grid">
              {/* Menu Item 1 */}
              <div className="menu-item">
                <div className="menu-image">
                  <img src="/images/menu1.png" alt="Chocolate Brownies" />
                  <div className="menu-overlay">
                    <div className="menu-price">Rp 45,000</div>
                  </div>
                </div>
                <div className="menu-content">
                  <h3 className="menu-name">{t('Chocolate Brownies')}</h3>
                  <p className="menu-desc">
                    {t('Rich and fudgy chocolate brownies made with premium cocoa and traditional Indonesian spices. Perfect balance of sweetness and texture.')}
                  </p>
                  <div className="menu-details">
                    <span className="menu-category">{t('Brownies')}</span>
                    <div className="menu-rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <span>4.9</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Menu Item 2 */}
              <div className="menu-item">
                <div className="menu-image">
                  <img src="/images/menu2.png" alt="Traditional Pastry" />
                  <div className="menu-overlay">
                    <div className="menu-price">Rp 35,000</div>
                  </div>
                </div>
                <div className="menu-content">
                  <h3 className="menu-name">{t('Traditional Pastry')}</h3>
                  <p className="menu-desc">
                    {t('Authentic Indonesian pastry with crispy exterior and soft interior. Made with traditional recipes passed down through generations.')}
                  </p>
                  <div className="menu-details">
                    <span className="menu-category">{t('Pastry')}</span>
                    <div className="menu-rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <span>4.8</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Menu Item 3 */}
              <div className="menu-item">
                <div className="menu-image">
                  <img src="/images/menu5.png" alt="Premium Cake" />
                  <div className="menu-overlay">
                    <div className="menu-price">Rp 55,000</div>
                  </div>
                </div>
                <div className="menu-content">
                  <h3 className="menu-name">{t('Premium Cake')}</h3>
                  <p className="menu-desc">
                    {t('Luxurious layered cake with premium ingredients and modern presentation. A perfect fusion of traditional taste and contemporary style.')}
                  </p>
                  <div className="menu-details">
                    <span className="menu-category">{t('Cake')}</span>
                    <div className="menu-rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <span>5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Menu
