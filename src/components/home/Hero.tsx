import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Calendar, Trophy } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1920")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-mali-green/20 to-mali-red/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-mali-yellow text-black text-sm font-semibold rounded-full mb-4">
              🦅 Les Aigles du Mali
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Fédération
              <span className="block text-mali-yellow">Malienne</span>
              <span className="block">de Football</span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Suivez les Aigles du Mali dans toutes leurs aventures. 
            Résultats en temps réel, actualités et billetterie officielle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              to="/billetterie"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-mali-red to-red-600 text-white text-lg font-semibold rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Calendar className="w-6 h-6 mr-3" />
              Acheter vos billets
            </Link>
            
            <Link
              to="/equipes"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white text-lg font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <Trophy className="w-6 h-6 mr-3" />
              Nos équipes
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