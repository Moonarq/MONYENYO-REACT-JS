import { useState, useEffect, createContext, useContext } from 'react'

const LanguageContext = createContext()

// Translation data - Complete translations from original JavaScript
const translations = {
  en: {
    HOME: 'HOME',
    ABOUT: 'ABOUT', 
    MENU: 'MENU',
    BLOGS: 'BLOGS',
    OUTLETS: 'OUTLETS',
    CONTACT: 'CONTACT',
    'Soft. Crispy. Irresistible.': 'Soft. Crispy. Irresistible.',
    "INDONESIA'S BEST<br>BROWNIES PASTRY": "INDONESIA'S BEST<br>BROWNIES PASTRY",
    'OUR COMPANY': 'OUR COMPANY',
    'TRADITIONAL<br>INDONESIAN FOODS<br>AND HERITAGE': 'TRADITIONAL<br>INDONESIAN FOODS<br>AND HERITAGE',
    'The Heart of Every Kitchen': 'The Heart of Every Kitchen',
    'Restaurants are much more than just places where food is sold—they are hubs of tradition, culture, and creativity.': 'Restaurants are much more than just places where food is sold—they are hubs of tradition, culture, and creativity.',
    'Innovation Meets Tradition': 'Innovation Meets Tradition',
    "Restaurants will continue to evolve, balancing the rich traditions of cooking with the modern consumer's needs.": "Restaurants will continue to evolve, balancing the rich traditions of cooking with the modern consumer's needs.",
    'Learn More About Us': 'Learn More About Us',
    'SPECIALTY DISHES': 'SPECIALTY DISHES',
    'FRESH FROM THE KITCHEN': 'FRESH FROM THE KITCHEN',
    'Experience the perfect fusion of traditional Indonesian flavors with modern culinary techniques, crafted daily with the finest ingredients.': 'Experience the perfect fusion of traditional Indonesian flavors with modern culinary techniques, crafted daily with the finest ingredients.',
    'Traditional Indonesian': 'Traditional Indonesian',
    'Authentic recipes passed down through generations with original spices and cooking methods': 'Authentic recipes passed down through generations with original spices and cooking methods',
    'Modern Presentation': 'Modern Presentation',
    'Contemporary plating and presentation techniques while preserving authentic flavors': 'Contemporary plating and presentation techniques while preserving authentic flavors',
    'Premium Quality': 'Premium Quality',
    'Only the finest local ingredients sourced directly from trusted Indonesian suppliers': 'Only the finest local ingredients sourced directly from trusted Indonesian suppliers',
    'OUR SPECIALTY': 'OUR SPECIALTY',
    'DELICIOUS MENU': 'DELICIOUS MENU',
    'Discover our signature collection of traditional Indonesian brownies and pastries.': 'Discover our signature collection of traditional Indonesian brownies and pastries.',
    'Chocolate Brownies': 'Chocolate Brownies',
    'Rich and fudgy chocolate brownies made with premium cocoa and traditional Indonesian spices. Perfect balance of sweetness and texture.': 'Rich and fudgy chocolate brownies made with premium cocoa and traditional Indonesian spices. Perfect balance of sweetness and texture.',
    'Brownies': 'Brownies',
    'Traditional Pastry': 'Traditional Pastry',
    'Authentic Indonesian pastry with crispy exterior and soft interior. Made with traditional recipes passed down through generations.': 'Authentic Indonesian pastry with crispy exterior and soft interior. Made with traditional recipes passed down through generations.',
    'Pastry': 'Pastry',
    'Premium Cake': 'Premium Cake',
    'Luxurious layered cake with premium ingredients and modern presentation. A perfect fusion of traditional taste and contemporary style.': 'Luxurious layered cake with premium ingredients and modern presentation. A perfect fusion of traditional taste and contemporary style.',
    'Cake': 'Cake',
    'View Full Menu': 'View Full Menu',
    'OUR STORIES': 'OUR STORIES',
    'LATEST FROM BLOG': 'LATEST FROM BLOG',
    'Discover the passion, tradition, and innovation behind every Monyenyo creation': 'Discover the passion, tradition, and innovation behind every Monyenyo creation',
    'Heritage': 'Heritage',
    'The Art of Traditional Indonesian Brownies': 'The Art of Traditional Indonesian Brownies',
    'Journey through generations of baking traditions as we unveil the secrets behind our signature brownies': 'Journey through generations of baking traditions as we unveil the secrets behind our signature brownies',
    'Recipes': 'Recipes',
    'Secrets to Perfect Brownies': 'Secrets to Perfect Brownies',
    'Behind Scenes': 'Behind Scenes',
    'Morning at Monyenyo Kitchen': 'Morning at Monyenyo Kitchen',
    "Indonesia's Spice Heritage": "Indonesia's Spice Heritage",
    'Family Recipe Legacy': 'Family Recipe Legacy',
    'View All Stories': 'View All Stories',
    'A group of highly skilled professionals building a future of shared success.': 'A group of highly skilled professionals building a future of shared success.',
    'Contact Us': 'Contact Us',
    'Social Media': 'Social Media',
    'All Rights Reserved.': 'All Rights Reserved.'
  },
  id: {
    HOME: 'BERANDA',
    ABOUT: 'TENTANG',
    MENU: 'MENU',
    BLOGS: 'BLOG',
    OUTLETS: 'OUTLET',
    CONTACT: 'KONTAK',
    'Soft. Crispy. Irresistible.': 'Lembut. Renyah. Tak Tertahankan.',
    "INDONESIA'S BEST<br>BROWNIES PASTRY": "BROWNIES PASTRY<br>TERBAIK DI INDONESIA",
    'OUR COMPANY': 'TENTANG KAMI',
    'TRADITIONAL<br>INDONESIAN FOODS<br>AND HERITAGE': 'MAKANAN TRADISIONAL<br>INDONESIA & WARISAN',
    'The Heart of Every Kitchen': 'Jantung Setiap Dapur',
    'Restaurants are much more than just places where food is sold—they are hubs of tradition, culture, and creativity.': 'Restoran bukan sekadar tempat makan—mereka adalah pusat tradisi, budaya, dan kreativitas.',
    'Innovation Meets Tradition': 'Inovasi Bertemu Tradisi',
    "Restaurants will continue to evolve, balancing the rich traditions of cooking with the modern consumer's needs.": "Restoran akan terus berkembang, menyeimbangkan tradisi memasak dengan kebutuhan konsumen modern.",
    'Learn More About Us': 'Selengkapnya Tentang Kami',
    'SPECIALTY DISHES': 'MENU SPESIAL',
    'FRESH FROM THE KITCHEN': 'SEGAR DARI DAPUR',
    'Experience the perfect fusion of traditional Indonesian flavors with modern culinary techniques, crafted daily with the finest ingredients.': 'Rasakan perpaduan sempurna cita rasa tradisional Indonesia dengan teknik kuliner modern, dibuat setiap hari dengan bahan terbaik.',
    'Traditional Indonesian': 'Masakan Tradisional',
    'Authentic recipes passed down through generations with original spices and cooking methods': 'Resep otentik turun-temurun dengan rempah dan teknik asli',
    'Modern Presentation': 'Presentasi Modern',
    'Contemporary plating and presentation techniques while preserving authentic flavors': 'Teknik plating dan presentasi modern tanpa menghilangkan cita rasa asli',
    'Premium Quality': 'Kualitas Premium',
    'Only the finest local ingredients sourced directly from trusted Indonesian suppliers': 'Hanya bahan lokal terbaik langsung dari pemasok terpercaya',
    'OUR SPECIALTY': 'SPESIAL KAMI',
    'DELICIOUS MENU': 'MENU LEZAT',
    'Discover our signature collection of traditional Indonesian brownies and pastries.': 'Temukan koleksi signature brownies dan pastry tradisional Indonesia kami.',
    'Chocolate Brownies': 'Brownies Cokelat',
    'Rich and fudgy chocolate brownies made with premium cocoa and traditional Indonesian spices. Perfect balance of sweetness and texture.': 'Brownies cokelat legit dengan kakao premium dan rempah tradisional. Manis dan tekstur seimbang.',
    'Brownies': 'Brownies',
    'Traditional Pastry': 'Pastry Tradisional',
    'Authentic Indonesian pastry with crispy exterior and soft interior. Made with traditional recipes passed down through generations.': 'Pastry Indonesia otentik, luar renyah dalam lembut. Resep turun-temurun.',
    'Pastry': 'Pastry',
    'Premium Cake': 'Kue Premium',
    'Luxurious layered cake with premium ingredients and modern presentation. A perfect fusion of traditional taste and contemporary style.': 'Kue lapis mewah dengan bahan premium dan tampilan modern. Perpaduan tradisi dan gaya kontemporer.',
    'Cake': 'Kue',
    'View Full Menu': 'Lihat Menu Lengkap',
    'OUR STORIES': 'CERITA KAMI',
    'LATEST FROM BLOG': 'TERBARU DARI BLOG',
    'Discover the passion, tradition, and innovation behind every Monyenyo creation': 'Temukan semangat, tradisi, dan inovasi di balik setiap kreasi Monyenyo',
    'Heritage': 'Warisan',
    'The Art of Traditional Indonesian Brownies': 'Seni Brownies Tradisional Indonesia',
    'Journey through generations of baking traditions as we unveil the secrets behind our signature brownies': 'Jelajahi tradisi memanggang turun-temurun saat kami mengungkap rahasia di balik brownies andalan kami',
    'Recipes': 'Resep',
    'Secrets to Perfect Brownies': 'Rahasia Brownies Sempurna',
    'Behind Scenes': 'Di Balik Layar',
    'Morning at Monyenyo Kitchen': 'Pagi di Dapur Monyenyo',
    "Indonesia's Spice Heritage": "Warisan Rempah Indonesia",
    'Family Recipe Legacy': 'Warisan Resep Keluarga',
    'View All Stories': 'Lihat Semua Cerita',
    'A group of highly skilled professionals building a future of shared success.': 'Tim profesional membangun masa depan bersama.',
    'Contact Us': 'Hubungi Kami',
    'Social Media': 'Media Sosial',
    'All Rights Reserved.': 'Hak Cipta Dilindungi.'
  }
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('monyenyo_lang') || 'en'
  })

  useEffect(() => {
    localStorage.setItem('monyenyo_lang', language)
  }, [language])

  const t = (key) => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
