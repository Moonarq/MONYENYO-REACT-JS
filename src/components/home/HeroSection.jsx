import React, { useState, useEffect } from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import './HeroSection.css'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { t } = useLanguage()
  
  const backgroundImages = [
    '/images/desktop1.jpg',
    '/images/desktop2.jpg',
    '/images/desktop4.jpg'
  ]

  // Auto-play functionality - berubah setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % backgroundImages.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [backgroundImages.length])

  // Manual dot navigation
  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <main 
      className="hero"
      id="home"
      style={{
        backgroundImage: `url(${backgroundImages[currentSlide]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        transition: 'background-image 1s ease-in-out'
      }}
    >
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-subtitle">Soft. Crispy. Irresistible.</p>
            <h1 className="hero-title">
              INDONESIA'S BEST<br />
              BROWNIES PASTRY
            </h1>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="pagination-dots">
          {backgroundImages.map((_, index) => (
            <span 
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default HeroSection
