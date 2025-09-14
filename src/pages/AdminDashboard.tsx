import React, { useState } from 'react';
import { Users, Trophy, Calendar, Eye, TrendingUp, TrendingDown, Plus, Edit, Trash2, Search, Filter, BarChart3, Settings, Bell, User, LogOut } from 'lucide-react';

interface Statistic {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  color: string;
}

interface RecentActivity {
  id: number;
  type: 'user' | 'news' | 'match' | 'ticket';
  action: string;
  user: string;
  time: string;
  status: 'success' | 'warning' | 'error';
}

interface QuickAction {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  action: string;
}

const statistics: Statistic[] = [
  {
    title: 'Utilisateurs actifs',
    value: '12,847',
    change: 12.5,
    icon: <Users className="w-6 h-6" />,
    color: 'text-blue-600'
  },
  {
    title: 'Actualités publiées',
    value: '156',
    change: 8.2,
    icon: <Eye className="w-6 h-6" />,
    color: 'text-green-600'
  },
  {
    title: 'Matchs programmés',
    value: '23',
    change: -3.1,
    icon: <Calendar className="w-6 h-6" />,
    color: 'text-yellow-600'
  },
  {
    title: 'Billets vendus',
    value: '8,432',
    change: 15.7,
    icon: <Trophy className="w-6 h-6" />,
    color: 'text-purple-600'
  }
];

const recentActivities: RecentActivity[] = [
  {
    id: 1,
    type: 'user',
    action: 'Nouveau compte créé',
    user: 'Mamadou Diallo',
    time: 'Il y a 5 minutes',
    status: 'success'
  },
  {
    id: 2,
    type: 'news',
    action: 'Article publié',
    user: 'Fatoumata Keita',
    time: 'Il y a 15 minutes',
    status: 'success'
  },
  {
    id: 3,
    type: 'match',
    action: 'Match programmé',
    user: 'Boukary Traoré',
    time: 'Il y a 1 heure',
    status: 'success'
  },
  {
    id: 4,
    type: 'ticket',
    action: 'Problème de billetterie',
    user: 'Aïcha Koné',
    time: 'Il y a 2 heures',
    status: 'warning'
  },
  {
    id: 5,
    type: 'user',
    action: 'Connexion échouée',
    user: 'Modibo Sidibé',
    time: 'Il y a 3 heures',
    status: 'error'
  }
];

const quickActions: QuickAction[] = [
  {
    title: 'Ajouter une actualité',
    description: 'Publier un nouvel article',
    icon: <Plus className="w-6 h-6" />,
    color: 'bg-green-500',
    action: 'add-news'
  },
  {
    title: 'Programmer un match',
    description: 'Créer un nouvel événement',
    icon: <Calendar className="w-6 h-6" />,
    color: 'bg-blue-500',
    action: 'add-match'
  },
  {
    title: 'Gérer les utilisateurs',
    description: 'Administrer les comptes',
    icon: <Users className="w-6 h-6" />,
    color: 'bg-purple-500',
    action: 'manage-users'
  },
  {
    title: 'Voir les statistiques',
    description: 'Analyser les performances',
    icon: <BarChart3 className="w-6 h-6" />,
    color: 'bg-yellow-500',
    action: 'view-stats'
  }
];

const AdminDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');
  const [searchTerm, setSearchTerm] = useState('');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'text-green-600 bg-green-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'error': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success': return '✓';
      case 'warning': return '⚠';
      case 'error': return '✗';
      default: return '•';
    }
  };

  const handleQuickAction = (action: string) => {
    switch (action) {
      case 'add-news':
        alert('Redirection vers l\'ajout d\'actualité...');
        break;
      case 'add-match':
        alert('Redirection vers la programmation de match...');
        break;
      case 'manage-users':
        alert('Redirection vers la gestion des utilisateurs...');
        break;
      case 'view-stats':
        alert('Redirection vers les statistiques détaillées...');
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-gray-900">Tableau de Bord</h1>
              <span className="px-3 py-1 bg-mali-green text-white text-sm font-medium rounded-full">
                Administrateur
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Settings className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-mali-green rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  A
                </div>
                <span className="text-sm font-medium text-gray-700">Admin</span>
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Period Selector */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">Période :</span>
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-mali-green focus:border-transparent"
            >
              <option value="1d">24h</option>
              <option value="7d">7 jours</option>
              <option value="30d">30 jours</option>
              <option value="90d">90 jours</option>
            </select>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-mali-green focus:border-transparent"
              />
            </div>
            <button className="px-4 py-2 bg-mali-green text-white rounded-lg hover:bg-mali-green/90 transition-colors text-sm font-medium">
              <Plus className="w-4 h-4 inline mr-2" />
              Nouveau
            </button>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.color.replace('text-', 'bg-')} bg-opacity-10`}>
                  <div className={stat.color}>
                    {stat.icon}
                  </div>
                </div>
                <div className={`flex items-center gap-1 text-sm font-medium ${
                  stat.change >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change >= 0 ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  {Math.abs(stat.change)}%
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-600">{stat.title}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Actions rapides</h2>
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickAction(action.action)}
                    className="w-full p-4 border border-gray-200 rounded-lg hover:border-mali-green hover:bg-mali-green/5 transition-all duration-200 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white ${action.color}`}>
                        {action.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{action.title}</h3>
                        <p className="text-sm text-gray-600">{action.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Activités récentes</h2>
                <button className="text-sm text-mali-green hover:text-mali-green/80 font-medium">
                  Voir tout
                </button>
              </div>
              
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${getStatusColor(activity.status)}`}>
                      {getStatusIcon(activity.status)}
                    </div>
                    
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <p className="text-xs text-gray-500">par {activity.user}</p>
                    </div>
                    
                    <span className="text-xs text-gray-400">{activity.time}</span>
                    
                    <div className="flex items-center gap-2">
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Traffic Chart */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Trafic du site</h2>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <BarChart3 className="w-16 h-16 mx-auto mb-4" />
                <p>Graphique du trafic</p>
                <p className="text-sm">Données des 30 derniers jours</p>
              </div>
            </div>
          </div>

          {/* User Engagement */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Engagement utilisateurs</h2>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Users className="w-16 h-16 mx-auto mb-4" />
                <p>Métriques d'engagement</p>
                <p className="text-sm">Temps passé, pages vues, etc.</p>
              </div>
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">État du système</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-green-800">Serveur principal</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-green-800">Base de données</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-sm font-medium text-yellow-800">Stockage</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-green-800">Réseau</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;