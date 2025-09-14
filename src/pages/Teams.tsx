import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Users, Calendar, MapPin, Star, ChevronRight, Search, Filter } from 'lucide-react';

interface Team {
  id: number;
  name: string;
  category: 'Sélection A' | 'Sélection U23' | 'Sélection U20' | 'Sélection U17' | 'Sélection Féminine';
  coach: string;
  captain: string;
  players: number;
  founded: number;
  achievements: string[];
  image: string;
  description: string;
  nextMatch?: {
    opponent: string;
    date: string;
    competition: string;
  };
}

const teams: Team[] = [
  {
    id: 1,
    name: 'Les Aigles du Mali',
    category: 'Sélection A',
    coach: 'Éric Chelle',
    captain: 'Hamari Traoré',
    players: 23,
    founded: 1962,
    achievements: ['CAN 1972 - Finaliste', 'CAN 2012 - 3ème place', 'Qualification Mondial 2026'],
    image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'L\'équipe nationale du Mali, surnommée "Les Aigles", représente le pays dans les compétitions internationales de football.',
    nextMatch: {
      opponent: 'Sénégal',
      date: '20 Nov 2024',
      competition: 'Éliminatoires CAN 2025'
    }
  },
  {
    id: 2,
    name: 'Mali U23',
    category: 'Sélection U23',
    coach: 'Fousseni Diawara',
    captain: 'Moussa Diarra',
    players: 20,
    founded: 1991,
    achievements: ['Jeux Olympiques 2004 - 4ème place', 'Championnat U23 2019 - Vainqueur'],
    image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'L\'équipe espoir du Mali qui prépare la relève et participe aux compétitions de jeunes.',
    nextMatch: {
      opponent: 'Burkina Faso U23',
      date: '25 Nov 2024',
      competition: 'Tournoi U23'
    }
  },
  {
    id: 3,
    name: 'Mali U20',
    category: 'Sélection U20',
    coach: 'Mamadou Coulibaly',
    captain: 'Boubacar Traoré',
    players: 18,
    founded: 1985,
    achievements: ['CAN U20 2019 - Finaliste', 'Mondial U20 2015 - 3ème place'],
    image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'L\'équipe junior du Mali qui forme les futurs talents du football malien.',
    nextMatch: {
      opponent: 'Ghana U20',
      date: '30 Nov 2024',
      competition: 'CAN U20 2025'
    }
  },
  {
    id: 4,
    name: 'Mali U17',
    category: 'Sélection U17',
    coach: 'Sékou Keita',
    captain: 'Mamadou Koné',
    players: 16,
    founded: 1989,
    achievements: ['CAN U17 2017 - Vainqueur', 'Mondial U17 2015 - 4ème place'],
    image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'L\'équipe cadette qui révèle les plus jeunes talents du football malien.',
    nextMatch: {
      opponent: 'Côte d\'Ivoire U17',
      date: '5 Dec 2024',
      competition: 'CAN U17 2025'
    }
  },
  {
    id: 5,
    name: 'Mali Féminine',
    category: 'Sélection Féminine',
    coach: 'Fatoumata Coulibaly',
    captain: 'Aïcha Koné',
    players: 21,
    founded: 2002,
    achievements: ['CAN Féminine 2018 - 3ème place', 'Jeux Africains 2019 - Finaliste'],
    image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'L\'équipe nationale féminine du Mali qui développe le football féminin dans le pays.',
    nextMatch: {
      opponent: 'Nigeria Féminine',
      date: '15 Dec 2024',
      competition: 'CAN Féminine 2026'
    }
  }
];

const Teams = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Toutes');
  const [sortBy, setSortBy] = useState<'name' | 'founded' | 'players'>('name');

  const categories = ['Toutes', 'Sélection A', 'Sélection U23', 'Sélection U20', 'Sélection U17', 'Sélection Féminine'];

  const filteredTeams = teams
    .filter(team => {
      const matchesSearch = team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          team.coach.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Toutes' || team.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'founded':
          return a.founded - b.founded;
        case 'players':
          return b.players - a.players;
        default:
          return 0;
      }
    });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Sélection A': return 'bg-mali-yellow text-black';
      case 'Sélection U23': return 'bg-mali-green text-white';
      case 'Sélection U20': return 'bg-mali-red text-white';
      case 'Sélection U17': return 'bg-blue-600 text-white';
      case 'Sélection Féminine': return 'bg-pink-600 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-mali-green to-mali-red text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Nos Équipes Nationales
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Découvrez toutes les sélections maliennes, de l'équipe A aux jeunes talents
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
                placeholder="Rechercher une équipe ou un entraîneur..."
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

            {/* Sort Options */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mali-green focus:border-transparent"
            >
              <option value="name">Ordre alphabétique</option>
              <option value="founded">Date de création</option>
              <option value="players">Nombre de joueurs</option>
            </select>
          </div>
        </div>
      </div>

      {/* Teams Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredTeams.length === 0 ? (
          <div className="text-center py-20">
            <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Aucune équipe trouvée</h3>
            <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredTeams.map((team) => (
              <div
                key={team.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={team.image}
                    alt={team.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(team.category)} mb-2`}>
                      {team.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white">{team.name}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Team Info */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{team.players} joueurs</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">Créée en {team.founded}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Trophy className="w-4 h-4" />
                      <span className="text-sm">Entraîneur</span>
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      {team.coach}
                    </div>
                  </div>

                  {/* Captain */}
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Capitaine</span>
                      <span className="font-semibold text-gray-900">{team.captain}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {team.description}
                  </p>

                  {/* Achievements */}
                  {team.achievements.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Star className="w-4 h-4 text-mali-yellow" />
                        Palmarès
                      </h4>
                      <div className="space-y-2">
                        {team.achievements.slice(0, 3).map((achievement, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-2 h-2 bg-mali-green rounded-full"></div>
                            {achievement}
                          </div>
                        ))}
                        {team.achievements.length > 3 && (
                          <div className="text-sm text-mali-green font-medium">
                            +{team.achievements.length - 3} autres titres
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Next Match */}
                  {team.nextMatch && (
                    <div className="mb-6 p-4 bg-gradient-to-r from-mali-green/10 to-mali-red/10 rounded-lg border border-mali-green/20">
                      <h4 className="font-semibold text-gray-900 mb-2">Prochain match</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Adversaire:</span>
                          <span className="font-medium">{team.nextMatch.opponent}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Date:</span>
                          <span className="font-medium">{team.nextMatch.date}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Compétition:</span>
                          <span className="font-medium">{team.nextMatch.competition}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link
                      to={`/equipes/${team.id}`}
                      className="flex-1 bg-gradient-to-r from-mali-green to-mali-red text-white text-center py-3 px-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      Voir l'équipe
                    </Link>
                    <button className="px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                      <Calendar className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Statistiques des Équipes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un aperçu des performances et de l'évolution de nos sélections nationales
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-mali-green mb-2">5</div>
              <div className="text-gray-600">Équipes nationales</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-mali-yellow mb-2">98</div>
              <div className="text-gray-600">Joueurs au total</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-mali-red mb-2">15+</div>
              <div className="text-gray-600">Titres remportés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">62</div>
              <div className="text-gray-600">Années d'histoire</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;