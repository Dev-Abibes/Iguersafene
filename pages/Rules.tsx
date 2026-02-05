
import React from 'react';
import { DOCUMENTS } from '../constants';

const Rules: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 max-w-7xl mx-auto px-4 py-12">
      <div className="mb-16">
        <h1 className="text-4xl font-bold font-display mb-4 text-gray-900">Documents Officiels</h1>
        <p className="text-gray-500 max-w-2xl">Téléchargez les règlements, arrêtés et formulaires nécessaires à votre vie au village.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Categories Sidebar */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <h3 className="font-bold mb-4 text-gray-900">Catégories</h3>
            <ul className="space-y-2">
              {['Tous', 'Règlements', 'Arrêtés', 'Urbanisme', 'Social'].map(c => (
                <li key={c}>
                  <button className="w-full text-left px-3 py-2 rounded-lg text-sm hover:bg-white hover:shadow-sm hover:text-village-green transition-all">
                    {c}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-village-blue p-6 rounded-2xl text-white">
            <h3 className="font-bold mb-3">Besoin d'aide ?</h3>
            <p className="text-xs opacity-80 mb-4 leading-relaxed">Si vous ne trouvez pas le document souhaité, notre assistance administrative est disponible en mairie.</p>
            <button className="w-full py-2 bg-white text-village-blue rounded font-bold text-xs">Nous contacter</button>
          </div>
        </div>

        {/* Documents List */}
        <div className="lg:col-span-3 space-y-4">
          {DOCUMENTS.map(doc => (
            <div key={doc.id} className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-village-green transition-colors flex items-center justify-between group">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-village-blue group-hover:bg-village-green group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                </div>
                <div>
                  <div className="flex items-center space-x-3 mb-1">
                    <h3 className="font-bold text-gray-900">{doc.title}</h3>
                    <span className="text-[10px] font-black bg-gray-100 text-gray-500 px-2 py-0.5 rounded">{doc.type}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2 leading-relaxed">{doc.description}</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-400">
                    <span>Publié le: {new Date(doc.date).toLocaleDateString()}</span>
                    <span>Taille: {doc.size}</span>
                  </div>
                </div>
              </div>
              <button className="p-3 bg-gray-50 text-gray-900 rounded-full hover:bg-village-green hover:text-white transition-all transform hover:scale-110">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rules;
