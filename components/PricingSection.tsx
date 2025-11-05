import React from 'react';
import { CheckIcon, BikeIcon } from './icons';

interface PricingSectionProps {
  whatsappLink: string;
}

interface Plan {
  name: string;
  idealFor: string;
  features: string[];
  prices: {
    monthly?: { price: string; discount?: string };
  };
  buttonText: string;
  featured: boolean;
}

const WHATSAPP_PHONE_NUMBER = "5500000000000";

const generateWhatsAppLink = (planName: string): string => {
    const message = `Olá! Tenho interesse no plano "${planName}". Gostaria de mais informações.`;
    return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE_NUMBER}&text=${encodeURIComponent(message)}`;
};

const generateInterestWhatsAppLink = (planName: string): string => {
    const message = `Olá! Tenho interesse no plano de "${planName}" quando for lançado. Gostaria de ser avisado!`;
    return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE_NUMBER}&text=${encodeURIComponent(message)}`;
}

const allPlans: Plan[] = [
    {
        name: "Corrida Performance",
        idealFor: "Para atletas que buscam superar seus limites no asfalto ou na trilha.",
        prices: {
            monthly: { price: 'R$ 200', discount: 'Desconto R$ 150' },
        },
        features: [
            "Planilhas no Pace Pro",
            "Definição de zonas de treino (Ritmo e FC)",
            "Análise de métricas de performance",
            "Contato via WhatsApp para dúvidas",
            "Feedback semanal dos treinos",
        ],
        buttonText: "Começar a Correr",
        featured: false,
    },
    {
        name: "Aquathlon Performance",
        idealFor: "A preparação completa para os desafios de natação e corrida combinados.",
        prices: {
            monthly: { price: 'R$ 350', discount: 'Desconto R$ 250' },
        },
        features: [
          "Tudo dos planos de modalidade única",
          "Planejamento integrado para Natação e Corrida",
          "Estratégias de transição",
          "Análise de dados avançada e cruzada",
          "Suporte prioritário",
        ],
        buttonText: "Escolher Aquathlon",
        featured: true,
    },
    {
        name: "Natação Performance",
        idealFor: "Para atletas que desejam melhorar técnica e velocidade na água.",
        prices: {
            monthly: { price: 'R$ 200', discount: 'Desconto R$ 150' },
        },
        features: [
            "Planilhas no Pace Pro",
            "Definição de zonas de treino por pace",
            "Foco em técnica, velocidade e resistência",
            "Contato via WhatsApp para dúvidas",
            "Feedback semanal dos treinos",
        ],
        buttonText: "Começar a Nadar",
        featured: false,
    },
];

const orderedPlans = [
    allPlans.find(p => p.name === "Corrida Performance"),
    allPlans.find(p => p.name === "Aquathlon Performance"),
    allPlans.find(p => p.name === "Natação Performance"),
].filter(Boolean) as Plan[];


const PlanCard: React.FC<{ plan: Plan }> = ({ plan }) => {
    const currentPriceInfo = plan.prices.monthly;
    const dynamicWhatsappLink = generateWhatsAppLink(plan.name);

    return (
        <div className={`relative bg-white p-8 rounded-xl w-full h-full flex flex-col border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${plan.featured ? 'border-2 border-blue-600 shadow-blue-600/10' : 'border-slate-200'}`}>
            {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    Mais Popular
                </div>
            )}
            <h3 className="text-2xl font-bold text-center text-slate-800">{plan.name}</h3>
            <p className="text-center text-slate-500 mt-2 mb-6 h-12">{plan.idealFor}</p>
            
            <div className="text-center my-4">
                <span className="text-5xl font-extrabold text-slate-900">{currentPriceInfo?.price}</span>
                <span className="text-slate-500">/mês</span>
                 {currentPriceInfo?.discount && <p className="text-blue-600 font-semibold mt-2">{currentPriceInfo.discount}</p>}
            </div>

            <ul className="mt-6 space-y-4 flex-grow">
                {plan.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                        <CheckIcon className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                        <span className="text-slate-600">{feature}</span>
                    </li>
                ))}
            </ul>
            <a
                href={dynamicWhatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 block text-center w-full py-4 px-6 rounded-lg font-bold transition-transform transform hover:scale-105 duration-300 ${plan.featured ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30' : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'}`}
            >
                {plan.buttonText}
            </a>
        </div>
    );
};

const ComingSoonCard: React.FC = () => {
    return (
        <div className="lg:col-span-4 mt-4 bg-white p-8 rounded-xl w-full h-full flex flex-col md:flex-row items-center justify-between border-2 border-dashed border-slate-300 text-center md:text-left gap-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
                <BikeIcon className="w-16 h-16 text-blue-500 flex-shrink-0" />
                <div>
                    <h3 className="text-2xl font-bold text-slate-800">
                        Ciclismo Performance <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full ml-2 align-middle">EM BREVE</span>
                    </h3>
                    <p className="text-slate-500 mt-2 max-w-lg">
                        A mesma metodologia que gera resultados na corrida e natação, agora para as duas rodas. Prepare-se para evoluir.
                    </p>
                </div>
            </div>
             <a
                href={generateInterestWhatsAppLink("Ciclismo")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 md:mt-0 flex-shrink-0 py-3 px-6 rounded-lg font-bold transition-transform transform hover:scale-105 duration-300 bg-blue-600 text-white hover:bg-blue-700 whitespace-nowrap"
            >
                Seja o primeiro a saber
            </a>
        </div>
    );
};


const PricingSection: React.FC<PricingSectionProps> = ({ whatsappLink }) => {
    return (
      <section id="plans" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-slate-900">Escolha o plano que te levará ao <span className="text-blue-600">próximo nível</span></h2>
          <p className="text-blue-700 bg-blue-100/70 inline-block px-4 py-1 rounded-full mb-12">Valores promocionais de lançamento!</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-stretch max-w-screen-xl mx-auto">
              {orderedPlans.slice(0, 1).map(plan => (
                  <PlanCard key={plan.name} plan={plan} />
              ))}
              <div className="lg:col-span-2">
                 {orderedPlans[1] && <PlanCard key={orderedPlans[1].name} plan={orderedPlans[1]} />}
              </div>
               {orderedPlans.slice(2).map(plan => (
                  <PlanCard key={plan.name} plan={plan} />
              ))}
              <ComingSoonCard />
          </div>
        </div>
      </section>
    );
};

export default PricingSection;