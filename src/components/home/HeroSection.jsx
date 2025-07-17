import React, { useState, useEffect } from 'react'
import './HeroSection.css'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  
  const slides = [
    {
      image: '/images/desktop1.jpg',
      subtitle: 'Soft. Crispy. Irresistible.',
      title: 'INDONESIA\'S BEST<br />BROWNIES PASTRY'
    },
    {
      image: '/images/desktop2.jpg',
      subtitle: 'Fresh. Delicious. Premium.',
      title: 'INDONESIA\'S BEST<br />CAKE & PASTRY'
    },
    {
      image: '/images/desktop3.jpg',
      subtitle: 'Sweet. Perfect. Unforgettable.',
      title: 'INDONESIA\'S BEST<br />DESSERT EXPERIENCE'
    },
     {
      image: '/images/desktop4.jpg',
      subtitle: 'Sweet. Perfect. Unforgettable.',
      title: 'INDONESIA\'S BEST<br />DESSERT EXPERIENCE'
    },
     {
      image: '/images/desktop5.jpg',
      subtitle: 'Sweet. Perfect. Unforgettable.',
      title: 'INDONESIA\'S BEST<br />DESSERT EXPERIENCE'
    },
     {
      image: '/images/desktop6.jpg',
      subtitle: 'Sweet. Perfect. Unforgettable.',
      title: 'INDONESIA\'S BEST<br />DESSERT EXPERIENCE'
    },
    
  ]

  // Function to change slide with animation
  const changeSlide = (newSlide) => {
    setIsTransitioning(true)
    
    setTimeout(() => {
      setCurrentSlide(newSlide)
    }, 250) // Wait for fade out
    
    setTimeout(() => {
      setIsTransitioning(false)
    }, 750) // Total animation time
  }

  // Auto-play functionality - berubah setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % slides.length
      changeSlide(nextSlide)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [currentSlide, slides.length])

  // Manual dot navigation
  const goToSlide = (index) => {
    if (index !== currentSlide) {
      changeSlide(index)
    }
  }

  return (
    <main 
      className={`hero slide-${currentSlide + 1}`}
      id="home"
      style={{
        backgroundImage: `url(${slides[currentSlide].image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        transition: 'background-image 1s ease-in-out'
      }}
    >
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p 
              className={`hero-subtitle ${isTransitioning ? 'fade-out' : 'fade-in'}`}
              key={`subtitle-${currentSlide}`}
            >
              {slides[currentSlide].subtitle}
            </p>
            <h1 
              className={`hero-title ${isTransitioning ? 'fade-out' : 'fade-in'}`}
              dangerouslySetInnerHTML={{ __html: slides[currentSlide].title }}
              key={`title-${currentSlide}`}
            ></h1>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="pagination-dots">
          {slides.map((_, index) => (
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
