import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TicketEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  venue: string;
  homeTeam: string;
  awayTeam: string;
  homeFlag: string;
  awayFlag: string;
  competition: string;
  image: string;
  prices: {
    category: string;
    price: number;
    available: number;
    total: number;
  }[];
  status: 'available' | 'sold-out' | 'upcoming' | 'cancelled';
}

interface TicketPurchase {
  id: number;
  eventId: number;
  category: string;
  quantity: number;
  totalPrice: number;
  buyerInfo: {
    name: string;
    email: string;
    phone: string;
  };
  purchaseDate: string;
  qrCode: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}

interface TicketsContextType {
  events: TicketEvent[];
  purchases: TicketPurchase[];
  addEvent: (event: Omit<TicketEvent, 'id'>) => void;
  updateEvent: (id: number, event: Partial<TicketEvent>) => void;
  deleteEvent: (id: number) => void;
  purchaseTicket: (purchase: Omit<TicketPurchase, 'id' | 'purchaseDate' | 'qrCode'>) => void;
  getEventById: (id: number) => TicketEvent | undefined;
  getUserPurchases: (email: string) => TicketPurchase[];
}

const TicketsContext = createContext<TicketsContextType | undefined>(undefined);

const initialEvents: TicketEvent[] = [
  {
    id: 1,
    title: 'Mali vs Côte d\'Ivoire',
    date: '25 Nov 2024',
    time: '20:00',
    venue: 'Stade du 26 Mars',
    homeTeam: 'Mali',
    awayTeam: 'Côte d\'Ivoire',
    homeFlag: '🇲🇱',
    awayFlag: '🇨🇮',
    competition: 'Éliminatoires CAN 2025',
    image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800',
    prices: [
      { category: 'Tribune VIP', price: 25000, available: 95, total: 100 },
      { category: 'Tribune Couverte', price: 10000, available: 450, total: 500 },
      { category: 'Tribune Populaire', price: 5000, available: 1800, total: 2000 },
      { category: 'Pelouse', price: 2500, available: 800, total: 1000 }
    ],
    status: 'available'
  },
  {
    id: 2,
    title: 'Mali U23 vs Nigeria U23',
    date: '28 Nov 2024',
    time: '18:00',
    venue: 'Stade Mamadou Konaté',
    homeTeam: 'Mali U23',
    awayTeam: 'Nigeria U23',
    homeFlag: '🇲🇱',
    awayFlag: '🇳🇬',
    competition: 'Qualifications JO 2024',
    image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800',
    prices: [
      { category: 'Tribune VIP', price: 15000, available: 50, total: 50 },
      { category: 'Tribune Couverte', price: 6000, available: 300, total: 300 },
      { category: 'Tribune Populaire', price: 3000, available: 900, total: 1000 },
      { category: 'Pelouse', price: 1500, available: 500, total: 500 }
    ],
    status: 'available'
  }
];

export const TicketsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [events, setEvents] = useState<TicketEvent[]>(initialEvents);
  const [purchases, setPurchases] = useState<TicketPurchase[]>([]);

  const addEvent = (event: Omit<TicketEvent, 'id'>) => {
    const newEvent = {
      ...event,
      id: Math.max(...events.map(e => e.id)) + 1
    };
    setEvents([...events, newEvent]);
  };

  const updateEvent = (id: number, updatedEvent: Partial<TicketEvent>) => {
    setEvents(events.map(event => 
      event.id === id ? { ...event, ...updatedEvent } : event
    ));
  };

  const deleteEvent = (id: number) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const purchaseTicket = (purchase: Omit<TicketPurchase, 'id' | 'purchaseDate' | 'qrCode'>) => {
    const newPurchase = {
      ...purchase,
      id: Math.max(0, ...purchases.map(p => p.id)) + 1,
      purchaseDate: new Date().toISOString(),
      qrCode: `QR${Date.now()}${Math.random().toString(36).substr(2, 9)}`,
      status: 'confirmed' as const
    };
    setPurchases([...purchases, newPurchase]);

    // Update available tickets
    setEvents(events.map(event => {
      if (event.id === purchase.eventId) {
        return {
          ...event,
          prices: event.prices.map(price => 
            price.category === purchase.category
              ? { ...price, available: Math.max(0, price.available - purchase.quantity) }
              : price
          )
        };
      }
      return event;
    }));
  };

  const getEventById = (id: number) => {
    return events.find(event => event.id === id);
  };

  const getUserPurchases = (email: string) => {
    return purchases.filter(purchase => purchase.buyerInfo.email === email);
  };

  return (
    <TicketsContext.Provider value={{
      events,
      purchases,
      addEvent,
      updateEvent,
      deleteEvent,
      purchaseTicket,
      getEventById,
      getUserPurchases
    }}>
      {children}
    </TicketsContext.Provider>
  );
};

export const useTickets = () => {
  const context = useContext(TicketsContext);
  if (!context) {
    throw new Error('useTickets must be used within a TicketsProvider');
  }
  return context;
};