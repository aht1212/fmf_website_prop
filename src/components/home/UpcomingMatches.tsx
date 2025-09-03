import React from 'react';
import { Calendar, Clock, MapPin, Ticket } from 'lucide-react';
import { Link } from 'react-router-dom';

const UpcomingMatches = () => {
  const upcomingMatches = [
    {
      id: 1,
      homeTeam: 'Mali',
      homeFlag: '🇲🇱',
      awayTeam: 'Côte d\'Ivoire',
      awayFlag: '🇨🇮',
      date: '25 Nov 2024',
      time: '20:00',
      venue: 'Stade du 26 Mars',
      competition: 'Éliminatoires CAN 2025',
      ticketsAvailable: true,
      price: '5,000 FCFA'
    },
    {
      id: 2,
      homeTeam: 'Mali U23',
      homeFlag: '🇲🇱',
      awayTeam: 'Nigeria U23',
      awayFlag: '🇳🇬',
      date: '28 Nov 2024',
      time: '18:00',
      venue: 'Stade Mamadou Konaté',
      competition: 'Qualifications JO 2024',
      ticketsAvailable: true,
      price: '3,000 FCFA'
    },
    {
      id: 3,
      homeTeam: 'Guinée',
      homeFlag: '🇬🇳',
      awayTeam: 'Mali',
      awayFlag: '🇲🇱',
      date: '02 Déc 2024',
      time: '19:00',
      venue: 'Stade de Conakry',
      competition: 'Éliminatoires CAN 2025',
      ticketsAvailable: false,
      price: 'N/A'
    }
  ];

  return (
    <section className="bg-white rounded-xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Prochains matchs</h3>
        <Link to="/competitions" className="text-mali-green hover:text-mali-green/80 font-semibold text-sm">
          Voir le calendrier
        </Link>
      </div>

      <div className="space-y-4">
        {upcomingMatches.map((match) => (
          <div
            key={match.id}
            className="border border-gray-200 rounded-lg p-4 hover:border-mali-green/50 transition-all duration-200"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                {match.competition}
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <Calendar className="w-3 h-3 mr-1" />
                {match.date}
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4 mb-3">
              <div className="text-center flex-1">
                <div className="text-lg mb-1">{match.homeFlag}</div>
                <div className="font-semibold text-sm text-gray-900">{match.homeTeam}</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-400">VS</div>
                <div className="text-xs text-gray-500 mt-1">{match.time}</div>
              </div>
              
              <div className="text-center flex-1">
                <div className="text-lg mb-1">{match.awayFlag}</div>
                <div className="font-semibold text-sm text-gray-900">{match.awayTeam}</div>
              </div>
            </div>

            <div className="text-center mb-3">
              <div className="flex items-center justify-center text-xs text-gray-500 mb-2">
                <MapPin className="w-3 h-3 mr-1" />
                {match.venue}
              </div>
              
              {match.ticketsAvailable && (
                <div className="text-xs font-semibold text-mali-green mb-2">
                  À partir de {match.price}
                </div>
              )}
            </div>

            {match.ticketsAvailable ? (
              <Link
                to="/billetterie"
                className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-mali-red to-red-600 text-white text-sm font-semibold rounded-lg hover:shadow-md transition-all duration-200"
              >
                <Ticket className="w-4 h-4 mr-2" />
                Acheter des billets
              </Link>
            ) : (
              <div className="w-full text-center py-2 text-sm text-gray-500">
                Billetterie non disponible
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingMatches;