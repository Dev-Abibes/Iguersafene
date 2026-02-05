
import React from 'react';
import { Page } from '../types';
import { NEWS, EVENTS } from '../constants';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1920" 
            alt="Village d'Iguersafene" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl text-white">
            <div className="flex space-x-2 mb-6">
                <span className="w-8 h-1 bg-village-green rounded-full"></span>
                <span className="w-8 h-1 bg-village-yellow rounded-full"></span>
                <span className="w-8 h-1 bg-village-red rounded-full"></span>
                <span className="w-8 h-1 bg-village-blue rounded-full"></span>
            </div>
            <span className="inline-block px-3 py-1 bg-village-blue text-[10px] font-black uppercase tracking-[0.3em] rounded mb-6">Iguersafene — Village du Monde</span>
            <h1 className="text-5xl md:text-8xl font-bold font-display leading-tight mb-6">
              L'Âme Vive <br/>
              <span className="text-village-yellow">de la Kabylie</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light max-w-xl">
              Découvrez un modèle de solidarité, de propreté et de culture ancestrale. Iguersafene, un village où l'avenir s'écrit avec nos racines.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => onNavigate('about')}
                className="px-10 py-4 bg-village-green hover:bg-village-green/90 text-white rounded-xl font-black transition-all shadow-xl shadow-village-green/20"
              >
                Découvrir l'Histoire
              </button>
              <button 
                onClick={() => onNavigate('contact')}
                className="px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border-2 border-white/20 rounded-xl font-black transition-all"
              >
                Mairie en ligne
              </button>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-10 hidden lg:block">
          <div className="max-w-5xl mx-auto grid grid-cols-4 gap-6 px-4">
            {[
              { label: 'Martyrs', val: '99', color: 'text-village-red', border: 'border-village-red' },
              { label: 'Propreté', val: 'N°1', color: 'text-village-green', border: 'border-village-green' },
              { label: 'Altitude', val: '890m', color: 'text-village-yellow', border: 'border-village-yellow' },
              { label: 'Rayonnement', val: 'Mondial', color: 'text-village-blue', border: 'border-village-blue' }
            ].map((s, i) => (
              <div key={i} className={`bg-white p-8 rounded-2xl shadow-2xl border-b-4 ${s.border} text-center transform transition hover:-translate-y-4`}>
                <div className={`text-3xl font-black mb-1 ${s.color}`}>{s.val}</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-black">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clean Village Section */}
      <section className="py-32 bg-white pt-48 lg:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800" alt="Nature" className="rounded-[2.5rem] shadow-2xl relative z-10" />
              <div className="absolute -top-6 -left-6 w-full h-full bg-village-green/10 rounded-[2.5rem] -z-0"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-village-yellow rounded-full z-20 flex items-center justify-center text-center p-4 shadow-xl rotate-12">
                <span className="text-white font-black text-xs uppercase leading-tight">Village le plus Propre</span>
              </div>
            </div>
            <div>
              <span className="text-village-green font-black text-xs tracking-widest uppercase mb-4 block">Concours Rabah Aïssat</span>
              <h2 className="text-5xl font-bold font-display text-gray-900 mb-8 leading-tight">Un héritage <br/><span className="text-village-green">écologique</span> unique</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Sacré village le plus propre en 2014, Iguersafene est une référence méditerranéenne en gestion citoyenne. Tri sélectif, compostage collectif et rues fleuries font notre fierté quotidienne.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="p-4 border-l-4 border-village-green bg-village-green/5">
                    <h4 className="font-bold text-village-green">Tiwizi</h4>
                    <p className="text-sm text-gray-500">Travaux collectifs pour le bien commun.</p>
                </div>
                <div className="p-4 border-l-4 border-village-blue bg-village-blue/5">
                    <h4 className="font-bold text-village-blue">Tajmaât</h4>
                    <p className="text-sm text-gray-500">Démocratie participative millénaire.</p>
                </div>
              </div>
              <button onClick={() => onNavigate('about')} className="text-village-green font-black uppercase text-sm tracking-widest border-b-2 border-village-green pb-1 hover:text-village-blue hover:border-village-blue transition-colors">En savoir plus</button>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-4 md:space-y-0 text-center md:text-left">
            <div>
              <h2 className="text-4xl font-bold font-display text-gray-900 mb-4">Le Pouls du Village</h2>
              <div className="flex space-x-1 justify-center md:justify-start">
                <div className="w-8 h-1 bg-village-green rounded-full"></div>
                <div className="w-4 h-1 bg-village-yellow rounded-full"></div>
              </div>
            </div>
            <button onClick={() => onNavigate('news')} className="px-6 py-2 bg-white border-2 border-gray-100 rounded-full text-village-blue font-black text-xs uppercase tracking-widest hover:bg-village-blue hover:text-white transition-all">Toute l'actualité</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {NEWS.map((n, i) => (
              <article key={n.id} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all group cursor-pointer" onClick={() => onNavigate('news')}>
                <div className="h-64 relative overflow-hidden">
                  <img src={n.image} alt={n.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className={`absolute top-6 left-6 px-3 py-1 rounded-full text-[10px] font-black uppercase text-white shadow-lg ${i % 2 === 0 ? 'bg-village-blue' : 'bg-village-green'}`}>
                    {n.category}
                  </div>
                </div>
                <div className="p-8">
                  <time className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-4 block">
                    {new Date(n.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </time>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-village-blue transition-colors leading-tight">{n.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-3 mb-6 font-light">{n.summary}</p>
                  <div className="flex items-center text-village-blue font-black text-xs uppercase tracking-tighter group-hover:translate-x-2 transition-transform">
                    Découvrir
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Resistance CTA */}
      <section className="py-24 bg-village-red relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
          <span className="text-xs font-black uppercase tracking-[0.5em] mb-6 block opacity-80">Mémoire & Honneur</span>
          <h2 className="text-5xl font-bold font-display mb-8">99 Martyrs, Une Liberté</h2>
          <p className="text-xl opacity-90 mb-12 font-light italic leading-relaxed">"Un village brûlé le 4 décembre 1957, mais une âme de résistance qui ne s'éteindra jamais."</p>
          <button 
            onClick={() => onNavigate('about')}
            className="px-12 py-5 bg-white text-village-red rounded-xl font-black text-lg hover:scale-105 transition-all shadow-2xl"
          >
            Consulter le Musée Digital
          </button>
        </div>
      </section>

      {/* Events Quick View */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-village-yellow font-black text-xs tracking-[0.3em] uppercase mb-4 block">Agenda Kabyle</span>
              <h2 className="text-5xl font-bold font-display text-gray-900 mb-10 leading-tight">Célébrer <br/> ensemble</h2>
              <p className="text-gray-600 mb-12 text-lg leading-relaxed font-light">Tiwizi, Lakhwan, Lweziâa... La vie communautaire à Iguersafene est un tissu de traditions partagées. Ne manquez aucun rendez-vous social.</p>
              <button 
                onClick={() => onNavigate('events')}
                className="inline-flex items-center space-x-4 text-village-blue font-black text-sm uppercase tracking-widest group"
              >
                <span>Agenda Complet</span>
                <div className="w-12 h-12 rounded-full bg-village-blue text-white flex items-center justify-center group-hover:rotate-45 transition-all shadow-lg shadow-village-blue/20">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </div>
              </button>
            </div>
            <div className="space-y-6">
              {EVENTS.map((e, i) => (
                <div key={e.id} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex items-center space-x-8 hover:bg-white hover:shadow-xl transition-all">
                  <div className="flex-shrink-0 w-24 h-24 bg-white p-2 rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <img src={e.image} alt={e.title} className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <div className="flex-grow">
                    <div className={`text-[10px] font-black uppercase mb-1 ${i % 2 === 0 ? 'text-village-green' : 'text-village-yellow'}`}>
                        {new Date(e.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })}
                    </div>
                    <h4 className="font-bold text-xl text-gray-900">{e.title}</h4>
                    <p className="text-sm text-gray-400 font-medium">{e.location}</p>
                  </div>
                  <div className="hidden sm:block">
                      <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
