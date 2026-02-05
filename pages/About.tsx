
import React from 'react';
import { VILLAGE_FAMILIES, VILLAGE_PRESIDENTS, HISTORY_MILESTONES, ASSOCIATIONS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Header */}
      <section className="bg-gray-900 py-32 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 flex">
            <div className="flex-1 bg-village-green"></div>
            <div className="flex-1 bg-village-yellow"></div>
            <div className="flex-1 bg-village-red"></div>
            <div className="flex-1 bg-village-blue"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold font-display mb-4 uppercase tracking-tighter">Iguersafene</h1>
          <p className="text-2xl md:text-3xl font-black text-village-yellow mb-4 uppercase tracking-widest">Village du Monde</p>
          <p className="text-xl font-display italic text-white/60">Agarsafen - ⴰⴴⴰⵔⵙⴰⴼⴻⵏ</p>
        </div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-village-green rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-village-blue rounded-full blur-[100px] opacity-20"></div>
      </section>

      {/* Présentation Textuelle */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-village-blue font-black text-xs tracking-widest uppercase mb-4 block">Mémoire & Patrimoine</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900">Une Terre de Résistance Inébranlable</h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-8 font-light leading-relaxed">
            <p>
              Perché à 890 mètres d'altitude, sur les contreforts majestueux du Djurdjura et à la lisière de la forêt millénaire d'Akfadou, <strong>Iguersafene</strong> (Agarsafen) est bien plus qu'un village kabyle : c'est un bastion historique dont les racines puisent dans l'épopée du <strong>Royaume de Koukou</strong> au XVIe siècle.
            </p>
            
            <p>
              Après 1700, intégré à la division de Koukou Ouffela sous l'influence des <strong>Ath Kaci</strong>, le village a forgé son identité dans le feu de la lutte. Dès 1854, Iguersafene se dressa aux côtés de <strong>Fatma N'Soumer</strong> pour défendre la liberté de ses montagnes, poursuivant ce combat lors de l'insurrection de 1871.
            </p>

            <div className="p-8 bg-village-red/5 rounded-[2rem] border-l-4 border-village-red my-12">
              <h4 className="font-bold text-village-red text-xl mb-4">Le Sacrifice du 4 Décembre 1957</h4>
              <p className="text-sm italic mb-4">
                "Ce jour funeste, Iguersafene fut rayé de la carte par un bombardement total. Transformé en <strong>Zone Rouge</strong>, le village vit ses maisons réduites en cendres."
              </p>
              <p className="text-sm">
                Alors que les hommes valides étaient emprisonnés ou contraints à la fuite vers les profondeurs de la forêt d'<strong>Akfadou</strong>, les femmes, les enfants et les vieillards durent s'exiler dans l'urgence absolue, emportant pour seul bagage leur dignité. Ils vécurent dispersés, hébergés dans la solidarité des villages voisins, jusqu'à l'indépendance en 1962.
              </p>
            </div>

            <p>
              Le village a tout perdu : ses enfants, ses mamans, ses pères et sa jeunesse célibataire. Mais de ces décombres est née une volonté de renaissance sans précédent. Durant la décennie noire (1994-2000), le village a de nouveau montré son courage en s'organisant en bastion de résistance contre le terrorisme, protégeant chaque foyer avec détermination.
            </p>

            <p>
              Un tournant majeur de la modernisation sociale fut franchi en <strong>1999</strong>, lorsque le village a achevé l'adduction d'eau potable directement dans chaque foyer. Cet événement historique a mis fin à la longue pénibilité pour les femmes qui devaient, depuis des générations, porter l'eau depuis les fontaines publiques.
            </p>

            <p>
              En 2001, lors du <strong>Printemps Noir</strong>, Iguersafene fut aux avant-postes de la lutte pour la dignité. Le 12 mai 2001, la tragédie frappa de nouveau avec l'assassinat du jeune <strong>Slimane Raab</strong>, dont le nom s'est ajouté à la liste des héros ayant sacrifié leur vie pour la justice.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-village-green/5 p-8 rounded-[2rem] border-l-4 border-village-green">
                <h4 className="font-bold text-village-green text-xl mb-3">Renaissance Écologique</h4>
                <p className="text-sm">Lauréat du titre de "Village le plus propre" en 2014, Iguersafene prouve que la résilience passe par le respect de la terre.</p>
              </div>
              <div className="bg-village-blue/5 p-8 rounded-[2rem] border-l-4 border-village-blue">
                <h4 className="font-bold text-village-blue text-xl mb-3">Tajmaât Vivante</h4>
                <p className="text-sm">L'assemblée villageoise reste le garant de la solidarité millénaire, prenant chaque décision de manière collégiale.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chronologie Historique */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <span className="text-village-red font-black text-xs tracking-widest uppercase mb-4 block">L'Histoire à travers les âges</span>
            <h2 className="text-5xl font-bold font-display text-gray-900 mb-6">Chronologie du Village</h2>
            <div className="w-24 h-1 bg-village-red mx-auto rounded-full"></div>
          </div>
          
          <div className="relative border-l-2 border-gray-200 ml-6 md:ml-0 md:border-l-0 md:before:absolute md:before:mx-auto md:before:w-0.5 md:before:bg-gray-200">
            {HISTORY_MILESTONES.map((m, i) => (
              <div key={i} className="mb-20 md:flex md:justify-between items-center w-full group">
                {/* Desktop Year */}
                <div className={`hidden md:block w-5/12 ${i % 2 === 0 ? 'text-right pr-12' : 'order-1 text-left pl-12'}`}>
                  <time className={`text-4xl font-black font-display ${m.year.includes('1957') || m.year.includes('2001') ? 'text-village-red' : 'text-gray-300'}`}>{m.year}</time>
                </div>

                {/* Dot */}
                <div className="absolute left-0 -translate-x-1/2 md:static md:translate-x-0 w-10 h-10 rounded-full border-4 border-white bg-gray-200 z-10 md:order-0 group-hover:scale-125 transition-transform duration-300 shadow-sm flex items-center justify-center">
                    {m.year.includes('1957') || m.year.includes('2001') ? (
                      <div className="w-5 h-5 bg-village-red rounded-full animate-ping"></div>
                    ) : (
                      <div className={`w-3 h-3 rounded-full ${i % 2 === 0 ? 'bg-village-blue' : 'bg-village-green'}`}></div>
                    )}
                </div>

                {/* Content Box */}
                <div className={`md:w-5/12 bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 ${i % 2 === 0 ? 'md:order-1' : 'md:text-right'}`}>
                  <time className="md:hidden text-2xl font-black text-village-red mb-4 block">{m.year}</time>
                  <p className="text-gray-600 text-lg leading-relaxed font-light">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organisation Sociale */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div>
                <span className="text-village-yellow font-black text-xs tracking-widest uppercase mb-4 block">Gouvernance Locale</span>
                <h2 className="text-5xl font-bold font-display text-gray-900 mb-8">Tajmaât : <br/>Le Parlement de la Place</h2>
                <p className="text-gray-500 text-lg font-light leading-relaxed">
                   La Tajmaât est l'âme politique du village. C'est ici que se règlent les litiges, que se décident les projets de travaux (Tiwizi) et que se gère la vie de la cité dans le respect total des ancêtres et de l'équité.
                </p>
              </div>
              
              <div className="grid gap-6">
                {[
                  { title: 'Commission Sociale', desc: 'Gestion de la solidarité et de la Lweziâa.', color: 'bg-village-green' },
                  { title: 'Comité de Vigilance', desc: 'Protection du territoire et de la forêt.', color: 'bg-village-blue' },
                  { title: 'Conseil des Sages', desc: 'Médiation et transmission des coutumes.', color: 'bg-village-yellow' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all border border-gray-100 group">
                    <div className={`w-14 h-14 rounded-2xl ${item.color} text-white flex items-center justify-center mr-6 group-hover:rotate-6 transition-transform text-lg font-black`}>
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-[3rem] p-12 text-white shadow-2xl relative">
              <div className="absolute top-0 left-0 w-full h-2 flex rounded-t-[3rem] overflow-hidden">
                <div className="flex-1 bg-village-green"></div>
                <div className="flex-1 bg-village-yellow"></div>
              </div>
              <h3 className="text-3xl font-bold font-display mb-10 text-village-yellow">Chronologie des Présidents</h3>
              <div className="grid grid-cols-1 gap-6 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
                {VILLAGE_PRESIDENTS.map((p, i) => (
                  <div key={i} className="flex items-center space-x-6 border-b border-white/5 pb-4 group">
                    <span className="text-xs font-black text-village-green uppercase tracking-tighter w-24 flex-shrink-0">{p.period}</span>
                    <span className="text-sm font-medium group-hover:text-village-yellow transition-colors">{p.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Associations Force Vives */}
      <section className="py-32 bg-gray-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-village-blue font-black text-xs tracking-widest uppercase mb-4 block">Engagement Citoyen</span>
            <h2 className="text-5xl font-bold font-display">Les Associations</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {ASSOCIATIONS.map(asc => (
              <div key={asc.id} className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10 hover:bg-white/10 transition-all group">
                <div className={`w-16 h-16 rounded-2xl ${asc.color} text-white flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={asc.icon}/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">{asc.name}</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{asc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
