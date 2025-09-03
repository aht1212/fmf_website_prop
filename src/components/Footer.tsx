import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-mali-green to-mali-yellow rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Fédération Malienne de Football</h3>
                <p className="text-gray-300 text-sm">Instance officielle du football au Mali</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              La FMF œuvre pour le développement du football malien à tous les niveaux, 
              de la base jusqu'aux équipes nationales. Ensemble, soutenons les Aigles du Mali !
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-3">
              <li><Link to="/actualites" className="text-gray-300 hover:text-mali-yellow transition-colors">Actualités</Link></li>
              <li><Link to="/equipes" className="text-gray-300 hover:text-mali-yellow transition-colors">Équipes nationales</Link></li>
              <li><Link to="/competitions" className="text-gray-300 hover:text-mali-yellow transition-colors">Compétitions</Link></li>
              <li><Link to="/clubs" className="text-gray-300 hover:text-mali-yellow transition-colors">Clubs</Link></li>
              <li><Link to="/billetterie" className="text-gray-300 hover:text-mali-yellow transition-colors">Billetterie</Link></li>
              <li><Link to="/institution" className="text-gray-300 hover:text-mali-yellow transition-colors">Institution</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-mali-yellow mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Avenue de l'Indépendance<br />
                  Bamako, Mali
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-mali-yellow flex-shrink-0" />
                <p className="text-gray-300 text-sm">+223 20 22 45 67</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-mali-yellow flex-shrink-0" />
                <p className="text-gray-300 text-sm">contact@fmf.ml</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>© 2024 Fédération Malienne de Football. Tous droits réservés.</span>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/mentions-legales" className="text-gray-400 hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="text-gray-400 hover:text-white transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/admin" className="text-gray-400 hover:text-mali-yellow transition-colors">
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mali Flag Strip */}
      <div className="h-1 bg-gradient-to-r from-mali-green via-mali-yellow to-mali-red"></div>
    </footer>
  );
};

export default Footer;