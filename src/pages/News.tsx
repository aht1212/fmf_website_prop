import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useNews } from '../contexts/NewsContext';
import { Search, Filter, Calendar, Eye, ArrowRight, TrendingUp, Newspaper, Trophy, Users, Megaphone } from 'lucide-react';

const News = () => {
  const { news, getNewsByCategory } = useNews();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Toutes');
  const [sortBy, setSortBy] = useState<'date' | 'views' | 'title'>('date');

  const categories = ['Toutes', 'Sélections', 'Compétitions', 'Clubs', 'Communiqués'];

  const filteredNews = useMemo(() => {
    let filtered = news;

    // Filter by category
    if (selectedCategory !== 'Toutes') {
      filtered = getNewsByCategory(selectedCategory as any);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'views':
          return b.views - a.views;
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [news, selectedCategory, searchTerm, sortBy, getNewsByCategory]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Sélections': return <Trophy className="w-4 h-4" />;
      case 'Compétitions': return <Newspaper className="w-4 h-4" />;
      case 'Clubs': return <Users className="w-4 h-4" />;
      case 'Communiqués': return <Megaphone className="w-4 h-4" />;
      default: return <Newspaper className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Sélections': return 'bg-mali-yellow text-black';
      case 'Compétitions': return 'bg-mali-green text-white';
      case 'Clubs': return 'bg-mali-red text-white';
      case 'Communiqués': return 'bg-blue-600 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-mali-green to-mali-red text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Actualités du Football Malien
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Restez informés des dernières nouvelles, résultats et événements du football malien
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher dans les actualités..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mali-green focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-mali-green text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mali-green focus:border-transparent"
            >
              <option value="date">Plus récent</option>
              <option value="views">Plus populaire</option>
              <option value="title">Ordre alphabétique</option>
            </select>
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredNews.length === 0 ? (
          <div className="text-center py-20">
            <Newspaper className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Aucune actualité trouvée</h3>
            <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(article.category)}`}>
                      {getCategoryIcon(article.category)}
                      <span className="ml-1">{article.category}</span>
                    </span>
                  </div>
                  {article.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-mali-yellow text-black text-xs font-semibold rounded-full flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        À la une
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {article.views.toLocaleString()} vues
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-mali-green transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <Link
                    to={`/actualites/${article.id}`}
                    className="inline-flex items-center gap-2 text-mali-green font-semibold hover:text-mali-red transition-colors group"
                  >
                    Lire la suite
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Load More Button */}
        {filteredNews.length > 0 && (
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-mali-green to-mali-red text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Charger plus d'actualités
            </button>
          </div>
        )}
      </div>

      {/* Newsletter Subscription */}
      <div className="bg-gradient-to-r from-mali-green to-mali-red text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Restez connectés !
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Recevez les dernières actualités du football malien directement dans votre boîte mail
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-3 text-gray-900 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="px-8 py-3 bg-white text-mali-green font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              S'abonner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;