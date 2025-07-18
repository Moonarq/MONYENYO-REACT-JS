import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../hooks/useLanguage'
import './Menu.css'

const Menu = () => {
  const { t } = useLanguage()
  const [showAllMobile, setShowAllMobile] = React.useState(false);
  const isDesktop = window.innerWidth > 768;

  // Apply Menu page styles to header
  React.useEffect(() => {
    document.body.classList.add('menu-page')
    return () => {
      document.body.classList.remove('menu-page')
    }
  }, [])

  const menuItems = [
    {
      id: 1,
      name: t('Chocolate Brownies'),
      desc: t('Rich and fudgy chocolate brownies made with premium cocoa and traditional Indonesian spices. Perfect balance of sweetness and texture.'),
      category: t('Brownies'),
      price: 45000,
      image: '/images/desktop1.jpg',
      rating: 4.9
    },
    {
      id: 2,
      name: t('Traditional Pastry'),
      desc: t('Authentic Indonesian pastry with crispy exterior and soft interior. Made with traditional recipes passed down through generations.'),
      category: t('Pastry'),
      price: 35000,
      image: '/images/desktop2.jpg',
      rating: 4.8
    },
    {
      id: 3,
      name: t('Premium Cake'),
      desc: t('Luxurious layered cake with premium ingredients and modern presentation. A perfect fusion of traditional taste and contemporary style.'),
      category: t('Cake'),
      price: 55000,
      image: '/images/desktop3.jpg',
      rating: 5.0
    },
    {
      id: 4,
      name: t('Premium Cake'),
      desc: t('Luxurious layered cake with premium ingredients and modern presentation. A perfect fusion of traditional taste and contemporary style.'),
      category: t('Cake'),
      price: 55000,
      image: '/images/desktop4.jpg',
      rating: 5.0
    },
    {
      id: 5,
      name: t('Premium Cake'),
      desc: t('Luxurious layered cake with premium ingredients and modern presentation. A perfect fusion of traditional taste and contemporary style.'),
      category: t('Cake'),
      price: 55000,
      image: '/images/desktop5.jpg',
      rating: 5.0
    },
    {
      id: 6,
      name: t('Premium Cake'),
      desc: t('Luxurious layered cake with premium ingredients and modern presentation. A perfect fusion of traditional taste and contemporary style.'),
      category: t('Cake'),
      price: 55000,
      image: '/images/desktop6.jpg',
      rating: 5.0
    },
    {
      id: 7,
      name: t('Premium Cake'),
      desc: t('Luxurious layered cake with premium ingredients and modern presentation. A perfect fusion of traditional taste and contemporary style.'),
      category: t('Cake'),
      price: 55000,
      image: '/images/desktop1.jpg',
      rating: 5.0
    },
    {
      id: 8,
      name: t('Premium Cake'),
      desc: t('Luxurious layered cake with premium ingredients and modern presentation. A perfect fusion of traditional taste and contemporary style.'),
      category: t('Cake'),
      price: 55000,
      image: '/images/desktop1.jpg',
      rating: 5.0
    },
    {
      id: 9,
      name: t('Premium Cake'),
      desc: t('Luxurious layered cake with premium ingredients and modern presentation. A perfect fusion of traditional taste and contemporary style.'),
      category: t('Cake'),
      price: 55000,
      image: '/images/desktop1.jpg',
      rating: 5.0
    },
  ]

  return (
    <>
      <Helmet>
        <title>Menu - Monyenyo</title>
        <meta name="description" content="Explore our delicious menu of traditional Indonesian brownies, pastries, and specialty items." />
        <link rel="icon" href="/images/favicon_large.ico" type="image/x-icon" />
        <link rel="preload" href="/images/desktop1.jpg" as="image" />
        <link rel="preload" href="/images/desktop2.jpg" as="image" />
        <link rel="preload" href="/images/desktop3.jpg" as="image" />
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
              {(isDesktop
                ? menuItems
                : showAllMobile
                  ? menuItems.slice(0, 8)
                  : menuItems.slice(0, 4)
              ).map((item, idx) => (
                <div className="menu-item" key={item.id}>
                  <div className="menu-image">
                    <img src={item.image} alt={item.name} />
                    <div className="menu-overlay">
                      <div className="menu-price">Rp {item.price.toLocaleString()}</div>
                    </div>
                  </div>
                  <div className="menu-content">
                    <h3 className="menu-name">{item.name}</h3>
                    <p className="menu-desc">
                      {item.desc}
                    </p>
                    <div className="menu-details">
                      <span className="menu-category">{item.category}</span>
                      <div className="menu-rating">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className={`fas fa-star${i < Math.floor(item.rating) ? '' : '-o'}`}></i>
                        ))}
                        <span>{item.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {!isDesktop && !showAllMobile && menuItems.length > 4 && (
              <div style={{ textAlign: 'center', marginTop: '32px' }}>
                <button
                  className="menu-show-more-btn"
                  onClick={() => setShowAllMobile(true)}
                  style={{ padding: '12px 32px', borderRadius: '25px', background: '#8B4513', color: 'white', fontWeight: 600, fontSize: '1rem', border: 'none', cursor: 'pointer' }}
                >
                  See More
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  )
}

export default Menu
