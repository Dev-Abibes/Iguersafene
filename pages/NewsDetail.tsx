
import React from 'react';
import { NEWS } from '../constants';

interface NewsDetailProps {
  newsId: string | null;
  onBack: () => void;
}

const NewsDetail: React.FC<NewsDetailProps> = ({ newsId, onBack }) => {
  const article = NEWS.find(n => n.id === newsId);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Article non trouvé</h2>
        <button onClick={onBack} className="text-village-blue font-bold">Retour au journal</button>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header with Background Image */}
      <div className="relative h-[50vh] min-h-[400px]">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <button 
              onClick={onBack}
              className="flex items-center text-white/80 hover:text-white mb-6 transition-colors font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
              Retour aux actualités
            </button>
            <div className="flex items-center space-x-4 mb-4">
              <span className="px-3 py-1 bg-village-green text-white text-[10px] font-black uppercase rounded shadow-lg">
                {article.category}
              </span>
              <time className="text-white/80 text-sm font-medium">
                {new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
              </time>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-display text-white leading-tight">
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 -mt-24 relative z-10">
          <p className="text-xl text-gray-500 italic mb-10 leading-relaxed border-l-4 border-village-green pl-6">
            {article.summary}
          </p>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6 leading-relaxed whitespace-pre-line">
            {article.content}
            <div className="mt-10 p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <p className="text-sm italic font-light">
                Cet article a été rédigé par la rédaction du portail Iguersafene - Village du Monde pour documenter et préserver notre patrimoine démocratique unique.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-gray-100 flex flex-wrap gap-2">
            {article.tags.map(tag => (
              <span key={tag} className="px-4 py-1.5 bg-gray-50 text-gray-500 rounded-full text-xs font-bold border border-gray-100">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-12 flex flex-col items-center justify-center space-y-4">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Partager cet article</p>
          <div className="flex space-x-4">
            <button className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition-transform">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3l-.5 3H13v6.8c4.56-.93 8-4.96 8-9.8z"/></svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-blue-400 text-white flex items-center justify-center hover:scale-110 transition-transform">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center hover:scale-110 transition-transform" title="Copier le lien">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
