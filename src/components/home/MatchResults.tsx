import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const MatchResults = () => {
  const recentMatches = [
    {
      id: 1,
      homeTeam: 'Mali',
      homeFlag: '🇲🇱',
      awayTeam: 'Sénégal',
      awayFlag: '🇸🇳',
      homeScore: 2,
      awayScore: 1,
      date: '15 Nov 2024',
      time: '20:00',
      venue: 'Stade du 26 Mars',
      competition: 'Éliminatoires CAN 2025',
      status: 'Terminé'
    },
    {
      id: 2,
      homeTeam: 'Burkina Faso',
      homeFlag: '🇧🇫',
      awayTeam: 'Mali',
      awayFlag: '🇲🇱',
      homeScore: 0,
      awayScore: 3,
      date: '12 Nov 2024',
      time: '18:00',
      venue: 'Stade du 4-Août',
      competition: 'Éliminatoires CAN 2025',
      status: 'Terminé'
    },
    {
      id: 3,
      homeTeam: 'Mali U20',
      homeFlag: '🇲🇱',
      awayTeam: 'Ghana U20',
      awayFlag: '🇬🇭',
      homeScore: 1,
      awayScore: 1,
      date: '08 Nov 2024',
      time: '16:00',
      venue: 'Stade Mamadou Konaté',
      competition: 'Amical U20',
      status: 'Terminé'
    }
  ];

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Résultats récents</h3>
        <button className="text-mali-green hover:text-mali-green/80 font-semibold text-sm">
          Voir tous les résultats
        </button>
      </div>

      <div className="space-y-4">
        {recentMatches.map((match) => (
          <div
            key={match.id}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  {match.status}
                </span>
                <span className="text-sm text-gray-600">{match.competition}</span>
              </div>
              <div className="text-right text-sm text-gray-500">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {match.date}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              {/* Home Team */}
              <div className="flex items-center space-x-3 flex-1">
                <span className="text-2xl">{match.homeFlag}</span>
                <span className="font-semibold text-gray-900">{match.homeTeam}</span>
              </div>

              {/* Score */}
              <div className="flex items-center space-x-4 mx-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">
                    {match.homeScore} - {match.awayScore}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Score final</div>
                </div>
              </div>

              {/* Away Team */}
              <div className="flex items-center space-x-3 flex-1 justify-end">
                <span className="font-semibold text-gray-900">{match.awayTeam}</span>
                <span className="text-2xl">{match.awayFlag}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {match.venue}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {match.time}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MatchResults;