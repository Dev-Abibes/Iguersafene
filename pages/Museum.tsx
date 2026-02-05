
import React, { useState } from 'react';
import { MARTYRS } from '../constants';
import { Martyr } from '../types';

const ITEMS_PER_PAGE = 20;

const Museum: React.FC = () => {
  const [selectedMartyr, setSelectedMartyr] = useState<Martyr | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Calcul de la pagination
  const totalPages = Math.ceil(MARTYRS.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedMartyrs = MARTYRS.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <div className="animate-in fade-in duration-700 pb-20">
      {/* Hero Section */}
      <section className="bg-village-red py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid-museum" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-museum)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <span className="text-xs font-black uppercase tracking-[0.5em] mb-6 block opacity-80">Patrimoine de la Résistance</span>
          <h1 className="text-5xl md:text-8xl font-bold font-display mb-8">Musée des 99 Martyrs</h1>
          <p className="text-xl md:text-2xl font-light italic max-w-3xl mx-auto opacity-90 leading-relaxed">
            "Iguersafene, le village qui a payé le prix du sang pour que l'Algérie soit libre. Le 4 décembre 1957, nous n'avons pas seulement perdu des maisons, nous avons perdu nos cœurs."
          </p>
        </div>
      </section>

      {/* Intro Context */}
      <section className="py-20 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold font-display text-gray-900 mb-8">Un Devoir de Mémoire</h2>
        <p className="text-gray-600 text-lg leading-relaxed font-light mb-12">
          Le Musée Digital rend hommage aux 99 martyrs d'Iguersafene tombés lors de la guerre de libération nationale. 
          Cette galerie présente les fiches individuelles de chaque héros. 
          Iguersafene reste le symbole du sacrifice suprême pour la dignité.
        </p>
        <div className="flex justify-center space-x-1 mb-8">
          <div className="w-12 h-1 bg-village-red rounded-full"></div>
          <div className="w-4 h-1 bg-village-red rounded-full opacity-50"></div>
          <div className="w-4 h-1 bg-village-red rounded-full opacity-30"></div>
        </div>
        <p className="text-xs font-black text-village-red uppercase tracking-widest">Page {currentPage} sur {totalPages}</p>
      </section>

      {/* Martyrs Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {paginatedMartyrs.map((martyr) => (
            <div 
              key={martyr.id}
              onClick={() => setSelectedMartyr(martyr)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-sm border border-gray-100 group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 bg-gray-50">
                <img 
                  src={martyr.image} 
                  alt={`${martyr.firstName} ${martyr.lastName}`} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-sm md:text-base leading-tight">
                    {martyr.firstName} <br/>
                    <span className="uppercase text-village-red">{martyr.lastName}</span>
                  </h3>
                  <p className="text-white/60 text-[10px] font-black uppercase tracking-widest mt-1">Martyr de la Révolution</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-20 flex justify-center items-center space-x-2">
            <button 
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-12 h-12 rounded-2xl flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-village-red hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-transparent"
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
                      ? 'bg-village-red text-white shadow-xl shadow-village-red/20 scale-110' 
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
              className="w-12 h-12 rounded-2xl flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-village-red hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        )}
      </section>

      {/* Biography Modal */}
      {selectedMartyr && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setSelectedMartyr(null)}
        >
          <div 
            className="bg-white rounded-[2.5rem] w-full max-w-3xl overflow-hidden shadow-2xl relative animate-in zoom-in-95 slide-in-from-bottom-10 duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedMartyr(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center hover:bg-village-red hover:text-white transition-all z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 h-[400px] md:h-auto">
                <img 
                  src={selectedMartyr.image} 
                  alt={selectedMartyr.lastName} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-10 md:p-12">
                <span className="text-village-red font-black text-xs uppercase tracking-[0.3em] mb-4 block">Fiche du Martyr</span>
                <h2 className="text-4xl font-bold font-display text-gray-900 mb-6">
                  {selectedMartyr.firstName} <br/>
                  <span className="text-village-red uppercase">{selectedMartyr.lastName}</span>
                </h2>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Date de naissance</p>
                      <p className="font-bold text-gray-700">{selectedMartyr.birthDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-village-red/5 flex items-center justify-center text-village-red">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-village-red tracking-widest">Date de décès</p>
                      <p className="font-bold text-gray-900">{selectedMartyr.deathDate}</p>
                    </div>
                  </div>
                </div>

                <div className="prose prose-sm text-gray-600 leading-relaxed italic border-l-2 border-village-red pl-4">
                  "{selectedMartyr.bio}"
                </div>

                <div className="mt-10 pt-10 border-t border-gray-100">
                   <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-village-red"></div>
                      <p className="text-[10px] font-black uppercase tracking-tighter text-gray-400">Musée d'Iguersafene - Gloire à nos Héros</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Museum;
