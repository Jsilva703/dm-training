import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MethodologySection from './components/MethodologySection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5500000000000&text=Ol%C3%A1!%20Tenho%20interesse%20na%20consultoria%20esportiva%20da%20FD%20Training.";

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-white text-slate-800 font-sans antialiased">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-sm backdrop-blur-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-2 flex justify-between items-center min-h-[100px]">
          <img
            src="https://mkdocs-201908.s3.sa-east-1.amazonaws.com/1624/production/fb5110662b71c205b16694b4954b58c6_1624/production/Generated_image_2-removebg-preview_1762305105535.png"
            alt="FD Training"
            className="h-20 md:h-24 w-auto object-contain max-w-[250px]"
            loading="eager"
            decoding="async"
          />
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block bg-blue-800 text-white font-bold py-2 px-5 rounded-lg hover:bg-blue-900 transition-colors duration-300 text-sm"
          >
            Fale com o Treinador
          </a>
        </div>
      </header>

      <main>
        <HeroSection whatsappLink={WHATSAPP_LINK} />
        <AboutSection />
        <MethodologySection />
        <PricingSection whatsappLink={WHATSAPP_LINK} />
        <TestimonialsSection />
        <CtaSection whatsappLink={WHATSAPP_LINK} />
      </main>

      <Footer />
    </div>
  );
};

export default App;