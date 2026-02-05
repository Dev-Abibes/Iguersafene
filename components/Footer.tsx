
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-gray-900 text-white pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Brand Bar */}
      <div className="absolute top-0 left-0 w-full h-1 flex">
        <div className="flex-1 bg-village-green"></div>
        <div className="flex-1 bg-village-yellow"></div>
        <div className="flex-1 bg-village-red"></div>
        <div className="flex-1 bg-village-blue"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center group cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gray-900 mr-4 shadow-lg group-hover:rotate-12 transition-transform">
                <span className="text-2xl font-black font-display">I</span>
              </div>
              <h2 className="text-3xl font-black font-display tracking-tighter">Iguersafene</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Le village de l'excellence, de la solidarité et de la propreté. Un bastion de résistance millénaire au coeur de la Kabylie.
            </p>
            <div className="flex space-x-3">
              {[
                { color: 'bg-village-green', icon: 'M13 20h5v-2a2 2 0 00-2-2h-3v4z' },
                { color: 'bg-village-yellow', icon: 'M13 20h5v-2a2 2 0 00-2-2h-3v4z' },
                { color: 'bg-village-red', icon: 'M13 20h5v-2a2 2 0 00-2-2h-3v4z' },
                { color: 'bg-village-blue', icon: 'M13 20h5v-2a2 2 0 00-2-2h-3v4z' }
              ].map((s, i) => (
                <a key={i} href="#" className={`w-10 h-10 rounded-xl ${s.color} flex items-center justify-center hover:scale-110 transition-transform shadow-lg`}>
                   <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.411 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.087.635-1.337-2.22-.251-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.161 22 16.411 22 12c0-5.523-4.477-10-10-10z"/></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest mb-10 text-village-green">Exploration</h3>
            <ul className="space-y-4">
              {['Accueil', 'À Propos', 'Actualités', 'Événements', 'Photos'].map((item, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => onNavigate(item.toLowerCase() as any)} 
                    className="text-gray-400 hover:text-village-yellow transition-colors font-medium text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest mb-10 text-village-blue">La Mairie</h3>
            <ul className="space-y-6 text-sm font-light text-gray-400">
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center mr-4 flex-shrink-0 text-village-blue">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                </div>
                <span>Village d'Iguersafene, Commune d'Idjeur, Wilaya de Tizi Ouzou</span>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center mr-4 flex-shrink-0 text-village-blue">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21"/></svg>
                </div>
                <span>+213 (0) 26 12 34 56</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest mb-10 text-village-red">Permanence</h3>
            <div className="bg-white/5 p-6 rounded-2xl space-y-4">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500 font-bold uppercase">Dim - Jeu</span>
                <span className="text-white">08:00 - 16:30</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500 font-bold uppercase">Ven - Sam</span>
                <span className="text-village-red font-black">FERMÉ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 font-black uppercase tracking-widest">
          <p>© 2024 Village d'Iguersafene. Kabylie Éternelle.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Mentions</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            <div className="flex space-x-1">
                <div className="w-2 h-2 rounded-full bg-village-green"></div>
                <div className="w-2 h-2 rounded-full bg-village-yellow"></div>
                <div className="w-2 h-2 rounded-full bg-village-red"></div>
                <div className="w-2 h-2 rounded-full bg-village-blue"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
