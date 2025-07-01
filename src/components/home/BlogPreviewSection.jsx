import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../hooks/useLanguage'
import './BlogPreviewSection.css'

const BlogPreviewSection = () => {
  const { t } = useLanguage()

  const featuredPost = {
    image: '/images/test1.png',
    category: t('Heritage'),
    title: t('The Art of Traditional Indonesian Brownies'),
    excerpt: t('Journey through generations of baking traditions as we unveil the secrets behind our signature brownies'),
    author: 'Chef Maria Sari',
    date: 'December 15, 2024'
  }

  const recentPosts = [
    {
      image: '/images/blogs3.png',
      category: t('Recipes'),
      title: t('Secrets to Perfect Brownies'),
      date: 'Dec 12, 2024',
      readTime: '5 min read'
    },
    {
      image: '/images/menu2.png',
      category: t('Behind Scenes'),
      title: t('Morning at Monyenyo Kitchen'),
      date: 'Dec 10, 2024',
      readTime: '3 min read'
    },
    {
      image: '/images/test2.png',
      category: t('Heritage'),
      title: t('Indonesia\'s Spice Heritage'),
      date: 'Dec 8, 2024',
      readTime: '4 min read'
    },
    {
      image: '/images/menu4.png',
      category: t('Heritage'),
      title: t('Family Recipe Legacy'),
      date: 'Dec 5, 2024',
      readTime: '6 min read'
    }
  ]

  return (
    <section className="blog-preview-section" id="blogs">
      <div className="container">
        <div className="blog-preview-header">
          <h2 className="blog-preview-title">{t('LATEST FROM BLOG')}</h2>
          <p className="blog-preview-description">
            {t('Discover the passion, tradition, and innovation behind every Monyenyo creation')}
          </p>
        </div>
        
        <div className="blog-preview-grid">
          {/* Featured Blog Post */}
          <div className="featured-blog-post">
            <div className="featured-blog-image">
              <img src={featuredPost.image} alt={featuredPost.title} />
              <div className="featured-blog-badge">{t('FEATURED')}</div>
            </div>
            <div className="featured-blog-content">
              <div className="featured-blog-meta">
                <span className="featured-blog-category">{featuredPost.category}</span>
                <span className="featured-blog-date">{featuredPost.date}</span>
              </div>
              <h3 className="featured-blog-title">{featuredPost.title}</h3>
              <p className="featured-blog-excerpt">{featuredPost.excerpt}</p>
              <div className="featured-blog-author">
                <i className="fas fa-user-circle"></i>
                <span>{featuredPost.author}</span>
              </div>
            </div>
          </div>

          {/* Recent Blog Posts */}
          <div className="recent-blog-posts">
            {recentPosts.map((post, index) => (
              <div key={index} className="recent-blog-post">
                <div className="recent-blog-image">
                  <img src={post.image} alt={post.title} />
                  <div className="recent-blog-time">{post.readTime}</div>
                </div>
                <div className="recent-blog-content">
                  <span className="recent-blog-category">{post.category}</span>
                  <h4 className="recent-blog-title">{post.title}</h4>
                  <span className="recent-blog-date">{post.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="blog-preview-cta">
          <Link to="/blogs" className="blog-preview-btn">
            {t('View All Stories')}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogPreviewSection
