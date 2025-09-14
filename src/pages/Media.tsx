import React, { useState } from 'react';
import { Camera, Video, FileText, Download, Share2, Play, Calendar, Eye, Heart, Search, Filter, Grid, List } from 'lucide-react';

interface MediaItem {
  id: number;
  type: 'photo' | 'video' | 'document';
  title: string;
  description: string;
  thumbnail: string;
  url: string;
  category: 'Matchs' | 'Entraînements' | 'Cérémonies' | 'Infrastructure' | 'Formation' | 'Presse';
  date: string;
  views: number;
  likes: number;
  tags: string[];
  size?: string;
  duration?: string;
}

const mediaItems: MediaItem[] = [
  {
    id: 1,
    type: 'photo',
    title: 'Victoire historique contre le Sénégal',
    description: 'Les Aigles du Mali célèbrent leur victoire 2-1 face au Sénégal lors des éliminatoires CAN 2025.',
    thumbnail: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Matchs',
    date: '15 Nov 2024',
    views: 12547,
    likes: 892,
    tags: ['CAN 2025', 'Sénégal', 'Victoire', 'Éliminatoires']
  },
  {
    id: 2,
    type: 'video',
    title: 'Entraînement des Aigles du Mali',
    description: 'Séance d\'entraînement intensive au centre national de formation de Bamako.',
    thumbnail: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://example.com/video1.mp4',
    category: 'Entraînements',
    date: '14 Nov 2024',
    views: 8934,
    likes: 456,
    tags: ['Entraînement', 'Formation', 'Bamako'],
    duration: '3:45'
  },
  {
    id: 3,
    type: 'photo',
    title: 'Inauguration du nouveau centre de formation',
    description: 'Cérémonie officielle d\'inauguration du centre d\'excellence de Sikasso.',
    thumbnail: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Infrastructure',
    date: '10 Nov 2024',
    views: 5632,
    likes: 234,
    tags: ['Infrastructure', 'Sikasso', 'Formation', 'Inauguration']
  },
  {
    id: 4,
    type: 'document',
    title: 'Rapport annuel 2024',
    description: 'Rapport complet des activités de la FMF pour l\'année 2024.',
    thumbnail: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://example.com/rapport-2024.pdf',
    category: 'Presse',
    date: '08 Nov 2024',
    views: 3421,
    likes: 123,
    tags: ['Rapport', '2024', 'Activités', 'FMF'],
    size: '2.4 MB'
  },
  {
    id: 5,
    type: 'photo',
    title: 'Cérémonie de remise des trophées',
    description: 'Remise des trophées aux meilleurs joueurs et clubs de la saison 2023-2024.',
    thumbnail: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Cérémonies',
    date: '05 Nov 2024',
    views: 4567,
    likes: 345,
    tags: ['Trophées', 'Cérémonie', 'Saison 2023-2024']
  },
  {
    id: 6,
    type: 'video',
    title: 'Formation des arbitres',
    description: 'Session de formation continue pour les arbitres de la FMF.',
    thumbnail: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://example.com/video2.mp4',
    category: 'Formation',
    date: '03 Nov 2024',
    views: 2345,
    likes: 178,
    tags: ['Arbitres', 'Formation', 'FMF'],
    duration: '5:20'
  },
  {
    id: 7,
    type: 'photo',
    title: 'Match amical Mali U20 vs Ghana U20',
    description: 'Les jeunes Aigles du Mali en action contre leurs homologues ghanéens.',
    thumbnail: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Matchs',
    date: '01 Nov 2024',
    views: 3456,
    likes: 267,
    tags: ['U20', 'Ghana', 'Match amical', 'Jeunes']
  },
  {
    id: 8,
    type: 'document',
    title: 'Guide des compétitions 2025',
    description: 'Calendrier et règlements des compétitions officielles de la FMF pour 2025.',
    thumbnail: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://example.com/guide-competitions-2025.pdf',
    category: 'Presse',
    date: '30 Oct 2024',
    views: 5678,
    likes: 234,
    tags: ['Compétitions', '2025', 'Règlements', 'Calendrier'],
    size: '1.8 MB'
  }
];

const Media = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Toutes');
  const [selectedType, setSelectedType] = useState<string>('Toutes');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'date' | 'views' | 'likes'>('date');
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  const categories = ['Toutes', 'Matchs', 'Entraînements', 'Cérémonies', 'Infrastructure', 'Formation', 'Presse'];
  const types = ['Toutes', 'photo', 'video', 'document'];

  const filteredMedia = mediaItems
    .filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'Toutes' || item.category === selectedCategory;
      const matchesType = selectedType === 'Toutes' || item.type === selectedType;
      return matchesSearch && matchesCategory && matchesType;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'views':
          return b.views - a.views;
        case 'likes':
          return b.likes - a.likes;
        default:
          return 0;
      }
    });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'photo': return <Camera className="w-4 h-4" />;
      case 'video': return <Video className="w-4 h-4" />;
      case 'document': return <FileText className="w-4 h-4" />;
      default: return <Camera className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'photo': return 'bg-blue-500 text-white';
      case 'video': return 'bg-red-500 text-white';
      case 'document': return 'bg-green-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const handleDownload = (item: MediaItem) => {
    // Simuler le téléchargement
    const link = document.createElement('a');
    link.href = item.url;
    link.download = item.title;
    link.click();
  };

  const handleShare = (item: MediaItem) => {
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: item.description,
        url: item.url
      });
    } else {
      // Fallback pour les navigateurs qui ne supportent pas l'API de partage
      navigator.clipboard.writeText(item.url);
      alert('Lien copié dans le presse-papiers !');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-mali-green to-mali-red text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Centre Médias
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Découvrez nos photos, vidéos et documents officiels. Ressources presse et médias disponibles
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
                placeholder="Rechercher dans les médias..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mali-green focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
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

            {/* Type Filter */}
            <div className="flex gap-2 flex-wrap">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedType === type
                      ? 'bg-mali-yellow text-black shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type === 'Toutes' ? 'Tous types' : type}
                </button>
              ))}
            </div>

            {/* View Mode and Sort */}
            <div className="flex gap-2 items-center">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-white text-mali-green shadow-sm' : 'text-gray-600'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-white text-mali-green shadow-sm' : 'text-gray-600'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mali-green focus:border-transparent"
              >
                <option value="date">Plus récent</option>
                <option value="views">Plus vus</option>
                <option value="likes">Plus aimés</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Media Grid/List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredMedia.length === 0 ? (
          <div className="text-center py-20">
            <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Aucun média trouvé</h3>
            <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
          </div>
        ) : (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
            {filteredMedia.map((item) => (
              <div
                key={item.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                {/* Thumbnail */}
                <div className={`relative ${viewMode === 'list' ? 'w-48 h-32' : 'h-48'}`}>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(item.type)} flex items-center gap-1`}>
                      {getTypeIcon(item.type)}
                      {item.type === 'photo' ? 'Photo' : item.type === 'video' ? 'Vidéo' : 'Document'}
                    </span>
                  </div>

                  {/* Video Duration */}
                  {item.type === 'video' && item.duration && (
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {item.duration}
                    </div>
                  )}

                  {/* Document Size */}
                  {item.type === 'document' && item.size && (
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {item.size}
                    </div>
                  )}

                  {/* Play Button for Videos */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-mali-green ml-1" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-mali-green/10 text-mali-green text-xs font-semibold rounded-full">
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        +{item.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Stats and Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {item.views.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {item.likes}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => handleDownload(item)}
                        className="p-2 bg-mali-green text-white rounded-lg hover:bg-mali-green/90 transition-colors"
                        title="Télécharger"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleShare(item)}
                        className="p-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                        title="Partager"
                      >
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Press Resources */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ressources Presse
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Téléchargez nos ressources officielles pour vos articles et publications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-mali-green to-mali-red rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <Camera className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Photos Officielles</h3>
              <p className="text-gray-600 mb-4">
                Accédez à notre banque d'images haute résolution pour vos publications
              </p>
              <button className="px-6 py-3 bg-mali-green text-white font-semibold rounded-lg hover:bg-mali-green/90 transition-colors">
                Accéder aux photos
              </button>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-mali-yellow to-mali-red rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <Video className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Vidéos HD</h3>
              <p className="text-gray-600 mb-4">
                Téléchargez nos vidéos officielles en haute définition
              </p>
              <button className="px-6 py-3 bg-mali-yellow text-black font-semibold rounded-lg hover:bg-mali-yellow/90 transition-colors">
                Voir les vidéos
              </button>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-mali-red to-mali-green rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Documents Officiels</h3>
              <p className="text-gray-600 mb-4">
                Communiqués, rapports et documents officiels de la FMF
              </p>
              <button className="px-6 py-3 bg-mali-red text-white font-semibold rounded-lg hover:bg-mali-red/90 transition-colors">
                Télécharger
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Press */}
      <div className="bg-gradient-to-r from-mali-green to-mali-red text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Besoin d'aide ?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Notre équipe presse est là pour vous accompagner dans vos demandes médiatiques
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-mali-green font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Contacter la presse
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors">
              Demander un accès
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;