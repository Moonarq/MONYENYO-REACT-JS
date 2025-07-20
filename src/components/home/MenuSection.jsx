import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../hooks/useLanguage'
import './MenuSection.css'

const MenuSection = () => {
  const { t } = useLanguage()
  
  const menuItems = [
    {
      id: 1,
      image: '/images/desktop1.jpg',
      name: t('Bolu Abon Sapi'),
      description: t("Bolu abon sapi bertekstur lembut dengan taburan abon premium dan cita rasa gurih-manis yang seimbang. Satu box isi 6 potong."),
      price: 'Rp 45,000',
      category: t('Brownies'),
      rating: '4.9'
    },
    {
      id: 2,
      image: '/images/desktop2.jpg',
      name: t('Brownies Pastry Original'),
    description: t('Brownies fudgy dibalut dengan pastry olahan bertekstur kenyal menghadirkan rasa cokelat yang kaya dan manisnya pas di setiap gigitannya.'),
      price: 'Rp 62,000',
      category: t('Pastry'),
      rating: '4.8'
    },
    {
      id: 3,
      image: '/images/desktop3.jpg',
      name: t('Choco Roll Cocol'),
     description: t('Cokelat batang pilihan dibalut pastry olahan, dengan cocolan pilihan varian stroberi dan vanila yang manis. Satu box isi 6 potong.'),
      price: 'Rp 55,000',
      category: t('Cake'),
      rating: '5.0'
    },
      {
      id: 4,
      image: '/images/desktop4.jpg',
      name: t('Brownies Pastry Tabur Keju'),
      description: t('Brownies fudgy dengan keju serut berlimpah, dibalut pastry dengan rasa nyoklat, gurih, dan manis pas.'),
      price: 'Rp 65,000',
      category: t('Cake'),
      rating: '5.0'
    },
      {
      id: 5,
      image: '/images/desktop5.jpg',
      name: t('Cheese Roll Cocol'),
      description: t('Perpaduan keju batang pilihan dan pastry lembut dengan varian cocolan stroberi atau vanila. Satu box isi 10 potong.'),
      price: 'Rp 55,000',
      category: t('Cake'),
      rating: '5.0'
    },
      {
      id: 6,
      image: '/images/desktop6.jpg',
      name: t('Banana Strudel Mini'),
      description: t('Perpaduan pisang, cokelat, dan keju dalam pastry panggang yang renyah, dengan rasa manis dan gurih seimbang. Satu box isi 6 potong.'),
      price: 'Rp 55,000',
      category: t('Cake'),
      rating: '5.0'
    },
  ]

  return (
    <section className="menu-section" id="menu">
      <div className="container">
        <div className="menu-section-header">
          <span className="menu-section-label">{t('KOLEKSI LEZAT KAMI')}</span>
          <h2 className="menu-section-title">{t('MENU CAMILAN')}</h2>
          <p className="menu-section-description">
            {t("Nikmati kreasi kuliner khas kami dengan bahan terbaik dan rasa istimewa untuk pengalaman camilan tak terlupakan.")}
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
          <Link to="/menu" className="menu-section-btn">{t('Lihat Semua Menu')}</Link>
        </div>
      </div>
    </section>
  )
}

export default MenuSection
