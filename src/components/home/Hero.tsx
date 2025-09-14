import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Play, Calendar, Trophy, ChevronLeft, ChevronRight, Clock, Eye } from 'lucide-react';
import { useNews } from '../../contexts/NewsContext';

const Hero = () => {
  const { getFeaturedNews } = useNews();
  const featuredNews = getFeaturedNews();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % featuredNews.length);
  }, [featuredNews.length]);

  
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + featuredNews.length) % featuredNews.length);
  }, [featuredNews.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isAutoPlaying]);

  if (featuredNews.length === 0) return null;

  const currentArticle = featuredNews[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Carousel */}
      <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"
          style={{
            backgroundImage: `url("${currentArticle.image}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-mali-green/30 to-mali-red/30"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          {/* News Badge */}
          <div className="mb-6 flex items-center gap-4">
            <span className="inline-block px-4 py-2 bg-mali-yellow text-black text-sm font-semibold rounded-full">
              🗞️ Actualités en direct
            </span>
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {currentArticle.date}
            </span>
          </div>

          {/* News Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            {currentArticle.title}
          </h1>
          
          {/* News Excerpt */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
            {currentArticle.excerpt}
          </p>

          {/* News Meta */}
          <div className="flex items-center gap-6 mb-8 text-gray-300">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>{currentArticle.views.toLocaleString()} vues</span>
            </div>
            <div className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm">
              {currentArticle.category}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              to={`/actualites/${currentArticle.id}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-mali-red to-red-600 text-white text-lg font-semibold rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Play className="w-6 h-6 mr-3" />
              Lire l'article complet
            </Link>
            
            <Link
              to="/actualites"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white text-lg font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <Calendar className="w-6 h-6 mr-3" />
              Toutes les actualités
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-mali-yellow mb-2">62</div>
              <div className="text-gray-300 text-sm">Années d'histoire</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-mali-green mb-2">12</div>
              <div className="text-gray-300 text-sm">Participations CAN</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-mali-red mb-2">156</div>
              <div className="text-gray-300 text-sm">Clubs affiliés</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {featuredNews.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-mali-yellow scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Floating Action */}
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <button className="w-16 h-16 bg-white/10 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group">
          <Play className="w-8 h-8 ml-1 group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default Hero;