import React, { useState } from 'react';
import { 
  BarChart3, 
  Users, 
  Calendar, 
  FileText, 
  Settings, 
  Plus,
  Edit,
  Trash2,
  Eye,
  TrendingUp,
  Ticket
} from 'lucide-react';
import { useNews } from '../contexts/NewsContext';
import { useTickets } from '../contexts/TicketsContext';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const { news, addNews, updateNews, deleteNews } = useNews();
  const { events, addEvent, purchases } = useTickets();
  
  const [showNewsForm, setShowNewsForm] = useState(false);
  const [editingNews, setEditingNews] = useState<any>(null);
  const [newsForm, setNewsForm] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'Sélections' as const,
    image: '',
    featured: false
  });

  const [showEventForm, setShowEventForm] = useState(false);
  const [eventForm, setEventForm] = useState({
    title: '',
    date: '',
    time: '',
    venue: '',
    homeTeam: '',
    awayTeam: '',
    homeFlag: '',
    awayFlag: '',
    competition: '',
    image: '',
    status: 'available' as const,
    prices: [
      { category: 'Tribune VIP', price: 0, available: 0, total: 0 },
      { category: 'Tribune Couverte', price: 0, available: 0, total: 0 },
      { category: 'Tribune Populaire', price: 0, available: 0, total: 0 },
      { category: 'Pelouse', price: 0, available: 0, total: 0 }
    ]
  });

  const stats = {
    totalVisits: 125432,
    totalNews: news.length,
    totalEvents: events.length,
    totalTicketsSold: purchases.length,
    revenue: purchases.reduce((sum, purchase) => sum + purchase.totalPrice, 0)
  };

  const tabs = [
    { id: 'dashboard', name: 'Tableau de bord', icon: BarChart3 },
    { id: 'news', name: 'Actualités', icon: FileText },
    { id: 'events', name: 'Événements', icon: Calendar },
    { id: 'tickets', name: 'Billetterie', icon: Ticket },
    { id: 'settings', name: 'Paramètres', icon: Settings }
  ];

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingNews) {
      updateNews(editingNews.id, {
        ...newsForm,
        views: editingNews.views,
        date: editingNews.date
      });
      setEditingNews(null);
    } else {
      addNews({
        ...newsForm,
        views: 0,
        date: new Date().toLocaleDateString('fr-FR')
      });
    }
    setNewsForm({ title: '', excerpt: '', content: '', category: 'Sélections', image: '', featured: false });
    setShowNewsForm(false);
  };

  const handleEventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addEvent(eventForm);
    setEventForm({
      title: '', date: '', time: '', venue: '', homeTeam: '', awayTeam: '',
      homeFlag: '', awayFlag: '', competition: '', image: '', status: 'available',
      prices: [
        { category: 'Tribune VIP', price: 0, available: 0, total: 0 },
        { category: 'Tribune Couverte', price: 0, available: 0, total: 0 },
        { category: 'Tribune Populaire', price: 0, available: 0, total: 0 },
        { category: 'Pelouse', price: 0, available: 0, total: 0 }
      ]
    });
    setShowEventForm(false);
  };

  const editNews = (article: any) => {
    setEditingNews(article);
    setNewsForm({
      title: article.title,
      excerpt: article.excerpt,
      content: article.content,
      category: article.category,
      image: article.image,
      featured: article.featured
    });
    setShowNewsForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Administration FMF</h1>
              <p className="text-gray-600">Tableau de bord administrateur</p>
            </div>
            <div className="text-sm text-gray-500">
              Connecté en tant qu'<span className="font-semibold">Admin Principal</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex space-x-8">
          {/* Sidebar */}
          <div className="w-64 bg-white rounded-xl shadow-lg p-6">
            <nav className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-mali-green text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{tab.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'dashboard' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Vue d'ensemble</h2>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-600 text-sm font-medium">Visites totales</p>
                          <p className="text-2xl font-bold text-gray-900">{stats.totalVisits.toLocaleString()}</p>
                        </div>
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <Eye className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                      <div className="mt-4 flex items-center text-green-600 text-sm">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        <span>+12% ce mois</span>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-600 text-sm font-medium">Articles publiés</p>
                          <p className="text-2xl font-bold text-gray-900">{stats.totalNews}</p>
                        </div>
                        <div className="w-12 h-12 bg-mali-green/10 rounded-full flex items-center justify-center">
                          <FileText className="w-6 h-6 text-mali-green" />
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-600 text-sm font-medium">Événements</p>
                          <p className="text-2xl font-bold text-gray-900">{stats.totalEvents}</p>
                        </div>
                        <div className="w-12 h-12 bg-mali-yellow/10 rounded-full flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-mali-yellow" />
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-600 text-sm font-medium">Billets vendus</p>
                          <p className="text-2xl font-bold text-gray-900">{stats.totalTicketsSold}</p>
                        </div>
                        <div className="w-12 h-12 bg-mali-red/10 rounded-full flex items-center justify-center">
                          <Ticket className="w-6 h-6 text-mali-red" />
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-600 text-sm font-medium">Recettes</p>
                          <p className="text-2xl font-bold text-gray-900">
                            {stats.revenue.toLocaleString()} <span className="text-sm font-normal">FCFA</span>
                          </p>
                        </div>
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 text-green-600" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Derniers articles</h3>
                      <div className="space-y-4">
                        {news.slice(0, 5).map((article) => (
                          <div key={article.id} className="flex items-center space-x-4">
                            <img src={article.image} alt="" className="w-12 h-12 rounded-lg object-cover" />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">{article.title}</p>
                              <p className="text-xs text-gray-500">{article.date} • {article.views} vues</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Ventes récentes</h3>
                      <div className="space-y-4">
                        {purchases.slice(0, 5).map((purchase) => (
                          <div key={purchase.id} className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-gray-900">{purchase.buyerInfo.name}</p>
                              <p className="text-xs text-gray-500">{purchase.category} • {purchase.quantity} billet(s)</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-semibold text-mali-green">{purchase.totalPrice.toLocaleString()} FCFA</p>
                              <p className="text-xs text-gray-500">{purchase.purchaseDate.split('T')[0]}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'news' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">Gestion des actualités</h2>
                  <button
                    onClick={() => setShowNewsForm(true)}
                    className="flex items-center space-x-2 bg-mali-green text-white px-4 py-2 rounded-lg hover:bg-mali-green/90 transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                    <span>Nouvel article</span>
                  </button>
                </div>

                {showNewsForm && (
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      {editingNews ? 'Modifier l\'article' : 'Créer un nouvel article'}
                    </h3>
                    <form onSubmit={handleNewsSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Titre</label>
                          <input
                            type="text"
                            required
                            value={newsForm.title}
                            onChange={(e) => setNewsForm({ ...newsForm, title: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-mali-green focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Catégorie</label>
                          <select
                            value={newsForm.category}
                            onChange={(e) => setNewsForm({ ...newsForm, category: e.target.value as any })}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-mali-green focus:border-transparent"
                          >
                            <option value="Sélections">Sélections</option>
                            <option value="Compétitions">Compétitions</option>
                            <option value="Clubs">Clubs</option>
                            <option value="Communiqués">Communiqués</option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Extrait</label>
                        <textarea
                          required
                          value={newsForm.excerpt}
                          onChange={(e) => setNewsForm({ ...newsForm, excerpt: e.target.value })}
                          rows={3}
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-mali-green focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                        <input
                          type="url"
                          required
                          value={newsForm.image}
                          onChange={(e) => setNewsForm({ ...newsForm, image: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-mali-green focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Contenu</label>
                        <textarea
                          required
                          value={newsForm.content}
                          onChange={(e) => setNewsForm({ ...newsForm, content: e.target.value })}
                          rows={6}
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-mali-green focus:border-transparent"
                        />
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="featured"
                          checked={newsForm.featured}
                          onChange={(e) => setNewsForm({ ...newsForm, featured: e.target.checked })}
                          className="mr-2"
                        />
                        <label htmlFor="featured" className="text-sm text-gray-700">Article à la une</label>
                      </div>
                      
                      <div className="flex space-x-4">
                        <button
                          type="submit"
                          className="bg-mali-green text-white px-6 py-2 rounded-lg hover:bg-mali-green/90 transition-colors"
                        >
                          {editingNews ? 'Modifier' : 'Publier'}
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setShowNewsForm(false);
                            setEditingNews(null);
                            setNewsForm({ title: '', excerpt: '', content: '', category: 'Sélections', image: '', featured: false });
                          }}
                          className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                        >
                          Annuler
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Article</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Catégorie</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vues</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {news.map((article) => (
                        <tr key={article.id}>
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <img src={article.image} alt="" className="w-12 h-12 rounded-lg object-cover mr-4" />
                              <div>
                                <div className="text-sm font-medium text-gray-900">{article.title}</div>
                                {article.featured && (
                                  <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                                    À la une
                                  </span>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">{article.category}</td>
                          <td className="px-6 py-4 text-sm text-gray-500">{article.date}</td>
                          <td className="px-6 py-4 text-sm text-gray-500">{article.views}</td>
                          <td className="px-6 py-4 text-sm font-medium space-x-2">
                            <button
                              onClick={() => editNews(article)}
                              className="text-mali-green hover:text-mali-green/80"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => deleteNews(article.id)}
                              className="text-red-600 hover:text-red-800"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'events' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">Gestion des événements</h2>
                  <button
                    onClick={() => setShowEventForm(true)}
                    className="flex items-center space-x-2 bg-mali-green text-white px-4 py-2 rounded-lg hover:bg-mali-green/90 transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                    <span>Nouvel événement</span>
                  </button>
                </div>

                {showEventForm && (
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Créer un nouvel événement</h3>
                    <form onSubmit={handleEventSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Titre</label>
                          <input
                            type="text"
                            required
                            value={eventForm.title}
                            onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-mali-green focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                          <input
                            type="date"
                            required
                            value={eventForm.date}
                            onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-mali-green focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Heure</label>
                          <input
                            type="time"
                            required
                            value={eventForm.time}
                            onChange={(e) => setEventForm({ ...eventForm, time: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-mali-green focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Lieu</label>
                          <input
                            type="text"
                            required
                            value={eventForm.venue}
                            onChange={(e) => setEventForm({ ...eventForm, venue: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-mali-green focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Compétition</label>
                          <input
                            type="text"
                            required
                            value={eventForm.competition}
                            onChange={(e) => setEventForm({ ...eventForm, competition: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-mali-green focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-4 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Équipe domicile</label>
                          <input
                            type="text"
                            required
                            value={eventForm.homeTeam}
                            onChange={(e) => setEventForm({ ...eventForm, homeTeam: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-mali-green focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Drapeau domicile</label>
                          <input
                            type="text"
                            required
                            value={eventForm.homeFlag}
                            onChange={(e) => setEventForm({ ...eventForm, homeFlag: e.target.value })}
                            placeholder="🇲🇱"
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-mali-green focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Équipe extérieur</label>
                          <input
                            type="text"
                            required
                            value={eventForm.awayTeam}
                            onChange={(e) => setEventForm({ ...eventForm, awayTeam: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-mali-green focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Drapeau extérieur</label>
                          <input
                            type="text"
                            required
                            value={eventForm.awayFlag}
                            onChange={(e) => setEventForm({ ...eventForm, awayFlag: e.target.value })}
                            placeholder="🇸🇳"
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-mali-green focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                        <input
                          type="url"
                          required
                          value={eventForm.image}
                          onChange={(e) => setEventForm({ ...eventForm, image: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-mali-green focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-4">Catégories de prix</label>
                        <div className="grid md:grid-cols-2 gap-4">
                          {eventForm.prices.map((price, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg p-4">
                              <h4 className="font-semibold text-gray-900 mb-3">{price.category}</h4>
                              <div className="grid grid-cols-3 gap-2">
                                <div>
                                  <label className="block text-xs text-gray-500 mb-1">Prix</label>
                                  <input
                                    type="number"
                                    value={price.price}
                                    onChange={(e) => {
                                      const updatedPrices = [...eventForm.prices];
                                      updatedPrices[index].price = parseInt(e.target.value) || 0;
                                      setEventForm({ ...eventForm, prices: updatedPrices });
                                    }}
                                    className="w-full px-2 py-1 border border-gray-200 rounded text-sm"
                                  />
                                </div>
                                <div>
                                  <label className="block text-xs text-gray-500 mb-1">Total</label>
                                  <input
                                    type="number"
                                    value={price.total}
                                    onChange={(e) => {
                                      const updatedPrices = [...eventForm.prices];
                                      updatedPrices[index].total = parseInt(e.target.value) || 0;
                                      updatedPrices[index].available = parseInt(e.target.value) || 0;
                                      setEventForm({ ...eventForm, prices: updatedPrices });
                                    }}
                                    className="w-full px-2 py-1 border border-gray-200 rounded text-sm"
                                  />
                                </div>
                                <div>
                                  <label className="block text-xs text-gray-500 mb-1">Disponible</label>
                                  <input
                                    type="number"
                                    value={price.available}
                                    onChange={(e) => {
                                      const updatedPrices = [...eventForm.prices];
                                      updatedPrices[index].available = parseInt(e.target.value) || 0;
                                      setEventForm({ ...eventForm, prices: updatedPrices });
                                    }}
                                    className="w-full px-2 py-1 border border-gray-200 rounded text-sm"
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-4">
                        <button
                          type="submit"
                          className="bg-mali-green text-white px-6 py-2 rounded-lg hover:bg-mali-green/90 transition-colors"
                        >
                          Créer l'événement
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowEventForm(false)}
                          className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                        >
                          Annuler
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Événement</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lieu</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {events.map((event) => (
                        <tr key={event.id}>
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <img src={event.image} alt="" className="w-12 h-12 rounded-lg object-cover mr-4" />
                              <div>
                                <div className="text-sm font-medium text-gray-900">{event.title}</div>
                                <div className="text-sm text-gray-500">{event.competition}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-900">{event.date}</div>
                            <div className="text-sm text-gray-500">{event.time}</div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">{event.venue}</td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              event.status === 'available' ? 'bg-green-100 text-green-800' :
                              event.status === 'sold-out' ? 'bg-red-100 text-red-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {event.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm font-medium space-x-2">
                            <button className="text-mali-green hover:text-mali-green/80">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-800">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'tickets' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Gestion de la billetterie</h2>
                
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Ventes récentes</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acheteur</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Événement</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Catégorie</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantité</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">QR Code</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {purchases.map((purchase) => {
                          const event = events.find(e => e.id === purchase.eventId);
                          return (
                            <tr key={purchase.id}>
                              <td className="px-6 py-4">
                                <div className="text-sm font-medium text-gray-900">{purchase.buyerInfo.name}</div>
                                <div className="text-sm text-gray-500">{purchase.buyerInfo.email}</div>
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-900">{event?.title || 'N/A'}</td>
                              <td className="px-6 py-4 text-sm text-gray-900">{purchase.category}</td>
                              <td className="px-6 py-4 text-sm text-gray-900">{purchase.quantity}</td>
                              <td className="px-6 py-4 text-sm font-semibold text-mali-green">
                                {purchase.totalPrice.toLocaleString()} FCFA
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-500">
                                {new Date(purchase.purchaseDate).toLocaleDateString('fr-FR')}
                              </td>
                              <td className="px-6 py-4 text-sm font-mono text-gray-600">{purchase.qrCode}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Paramètres du site</h2>
                
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Informations générales</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nom du site</label>
                      <input
                        type="text"
                        defaultValue="Fédération Malienne de Football"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-mali-green focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email de contact</label>
                      <input
                        type="email"
                        defaultValue="contact@fmf.ml"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-mali-green focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                      <input
                        type="tel"
                        defaultValue="+223 20 22 45 67"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-mali-green focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Adresse</label>
                      <input
                        type="text"
                        defaultValue="Avenue de l'Indépendance, Bamako, Mali"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-mali-green focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <button className="bg-mali-green text-white px-6 py-2 rounded-lg hover:bg-mali-green/90 transition-colors">
                      Sauvegarder les modifications
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Réseaux sociaux</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Facebook</label>
                      <input
                        type="url"
                        defaultValue="https://facebook.com/fmf_officiel"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-mali-green focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Twitter</label>
                      <input
                        type="url"
                        defaultValue="https://twitter.com/fmf_officiel"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-mali-green focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Instagram</label>
                      <input
                        type="url"
                        defaultValue="https://instagram.com/fmf_officiel"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-mali-green focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">YouTube</label>
                      <input
                        type="url"
                        defaultValue="https://youtube.com/fmf_officiel"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-mali-green focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <button className="bg-mali-green text-white px-6 py-2 rounded-lg hover:bg-mali-green/90 transition-colors">
                      Mettre à jour les liens
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;