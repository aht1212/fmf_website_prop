import React, { useState } from 'react';
import { Users, Trophy, Calendar, Star, MapPin } from 'lucide-react';

const Teams = () => {
  const [activeTab, setActiveTab] = useState('hommes');

  const teams = {
    hommes: {
      name: 'Équipe A Hommes',
      nickname: 'Les Aigles du Mali',
      flag: '🇲🇱',
      coach: {
        name: 'Eric Chelle',
        nationality: 'Mali',
        since: '2022'
      },
      stats: {
        fifaRanking: 58,
        canParticipations: 12,
        bestCanResult: 'Finaliste (1972)',
        worldCupParticipations: 0
      },
      recentResults: [
        { opponent: 'Sénégal', result: '2-1', date: '15 Nov 2024', home: true },
        { opponent: 'Burkina Faso', result: '0-3', date: '12 Nov 2024', home: false },
        { opponent: 'Ghana', result: '1-1', date: '08 Nov 2024', home: true }
      ],
      players: [
        { name: 'Ibrahim Mounkoro', position: 'Gardien', club: 'Real Bamako', caps: 45, goals: 0 },
        { name: 'Hamari Traoré', position: 'Défenseur', club: 'Rennes (FRA)', caps: 62, goals: 3 },
        { name: 'Moussa Doumbia', position: 'Défenseur', club: 'Reims (FRA)', caps: 38, goals: 1 },
        { name: 'Amadou Haidara', position: 'Milieu', club: 'RB Leipzig (ALL)', caps: 54, goals: 8 },
        { name: 'Yves Bissouma', position: 'Milieu', club: 'Brighton (ANG)', caps: 42, goals: 2 },
        { name: 'El Bilal Touré', position: 'Attaquant', club: 'Atalanta (ITA)', caps: 18, goals: 7 },
        { name: 'Moussa Djenepo', position: 'Attaquant', club: 'Southampton (ANG)', caps: 28, goals: 4 }
      ]
    },
    femmes: {
      name: 'Équipe Nationale Féminine',
      nickname: 'Les Aigles Dames',
      flag: '🇲🇱',
      coach: {
        name: 'Samba Diallo',
        nationality: 'Mali',
        since: '2023'
      },
      stats: {
        fifaRanking: 78,
        canParticipations: 3,
        bestCanResult: '1er tour (2008)',
        worldCupParticipations: 0
      },
      recentResults: [
        { opponent: 'Sénégal', result: '1-0', date: '10 Nov 2024', home: true },
        { opponent: 'Guinée', result: '2-2', date: '06 Nov 2024', home: false }
      ],
      players: [
        { name: 'Aminata Diallo', position: 'Gardien', club: 'AS Mandé', caps: 32, goals: 0 },
        { name: 'Fatoumata Coulibaly', position: 'Défenseur', club: 'Djoliba FC', caps: 28, goals: 2 },
        { name: 'Mariam Traoré', position: 'Milieu', club: 'Real Bamako', caps: 35, goals: 5 },
        { name: 'Salimata Simpara', position: 'Attaquant', club: 'AS Mandé', caps: 29, goals: 12 }
      ]
    },
    u23: {
      name: 'Équipe U23',
      nickname: 'Les Aigles Olympiques',
      flag: '🇲🇱',
      coach: {
        name: 'Mamadou Diarra',
        nationality: 'Mali',
        since: '2023'
      },
      stats: {
        olympicParticipations: 2,
        bestOlympicResult: '1er tour (2004)',
        canU23Participations: 8
      },
      recentResults: [
        { opponent: 'Nigeria U23', result: '1-2', date: '14 Nov 2024', home: false },
        { opponent: 'Ghana U23', result: '3-1', date: '11 Nov 2024', home: true }
      ],
      players: [
        { name: 'Oumar Diakité', position: 'Gardien', club: 'Djoliba FC', caps: 15, goals: 0 },
        { name: 'Sekou Koita', position: 'Défenseur', club: 'Real Bamako', caps: 22, goals: 1 },
        { name: 'Abdoulaye Doucouré', position: 'Milieu', club: 'AS Mandé', caps: 18, goals: 3 },
        { name: 'Mamadou Samassa', position: 'Attaquant', club: 'Stade Malien', caps: 20, goals: 8 }
      ]
    },
    u20: {
      name: 'Équipe U20',
      nickname: 'Les Aiglons',
      flag: '🇲🇱',
      coach: {
        name: 'Souleymane Diarra',
        nationality: 'Mali',
        since: '2022'
      },
      stats: {
        worldCupU20Participations: 6,
        bestWorldCupU20: 'Quarts de finale (1999)',
        canU20Participations: 12
      },
      recentResults: [
        { opponent: 'Ghana U20', result: '1-1', date: '08 Nov 2024', home: true },
        { opponent: 'Côte d\'Ivoire U20', result: '2-0', date: '04 Nov 2024', home: false }
      ],
      players: [
        { name: 'Ibrahim Sissoko', position: 'Gardien', club: 'Centre Salif Keita', caps: 12, goals: 0 },
        { name: 'Fousseni Diabaté', position: 'Défenseur', club: 'USFAS Bamako', caps: 18, goals: 0 },
        { name: 'Adama Traoré', position: 'Milieu', club: 'Djoliba FC', caps: 16, goals: 4 },
        { name: 'Boubacar Kané', position: 'Attaquant', club: 'Real Bamako', caps: 14, goals: 6 }
      ]
    },
    u17: {
      name: 'Équipe U17',
      nickname: 'Les Jeunes Aigles',
      flag: '🇲🇱',
      coach: {
        name: 'Modibo Sidibé',
        nationality: 'Mali',
        since: '2023'
      },
      stats: {
        worldCupU17Participations: 4,
        bestWorldCupU17: '2ème tour (2015)',
        canU17Participations: 10
      },
      recentResults: [
        { opponent: 'Burkina Faso U17', result: '3-2', date: '12 Nov 2024', home: true },
        { opponent: 'Niger U17', result: '4-0', date: '09 Nov 2024', home: true }
      ],
      players: [
        { name: 'Moussa Doumbia', position: 'Gardien', club: 'Academy JMG', caps: 8, goals: 0 },
        { name: 'Amadou Koné', position: 'Défenseur', club: 'Centre Salif Keita', caps: 10, goals: 1 },
        { name: 'Sekou Camara', position: 'Milieu', club: 'Academy JMG', caps: 12, goals: 2 },
        { name: 'Daouda Guindo', position: 'Attaquant', club: 'USFAS Bamako', caps: 11, goals: 5 }
      ]
    }
  };

  const tabs = [
    { id: 'hommes', name: 'Équipe A Hommes', icon: '🦅' },
    { id: 'femmes', name: 'Équipe Féminine', icon: '👩‍⚽' },
    { id: 'u23', name: 'U23', icon: '🥇' },
    { id: 'u20', name: 'U20', icon: '🏆' },
    { id: 'u17', name: 'U17', icon: '⭐' }
  ];

  const currentTeam = teams[activeTab as keyof typeof teams];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-mali-green via-mali-yellow to-mali-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Équipes Nationales
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Découvrez nos équipes nationales, des Aigles du Mali aux jeunes talents
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Team Tabs */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex overflow-x-auto space-x-1 pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-mali-green text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Team Overview */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8">
            {/* Team Header */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-6xl">{currentTeam.flag}</div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{currentTeam.name}</h2>
                  <p className="text-xl text-mali-green font-semibold">{currentTeam.nickname}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Sélectionneur
                  </h4>
                  <p className="text-lg font-medium text-mali-green">{currentTeam.coach.name}</p>
                  <p className="text-sm text-gray-600">
                    {currentTeam.coach.nationality} • Depuis {currentTeam.coach.since}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Star className="w-5 h-5 mr-2" />
                    Classement FIFA
                  </h4>
                  <p className="text-2xl font-bold text-mali-yellow">
                    {currentTeam.stats.fifaRanking || 'N/A'}
                    <span className="text-sm text-gray-500 font-normal">ème mondiale</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Recent Results */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Calendar className="w-6 h-6 mr-3" />
                Derniers résultats
              </h3>
              <div className="space-y-4">
                {currentTeam.recentResults.map((result, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-mali-green/50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{result.home ? '🏠' : '✈️'}</span>
                        <span className="font-semibold">
                          {result.home ? 'Mali' : result.opponent}
                        </span>
                      </div>
                      <span className="text-gray-400">vs</span>
                      <span className="font-semibold">
                        {result.home ? result.opponent : 'Mali'}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-mali-green">{result.result}</div>
                      <div className="text-sm text-gray-500">{result.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Team Stats */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Trophy className="w-5 h-5 mr-2" />
                Statistiques
              </h3>
              <div className="space-y-4">
                {Object.entries(currentTeam.stats).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center">
                    <span className="text-gray-600 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </span>
                    <span className="font-semibold text-mali-green">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Liens rapides</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-mali-green hover:bg-mali-green/5 transition-colors">
                  📅 Calendrier complet
                </button>
                <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-mali-green hover:bg-mali-green/5 transition-colors">
                  📊 Statistiques détaillées
                </button>
                <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-mali-green hover:bg-mali-green/5 transition-colors">
                  📺 Vidéos de l'équipe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Players Squad */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center">
              <Users className="w-6 h-6 mr-3" />
              Effectif actuel
            </h3>
            <span className="text-sm text-gray-500">
              {currentTeam.players.length} joueur{currentTeam.players.length > 1 ? 's' : ''}
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentTeam.players.map((player, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:border-mali-green/50 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-mali-green to-mali-yellow rounded-full flex items-center justify-center text-white font-bold">
                    {player.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-mali-green">{player.caps}</div>
                    <div className="text-xs text-gray-500">sélections</div>
                  </div>
                </div>
                
                <h4 className="font-bold text-gray-900 mb-1">{player.name}</h4>
                <p className="text-mali-green font-semibold text-sm mb-2">{player.position}</p>
                <p className="text-gray-600 text-sm mb-3">{player.club}</p>
                
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{player.goals} but{player.goals > 1 ? 's' : ''}</span>
                  <span>#{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;