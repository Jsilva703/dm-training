import React from 'react';
import { ClipboardIcon, CalendarIcon, ChartBarIcon, ChatBubbleIcon } from './icons';

const methodologySteps = [
  {
    icon: <ClipboardIcon className="w-12 h-12 text-blue-800 mb-4" />,
    title: "Análise Inicial Detalhada",
    description: "Vamos além do básico. Analisamos seu histórico, vídeos de técnica (natação/corrida) e dados de performance para construir uma base sólida e identificar seus pontos fortes e de melhoria."
  },
  {
    icon: <CalendarIcon className="w-12 h-12 text-blue-800 mb-4" />,
    title: "Pace Pro",
    description: "Sua planilha no Pace Pro é única. Ela considera suas zonas de treino (potência, ritmo, FC), seus objetivos específicos e se adapta à sua rotina, garantindo o estímulo certo na hora certa."
  },
  {
    icon: <ChatBubbleIcon className="w-12 h-12 text-blue-800 mb-4" />,
    title: "Comunicação e Feedback",
    description: "O canal via WhatsApp é nossa ferramenta para feedbacks rápidos e ajustes. Você terá suporte contínuo para tirar dúvidas e compartilhar suas sensações, mantendo a motivação em alta."
  }
];

const MethodologySection: React.FC = () => {
  return (
    <section id="methodology" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-16 text-slate-900">Uma metodologia <span className="text-blue-800">focada em você</span></h2>
        <div className="grid md:grid-cols-3 gap-8">
          {methodologySteps.map((step, index) => (
            <div key={index} className="bg-white border border-slate-200 p-8 rounded-lg flex flex-col items-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-800/10">
              {step.icon}
              <h3 className="text-2xl font-bold mb-3 text-slate-800">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;