import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Calendar, Users, MapPin, Star, ChevronRight, Search, Filter, Play, Clock, Award } from 'lucide-react';

interface Competition {
  id: number;
  name: string;
  type: 'National' | 'International' | 'Régional' | 'Jeunesse';
  status: 'En cours' | 'À venir' | 'Terminée' | 'En préparation';
  startDate: string;
  endDate: string;
  participants: number;
  location: string;
  description: string;
  image: string;
  prize: string;
  currentStage: string;
  nextMatch?: {
    team1: string;
    team2: string;
    date: string;
    venue: string;
  };
  standings?: {
    position: number;
    team: string;
    played: number;
    won: number;
    drawn: number;
    lost: number;
    points: number;
  }[];
}

const competitions: Competition[] = [
  {
    id: 1,
    name: 'Championnat National Ligue 1',
    type: 'National',
    status: 'En cours',
    startDate: '15 Sep 2024',
    endDate: '30 Mai 2025',
    participants: 16,
    location: 'Mali',
    description: 'Le championnat national de première division du Mali, réunissant les meilleurs clubs du pays.',
    image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800',
    prize: '50 000 000 FCFA',
    currentStage: 'Journée 8/30',
    nextMatch: {
      team1: 'Djoliba AC',
      team2: 'Stade Malien',
      date: '22 Nov 2024',
      venue: 'Stade du 26 Mars'
    },
    standings: [
      { position: 1, team: 'Djoliba AC', played: 8, won: 7, drawn: 1, lost: 0, points: 22 },
      { position: 2, team: 'Stade Malien', played: 8, won: 6, drawn: 1, lost: 1, points: 19 },
      { position: 3, team: 'Real Bamako', played: 8, won: 5, drawn: 2, lost: 1, points: 17 },
      { position: 4, team: 'AS Mandé', played: 8, won: 4, drawn: 3, lost: 1, points: 15 }
    ]
  },
  {
    id: 2,
    name: 'Coupe du Mali',
    type: 'National',
    status: 'À venir',
    startDate: '10 Jan 2025',
    endDate: '15 Mai 2025',
    participants: 32,
    location: 'Mali',
    description: 'La coupe nationale du Mali, compétition à élimination directe ouverte à tous les clubs.',
    image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800',
    prize: '25 000 000 FCFA',
    currentStage: 'Phase de préparation',
    standings: []
  },
  {
    id: 3,
    name: 'Éliminatoires CAN 2025',
    type: 'International',
    status: 'En cours',
    startDate: '20 Nov 2024',
    endDate: '30 Mar 2025',
    participants: 6,
    location: 'Afrique de l\'Ouest',
    description: 'Les éliminatoires de la Coupe d\'Afrique des Nations 2025 pour la zone Afrique de l\'Ouest.',
    image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800',
    prize: 'Qualification CAN 2025',
    currentStage: 'Journée 2/6',
    nextMatch: {
      team1: 'Mali',
      team2: 'Sénégal',
      date: '20 Nov 2024',
      venue: 'Stade du 26 Mars'
    },
    standings: [
      { position: 1, team: 'Mali', played: 2, won: 2, drawn: 0, lost: 0, points: 6 },
      { position: 2, team: 'Sénégal', played: 2, won: 1, drawn: 1, lost: 0, points: 4 },
      { position: 3, team: 'Burkina Faso', played: 2, won: 1, drawn: 0, lost: 1, points: 3 },
      { position: 4, team: 'Ghana', played: 2, won: 0, drawn: 1, lost: 1, points: 1 }
    ]
  },
  {
    id: 4,
    name: 'Championnat U20',
    type: 'Jeunesse',
    status: 'En cours',
    startDate: '1 Oct 2024',
    endDate: '20 Dec 2024',
    participants: 12,
    location: 'Mali',
    description: 'Le championnat des moins de 20 ans, révélateur des futurs talents du football malien.',
    image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800',
    prize: '15 000 000 FCFA',
    currentStage: 'Phase finale',
    nextMatch: {
      team1: 'Centre Salif Keita',
      team2: 'Academy JMG',
      date: '25 Nov 2024',
      venue: 'Centre Salif Keita'
    }
  },
  {
    id: 5,
    name: 'Tournoi des Régions',
    type: 'Régional',
    status: 'En préparation',
    startDate: '15 Mar 2025',
    endDate: '30 Apr 2025',
    participants: 8,
    location: 'Mali',
    description: 'Compétition inter-régionale mettant aux prises les meilleures équipes de chaque région du Mali.',
    image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800',
    prize: '10 000 000 FCFA',
    currentStage: 'Phase de sélection',
    standings: []
  }
];

const Competitions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('Toutes');
  const [selectedStatus, setSelectedStatus] = useState<string>('Toutes');
  const [sortBy, setSortBy] = useState<'name' | 'startDate' | 'participants'>('name');

  const types = ['Toutes', 'National', 'International', 'Régional', 'Jeunesse'];
  const statuses = ['Toutes', 'En cours', 'À venir', 'Terminée', 'En préparation'];

  const filteredCompetitions = competitions
    .filter(competition => {
      const matchesSearch = competition.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          competition.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === 'Toutes' || competition.type === selectedType;
      const matchesStatus = selectedStatus === 'Toutes' || competition.status === selectedStatus;
      return matchesSearch && matchesType && matchesStatus;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'startDate':
          return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
        case 'participants':
          return b.participants - a.participants;
        default:
          return 0;
      }
    });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En cours': return 'bg-green-500 text-white';
      case 'À venir': return 'bg-blue-500 text-white';
      case 'Terminée': return 'bg-gray-500 text-white';
      case 'En préparation': return 'bg-yellow-500 text-black';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'National': return 'bg-mali-green text-white';
      case 'International': return 'bg-mali-yellow text-black';
      case 'Régional': return 'bg-mali-red text-white';
      case 'Jeunesse': return 'bg-blue-600 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-mali-green to-mali-red text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Compétitions
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Découvrez toutes les compétitions du football malien, du niveau local aux compétitions internationales
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
                placeholder="Rechercher une compétition..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mali-green focus:border-transparent"
              />
            </div>

            {/* Type Filter */}
            <div className="flex gap-2 flex-wrap">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedType === type
                      ? 'bg-mali-green text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Status Filter */}
            <div className="flex gap-2 flex-wrap">
              {statuses.map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedStatus === status
                      ? 'bg-mali-yellow text-black shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {status}
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
              <option value="startDate">Date de début</option>
              <option value="participants">Nombre de participants</option>
            </select>
          </div>
        </div>
      </div>

      {/* Competitions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredCompetitions.length === 0 ? (
          <div className="text-center py-20">
            <Trophy className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Aucune compétition trouvée</h3>
            <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCompetitions.map((competition) => (
              <div
                key={competition.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={competition.image}
                    alt={competition.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(competition.type)}`}>
                      {competition.type}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(competition.status)}`}>
                      {competition.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{competition.name}</h3>
                    <div className="flex items-center gap-4 text-white/80 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {competition.startDate} - {competition.endDate}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {competition.participants} participants
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Prize */}
                  <div className="mb-4 p-3 bg-gradient-to-r from-mali-green/10 to-mali-red/10 rounded-lg border border-mali-green/20">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 flex items-center gap-2">
                        <Award className="w-4 h-4 text-mali-yellow" />
                        Récompense
                      </span>
                      <span className="font-semibold text-gray-900">{competition.prize}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {competition.description}
                  </p>

                  {/* Current Stage */}
                  <div className="mb-6 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Étape actuelle</span>
                      <span className="font-semibold text-gray-900">{competition.currentStage}</span>
                    </div>
                  </div>

                  {/* Next Match */}
                  {competition.nextMatch && (
                    <div className="mb-6 p-4 bg-gradient-to-r from-mali-green/10 to-mali-red/10 rounded-lg border border-mali-green/20">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Play className="w-4 h-4 text-mali-green" />
                        Prochain match
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Match:</span>
                          <span className="font-medium">{competition.nextMatch.team1} vs {competition.nextMatch.team2}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Date:</span>
                          <span className="font-medium">{competition.nextMatch.date}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Lieu:</span>
                          <span className="font-medium">{competition.nextMatch.venue}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Standings Preview */}
                  {competition.standings && competition.standings.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Star className="w-4 h-4 text-mali-yellow" />
                        Classement (Top 4)
                      </h4>
                      <div className="space-y-2">
                        {competition.standings.slice(0, 4).map((team, index) => (
                          <div key={index} className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-3">
                              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                                index === 0 ? 'bg-yellow-400 text-black' :
                                index === 1 ? 'bg-gray-300 text-black' :
                                index === 2 ? 'bg-orange-400 text-black' : 'bg-gray-100 text-gray-600'
                              }`}>
                                {index + 1}
                              </span>
                              <span className="font-medium">{team.team}</span>
                            </div>
                            <span className="font-semibold text-mali-green">{team.points} pts</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link
                      to={`/competitions/${competition.id}`}
                      className="flex-1 bg-gradient-to-r from-mali-green to-mali-red text-white text-center py-3 px-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      Voir les détails
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
              Statistiques des Compétitions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un aperçu de l'activité compétitive du football malien
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-mali-green mb-2">5</div>
              <div className="text-gray-600">Compétitions actives</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-mali-yellow mb-2">74</div>
              <div className="text-gray-600">Équipes participantes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-mali-red mb-2">12</div>
              <div className="text-gray-600">Mois de compétition</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100M+</div>
              <div className="text-gray-600">FCFA de récompenses</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competitions;