import React from 'react';
import { SwimIcon, BikeIcon, RunIcon } from './icons';
import CoachCarousel from './CoachCarousel';

const expertiseAreas = [
  {
    icon: <SwimIcon className="w-10 h-10 text-blue-600 mb-4" />,
    title: "Natação: Técnica e Eficiência",
    description: "Análise biomecânica, treinos para águas abertas e foco na otimização de cada braçada para máxima performance com menor desgaste."
  },
  {
    icon: <BikeIcon className="w-10 h-10 text-blue-600 mb-4" />,
    title: "Ciclismo: Potência e Estratégia",
    description: "Treinos estruturados por zonas de potência (FTP), estratégias para provas longas e ganho de performance em subidas e planos."
  },
  {
    icon: <RunIcon className="w-10 h-10 text-blue-600 mb-4" />,
    title: "Corrida: Velocidade e Resiliência",
    description: "Periodização para curtas e longas distâncias, fortalecimento específico para prevenção de lesões e melhora da economia de corrida."
  }
];


const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
          Conheça seu treinador, <span className="text-blue-600">Felipe Damascena</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex-shrink-0">
            <CoachCarousel />
          </div>
          <div className="md:w-2/3">
            <p className="text-lg text-slate-600 leading-relaxed mb-6 text-center md:text-left">
              "Como atleta e treinador, entendo a jornada de superação que o esporte de endurance exige. Minha missão é traduzir a ciência do esporte em um plano prático e motivador para você. Com a DM Training, não vendemos planilhas, construímos performance. Cada treino é um passo estratégico, pensado para sua evolução, seja você um iniciante buscando completar a primeira prova ou um atleta experiente em busca de um novo recorde pessoal."
            </p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {expertiseAreas.map((area) => (
                <div key={area.title} className="bg-slate-50 p-6 rounded-lg border border-slate-200 transition-all duration-300 hover:shadow-lg hover:border-blue-300 hover:-translate-y-1">
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