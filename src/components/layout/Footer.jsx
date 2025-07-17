import React from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../../hooks/useLanguage'
import './Footer.css'

const Footer = () => {
  const { t } = useLanguage()
  const location = useLocation()
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo & Description */}
          <div className="footer-main">
            <div className="logo-section">
              <span className="logo-text">Monyenyo</span>
            </div>
            <p className="footer-desc">
              {t('Traditional Indonesian cuisine with authentic flavors and modern culinary techniques.')}
            </p>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h4>{t('Contact Us')}</h4>
            <div className="contact-item">
              <span>Jl. Terusan Gatot Subroto No.302, Kb. Kangkung, Kec. Kiaracondong, Kota Bandung, Jawa Barat 40284</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>
                {location.pathname === '/about' ? 'monyenyobdg@gmail.com' : 'monyenyobdg@gmail.com'}
              </span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>+62 857-2496-0839</span>
            </div>
          </div>

          {/* Social */}
          <div className="footer-social">
            <h4>{t('Social Media')}</h4>
            <div className="social-links">
              <a 
                href="https://www.tiktok.com/@browniespastry_store?_t=ZS-8y6Z5ke8R1N&_r=1" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href="https://www.tiktok.com/@browniespastry_store?_t=ZS-8y6Z5ke8R1N&_r=1" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <i className="fab fa-tiktok"></i>
              </a>
              <a 
                href="https://www.facebook.com/share/153Ak7u2jD/" 
                className="social-link"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© 2024 {location.pathname === '/about' ? 'Monyenyo' : 'Monyenyo'}. {t('All Rights Reserved.')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
