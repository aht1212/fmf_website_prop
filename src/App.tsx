import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import News from './pages/News';
import Teams from './pages/Teams';
import Competitions from './pages/Competitions';
import Clubs from './pages/Clubs';
import Media from './pages/Media';
import Institution from './pages/Institution';
import Tickets from './pages/Tickets';
import Contact from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard';
import { NewsProvider } from './contexts/NewsContext';
import { TicketsProvider } from './contexts/TicketsContext';

function App() {
  return (
    <NewsProvider>
      <TicketsProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/actualites" element={<News />} />
                <Route path="/equipes" element={<Teams />} />
                <Route path="/competitions" element={<Competitions />} />
                <Route path="/clubs" element={<Clubs />} />
                <Route path="/medias" element={<Media />} />
                <Route path="/institution" element={<Institution />} />
                <Route path="/billetterie" element={<Tickets />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<AdminDashboard />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </TicketsProvider>
    </NewsProvider>
  );
}

export default App;