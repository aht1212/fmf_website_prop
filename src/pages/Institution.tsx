import React, { useState } from 'react';
import { Building, Users, Trophy, Calendar, MapPin, Star, Award, BookOpen, Target, Globe, Heart, Shield } from 'lucide-react';

interface Executive {
  id: number;
  name: string;
  position: string;
  photo: string;
  description: string;
  since: string;
}

interface Achievement {
  id: number;
  year: string;
  title: string;
  description: string;
  category: 'Sportif' | 'Institutionnel' | 'Formation' | 'Infrastructure';
  icon: React.ReactNode;
}

interface Statistic {
  value: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}

const executives: Executive[] = [
  {
    id: 1,
    name: 'Mamadou Sidibé',
    position: 'Président',
    photo: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Président de la FMF depuis 2020, ancien joueur professionnel et dirigeant sportif reconnu.',
    since: '2020'
  },
  {
    id: 2,
    name: 'Fatoumata Coulibaly',
    position: 'Vice-Présidente',
    photo: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Vice-présidente chargée du développement du football féminin et de la formation.',
    since: '2021'
  },
  {
    id: 3,
    name: 'Boukary Keita',
    position: 'Secrétaire Général',
    photo: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Secrétaire général responsable de l\'administration et de la gestion quotidienne.',
    since: '2019'
  },
  {
    id: 4,
    name: 'Modibo Sidibé',
    position: 'Directeur Technique',
    photo: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Directeur technique chargé du développement des sélections nationales.',
    since: '2022'
  }
];

const achievements: Achievement[] = [
  {
    id: 1,
    year: '1962',
    title: 'Fondation de la FMF',
    description: 'Création officielle de la Fédération Malienne de Football sous l\'égide de la FIFA.',
    category: 'Institutionnel',
    icon: <Building className="w-6 h-6" />
  },
  {
    id: 2,
    year: '1972',
    title: 'Finaliste CAN',
    description: 'Les Aigles du Mali atteignent la finale de la Coupe d\'Afrique des Nations.',
    category: 'Sportif',
    icon: <Trophy className="w-6 h-6" />
  },
  {
    id: 3,
    year: '1985',
    title: 'Premier centre de formation',
    description: 'Ouverture du premier centre de formation de jeunes talents à Bamako.',
    category: 'Formation',
    icon: <BookOpen className="w-6 h-6" />
  },
  {
    id: 4,
    year: '1995',
    title: 'Stade du 26 Mars',
    description: 'Inauguration du stade national du 26 Mars avec une capacité de 50 000 places.',
    category: 'Infrastructure',
    icon: <MapPin className="w-6 h-6" />
  },
  {
    id: 5,
    year: '2012',
    title: '3ème place CAN',
    description: 'Les Aigles du Mali terminent 3ème de la Coupe d\'Afrique des Nations.',
    category: 'Sportif',
    icon: <Trophy className="w-6 h-6" />
  },
  {
    id: 6,
    year: '2019',
    title: 'Centre Salif Keita',
    description: 'Ouverture du centre d\'excellence Salif Keita pour la formation des jeunes.',
    category: 'Formation',
    icon: <BookOpen className="w-6 h-6" />
  },
  {
    id: 7,
    year: '2022',
    title: 'Femmes en football',
    description: 'Lancement du programme de développement du football féminin au Mali.',
    category: 'Formation',
    icon: <Heart className="w-6 h-6" />
  },
  {
    id: 8,
    year: '2024',
    title: 'Qualification Mondial 2026',
    description: 'Les Aigles du Mali se qualifient pour la première fois de leur histoire à une Coupe du Monde.',
    category: 'Sportif',
    icon: <Globe className="w-6 h-6" />
  }
];

const statistics: Statistic[] = [
  {
    value: '62',
    label: 'Années d\'existence',
    icon: <Calendar className="w-8 h-8" />,
    color: 'text-mali-green'
  },
  {
    value: '156',
    label: 'Clubs affiliés',
    icon: <Users className="w-8 h-8" />,
    color: 'text-mali-yellow'
  },
  {
    value: '8',
    label: 'Régions couvertes',
    icon: <MapPin className="w-8 h-8" />,
    color: 'text-mali-red'
  },
  {
    value: '12',
    label: 'Participations CAN',
    icon: <Trophy className="w-8 h-8" />,
    color: 'text-blue-600'
  }
];

const Institution = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Toutes');

  const categories = ['Toutes', 'Sportif', 'Institutionnel', 'Formation', 'Infrastructure'];

  const filteredAchievements = achievements.filter(achievement => 
    selectedCategory === 'Toutes' || achievement.category === selectedCategory
  );

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Sportif': return 'bg-mali-green text-white';
      case 'Institutionnel': return 'bg-mali-yellow text-black';
      case 'Formation': return 'bg-mali-red text-white';
      case 'Infrastructure': return 'bg-blue-600 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-mali-green to-mali-red text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Notre Institution
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Découvrez l\'histoire, la mission et l\'organisation de la Fédération Malienne de Football
          </p>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className={`mx-auto mb-4 ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-mali-green to-mali-red rounded-full flex items-center justify-center mx-auto mb-6 text-white">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Notre Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed text-center">
              Développer et promouvoir le football au Mali en créant les conditions optimales 
              pour la pratique de ce sport à tous les niveaux, du football de masse au football d'élite.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-2 h-2 bg-mali-green rounded-full"></div>
                Organiser et superviser les compétitions nationales
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-2 h-2 bg-mali-green rounded-full"></div>
                Former les entraîneurs, arbitres et dirigeants
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-2 h-2 bg-mali-green rounded-full"></div>
                Développer les infrastructures sportives
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-mali-yellow to-mali-red rounded-full flex items-center justify-center mx-auto mb-6 text-white">
              <Star className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Notre Vision</h2>
            <p className="text-gray-600 text-lg leading-relaxed text-center">
              Faire du Mali une référence en matière de développement du football en Afrique, 
              en créant un écosystème durable qui permet l'épanouissement des talents et 
              la réussite sportive internationale.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-2 h-2 bg-mali-yellow rounded-full"></div>
                Qualifier régulièrement les équipes nationales aux grandes compétitions
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-2 h-2 bg-mali-yellow rounded-full"></div>
                Former des joueurs de niveau international
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-2 h-2 bg-mali-yellow rounded-full"></div>
                Développer un réseau d'infrastructures modernes
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Histoire
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Plus de six décennies d'histoire et de passion pour le football malien
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-8">
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-mali-green text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full"></div>
            <div className="space-y-8">
              {filteredAchievements.map((achievement, index) => (
                <div
                  key={achievement.id}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-mali-green rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(achievement.category)}`}>
                          {achievement.category}
                        </span>
                        <span className="text-2xl font-bold text-mali-green">{achievement.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Executive Team */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Équipe Dirigeante
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des professionnels expérimentés au service du développement du football malien
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {executives.map((executive) => (
              <div
                key={executive.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={executive.photo}
                    alt={executive.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{executive.name}</h3>
                  <p className="text-mali-green font-semibold mb-3">{executive.position}</p>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {executive.description}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    Depuis {executive.since}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident nos actions et notre engagement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-mali-green to-mali-red rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                Nous visons l'excellence dans tous nos domaines d'activité, de la formation 
                des jeunes à l'organisation des compétitions.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-mali-yellow to-mali-red rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Passion</h3>
              <p className="text-gray-600">
                Notre passion pour le football nous anime au quotidien et nous pousse 
                à toujours nous dépasser pour servir ce sport.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-mali-green to-mali-yellow rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Solidarité</h3>
              <p className="text-gray-600">
                Nous croyons en la force du collectif et travaillons ensemble pour 
                le développement du football malien.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-mali-red to-mali-green rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Nous encourageons l'innovation et l'adaptation aux nouvelles 
                technologies pour améliorer nos performances.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-mali-green rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ouverture</h3>
              <p className="text-gray-600">
                Nous restons ouverts au monde et aux échanges internationaux 
                pour enrichir notre expérience et nos compétences.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-mali-yellow to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mérite</h3>
              <p className="text-gray-600">
                Nous valorisons le mérite et l'effort, en récompensant 
                ceux qui se distinguent par leur travail et leur engagement.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-mali-green to-mali-red text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Rejoignez l'aventure !
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Découvrez comment vous pouvez contribuer au développement du football malien
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-mali-green font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Devenir partenaire
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors">
              Nous contacter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Institution;