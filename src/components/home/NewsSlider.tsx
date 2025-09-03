import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, Eye } from 'lucide-react';
import { useNews } from '../../contexts/NewsContext';

const NewsSlider = () => {
  const { news } = useNews();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % news.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [news.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % news.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + news.length) % news.length);
  };

  if (!news.length) return null;

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Dernières actualités</h2>
        <div className="flex space-x-2">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-100 hover:bg-mali-green hover:text-white transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-gray-100 hover:bg-mali-green hover:text-white transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {news.map((article, index) => (
            <div key={article.id} className="w-full flex-shrink-0 relative">
              <div className="relative h-96 rounded-2xl overflow-hidden group cursor-pointer">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${
                      article.category === 'Sélections' ? 'bg-mali-green' :
                      article.category === 'Compétitions' ? 'bg-mali-yellow text-black' :
                      article.category === 'Clubs' ? 'bg-mali-red' :
                      'bg-gray-600'
                    }`}>
                      {article.category}
                    </span>
                    <div className="flex items-center text-gray-300 text-sm">
                      <Clock className="w-4 h-4 mr-2" />
                      {article.date}
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <Eye className="w-4 h-4 mr-2" />
                      {article.views}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-200 text-lg leading-relaxed mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  
                  <button className="inline-flex items-center px-6 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all duration-200">
                    Lire l'article
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {news.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSlider;