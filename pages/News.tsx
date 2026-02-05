
import React, { useState, useMemo } from 'react';
import { NEWS } from '../constants';

interface NewsProps {
  onSelectNews: (id: string) => void;
}

const ITEMS_PER_PAGE = 10;

const News: React.FC<NewsProps> = ({ onSelectNews }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Tri des articles par date décroissante (le plus récent en premier)
  const sortedNews = useMemo(() => {
    return [...NEWS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, []);

  // Calcul de la pagination
  const totalPages = Math.ceil(sortedNews.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentNews = sortedNews.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="animate-in fade-in duration-500 py-12 px-4 max-w-7xl mx-auto">
      <div className="mb-16 text-center md:text-left border-b border-gray-100 pb-12">
        <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 text-gray-900">Le Journal d'Iguersafene</h1>
        <p className="text-gray-500 max-w-2xl text-lg font-light leading-relaxed">
          Suivez la vie quotidienne, les projets et les grands moments de solidarité de notre village. 
          Les articles sont classés par ordre chronologique.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {currentNews.map((n) => (
          <article 
            key={n.id} 
            onClick={() => onSelectNews(n.id)}
            className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-50 group flex flex-col cursor-pointer"
          >
            <div className="h-64 relative overflow-hidden">
              <img src={n.image} alt={n.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-black uppercase text-village-blue shadow-sm">
                {n.category}
              </div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <time className="text-[10px] font-black text-gray-400 mb-4 uppercase tracking-widest">
                {new Date(n.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
              </time>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-village-blue transition-colors line-clamp-2 leading-snug font-display">
                {n.title}
              </h2>
              <p className="text-gray-600 text-sm mb-8 line-clamp-3 leading-relaxed font-light">
                {n.summary}
              </p>
              <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                <span className="text-village-blue text-xs font-black flex items-center tracking-widest">
                  LIRE L'ARTICLE
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-20 flex justify-center items-center space-x-2">
          <button 
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="w-12 h-12 rounded-2xl flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-village-blue hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-500"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
          </button>
          
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`w-12 h-12 rounded-2xl text-sm font-black transition-all ${
                  currentPage === page 
                    ? 'bg-village-blue text-white shadow-xl shadow-village-blue/20 scale-110' 
                    : 'bg-white text-gray-400 hover:bg-gray-50 border border-gray-100'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button 
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="w-12 h-12 rounded-2xl flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-village-blue hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-500"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      )}

      <div className="mt-20 text-center">
        <p className="text-gray-400 text-xs font-black uppercase tracking-[0.3em]">Fin du journal — Page {currentPage} sur {totalPages}</p>
      </div>
    </div>
  );
};

export default News;
