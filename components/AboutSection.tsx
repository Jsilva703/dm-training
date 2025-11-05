import React from 'react';
import { SwimIcon, BikeIcon, RunIcon } from './icons';
import CoachCarousel from './CoachCarousel';

const expertiseAreas = [
  {
    icon: <SwimIcon className="w-10 h-10 text-blue-800 mb-4" />,
    title: "Natação",
    description: "Treinos voltados para natação em águas abertas e piscinas, com o foco em otimizar braçadas e trazer mais performance."
  },
  {
    icon: <RunIcon className="w-10 h-10 text-blue-800 mb-4" />,
    title: "Corrida",
    description: "Periodização do iniciante ao avançado, introduzindo uma metodologia específica para evolução sem lesões e eficiente."
  }
];


const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
          Conheça seu treinador, <span className="text-blue-800">Felipe Damascena</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex-shrink-0">
            <CoachCarousel />
          </div>
          <div className="md:w-2/3">
            <p className="text-lg text-slate-600 leading-relaxed mb-6 text-center md:text-left">
              "Como atleta e treinador, compreendo a intensidade da jornada que o esporte de endurance impõe. Mais do que superar limites, trata-se de construir consistência, propósito e resiliência.

Na FD Training, nossa missão é transformar ciência em resultado. Não entregamos planilhas — entregamos performance. Cada treino é desenhado de forma estratégica, integrando evidência científica, controle de carga e motivação real, para que cada sessão leve você um passo além do que acreditava possível.

Seja você um iniciante em busca da primeira linha de chegada ou um atleta experiente em busca de novos recordes, construiremos juntos uma trajetória personalizada, sólida e inspiradora."
            </p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
              {expertiseAreas.map((area) => (
                <div key={area.title} className="bg-slate-50 p-6 rounded-lg border border-slate-200 transition-all duration-300 hover:shadow-lg hover:border-blue-800 hover:-translate-y-1">
                  {area.icon}
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{area.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;