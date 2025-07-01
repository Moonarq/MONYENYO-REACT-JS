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
              <span>Jl. Indonesia Raya, Sudirman, Jakarta Selatan, DKI Jakarta, Indonesia, 10150</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>
                {location.pathname === '/about' ? 'hello@monyenyo.com' : 'mail@example.com'}
              </span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>+62 822-9502-9308</span>
            </div>
          </div>

          {/* Social */}
          <div className="footer-social">
            <h4>{t('Social Media')}</h4>
            <div className="social-links">
              <a 
                href="https://www.instagram.com/kelvianov/" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href="#" 
                className="social-link"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a 
                href="https://www.tiktok.com/@apartmenttheringgo?is_from_webapp=1&sender_device=pc" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <i className="fab fa-tiktok"></i>
              </a>
              <a 
                href="#" 
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
          <p>© 2024 {location.pathname === '/about' ? 'Monyenyo' : 'Kelvianov'}. {t('All Rights Reserved.')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
