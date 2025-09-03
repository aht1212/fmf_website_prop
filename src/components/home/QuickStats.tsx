import React from 'react';
import { Trophy, Users, Calendar, Star } from 'lucide-react';

const QuickStats = () => {
  const stats = [
    {
      icon: Trophy,
      value: '3ème',
      label: 'CAN 2023',
      color: 'text-mali-yellow bg-mali-yellow/10',
      trend: '+1 place'
    },
    {
      icon: Users,
      value: '156',
      label: 'Clubs affiliés',
      color: 'text-mali-green bg-mali-green/10',
      trend: '+12 cette année'
    },
    {
      icon: Calendar,
      value: '24',
      label: 'Matchs prévus',
      color: 'text-mali-red bg-mali-red/10',
      trend: 'Cette saison'
    },
    {
      icon: Star,
      value: '89K',
      label: 'Supporters',
      color: 'text-blue-600 bg-blue-600/10',
      trend: '+5% ce mois'
    }
  ];

  return (
    <section className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">
                {stat.trend}
              </span>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickStats;