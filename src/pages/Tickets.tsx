import React, { useState } from 'react';
import { Calendar, MapPin, Clock, CreditCard, Users, Check, X } from 'lucide-react';
import { useTickets } from '../contexts/TicketsContext';

interface PurchaseForm {
  eventId: number;
  category: string;
  quantity: number;
  buyerInfo: {
    name: string;
    email: string;
    phone: string;
  };
}

const Tickets = () => {
  const { events, purchaseTicket } = useTickets();
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [showPurchaseForm, setShowPurchaseForm] = useState(false);
  const [purchaseForm, setPurchaseForm] = useState<PurchaseForm>({
    eventId: 0,
    category: '',
    quantity: 1,
    buyerInfo: {
      name: '',
      email: '',
      phone: ''
    }
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  const handlePurchase = (event: any, category: any) => {
    setPurchaseForm({
      eventId: event.id,
      category: category.category,
      quantity: 1,
      buyerInfo: {
        name: '',
        email: '',
        phone: ''
      }
    });
    setShowPurchaseForm(true);
    setPurchaseSuccess(false);
  };

  const submitPurchase = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    const totalPrice = events.find(e => e.id === purchaseForm.eventId)
      ?.prices.find(p => p.category === purchaseForm.category)?.price || 0;

    purchaseTicket({
      eventId: purchaseForm.eventId,
      category: purchaseForm.category,
      quantity: purchaseForm.quantity,
      totalPrice: totalPrice * purchaseForm.quantity,
      buyerInfo: purchaseForm.buyerInfo,
      status: 'confirmed'
    });

    setIsProcessing(false);
    setPurchaseSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setShowPurchaseForm(false);
      setPurchaseSuccess(false);
      setPurchaseForm({
        eventId: 0,
        category: '',
        quantity: 1,
        buyerInfo: { name: '', email: '', phone: '' }
      });
    }, 3000);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Tribune VIP': return 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white';
      case 'Tribune Couverte': return 'bg-gradient-to-r from-blue-500 to-blue-700 text-white';
      case 'Tribune Populaire': return 'bg-gradient-to-r from-mali-green to-green-600 text-white';
      case 'Pelouse': return 'bg-gradient-to-r from-mali-red to-red-600 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  if (showPurchaseForm) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {purchaseSuccess ? (
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Achat confirmé !</h2>
                <p className="text-gray-600 mb-4">
                  Votre billet a été acheté avec succès. Un email de confirmation a été envoyé.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 text-left">
                  <p className="text-sm text-gray-600">
                    <strong>Code QR :</strong> QR{Date.now()}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Présentez ce code à l'entrée du stade
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Finaliser votre achat</h2>
                  <button
                    onClick={() => setShowPurchaseForm(false)}
                    className="p-2 text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <form onSubmit={submitPurchase} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        required
                        value={purchaseForm.buyerInfo.name}
                        onChange={(e) => setPurchaseForm({
                          ...purchaseForm,
                          buyerInfo: { ...purchaseForm.buyerInfo, name: e.target.value }
                        })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-mali-green focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={purchaseForm.buyerInfo.email}
                        onChange={(e) => setPurchaseForm({
                          ...purchaseForm,
                          buyerInfo: { ...purchaseForm.buyerInfo, email: e.target.value }
                        })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-mali-green focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      required
                      value={purchaseForm.buyerInfo.phone}
                      onChange={(e) => setPurchaseForm({
                        ...purchaseForm,
                        buyerInfo: { ...purchaseForm.buyerInfo, phone: e.target.value }
                      })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-mali-green focus:border-transparent"
                    />
                  </div>

                  {/* Payment Method */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Mode de paiement
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="border border-gray-200 rounded-lg p-4 hover:border-mali-green cursor-pointer">
                        <div className="flex items-center">
                          <input type="radio" name="payment" value="orange" className="mr-3" defaultChecked />
                          <div>
                            <div className="font-semibold">Orange Money</div>
                            <div className="text-sm text-gray-500">Paiement mobile</div>
                          </div>
                        </div>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4 hover:border-mali-green cursor-pointer">
                        <div className="flex items-center">
                          <input type="radio" name="payment" value="card" className="mr-3" />
                          <div>
                            <div className="font-semibold">Carte bancaire</div>
                            <div className="text-sm text-gray-500">Visa, Mastercard</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Order Summary */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Récapitulatif de commande</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Catégorie :</span>
                        <span className="font-semibold">{purchaseForm.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Quantité :</span>
                        <span className="font-semibold">{purchaseForm.quantity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Prix unitaire :</span>
                        <span className="font-semibold">
                          {events.find(e => e.id === purchaseForm.eventId)
                            ?.prices.find(p => p.category === purchaseForm.category)
                            ?.price.toLocaleString()} FCFA
                        </span>
                      </div>
                      <hr className="my-2" />
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total :</span>
                        <span>
                          {((events.find(e => e.id === purchaseForm.eventId)
                            ?.prices.find(p => p.category === purchaseForm.category)
                            ?.price || 0) * purchaseForm.quantity).toLocaleString()} FCFA
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full bg-gradient-to-r from-mali-red to-red-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Traitement en cours...
                      </>
                    ) : (
                      <>
                        <CreditCard className="w-5 h-5 mr-2" />
                        Confirmer l'achat
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-mali-green via-mali-yellow to-mali-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Billetterie Officielle
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Achetez vos billets pour les matchs des Aigles du Mali en toute sécurité
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Events List */}
        <div className="space-y-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                {/* Event Image */}
                <div className="md:w-1/3">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>

                {/* Event Details */}
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-4 py-2 bg-mali-green text-white rounded-full text-sm font-semibold">
                      {event.competition}
                    </span>
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      event.status === 'available' ? 'bg-green-100 text-green-800' :
                      event.status === 'sold-out' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {event.status === 'available' ? 'Billets disponibles' :
                       event.status === 'sold-out' ? 'Complet' : event.status}
                    </span>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{event.title}</h2>

                  {/* Match Info */}
                  <div className="flex items-center justify-center space-x-8 mb-6">
                    <div className="text-center">
                      <div className="text-3xl mb-2">{event.homeFlag}</div>
                      <div className="font-semibold text-gray-900">{event.homeTeam}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-400 mb-2">VS</div>
                      <div className="text-sm text-gray-500">{event.time}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-2">{event.awayFlag}</div>
                      <div className="font-semibold text-gray-900">{event.awayTeam}</div>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-600 mb-8">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.venue}
                    </div>
                  </div>

                  {/* Ticket Categories */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {event.prices.map((priceCategory, index) => (
                      <div
                        key={index}
                        className={`border rounded-lg p-4 hover:shadow-md transition-all duration-200 ${
                          priceCategory.available === 0 ? 'bg-gray-50 border-gray-200 opacity-60' : 'border-gray-200 hover:border-mali-green'
                        }`}
                      >
                        <div className={`w-full text-center py-2 px-3 rounded-lg text-xs font-semibold mb-3 ${getCategoryColor(priceCategory.category)}`}>
                          {priceCategory.category}
                        </div>
                        
                        <div className="text-center">
                          <div className="text-2xl font-bold text-mali-green mb-1">
                            {priceCategory.price.toLocaleString()}
                            <span className="text-sm text-gray-500 font-normal"> FCFA</span>
                          </div>
                          
                          <div className="text-sm text-gray-600 mb-4">
                            <div className="flex items-center justify-center mb-1">
                              <Users className="w-4 h-4 mr-1" />
                              {priceCategory.available} / {priceCategory.total}
                            </div>
                            <div className="text-xs">places disponibles</div>
                          </div>

                          {priceCategory.available > 0 && event.status === 'available' ? (
                            <button
                              onClick={() => handlePurchase(event, priceCategory)}
                              className="w-full bg-gradient-to-r from-mali-red to-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:shadow-md transition-all duration-200 text-sm"
                            >
                              Acheter
                            </button>
                          ) : (
                            <button
                              disabled
                              className="w-full bg-gray-300 text-gray-500 py-2 px-4 rounded-lg font-semibold text-sm cursor-not-allowed"
                            >
                              Non disponible
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {events.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl text-gray-400 mb-4">🎫</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Aucun événement disponible</h3>
            <p className="text-gray-600">Les prochains matchs seront bientôt mis en vente.</p>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Informations importantes</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-mali-green mb-3">🎫 E-tickets</h4>
              <p className="text-gray-600 text-sm">
                Vos billets sont électroniques avec code QR. Présentez votre smartphone à l'entrée.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-mali-green mb-3">💳 Paiement sécurisé</h4>
              <p className="text-gray-600 text-sm">
                Orange Money, Moov Money et cartes bancaires acceptées. Paiement 100% sécurisé.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-mali-green mb-3">📞 Support</h4>
              <p className="text-gray-600 text-sm">
                Besoin d'aide ? Contactez-nous au +223 20 22 45 67 ou contact@fmf.ml
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;