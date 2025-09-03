import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navigation = [
    { name: 'Accueil', path: '/' },
    { name: 'Actualités', path: '/actualites' },
    { 
      name: 'Équipes', 
      path: '/equipes',
      dropdown: [
        { name: 'Équipe A Hommes', path: '/equipes/hommes' },
        { name: 'Équipe Féminine', path: '/equipes/femmes' },
        { name: 'U23', path: '/equipes/u23' },
        { name: 'U20', path: '/equipes/u20' },
        { name: 'U17', path: '/equipes/u17' }
      ]
    },
    { name: 'Compétitions', path: '/competitions' },
    { name: 'Clubs', path: '/clubs' },
    { name: 'Médias', path: '/medias' },
    { name: 'Institution', path: '/institution' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <header className="bg-white shadow-lg relative z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-mali-green via-mali-yellow to-mali-red h-1"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <div className="w-16 h-16 bg-gradient-to-br from-mali-green to-mali-yellow rounded-full flex items-center justify-center shadow-lg">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <div className="hidden md:block">
              <h1 className="text-2xl font-bold text-gray-900">FMF</h1>
              <p className="text-sm text-gray-600">Fédération Malienne de Football</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                    isActivePath(item.path)
                      ? 'bg-mali-green text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-mali-green'
                  }`}
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-xl border py-2 z-50"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-mali-green hover:text-white transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/billetterie"
              className="bg-gradient-to-r from-mali-red to-red-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Acheter vos billets
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-mali-green hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t shadow-xl z-40">
          <div className="px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActivePath(item.path)
                      ? 'bg-mali-green text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-mali-green rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/billetterie"
              className="block w-full mt-4 bg-gradient-to-r from-mali-red to-red-600 text-white px-6 py-3 rounded-full font-semibold text-center hover:shadow-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Acheter vos billets
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;