
import React, { useState } from 'react';
import { GALLERY } from '../constants';

interface GalleryProps {
  type: 'image' | 'video';
}

const Gallery: React.FC<GalleryProps> = ({ type }) => {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const categories = ['Tous', 'Paysage', 'Événement', 'Vie Quotidienne', 'Patrimoine'];

  const filteredMedia = GALLERY.filter(m => {
    const typeMatch = m.type === type;
    const categoryMatch = activeCategory === 'Tous' || m.category === activeCategory;
    return typeMatch && categoryMatch;
  });

  return (
    <div className="animate-in fade-in duration-500 max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-6 md:space-y-0">
        <div>
          <h1 className="text-4xl font-bold font-display mb-4 text-gray-900">
            {type === 'image' ? 'Galerie Photo' : 'Médiathèque Vidéo'}
          </h1>
          <p className="text-gray-500">Iguersafene à travers l'objectif.</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMedia.map(m => (
          <div key={m.id} className="group relative rounded-2xl overflow-hidden aspect-video bg-gray-100">
            {m.type === 'image' ? (
              <img src={m.url} alt={m.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            ) : (
              <div className="relative w-full h-full">
                <img src={m.thumbnail} alt={m.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/></svg>
                  </div>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <div>
                <div className="text-[10px] font-bold text-village-green uppercase tracking-widest mb-1">{m.category}</div>
                <h3 className="text-white font-bold">{m.title}</h3>
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
    </div>
  );
};

export default Gallery;
