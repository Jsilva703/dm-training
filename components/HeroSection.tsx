import React from 'react';

interface HeroSectionProps {
  whatsappLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ whatsappLink }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/triathlon/1920/1080"
          alt="Atleta em ação"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent/60"></div>
      </div>
      <div className="relative z-10 p-6 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-4">
          <img
            src="https://mkdocs-201908.s3.sa-east-1.amazonaws.com/1624/production/fb5110662b71c205b16694b4954b58c6_1624/production/Generated_image_2-removebg-preview_1762305105535.png"
            alt="FD Training Logo"
            className="w-16 h-16 md:w-20 md:h-20 object-contain"
          />
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            FD <span className="text-blue-600">Training</span>
          </h1>
        </div>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto text-slate-700" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          Sua evolução no esporte começa aqui — com um Coach especializado em Corrida e Natação, pronto para levar seu desempenho a outro nível.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300 inline-block"
        >
          QUERO TRANSFORMAR MEU TREINO
        </a>
      </div>
    </section>
  );
};

export default HeroSection;