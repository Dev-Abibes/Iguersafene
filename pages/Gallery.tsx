
import React, { useState, useMemo } from 'react';
import { GALLERY } from '../constants';
import { GalleryMedia } from '../types';

interface GalleryProps {
  type: 'image' | 'video';
}

const ITEMS_PER_PAGE = 20;

const Gallery: React.FC<GalleryProps> = ({ type }) => {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMedia, setSelectedMedia] = useState<GalleryMedia | null>(null);

  const categories = ['Tous', 'Paysage', 'Événement', 'Vie Quotidienne', 'Patrimoine'];

  const filteredMedia = useMemo(() => {
    return GALLERY.filter(m => {
      const typeMatch = m.type === type;
      const categoryMatch = activeCategory === 'Tous' || m.category === activeCategory;
      return typeMatch && categoryMatch;
    });
  }, [type, activeCategory]);

  // Pagination logic
  const totalPages = Math.ceil(filteredMedia.length / ITEMS_PER_PAGE);
  const paginatedMedia = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredMedia.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredMedia, currentPage]);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (c: string) => {
    setActiveCategory(c);
    setCurrentPage(1); // Reset to first page on filter change
  };

  return (
    <div className="animate-in fade-in duration-500 max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-6 md:space-y-0">
        <div>
          <h1 className="text-4xl font-bold font-display mb-4 text-gray-900">
            {type === 'image' ? 'Galerie Photo' : 'Médiathèque Vidéo'}
          </h1>
          <p className="text-gray-500">Iguersafene à travers l'objectif - Cliquez sur une image pour voir sa fiche complète.</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => handleCategoryChange(c)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeCategory === c 
                  ? 'bg-village-green text-white shadow-md' 
                  : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-100'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {paginatedMedia.map(m => (
          <div 
            key={m.id} 
            onClick={() => setSelectedMedia(m)}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group flex flex-col cursor-pointer"
          >
            {/* Media Container */}
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
              {m.type === 'image' ? (
                <img src={m.url} alt={m.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              ) : (
                <div className="relative w-full h-full">
                  <img src={m.thumbnail} alt={m.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/></svg>
                    </div>
                  </div>
                </div>
              )}
              {/* Floating Tag */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-village-green shadow-sm">
                {m.category}
              </div>
            </div>

            {/* Aperçu rapide */}
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-village-green transition-colors leading-tight font-display">
                {m.title}
              </h3>
              <p className="text-xs text-gray-400 font-medium mb-4">{m.category}</p>
              <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between text-village-green">
                <span className="text-[10px] font-black uppercase tracking-widest">Voir la fiche</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredMedia.length === 0 && (
        <div className="text-center py-32">
          <p className="text-gray-400">Aucun média trouvé.</p>
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-20 flex justify-center items-center space-x-2">
          <button 
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="w-12 h-12 rounded-2xl flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-village-green hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-transparent"
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
                    ? 'bg-village-green text-white shadow-xl shadow-village-green/20 scale-110' 
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
            className="w-12 h-12 rounded-2xl flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-village-green hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-transparent"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      )}

      {/* Modal: Fiche descriptive détaillée */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setSelectedMedia(null)}
        >
          <div 
            className="bg-white rounded-[2.5rem] w-full max-w-5xl overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-500 flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedMedia(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white md:text-gray-500 md:bg-gray-100 flex items-center justify-center hover:bg-village-red hover:text-white transition-all z-[110]"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>

            {/* Media Content */}
            <div className="md:w-3/5 bg-black flex items-center justify-center min-h-[300px] md:min-h-0">
              {selectedMedia.type === 'image' ? (
                <img 
                  src={selectedMedia.url} 
                  alt={selectedMedia.title} 
                  className="w-full h-full object-contain"
                />
              ) : (
                <video 
                  src={selectedMedia.url} 
                  controls 
                  autoPlay
                  className="w-full h-full"
                />
              )}
            </div>

            {/* Text Content */}
            <div className="md:w-2/5 p-10 md:p-14 overflow-y-auto max-h-[60vh] md:max-h-none flex flex-col">
              <span className="text-village-green font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Fiche Patrimoniale</span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6 leading-tight">
                {selectedMedia.title}
              </h2>
              
              <div className="flex items-center space-x-3 mb-8">
                <div className="px-3 py-1 bg-village-green/10 text-village-green rounded-full text-[10px] font-black uppercase tracking-widest">
                  {selectedMedia.category}
                </div>
                <div className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-[10px] font-black uppercase tracking-widest">
                  {selectedMedia.type === 'image' ? 'Photographie' : 'Vidéo'}
                </div>
              </div>

              <div className="prose prose-sm text-gray-600 leading-relaxed font-light mb-10 italic border-l-4 border-gray-100 pl-6">
                {selectedMedia.description || "Aucune description détaillée n'est disponible pour ce média. Il témoigne néanmoins de la richesse culturelle et naturelle du village d'Iguersafene."}
              </div>

              <div className="mt-auto pt-10 border-t border-gray-50">
                <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-4">Mouvements Solidaires d'Iguersafene</p>
                <div className="flex space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-village-green"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-village-yellow"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-village-red"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-village-blue"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-20 text-center">
        <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em]">
          Patrimoine Visuel d'Iguersafene — Page {currentPage} sur {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Gallery;
