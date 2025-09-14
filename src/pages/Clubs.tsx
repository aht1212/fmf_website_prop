import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building, MapPin, Users, Trophy, Star, ChevronRight, Search, Filter, Calendar, Award, Flag } from 'lucide-react';

interface Club {
  id: number;
  name: string;
  nickname: string;
  city: string;
  region: string;
  founded: number;
  division: 'Ligue 1' | 'Ligue 2' | 'Division Régionale';
  coach: string;
  president: string;
  stadium: string;
  capacity: number;
  achievements: string[];
  description: string;
  image: string;
  colors: string[];
  currentPosition?: number;
  lastSeasonPosition?: number;
  nextMatch?: {
    opponent: string;
    date: string;
    competition: string;
    venue: 'Domicile' | 'Extérieur';
  };
  players: {
    name: string;
    position: string;
    nationality: string;
    age: number;
    goals?: number;
    assists?: number;
  }[];
}

const clubs: Club[] = [
  {
    id: 1,
    name: 'Djoliba Athletic Club',
    nickname: 'Les Rouges',
    city: 'Bamako',
    region: 'District de Bamako',
    founded: 1960,
    division: 'Ligue 1',
    coach: 'Mamadou Coulibaly',
    president: 'Boukary Keita',
    stadium: 'Stade du 26 Mars',
    capacity: 50000,
    achievements: ['Championnat 2023', 'Coupe du Mali 2022', 'Championnat 2021', 'Coupe du Mali 2019'],
    description: 'Djoliba AC est l\'un des clubs les plus titrés du Mali, basé à Bamako. Fondé en 1960, le club a remporté de nombreux titres nationaux.',
    image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800',
    colors: ['Rouge', 'Blanc'],
    currentPosition: 1,
    lastSeasonPosition: 2,
    nextMatch: {
      opponent: 'Stade Malien',
      date: '22 Nov 2024',
      competition: 'Ligue 1',
      venue: 'Domicile'
    },
    players: [
      { name: 'Moussa Diarra', position: 'Attaquant', nationality: 'Mali', age: 24, goals: 12, assists: 5 },
      { name: 'Boubacar Traoré', position: 'Milieu', nationality: 'Mali', age: 22, goals: 3, assists: 8 },
      { name: 'Sékou Keita', position: 'Défenseur', nationality: 'Mali', age: 26, goals: 1, assists: 2 }
    ]
  },
  {
    id: 2,
    name: 'Stade Malien',
    nickname: 'Les Blancs',
    city: 'Bamako',
    region: 'District de Bamako',
    founded: 1960,
    division: 'Ligue 1',
    coach: 'Fousseni Diawara',
    president: 'Mamadou Sidibé',
    stadium: 'Stade du 26 Mars',
    capacity: 50000,
    achievements: ['Championnat 2022', 'Coupe du Mali 2021', 'Championnat 2020', 'Coupe du Mali 2018'],
    description: 'Stade Malien est un club historique de Bamako, rival traditionnel de Djoliba AC. Le club a également une riche histoire de titres.',
    image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800',
    colors: ['Blanc', 'Vert'],
    currentPosition: 2,
    lastSeasonPosition: 1,
    nextMatch: {
      opponent: 'Djoliba AC',
      date: '22 Nov 2024',
      competition: 'Ligue 1',
      venue: 'Extérieur'
    },
    players: [
      { name: 'Hamari Traoré', position: 'Défenseur', nationality: 'Mali', age: 25, goals: 2, assists: 4 },
      { name: 'Amadou Haidara', position: 'Milieu', nationality: 'Mali', age: 23, goals: 5, assists: 6 },
      { name: 'Yves Bissouma', position: 'Milieu', nationality: 'Mali', age: 27, goals: 4, assists: 7 }
    ]
  },
  {
    id: 3,
    name: 'Real Bamako',
    nickname: 'Les Verts',
    city: 'Bamako',
    region: 'District de Bamako',
    founded: 1975,
    division: 'Ligue 1',
    coach: 'Modibo Sidibé',
    president: 'Oumar Diakité',
    stadium: 'Stade Modibo Keita',
    capacity: 25000,
    achievements: ['Championnat 2018', 'Coupe du Mali 2017', 'Championnat 2015'],
    description: 'Real Bamako est un club moderne et ambitieux qui a su se faire une place parmi l\'élite du football malien.',
    image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800',
    colors: ['Vert', 'Blanc'],
    currentPosition: 3,
    lastSeasonPosition: 4,
    nextMatch: {
      opponent: 'AS Mandé',
      date: '25 Nov 2024',
      competition: 'Ligue 1',
      venue: 'Domicile'
    },
    players: [
      { name: 'Mamadou Samassa', position: 'Attaquant', nationality: 'Mali', age: 21, goals: 8, assists: 3 },
      { name: 'Abdoulaye Doucouré', position: 'Milieu', nationality: 'Mali', age: 24, goals: 2, assists: 5 },
      { name: 'Ibrahim Sissoko', position: 'Gardien', nationality: 'Mali', age: 28, goals: 0, assists: 0 }
    ]
  },
  {
    id: 4,
    name: 'AS Mandé',
    nickname: 'Les Mandé',
    city: 'Bamako',
    region: 'District de Bamako',
    founded: 1980,
    division: 'Ligue 1',
    coach: 'Souleymane Diarra',
    president: 'Fatoumata Coulibaly',
    stadium: 'Stade AS Mandé',
    capacity: 15000,
    achievements: ['Coupe du Mali 2020', 'Championnat 2019', 'Coupe du Mali 2016'],
    description: 'AS Mandé est un club qui représente la culture mandé et qui a su développer une identité forte dans le football malien.',
    image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800',
    colors: ['Bleu', 'Jaune'],
    currentPosition: 4,
    lastSeasonPosition: 3,
    nextMatch: {
      opponent: 'Real Bamako',
      date: '25 Nov 2024',
      competition: 'Ligue 1',
      venue: 'Extérieur'
    },
    players: [
      { name: 'Aïcha Koné', position: 'Attaquant', nationality: 'Mali', age: 22, goals: 10, assists: 4 },
      { name: 'Mariam Traoré', position: 'Milieu', nationality: 'Mali', age: 25, goals: 3, assists: 6 },
      { name: 'Salimata Simpara', position: 'Attaquant', nationality: 'Mali', age: 23, goals: 7, assists: 2 }
    ]
  },
  {
    id: 5,
    name: 'USFAS Bamako',
    nickname: 'Les Étudiants',
    city: 'Bamako',
    region: 'District de Bamako',
    founded: 1990,
    division: 'Ligue 2',
    coach: 'Mamadou Koné',
    president: 'Boubacar Kané',
    stadium: 'Stade USFAS',
    capacity: 8000,
    achievements: ['Championnat Ligue 2 2023', 'Promotion Ligue 1 2023'],
    description: 'USFAS Bamako est le club de l\'université et représente la jeunesse estudiantine dans le football malien.',
    image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800',
    colors: ['Orange', 'Blanc'],
    currentPosition: 1,
    lastSeasonPosition: 1,
    nextMatch: {
      opponent: 'Centre Salif Keita',
      date: '28 Nov 2024',
      competition: 'Ligue 2',
      venue: 'Domicile'
    },
    players: [
      { name: 'Daouda Guindo', position: 'Attaquant', nationality: 'Mali', age: 20, goals: 15, assists: 8 },
      { name: 'Fousseni Diabaté', position: 'Défenseur', nationality: 'Mali', age: 22, goals: 1, assists: 3 },
      { name: 'Adama Traoré', position: 'Milieu', nationality: 'Mali', age: 21, goals: 4, assists: 7 }
    ]
  }
];

const Clubs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDivision, setSelectedDivision] = useState<string>('Toutes');
  const [selectedRegion, setSelectedRegion] = useState<string>('Toutes');
  const [sortBy, setSortBy] = useState<'name' | 'founded' | 'currentPosition'>('name');

  const divisions = ['Toutes', 'Ligue 1', 'Ligue 2', 'Division Régionale'];
  const regions = ['Toutes', 'District de Bamako', 'Sikasso', 'Ségou', 'Mopti', 'Tombouctou'];

  const filteredClubs = clubs
    .filter(club => {
      const matchesSearch = club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          club.nickname.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          club.city.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDivision = selectedDivision === 'Toutes' || club.division === selectedDivision;
      const matchesRegion = selectedRegion === 'Toutes' || club.region === selectedRegion;
      return matchesSearch && matchesDivision && matchesRegion;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'founded':
          return a.founded - b.founded;
        case 'currentPosition':
          return (a.currentPosition || 999) - (b.currentPosition || 999);
        default:
          return 0;
      }
    });

  const getDivisionColor = (division: string) => {
    switch (division) {
      case 'Ligue 1': return 'bg-mali-green text-white';
      case 'Ligue 2': return 'bg-mali-yellow text-black';
      case 'Division Régionale': return 'bg-mali-red text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-mali-green to-mali-red text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Clubs de Football
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Découvrez tous les clubs du football malien, de la Ligue 1 aux divisions régionales
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
                placeholder="Rechercher un club..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mali-green focus:border-transparent"
              />
            </div>

            {/* Division Filter */}
            <div className="flex gap-2 flex-wrap">
              {divisions.map((division) => (
                <button
                  key={division}
                  onClick={() => setSelectedDivision(division)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedDivision === division
                      ? 'bg-mali-green text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {division}
                </button>
              ))}
            </div>

            {/* Region Filter */}
            <div className="flex gap-2 flex-wrap">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedRegion === region
                      ? 'bg-mali-yellow text-black shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {region}
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
              <option value="currentPosition">Position actuelle</option>
            </select>
          </div>
        </div>
      </div>

      {/* Clubs Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredClubs.length === 0 ? (
          <div className="text-center py-20">
            <Building className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Aucun club trouvé</h3>
            <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredClubs.map((club) => (
              <div
                key={club.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={club.image}
                    alt={club.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDivisionColor(club.division)}`}>
                      {club.division}
                    </span>
                    {club.currentPosition && (
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                        #{club.currentPosition}
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{club.name}</h3>
                    <p className="text-white/80 text-sm mb-2">{club.nickname}</p>
                    <div className="flex items-center gap-4 text-white/80 text-sm">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {club.city}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {club.founded}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Club Info */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">Entraîneur</span>
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      {club.coach}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Building className="w-4 h-4" />
                      <span className="text-sm">Président</span>
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      {club.president}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">Stade</span>
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      {club.stadium}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">Capacité</span>
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      {club.capacity.toLocaleString()}
                    </div>
                  </div>

                  {/* Colors */}
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Couleurs</span>
                      <div className="flex gap-2">
                        {club.colors.map((color, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded">
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {club.description}
                  </p>

                  {/* Achievements */}
                  {club.achievements.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-mali-yellow" />
                        Palmarès
                      </h4>
                      <div className="space-y-2">
                        {club.achievements.slice(0, 3).map((achievement, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-2 h-2 bg-mali-green rounded-full"></div>
                            {achievement}
                          </div>
                        ))}
                        {club.achievements.length > 3 && (
                          <div className="text-sm text-mali-green font-medium">
                            +{club.achievements.length - 3} autres titres
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Next Match */}
                  {club.nextMatch && (
                    <div className="mb-6 p-4 bg-gradient-to-r from-mali-green/10 to-mali-red/10 rounded-lg border border-mali-green/20">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-mali-green" />
                        Prochain match
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Match:</span>
                          <span className="font-medium">{club.nextMatch.opponent}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Date:</span>
                          <span className="font-medium">{club.nextMatch.date}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Lieu:</span>
                          <span className="font-medium">{club.nextMatch.venue}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Top Players */}
                  {club.players.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Star className="w-4 h-4 text-mali-yellow" />
                        Joueurs clés
                      </h4>
                      <div className="space-y-2">
                        {club.players.slice(0, 3).map((player, index) => (
                          <div key={index} className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{player.name}</span>
                              <span className="text-gray-500">({player.position})</span>
                            </div>
                            {player.goals !== undefined && (
                              <span className="text-mali-green font-semibold">
                                {player.goals} buts
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link
                      to={`/clubs/${club.id}`}
                      className="flex-1 bg-gradient-to-r from-mali-green to-mali-red text-white text-center py-3 px-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      Voir le club
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
              Statistiques des Clubs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un aperçu de l'écosystème des clubs du football malien
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-mali-green mb-2">156</div>
              <div className="text-gray-600">Clubs affiliés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-mali-yellow mb-2">8</div>
              <div className="text-gray-600">Régions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-mali-red mb-2">3</div>
              <div className="text-gray-600">Divisions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">64</div>
              <div className="text-gray-600">Années d'histoire</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clubs;