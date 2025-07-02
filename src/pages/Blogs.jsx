import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../hooks/useLanguage'
import './Blogs.css'

const Blogs = () => {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState('all')

  // Apply Blogs page styles to header
  React.useEffect(() => {
    document.body.classList.add('blogs-page')
    return () => {
      document.body.classList.remove('blogs-page')
    }
  }, [])

  const blogArticles = [
    {
      id: 1,
      category: 'recipes',
      image: '/images/blogs3.png',
      title: t('Secrets to Perfect Brownies'),
      excerpt: t('Master the art of creating the perfect brownie texture with our time-tested techniques and premium ingredient secrets.'),
      author: t('by Chef Budi'),
      date: 'Dec 12, 2024',
      readTime: '5 min read'
    },
    {
      id: 2,
      category: 'heritage',
      image: '/images/about2.png',
      title: t('Indonesian Spices in Modern Baking'),
      excerpt: t('Explore how traditional Indonesian spices like pandan, cinnamon, and nutmeg transform modern pastry creations.'),
      author: t('by Chef Sari'),
      date: 'Dec 10, 2024',
      readTime: '7 min read'
    },
    {
      id: 3,
      category: 'behind-scenes',
      image: '/images/about3.png',
      title: t('A Day in Monyenyo Kitchen'),
      excerpt: t('Follow our bakers through their daily routine of creating fresh, delicious pastries from dawn to dusk.'),
      author: t('by Team Monyenyo'),
      date: 'Dec 8, 2024',
      readTime: '4 min read'
    },
    {
      id: 4,
      category: 'tips',
      image: '/images/menu4.png',
      title: t('Home Baking Made Simple'),
      excerpt: t('Professional tips and tricks to elevate your home baking game and achieve bakery-quality results.'),
      author: t('by Chef Maria'),
      date: 'Dec 5, 2024',
      readTime: '6 min read'
    },
    {
      id: 5,
      category: 'recipes',
      image: '/images/menu2.png',
      title: t('Traditional Pastry Recipes'),
      excerpt: t('Recreate classic Indonesian pastries at home with our authentic family recipes passed down through generations.'),
      author: t('by Chef Andi'),
      date: 'Dec 3, 2024',
      readTime: '8 min read'
    },
    {
      id: 6,
      category: 'heritage',
      image: '/images/test2.png',
      title: t('Preserving Culinary Heritage'),
      excerpt: t('Our mission to preserve and celebrate Indonesia\'s rich baking traditions while embracing modern innovation.'),
      author: t('by Founder'),
      date: 'Nov 30, 2024',
      readTime: '10 min read'
    }
  ]

  const categories = [
    { id: 'all', name: t('All Stories'), icon: 'fas fa-th-large', count: 24 },
    { id: 'recipes', name: t('Recipes'), icon: 'fas fa-utensils', count: 8 },
    { id: 'heritage', name: t('Heritage'), icon: 'fas fa-landmark', count: 6 },
    { id: 'behind-scenes', name: t('Behind Scenes'), icon: 'fas fa-camera', count: 5 }
  ]

  const filteredArticles = activeCategory === 'all' 
    ? blogArticles 
    : blogArticles.filter(article => article.category === activeCategory)

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId)
  }

  return (
    <>
      <Helmet>
        <title>Blogs - Monyenyo</title>
        <meta name="description" content="Read our latest stories, recipes, and insights about traditional Indonesian brownies and pastries." />
        <link rel="icon" href="/images/favicon_large.ico" type="image/x-icon" />
      </Helmet>
      
      <div className="blogs-page">
        {/* Blog Hero Section */}
        <section className="about-hero">
          <div className="container">
            <div className="about-hero-content">
              <div className="hero-text-center">
                <span className="company-label">{t('OUR STORIES')}</span>
                <h1 className="hero-main-title">{t('STORIES & INSIGHTS')}</h1>
                <p className="hero-description">
                  {t('Discover the passion, tradition, and innovation behind every Monyenyo creation through our collection of stories, recipes, and behind-the-scenes moments.')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article Section */}
        <section className="featured-article">
          <div className="container">
            <div className="featured-content">
              <div className="featured-image">
                <img src="/images/test1.png" alt="Featured Article" />
                <div className="featured-badge">{t('FEATURED')}</div>
              </div>
              <div className="featured-text">
                <div className="article-meta">
                  <span className="article-category">{t('Heritage')}</span>
                  <span className="article-date">December 15, 2024</span>
                </div>
                <h2 className="featured-title">{t('The Art of Traditional Indonesian Brownies')}</h2>
                <p className="featured-excerpt">
                  {t('Journey through generations of baking traditions as we unveil the secrets behind our signature brownies. From ancient spice blending techniques to modern presentation methods, discover how we honor Indonesia\'s rich culinary heritage.')}
                </p>
                <div className="featured-author">
                  <div className="author-avatar">
                    <i className="fas fa-user-circle"></i>
                  </div>
                  <div className="author-info">
                    <span className="author-name">Chef Maria Sari</span>
                    <span className="author-title">{t('Head Pastry Chef')}</span>
                  </div>
                </div>
                <a href="#" className="featured-read-btn">{t('Read Full Story')}</a>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Categories Section */}
        <section className="blog-categories">
          <div className="container">
            <div className="categories-header">
              <h2 className="section-title">{t('EXPLORE BY CATEGORY')}</h2>
              <p className="section-subtitle">{t('Find stories that interest you most')}</p>
            </div>
            <div className="categories-grid">
              {categories.map(category => (
                <div 
                  key={category.id}
                  className={`category-card ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category.id)}
                >
                  <i className={category.icon}></i>
                  <span>{category.name}</span>
                  <div className="category-count">{category.count}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Articles Grid */}
        <section className="blog-articles">
          <div className="container">
            <div className="articles-grid">
              {filteredArticles.map(article => (
                <article key={article.id} className="blog-card">
                  <div className="blog-image">
                    <img src={article.image} alt={article.title} />
                    <div className="blog-overlay">
                      <div className="read-time">{article.readTime}</div>
                    </div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span className="blog-category">{t(article.category.charAt(0).toUpperCase() + article.category.slice(1))}</span>
                      <span className="blog-date">{article.date}</span>
                    </div>
                    <h3 className="blog-title">{article.title}</h3>
                    <p className="blog-excerpt">{article.excerpt}</p>
                    <div className="blog-author">
                      <span>{article.author}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="load-more-section">
              <button className="load-more-btn">{t('Load More Stories')}</button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="newsletter-section">
          <div className="container">
            <div className="newsletter-content">
              <div className="newsletter-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h2 className="newsletter-title">{t('Stay in the Loop')}</h2>
              <p className="newsletter-description">
                {t('Get our latest stories, recipes, and exclusive offers delivered straight to your inbox.')}
              </p>
              <form className="newsletter-form">
                <div className="input-group">
                  <input 
                    type="email" 
                    className="newsletter-input" 
                    placeholder={t('Enter your email address')} 
                    required 
                  />
                  <button type="submit" className="newsletter-submit">{t('Subscribe')}</button>
                </div>
                <p className="newsletter-privacy">
                  {t('We respect your privacy. Unsubscribe at any time.')}
                </p>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Blogs
