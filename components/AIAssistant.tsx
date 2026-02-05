
import React, { useState, useRef, useEffect } from 'react';
import { getVillageAssistantResponse } from '../services/gemini';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', text: string}[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || isLoading) return;

    const userMsg = query.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setQuery('');
    setIsLoading(true);

    try {
      const response = await getVillageAssistantResponse(userMsg);
      setMessages(prev => [...prev, { role: 'assistant', text: response || 'Erreur' }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', text: 'Une erreur est survenue lors de la connexion.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-village-green text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col max-h-[500px] overflow-hidden animate-in fade-in slide-in-from-bottom-4">
          <div className="bg-village-green p-4 text-white flex items-center">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"/></svg>
            </div>
            <div>
              <h3 className="font-bold text-sm">Assistant Villageois</h3>
              <p className="text-[10px] text-white/80">Posez vos questions sur Iguersafene</p>
            </div>
          </div>

          <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-gray-50">
            {messages.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500 text-sm">Bonjour ! Comment puis-je vous aider aujourd'hui ?</p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                  m.role === 'user' 
                    ? 'bg-village-green text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-400 shadow-sm border border-gray-100 rounded-2xl px-4 py-2 text-sm rounded-tl-none animate-pulse">
                  Réflexion...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-3 border-t bg-white">
            <div className="flex space-x-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Votre message..."
                className="flex-grow text-sm border-none focus:ring-0 bg-gray-100 rounded-full px-4 py-2"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="p-2 bg-village-green text-white rounded-full hover:bg-village-blue transition-colors disabled:opacity-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
