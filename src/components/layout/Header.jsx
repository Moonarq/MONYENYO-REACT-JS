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
      
      // Add class to body for CSS targeting
      document.body.classList.add('mobile-menu-active')
      
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
    
    // Remove class from body
    document.body.classList.remove('mobile-menu-active')
    
    // Restore body scroll
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.left = ''
    document.body.style.right = ''
    document.body.style.width = ''
    document.body.style.overflow = ''
    window.scrollTo(0, lastScrollPosition.current)
  }

  // Handle escape key and cleanup
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMobileMenu()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    
    // Cleanup function to ensure class is removed if component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('mobile-menu-active')
    }
  }, [isMenuOpen])

  const handleHomeClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    closeMobileMenu()
  }

  // Handle navigation with scroll to top
  const handleNavClick = () => {
    closeMobileMenu()
    // Use setTimeout to ensure navigation happens first, then scroll
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  // Handle desktop navigation with scroll to top
  const handleDesktopNavClick = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
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
            onClick={handleDesktopNavClick}
          >
            ABOUT
          </Link>
          <Link 
            to="/menu" 
            className={`nav-link ${isActive('/menu') ? 'active' : ''}`}
            onClick={handleDesktopNavClick}
          >
            MENU
          </Link>
        </nav>

        {/* Logo */}
        <div className="nav-logo">
          <Link to="/" className="logo-text" onClick={handleHomeClick}>MoNyeNyo</Link>
        </div>

        {/* Right Navigation */}
        <nav className="nav-menu-right">
          <Link 
            to="/blogs" 
            className={`nav-link ${isActive('/blogs') ? 'active' : ''}`}
            onClick={handleDesktopNavClick}
          >
            BLOGS
          </Link>
          <Link 
            to="/outlets" 
            className={`nav-link ${isActive('/outlets') ? 'active' : ''}`}
            onClick={handleDesktopNavClick}
          >
            OUTLETS
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            onClick={handleDesktopNavClick}
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
              onClick={handleNavClick}
            >
              ABOUT
            </Link>
            <Link 
              to="/menu" 
              className={`mobile-nav-link ${isActive('/menu') ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              MENU
            </Link>
            <Link 
              to="/blogs" 
              className={`mobile-nav-link ${isActive('/blogs') ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              BLOGS
            </Link>
            <Link 
              to="/outlets" 
              className={`mobile-nav-link ${isActive('/outlets') ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              OUTLETS
            </Link>
            <Link 
              to="/contact" 
              className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={handleNavClick}
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
