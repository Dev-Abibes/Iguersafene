
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Header */}
      <section className="bg-village-blue py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 flex">
          <div className="flex-1 bg-village-green"></div>
          <div className="flex-1 bg-village-yellow"></div>
          <div className="flex-1 bg-village-red"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 block opacity-70">Services Municipaux</span>
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">Nous Contacter</h1>
          <p className="text-xl opacity-90 font-light max-w-2xl mx-auto leading-relaxed">
            Retrouvez toutes les coordonnées officielles pour joindre la mairie et les différents comités du village.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Details */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold font-display text-gray-900 mb-8 flex items-center">
                <span className="w-8 h-1 bg-village-blue mr-4 rounded-full"></span>
                Coordonnées Officielles
              </h2>
              
              <div className="grid sm:grid-cols-1 gap-6">
                {/* Adresse */}
                <div className="flex p-8 bg-gray-50 rounded-[2rem] border border-gray-100 group hover:bg-white hover:shadow-xl transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-village-blue text-white flex items-center justify-center mr-6 shrink-0 shadow-lg shadow-village-blue/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Adresse de la Mairie</h3>
                    <p className="text-lg text-gray-700 font-medium leading-relaxed">
                      Village d'Iguersafene,<br />
                      Commune d'Idjeur, 15000<br />
                      Wilaya de Tizi Ouzou, Algérie.
                    </p>
                  </div>
                </div>

                {/* Téléphones */}
                <div className="flex p-8 bg-gray-50 rounded-[2rem] border border-gray-100 group hover:bg-white hover:shadow-xl transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-village-green text-white flex items-center justify-center mr-6 shrink-0 shadow-lg shadow-village-green/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L9.121 11.02a1.002 1.002 0 01-1.09.217l-1.045-.483a1 1 0 00-1.17.26l-3.328 3.328a1 1 0 00-.26 1.17l.483 1.045a1.002 1.002 0 01-.217 1.09l-2.025 2.025a1 1 0 01-1.21.502l-4.493-1.498a1 1 0 01-.684-.949V19a2 2 0 012-2h3z"/></svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Standard Téléphonique</h3>
                    <p className="text-2xl text-gray-900 font-bold mb-1">+213 (0) 26 12 34 56</p>
                    <p className="text-sm text-gray-500 italic">Accueil disponible du Dimanche au Jeudi</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex p-8 bg-gray-50 rounded-[2rem] border border-gray-100 group hover:bg-white hover:shadow-xl transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-village-yellow text-white flex items-center justify-center mr-6 shrink-0 shadow-lg shadow-village-yellow/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Courrier Électronique</h3>
                    <p className="text-xl text-village-blue font-bold break-all">secretariat@iguersafene.dz</p>
                    <p className="text-sm text-gray-500 mt-1">Réponse sous 48h ouvrées</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Box */}
            <div className="bg-village-red rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold font-display mb-4">Urgence & Astreinte</h3>
                <p className="opacity-80 mb-6 text-sm leading-relaxed">Pour tout signalement urgent (fuite d'eau, électricité, voirie) en dehors des horaires d'ouverture de la mairie :</p>
                <div className="text-3xl font-black tracking-tighter text-white">+213 (0) 5 60 12 34 56</div>
              </div>
              <div className="absolute -right-10 -bottom-10 text-[10rem] font-black opacity-10 rotate-12 pointer-events-none group-hover:rotate-0 transition-transform duration-700">!</div>
            </div>
          </div>

          {/* Map Section */}
          <div className="h-full min-h-[500px] flex flex-col">
            <h2 className="text-3xl font-bold font-display text-gray-900 mb-8 flex items-center">
              <span className="w-8 h-1 bg-village-green mr-4 rounded-full"></span>
              Plan d'Accès
            </h2>
            <div className="flex-grow rounded-[3rem] overflow-hidden border-8 border-gray-50 shadow-2xl relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12781.018973641323!2d4.5323!3d36.7118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128d99805a5a5a5b%3A0x5a5a5a5a5a5a5a5a!2sIguersafene%2C%20Alg%C3%A9rie!5e0!3m2!1sfr!2sfr!4v1715694800000!5m2!1sfr!2sfr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Carte d'Iguersafene"
                className="grayscale group-hover:grayscale-0 transition-all duration-700"
              ></iframe>
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <p className="text-xs font-black text-village-green uppercase tracking-widest mb-1">Localisation GPS</p>
                <p className="text-sm font-medium text-gray-600">36.7118° N, 4.5323° E — Altitude : 890m</p>
              </div>
            </div>
          </div>

        </div>

        {/* Info Grid */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white border border-gray-100 rounded-3xl">
              <div className="w-12 h-12 bg-village-blue/10 text-village-blue rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Horaires d'Ouverture</h4>
              <p className="text-sm text-gray-500">Dimanche - Jeudi<br/>08:00 - 12:00 / 13:00 - 16:30</p>
            </div>
            <div className="text-center p-8 bg-white border border-gray-100 rounded-3xl">
              <div className="w-12 h-12 bg-village-green/10 text-village-green rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a2 2 0 00-2-2h-3v4z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 15V7a2 2 0 012-2h10a2 2 0 012 2v8"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 15h16"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 15v4a2 2 0 002 2h10a2 2 0 002-2v-4"/></svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Permanence Sociale</h4>
              <p className="text-sm text-gray-500">Lundi & Mercredi Matin<br/>Sur rendez-vous uniquement</p>
            </div>
            <div className="text-center p-8 bg-white border border-gray-100 rounded-3xl">
              <div className="w-12 h-12 bg-village-yellow/10 text-village-yellow rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Informations Tourisme</h4>
              <p className="text-sm text-gray-500">Comité de Village<br/>iguersafene.tourisme@dz</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
