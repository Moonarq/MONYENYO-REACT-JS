import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../../hooks/useLanguage'
import { useNavbarScroll } from '../../hooks/useNavbarScroll'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const { language, setLanguage, t } = useLanguage()
  const lastScrollPosition = useRef(0)
  
  // Use navbar scroll hook
  useNavbarScroll()

  // Enhanced mobile menu functionality
  const handleHamburgerClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (isMenuOpen) {
      closeMobileMenu()
    } else {
      lastScrollPosition.current = window.scrollY
      setIsMenuOpen(true)
      
      // Prevent body scroll
      document.body.style.position = 'fixed'
      document.body.style.top = `-${lastScrollPosition.current}px`
      document.body.style.left = '0'
      document.body.style.right = '0'
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
    }
  }

  const closeMobileMenu = () => {
    setIsMenuOpen(false)
    
    // Restore body scroll
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.left = ''
    document.body.style.right = ''
    document.body.style.width = ''
    document.body.style.overflow = ''
    window.scrollTo(0, lastScrollPosition.current)
  }

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMobileMenu()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  const handleHomeClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    closeMobileMenu()
  }

  const handleLanguageChange = (lang) => {
    setLanguage(lang)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <header className="header">
      <div className="container">
        {/* Hamburger Menu Button (Mobile Only) */}
        <button 
          className={`hamburger-menu ${isMenuOpen ? 'active menu-open' : ''}`}
          onClick={handleHamburgerClick}
          onTouchStart={handleHamburgerClick}
          aria-label="Toggle menu"
        >
          <span onClick={handleHamburgerClick} onTouchStart={handleHamburgerClick}></span>
          <span onClick={handleHamburgerClick} onTouchStart={handleHamburgerClick}></span>
          <span onClick={handleHamburgerClick} onTouchStart={handleHamburgerClick}></span>
        </button>

        {/* Social Media Icons */}
        <div className="social-icons">
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
            aria-label="YouTube"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        {/* Navigation Menu */}
        <nav className="nav-menu">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={handleHomeClick}
          >
            HOME
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
          >
            ABOUT
          </Link>
          <Link 
            to="/menu" 
            className={`nav-link ${isActive('/menu') ? 'active' : ''}`}
          >
            MENU
          </Link>
        </nav>

        {/* Logo */}
        <div className="nav-logo">
          <Link to="/" className="logo-text">MoNyeNyo</Link>
        </div>

        {/* Right Navigation */}
        <nav className="nav-menu-right">
          <Link 
            to="/blogs" 
            className={`nav-link ${isActive('/blogs') ? 'active' : ''}`}
          >
            BLOGS
          </Link>
          <Link 
            to="/outlets" 
            className={`nav-link ${isActive('/outlets') ? 'active' : ''}`}
          >
            OUTLETS
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
          >
            CONTACT
          </Link>
        </nav>

        {/* Language Toggle */}
        <div className="language-toggle">
          <span 
            className={`lang-btn ${language === 'en' ? 'active' : ''}`}
            data-lang="en"
            onClick={() => handleLanguageChange('en')}
            style={{ cursor: 'pointer' }}
          >
            EN
          </span>
          <span className="lang-separator">|</span>
          <span 
            className={`lang-btn ${language === 'id' ? 'active' : ''}`}
            data-lang="id"
            onClick={() => handleLanguageChange('id')}
            style={{ cursor: 'pointer' }}
          >
            ID
          </span>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={(e) => {
          if (e.target.classList.contains('mobile-menu-overlay')) {
            closeMobileMenu()
          }
        }}
      >
        <div className="mobile-menu">
          <div className="mobile-menu-header">
            <span className="mobile-logo">Monyenyo</span>
            <button 
              className="close-menu" 
              onClick={closeMobileMenu}
              onTouchStart={closeMobileMenu}
            >
              &times;
            </button>
          </div>

          <nav className="mobile-nav">
            <Link 
              to="/" 
              className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={handleHomeClick}
            >
              HOME
            </Link>
            <Link 
              to="/about" 
              className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              ABOUT
            </Link>
            <Link 
              to="/menu" 
              className={`mobile-nav-link ${isActive('/menu') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              MENU
            </Link>
            <Link 
              to="/blogs" 
              className={`mobile-nav-link ${isActive('/blogs') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              BLOGS
            </Link>
            <Link 
              to="/outlets" 
              className={`mobile-nav-link ${isActive('/outlets') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              OUTLETS
            </Link>
            <Link 
              to="/contact" 
              className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              CONTACT
            </Link>
          </nav>

          <div className="mobile-contact">
            <a href="tel:+6282295029308">
              <i className="fas fa-phone"></i>
              +62 822-9502-9308
            </a>
          </div>

          <div className="mobile-social">
            <span className="mobile-social-title">Follow Us</span>
            <div className="mobile-social-links">
              <a 
                href="https://www.instagram.com/kelvianov/" 
                className="mobile-social-link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href="https://www.tiktok.com/@apartmenttheringgo?is_from_webapp=1&sender_device=pc" 
                className="mobile-social-link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="fab fa-tiktok"></i>
              </a>
              <a 
                href="#" 
                className="mobile-social-link"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
