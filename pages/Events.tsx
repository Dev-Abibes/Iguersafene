
import React from 'react';
import { EVENTS } from '../constants';

const Events: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 max-w-7xl mx-auto px-4 py-12">
      <div className="mb-16">
        <h1 className="text-4xl font-bold font-display mb-4 text-gray-900">Agenda du Village</h1>
        <p className="text-gray-500 max-w-2xl">Retrouvez tous les rassemblements culturels, sportifs et citoyens prévus à Iguersafene.</p>
      </div>

      <div className="space-y-8">
        {EVENTS.map((e) => (
          <div key={e.id} className="flex flex-col md:flex-row bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all">
            <div className="md:w-1/3 h-64 md:h-auto overflow-hidden">
              <img src={e.image} alt={e.title} className="w-full h-full object-cover" />
            </div>
            <div className="md:w-2/3 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-village-green/10 text-village-green text-[10px] font-black uppercase px-2 py-1 rounded">
                    {e.type}
                  </span>
                  <span className="text-gray-300 text-xs">|</span>
                  <span className="text-gray-500 text-sm font-medium">
                    <svg className="w-4 h-4 inline mr-1 -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    {e.location}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">{e.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{e.description}</p>
              </div>
              
              <div className="flex items-center justify-between border-t pt-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-village-green text-white rounded-lg flex flex-col items-center justify-center mr-4">
                    <span className="text-lg font-bold leading-none">{new Date(e.date).getDate()}</span>
                    <span className="text-[10px] uppercase font-bold">{new Date(e.date).toLocaleDateString('fr-FR', { month: 'short' })}</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{new Date(e.date).toLocaleDateString('fr-FR', { weekday: 'long' })}</div>
                    <div className="text-xs text-gray-500">Heure à confirmer par Tajmaât</div>
                  </div>
                </div>
                <button className="px-6 py-2 bg-gray-900 text-white rounded-full text-sm font-bold hover:bg-village-green transition-colors">
                  S'inscrire / En savoir plus
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 p-12 bg-village-blue rounded-3xl text-white text-center">
        <h3 className="text-3xl font-bold font-display mb-6">Vous organisez un événement ?</h3>
        <p className="max-w-xl mx-auto mb-10 opacity-80">Si vous souhaitez proposer une activité ou une manifestation pour le village, contactez le comité culturel via le formulaire.</p>
        <button className="px-10 py-4 bg-white text-village-blue rounded-full font-bold hover:scale-105 transition-transform">
          Soumettre une idée
        </button>
      </div>
    </div>
  );
};

export default Events;
