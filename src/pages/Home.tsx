import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Play, 
  Calendar, 
  Trophy, 
  Users, 
  MapPin, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Award,
  ChevronRight,
  ChevronLeft,
  Clock,
  Eye,
  Heart,
  Share2,
  Download,
  Phone,
  Mail,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from 'lucide-react';
import { useNews } from '../contexts/NewsContext';

const Home = () => {
  const { getFeaturedNews } = useNews();
  const featuredNews = getFeaturedNews();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Données des équipes nationales
  const nationalTeams = [
    {
      id: 1,
      name: 'Aigles du Mali',
      category: 'Sélection A',
      image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800',
      coach: 'Éric Chelle',
      captain: 'Hamari Traoré',
      nextMatch: 'Mali vs Sénégal',
      nextMatchDate: '20 Nov 2024',
      achievements: ['CAN 2012 - 3ème place', 'Qualification Mondial 2022']
    },
    {
      id: 2,
      name: 'Mali U23',
      category: 'Sélection U23',
      image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800',
      coach: 'Fousseni Diawara',
      captain: 'Boubacar Traoré',
      nextMatch: 'Mali U23 vs Ghana U23',
      nextMatchDate: '25 Nov 2024',
      achievements: ['Jeux Olympiques 2024 - Qualification']
    }
  ];

  // Données des compétitions
  const competitions = [
    {
      id: 1,
      name: 'CAN 2025',
      type: 'Compétition Internationale',
      status: 'En cours',
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800',
      startDate: '15 Jan 2025',
      participants: 24,
      prize: '5M USD',
      currentStage: 'Éliminatoires'
    },
    {
      id: 2,
      name: 'Ligue 1 Mali',
      type: 'Championnat National',
      status: 'En cours',
      image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800',
      startDate: '1 Oct 2024',
      participants: 16,
      prize: '50M FCFA',
      currentStage: 'Phase 1'
    }
  ];

  // Données des clubs
  const topClubs = [
    {
      id: 1,
      name: 'Djoliba AC',
      nickname: 'Les Rouges',
      city: 'Bamako',
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800',
      founded: 1960,
      division: 'Ligue 1',
      coach: 'Mamadou Coulibaly',
      achievements: ['Champion 2023', 'Coupe du Mali 2022'],
      currentPosition: 1
    },
    {
      id: 2,
      name: 'Stade Malien',
      nickname: 'Les Blancs',
      city: 'Bamako',
      image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800',
      founded: 1960,
      division: 'Ligue 1',
      coach: 'Sékou Keita',
      achievements: ['Champion 2022', 'Coupe du Mali 2021'],
      currentPosition: 2
    }
  ];

  // Données des événements à venir
  const upcomingEvents = [
    {
      id: 1,
      name: 'Mali vs Sénégal',
      type: 'Match International',
      date: '20 Nov 2024',
      time: '20:00',
      venue: 'Stade du 26 Mars',
      image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Billets en vente'
    },
    {
      id: 2,
      name: 'Djoliba vs Stade Malien',
      type: 'Classique National',
      date: '22 Nov 2024',
      time: '16:00',
      venue: 'Stade du 26 Mars',
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Billets en vente'
    }
  ];

  // Données des statistiques
  const stats = [
    { label: 'Joueurs Licenciés', value: '25,000+', icon: Users, color: 'text-blue-600' },
    { label: 'Clubs Affiliés', value: '450+', icon: Trophy, color: 'text-mali-green' },
    { label: 'Matchs Annuels', value: '2,500+', icon: Calendar, color: 'text-mali-yellow' },
    { label: 'Titres Internationaux', value: '15+', icon: Award, color: 'text-mali-red' }
  ];

  // Données des partenaires
  const partners = [
    { name: 'Orange Mali', logo: 'https://via.placeholder.com/120x60/FF6600/FFFFFF?text=Orange', category: 'Partenaire Principal' },
    { name: 'Ecobank', logo: 'https://via.placeholder.com/120x60/0052CC/FFFFFF?text=Ecobank', category: 'Partenaire Financier' },
    { name: 'Airtel', logo: 'https://via.placeholder.com/120x60/FF0000/FFFFFF?text=Airtel', category: 'Partenaire Télécom' },
    { name: 'Total', logo: 'https://via.placeholder.com/120x60/FF6600/FFFFFF?text=Total', category: 'Partenaire Énergie' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredNews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredNews.length) % featuredNews.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isAutoPlaying]);

  if (featuredNews.length === 0) return null;

  const currentArticle = featuredNews[currentSlide];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Carousel d'actualités */}
      <section className="relative h-screen overflow-hidden">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0">
          <img
            src={currentArticle.image}
            alt={currentArticle.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>

        {/* Contenu du hero */}
        <div className="relative z-10 flex items-center h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Texte principal */}
              <div className="text-white space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-mali-green/90 text-white text-sm font-medium rounded-full">
                  <Star className="w-4 h-4" />
                  Actualité à la une
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  {currentArticle.title}
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                  {currentArticle.excerpt}
                </p>

                <div className="flex items-center gap-6 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {currentArticle.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    {currentArticle.views} vues
                  </div>
                  <div className="px-3 py-1 bg-mali-yellow/90 text-black text-xs font-semibold rounded-full">
                    {currentArticle.category}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link
                    to={`/actualites/${currentArticle.id}`}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-mali-green to-mali-red text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    Lire la suite
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/actualites"
                    className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Toutes les actualités
                  </Link>
                </div>
              </div>

              {/* Navigation du carousel */}
              <div className="hidden lg:flex flex-col items-end space-y-4">
                <button
                  onClick={prevSlide}
                  className="p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Indicateurs de slide */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
          {featuredNews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Section Statistiques */}
      <section className="py-20 bg-gradient-to-r from-mali-green to-mali-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Le Football Malien en Chiffres
            </h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Découvrez l'ampleur et l'impact du football dans notre pays
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className={`w-10 h-10 ${stat.color}`} />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Équipes Nationales */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos Équipes Nationales
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez les sélections qui portent haut les couleurs du Mali
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {nationalTeams.map((team) => (
              <div key={team.id} className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={team.image}
                    alt={team.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-mali-green/90 text-white text-sm font-medium rounded-full mb-2">
                      {team.category}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{team.name}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Entraîneur</div>
                      <div className="font-semibold text-gray-900">{team.coach}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Capitaine</div>
                      <div className="font-semibold text-gray-900">{team.captain}</div>
                    </div>
                  </div>
                  
                  <div className="mb-6 p-4 bg-mali-green/10 rounded-lg">
                    <div className="text-sm text-gray-500 mb-2">Prochain match</div>
                    <div className="font-semibold text-gray-900 mb-1">{team.nextMatch}</div>
                    <div className="text-sm text-mali-green">{team.nextMatchDate}</div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-sm text-gray-500 mb-2">Palmarès récent</div>
                    <div className="space-y-1">
                      {team.achievements.map((achievement, index) => (
                        <div key={index} className="text-sm text-gray-700 flex items-center gap-2">
                          <Trophy className="w-4 h-4 text-mali-yellow" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    to="/equipes"
                    className="inline-flex items-center gap-2 text-mali-green font-semibold hover:text-mali-green/80 transition-colors"
                  >
                    Voir plus de détails
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Compétitions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Compétitions en Cours
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Suivez toutes les compétitions du football malien
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {competitions.map((competition) => (
              <div key={competition.id} className="bg-gradient-to-br from-mali-green/5 to-mali-red/5 rounded-2xl p-8 border border-mali-green/20 hover:shadow-2xl transition-all duration-500 group">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-mali-green/90 text-white text-sm font-medium rounded-full mb-3">
                      {competition.type}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{competition.name}</h3>
                    <div className="text-sm text-gray-600">
                      Du {competition.startDate} • {competition.participants} participants
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-mali-green mb-1">{competition.prize}</div>
                    <div className="text-sm text-gray-500">Prix total</div>
                  </div>
                </div>
                
                <div className="mb-6 p-4 bg-white rounded-lg border border-gray-200">
                  <div className="text-sm text-gray-500 mb-2">Étape actuelle</div>
                  <div className="font-semibold text-gray-900">{competition.currentStage}</div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className={`w-3 h-3 rounded-full ${
                      competition.status === 'En cours' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}></div>
                    {competition.status}
                  </div>
                  
                  <Link
                    to="/competitions"
                    className="inline-flex items-center gap-2 bg-mali-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-mali-green/90 transition-colors group-hover:scale-105"
                  >
                    Suivre
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Clubs Top */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Clubs de l'Élite
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les meilleurs clubs du championnat malien
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {topClubs.map((club, index) => (
              <div key={club.id} className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={club.image}
                    alt={club.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-mali-green/90 text-white text-sm font-medium rounded-full">
                      {club.division}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{club.name}</h3>
                    <div className="text-white/80 text-sm">{club.nickname} • {club.city}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Fondé en</div>
                      <div className="font-semibold text-gray-900">{club.founded}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Position</div>
                      <div className="font-semibold text-mali-green">{club.currentPosition}ème</div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-sm text-gray-500 mb-2">Palmarès récent</div>
                    <div className="space-y-1">
                      {club.achievements.slice(0, 2).map((achievement, index) => (
                        <div key={index} className="text-sm text-gray-700 flex items-center gap-2">
                          <Trophy className="w-4 h-4 text-mali-yellow" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    to="/clubs"
                    className="inline-flex items-center gap-2 text-mali-green font-semibold hover:text-mali-green/80 transition-colors"
                  >
                    Voir tous les clubs
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Événements à Venir */}
      <section className="py-20 bg-gradient-to-br from-mali-green to-mali-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Prochains Événements
            </h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Réservez vos places pour les matchs à venir
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-mali-yellow/90 text-black text-sm font-medium rounded-full mb-3">
                      {event.type}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{event.name}</h3>
                    <div className="text-gray-200 space-y-1">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {event.date} à {event.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {event.venue}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/90 text-white text-sm font-medium rounded-full">
                      {event.status}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  
                  <Link
                    to="/billetterie"
                    className="inline-flex items-center gap-2 bg-white text-mali-green px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors group-hover:scale-105"
                  >
                    Réserver
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/billetterie"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-mali-green transition-all duration-300"
            >
              Voir tous les événements
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section Partenaires */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos Partenaires
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des entreprises qui soutiennent le développement du football malien
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-auto mb-4 opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="text-sm font-medium text-gray-900 mb-1">{partner.name}</div>
                  <div className="text-xs text-gray-500">{partner.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Newsletter */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Restez Connectés
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Recevez les dernières actualités, résultats et informations sur le football malien
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-mali-green focus:border-transparent"
            />
            <button className="px-8 py-4 bg-gradient-to-r from-mali-green to-mali-red text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              S'abonner
            </button>
          </div>
          
          <div className="flex justify-center gap-6 mt-8">
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;