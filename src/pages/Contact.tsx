import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle, Building, Users, Globe } from 'lucide-react';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler l'envoi du formulaire
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simuler un succès
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Réinitialiser le formulaire après 3 secondes
    setTimeout(() => {
      setSubmitStatus('idle');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Adresse',
      content: 'Stade du 26 Mars, Bamako, Mali',
      description: 'Siège principal de la FMF'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Téléphone',
      content: '+223 20 22 45 67',
      description: 'Lun-Ven: 8h-18h'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'contact@fmf.ml',
      description: 'Réponse sous 24h'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Horaires',
      content: 'Lundi - Vendredi',
      description: '8h00 - 18h00'
    }
  ];

  const departments = [
    {
      name: 'Direction Générale',
      email: 'dg@fmf.ml',
      phone: '+223 20 22 45 68',
      description: 'Gestion administrative et stratégique'
    },
    {
      name: 'Compétitions',
      email: 'competitions@fmf.ml',
      phone: '+223 20 22 45 69',
      description: 'Organisation des compétitions'
    },
    {
      name: 'Formation',
      email: 'formation@fmf.ml',
      phone: '+223 20 22 45 70',
      description: 'Formation des entraîneurs et arbitres'
    },
    {
      name: 'Communication',
      email: 'communication@fmf.ml',
      phone: '+223 20 22 45 71',
      description: 'Relations presse et médias'
    },
    {
      name: 'Billetterie',
      email: 'billetterie@fmf.ml',
      phone: '+223 20 22 45 72',
      description: 'Vente de billets et réservations'
    },
    {
      name: 'Technique',
      email: 'technique@fmf.ml',
      phone: '+223 20 22 45 73',
      description: 'Sélections nationales et équipes'
    }
  ];

  const subjects = [
    'Information générale',
    'Billetterie et réservations',
    'Compétitions et résultats',
    'Formation et développement',
    'Partenariat et sponsoring',
    'Presse et médias',
    'Autre'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-mali-green to-mali-red text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Nous sommes là pour vous aider. Contactez-nous pour toute question ou information
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-mali-green to-mali-red rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                {info.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
              <p className="text-mali-green font-medium mb-1">{info.content}</p>
              <p className="text-sm text-gray-600">{info.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>
              
              {submitStatus === 'success' ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message envoyé !</h3>
                  <p className="text-gray-600">
                    Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mali-green focus:border-transparent"
                        placeholder="Votre nom complet"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mali-green focus:border-transparent"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mali-green focus:border-transparent"
                        placeholder="+223 XX XX XX XX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Sujet *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mali-green focus:border-transparent"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        {subjects.map((subject, index) => (
                          <option key={index} value={subject}>{subject}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mali-green focus:border-transparent resize-none"
                      placeholder="Décrivez votre demande en détail..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-mali-green to-mali-red text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Envoyer le message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-mali-green" />
                Notre localisation
              </h3>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Carte interactive</p>
                  <p className="text-sm">Stade du 26 Mars, Bamako</p>
                </div>
              </div>
            </div>

            {/* Departments */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Building className="w-5 h-5 text-mali-green" />
                Nos départements
              </h3>
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="border-l-4 border-mali-green pl-4">
                    <h4 className="font-semibold text-gray-900 mb-1">{dept.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{dept.description}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <a
                        href={`mailto:${dept.email}`}
                        className="text-mali-green hover:text-mali-red transition-colors flex items-center gap-1"
                      >
                        <Mail className="w-3 h-3" />
                        {dept.email}
                      </a>
                      <a
                        href={`tel:${dept.phone}`}
                        className="text-mali-green hover:text-mali-red transition-colors flex items-center gap-1"
                      >
                        <Phone className="w-3 h-3" />
                        {dept.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-xl text-gray-600">
              Trouvez rapidement des réponses à vos questions
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Comment acheter des billets pour les matchs ?
              </h3>
              <p className="text-gray-600">
                Vous pouvez acheter vos billets directement sur notre site web dans la section "Billetterie", 
                ou nous contacter par téléphone au +223 20 22 45 72.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Quels sont les horaires d'ouverture ?
              </h3>
              <p className="text-gray-600">
                Nos bureaux sont ouverts du lundi au vendredi de 8h00 à 18h00. 
                Nous sommes fermés les weekends et jours fériés.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Comment devenir partenaire de la FMF ?
              </h3>
              <p className="text-gray-600">
                Pour toute demande de partenariat, contactez notre département Communication 
                à l'adresse communication@fmf.ml ou par téléphone au +223 20 22 45 71.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-mali-green to-mali-red text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Restez informés !
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Recevez nos dernières actualités et informations directement dans votre boîte mail
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-3 text-gray-900 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="px-8 py-3 bg-white text-mali-green font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              S'abonner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;