import React, { useState } from 'react';
import { Calendar, MapPin, Users, CreditCard, Clock, Star, Search, Filter, Ticket, Play, Award } from 'lucide-react';

interface Event {
  id: number;
  name: string;
  type: 'Match International' | 'Match National' | 'Coupe' | 'Tournoi';
  date: string;
  time: string;
  venue: string;
  city: string;
  description: string;
  image: string;
  teams: {
    team1: string;
    team2: string;
    logo1?: string;
    logo2?: string;
  };
  ticketCategories: {
    name: string;
    price: number;
    available: number;
    description: string;
    color: string;
  }[];
  status: 'En vente' | 'Bientôt disponible' | 'Épuisé' | 'Terminé';
  totalCapacity: number;
  soldTickets: number;
  featured?: boolean;
}

const events: Event[] = [
  {
    id: 1,
    name: 'Mali vs Sénégal',
    type: 'Match International',
    date: '20 Nov 2024',
    time: '20:00',
    venue: 'Stade du 26 Mars',
    city: 'Bamako',
    description: 'Match crucial des éliminatoires de la CAN 2025 entre les Aigles du Mali et les Lions de la Téranga.',
    image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800',
    teams: {
      team1: 'Mali',
      team2: 'Sénégal'
    },
    ticketCategories: [
      {
        name: 'VIP',
        price: 25000,
        available: 50,
        description: 'Place assise couverte, accès lounge, boissons incluses',
        color: 'bg-mali-yellow'
      },
      {
        name: 'Tribune Centrale',
        price: 15000,
        available: 200,
        description: 'Place assise couverte, vue optimale',
        color: 'bg-mali-green'
      },
      {
        name: 'Tribune Latérale',
        price: 10000,
        available: 300,
        description: 'Place assise, bonne vue sur le terrain',
        color: 'bg-mali-red'
      },
      {
        name: 'Tribune Populaire',
        price: 5000,
        available: 500,
        description: 'Place debout, ambiance festive',
        color: 'bg-gray-600'
      }
    ],
    status: 'En vente',
    totalCapacity: 50000,
    soldTickets: 35000,
    featured: true
  },
  {
    id: 2,
    name: 'Djoliba AC vs Stade Malien',
    type: 'Match National',
    date: '22 Nov 2024',
    time: '16:00',
    venue: 'Stade du 26 Mars',
    city: 'Bamako',
    description: 'Classique du football malien entre les deux géants de Bamako.',
    image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800',
    teams: {
      team1: 'Djoliba AC',
      team2: 'Stade Malien'
    },
    ticketCategories: [
      {
        name: 'VIP',
        price: 15000,
        available: 30,
        description: 'Place assise couverte, accès lounge',
        color: 'bg-mali-yellow'
      },
      {
        name: 'Tribune Centrale',
        price: 8000,
        available: 150,
        description: 'Place assise couverte',
        color: 'bg-mali-green'
      },
      {
        name: 'Tribune Latérale',
        price: 5000,
        available: 250,
        description: 'Place assise',
        color: 'bg-mali-red'
      },
      {
        name: 'Tribune Populaire',
        price: 2000,
        available: 400,
        description: 'Place debout',
        color: 'bg-gray-600'
      }
    ],
    status: 'En vente',
    totalCapacity: 50000,
    soldTickets: 28000
  },
  {
    id: 3,
    name: 'Mali U20 vs Ghana U20',
    type: 'Tournoi',
    date: '30 Nov 2024',
    time: '18:00',
    venue: 'Centre Salif Keita',
    city: 'Bamako',
    description: 'Match de qualification pour la CAN U20 2025.',
    image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800',
    teams: {
      team1: 'Mali U20',
      team2: 'Ghana U20'
    },
    ticketCategories: [
      {
        name: 'Tribune Centrale',
        price: 3000,
        available: 100,
        description: 'Place assise',
        color: 'bg-mali-green'
      },
      {
        name: 'Tribune Latérale',
        price: 2000,
        available: 150,
        description: 'Place assise',
        color: 'bg-mali-red'
      },
      {
        name: 'Tribune Populaire',
        price: 1000,
        available: 200,
        description: 'Place debout',
        color: 'bg-gray-600'
      }
    ],
    status: 'Bientôt disponible',
    totalCapacity: 8000,
    soldTickets: 0
  },
  {
    id: 4,
    name: 'Coupe du Mali - Finale',
    type: 'Coupe',
    date: '15 Dec 2024',
    time: '20:00',
    venue: 'Stade du 26 Mars',
    city: 'Bamako',
    description: 'Grande finale de la Coupe du Mali 2024.',
    image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800',
    teams: {
      team1: 'À déterminer',
      team2: 'À déterminer'
    },
    ticketCategories: [
      {
        name: 'VIP',
        price: 30000,
        available: 100,
        description: 'Place assise couverte, accès lounge, buffet inclus',
        color: 'bg-mali-yellow'
      },
      {
        name: 'Tribune Centrale',
        price: 20000,
        available: 300,
        description: 'Place assise couverte, vue optimale',
        color: 'bg-mali-green'
      },
      {
        name: 'Tribune Latérale',
        price: 15000,
        available: 400,
        description: 'Place assise, bonne vue',
        color: 'bg-mali-red'
      },
      {
        name: 'Tribune Populaire',
        price: 8000,
        available: 600,
        description: 'Place debout, ambiance festive',
        color: 'bg-gray-600'
      }
    ],
    status: 'Bientôt disponible',
    totalCapacity: 50000,
    soldTickets: 0
  }
];

const Tickets = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('Toutes');
  const [selectedStatus, setSelectedStatus] = useState<string>('Toutes');
  const [sortBy, setSortBy] = useState<'date' | 'price' | 'name'>('date');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [quantity, setQuantity] = useState(1);

  const types = ['Toutes', 'Match International', 'Match National', 'Coupe', 'Tournoi'];
  const statuses = ['Toutes', 'En vente', 'Bientôt disponible', 'Épuisé', 'Terminé'];

  const filteredEvents = events
    .filter(event => {
      const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.teams.team1.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.teams.team2.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === 'Toutes' || event.type === selectedType;
      const matchesStatus = selectedStatus === 'Toutes' || event.status === selectedStatus;
      return matchesSearch && matchesType && matchesStatus;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'price':
          return Math.min(...a.ticketCategories.map(cat => cat.price)) - Math.min(...b.ticketCategories.map(cat => cat.price));
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En vente': return 'bg-green-500 text-white';
      case 'Bientôt disponible': return 'bg-blue-500 text-white';
      case 'Épuisé': return 'bg-red-500 text-white';
      case 'Terminé': return 'bg-gray-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Match International': return 'bg-mali-yellow text-black';
      case 'Match National': return 'bg-mali-green text-white';
      case 'Coupe': return 'bg-mali-red text-white';
      case 'Tournoi': return 'bg-blue-600 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  const calculateTotalPrice = () => {
    if (!selectedEvent || !selectedCategory) return 0;
    const category = selectedEvent.ticketCategories.find(cat => cat.name === selectedCategory);
    return category ? category.price * quantity : 0;
  };

  const handlePurchase = () => {
    if (!selectedEvent || !selectedCategory || quantity <= 0) return;
    
    // Simuler l'achat
    alert(`Achat de ${quantity} billet(s) ${selectedCategory} pour ${selectedEvent.name} - Total: ${calculateTotalPrice().toLocaleString()} FCFA`);
    setSelectedEvent(null);
    setSelectedCategory('');
    setQuantity(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-mali-green to-mali-red text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Billetterie Officielle
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Réservez vos places pour tous les matchs et événements du football malien
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
                placeholder="Rechercher un événement..."
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
              <option value="date">Date</option>
              <option value="price">Prix</option>
              <option value="name">Nom</option>
            </select>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredEvents.length === 0 ? (
          <div className="text-center py-20">
            <Ticket className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Aucun événement trouvé</h3>
            <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(event.type)}`}>
                      {event.type}
                    </span>
                    <div className="flex gap-2">
                      {event.featured && (
                        <span className="px-3 py-1 bg-mali-yellow text-black text-xs font-semibold rounded-full flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          À la une
                        </span>
                      )}
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(event.status)}`}>
                        {event.status}
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{event.name}</h3>
                    <div className="flex items-center gap-4 text-white/80 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {event.date} à {event.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {event.venue}, {event.city}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Teams */}
                  <div className="mb-4 p-4 bg-gradient-to-r from-mali-green/10 to-mali-red/10 rounded-lg border border-mali-green/20">
                    <div className="flex items-center justify-center gap-4 text-lg font-semibold">
                      <span className="text-mali-green">{event.teams.team1}</span>
                      <span className="text-gray-500">vs</span>
                      <span className="text-mali-red">{event.teams.team2}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Ticket Availability */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Disponibilité</span>
                      <span className="font-semibold text-gray-900">
                        {event.soldTickets.toLocaleString()} / {event.totalCapacity.toLocaleString()} billets vendus
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div 
                        className="bg-mali-green h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(event.soldTickets / event.totalCapacity) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Ticket Categories Preview */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Ticket className="w-4 h-4 text-mali-yellow" />
                      Catégories de billets
                    </h4>
                    <div className="space-y-2">
                      {event.ticketCategories.slice(0, 2).map((category, index) => (
                        <div key={index} className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                            <span className="font-medium">{category.name}</span>
                          </div>
                          <span className="font-semibold text-mali-green">
                            {category.price.toLocaleString()} FCFA
                          </span>
                        </div>
                      ))}
                      {event.ticketCategories.length > 2 && (
                        <div className="text-sm text-mali-green font-medium text-center">
                          +{event.ticketCategories.length - 2} autres catégories
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedEvent(event)}
                      className="flex-1 bg-gradient-to-r from-mali-green to-mali-red text-white text-center py-3 px-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      Acheter des billets
                    </button>
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

      {/* Purchase Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Acheter des billets</h3>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">{selectedEvent.name}</h4>
                <p className="text-sm text-gray-600 mb-2">
                  {selectedEvent.date} à {selectedEvent.time} - {selectedEvent.venue}
                </p>
                <div className="flex items-center justify-center gap-4 text-sm font-semibold p-3 bg-gray-50 rounded-lg">
                  <span className="text-mali-green">{selectedEvent.teams.team1}</span>
                  <span className="text-gray-500">vs</span>
                  <span className="text-mali-red">{selectedEvent.teams.team2}</span>
                </div>
              </div>

              {/* Category Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Sélectionnez une catégorie
                </label>
                <div className="space-y-2">
                  {selectedEvent.ticketCategories.map((category, index) => (
                    <label key={index} className="flex items-center p-3 border rounded-lg cursor-pointer hover:border-mali-green">
                      <input
                        type="radio"
                        name="category"
                        value={category.name}
                        checked={selectedCategory === category.name}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="mr-3 text-mali-green focus:ring-mali-green"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{category.name}</span>
                          <span className="font-semibold text-mali-green">
                            {category.price.toLocaleString()} FCFA
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                        <p className="text-sm text-gray-500 mt-1">
                          {category.available} places disponibles
                        </p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Quantity Selection */}
              {selectedCategory && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Quantité
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold min-w-[3rem] text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                    >
                    </button>
                  </div>
                </div>
              )}

              {/* Total Price */}
              {selectedCategory && (
                <div className="mb-6 p-4 bg-mali-green/10 rounded-lg">
                  <div className="flex items-center justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-mali-green">{calculateTotalPrice().toLocaleString()} FCFA</span>
                  </div>
                </div>
              )}

              {/* Purchase Button */}
              <button
                onClick={handlePurchase}
                disabled={!selectedCategory || quantity <= 0}
                className="w-full bg-gradient-to-r from-mali-green to-mali-red text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                Procéder à l'achat
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Statistiques de la Billetterie
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un aperçu de l'activité de réservation des événements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-mali-green mb-2">4</div>
              <div className="text-gray-600">Événements à venir</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-mali-yellow mb-2">63K</div>
              <div className="text-gray-600">Billets vendus</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-mali-red mb-2">158K</div>
              <div className="text-gray-600">Capacité totale</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">12</div>
              <div className="text-gray-600">Catégories de billets</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;