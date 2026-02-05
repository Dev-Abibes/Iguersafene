
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import { NAV_ITEMS } from './constants';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Museum from './pages/Museum';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Rules from './pages/Rules';
import Contact from './pages/Contact';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedNewsId, setSelectedNewsId] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sync with URL hash if present
  useEffect(() => {
    const hash = window.location.hash.replace('#', '') as Page;
    if (NAV_ITEMS.some(item => item.id === hash)) {
      setCurrentPage(hash);
    }
  }, []);

  const navigate = (page: Page, id?: string) => {
    if (page === 'news-detail' && id) {
      setSelectedNewsId(id);
    }
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={navigate} />;
      case 'about': return <About />;
      case 'museum': return <Museum />;
      case 'news': return <News onSelectNews={(id) => navigate('news-detail', id)} />;
      case 'news-detail': return <NewsDetail newsId={selectedNewsId} onBack={() => navigate('news')} />;
      case 'events': return <Events />;
      case 'gallery': return <Gallery type="image" />;
      case 'video': return <Gallery type="video" />;
      case 'rules': return <Rules />;
      case 'contact': return <Contact />;
      default: return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        currentPage={currentPage} 
        onNavigate={navigate} 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <main className="flex-grow pt-20">
        {renderPage()}
      </main>

      <Footer onNavigate={navigate} />
      
      {/* AI Assistant Button */}
      <AIAssistant />
    </div>
  );
};

export default App;
