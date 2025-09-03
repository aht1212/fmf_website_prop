import React, { createContext, useContext, useState, ReactNode } from 'react';

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: 'Sélections' | 'Compétitions' | 'Clubs' | 'Communiqués';
  date: string;
  views: number;
  featured: boolean;
}

interface NewsContextType {
  news: NewsArticle[];
  addNews: (article: Omit<NewsArticle, 'id'>) => void;
  updateNews: (id: number, article: Partial<NewsArticle>) => void;
  deleteNews: (id: number) => void;
  getFeaturedNews: () => NewsArticle[];
  getNewsByCategory: (category: string) => NewsArticle[];
}

const NewsContext = createContext<NewsContextType | undefined>(undefined);

const initialNews: NewsArticle[] = [
  {
    id: 1,
    title: 'Les Aigles du Mali s\'imposent 2-1 face au Sénégal',
    excerpt: 'Une victoire historique qui propulse le Mali en tête de son groupe qualificatif pour la CAN 2025.',
    content: 'Les Aigles du Mali ont livré une prestation exceptionnelle...',
    image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Sélections',
    date: '15 Nov 2024',
    views: 12547,
    featured: true
  },
  {
    id: 2,
    title: 'Lancement officiel de la saison 2024-2025 de la Ligue 1',
    excerpt: 'La nouvelle saison du championnat national démarre avec 16 clubs participants et de nombreuses innovations.',
    content: 'Le coup d\'envoi officiel de la saison 2024-2025...',
    image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Compétitions',
    date: '10 Nov 2024',
    views: 8934,
    featured: true
  },
  {
    id: 3,
    title: 'Nouveau centre de formation inauguré à Sikasso',
    excerpt: 'Un investissement de 2 milliards FCFA pour développer les talents footballistiques de la région.',
    content: 'Le nouveau centre de formation de Sikasso...',
    image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Clubs',
    date: '08 Nov 2024',
    views: 5632,
    featured: false
  },
  {
    id: 4,
    title: 'Communiqué officiel : Nouvelles mesures sanitaires',
    excerpt: 'La FMF annonce les nouvelles directives pour les matchs à venir suite aux recommandations du ministère.',
    content: 'Suite aux dernières recommandations du ministère de la Santé...',
    image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Communiqués',
    date: '05 Nov 2024',
    views: 3421,
    featured: false
  }
];

export const NewsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [news, setNews] = useState<NewsArticle[]>(initialNews);

  const addNews = (article: Omit<NewsArticle, 'id'>) => {
    const newArticle = {
      ...article,
      id: Math.max(...news.map(n => n.id)) + 1
    };
    setNews([newArticle, ...news]);
  };

  const updateNews = (id: number, updatedArticle: Partial<NewsArticle>) => {
    setNews(news.map(article => 
      article.id === id ? { ...article, ...updatedArticle } : article
    ));
  };

  const deleteNews = (id: number) => {
    setNews(news.filter(article => article.id !== id));
  };

  const getFeaturedNews = () => {
    return news.filter(article => article.featured);
  };

  const getNewsByCategory = (category: string) => {
    return news.filter(article => article.category === category);
  };

  return (
    <NewsContext.Provider value={{
      news,
      addNews,
      updateNews,
      deleteNews,
      getFeaturedNews,
      getNewsByCategory
    }}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error('useNews must be used within a NewsProvider');
  }
  return context;
};