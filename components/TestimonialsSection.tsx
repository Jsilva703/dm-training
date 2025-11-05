import React, { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    photo: "https://picsum.photos/seed/joao/100/100",
    name: "João Silva",
    title: "Corredor Amador",
    quote: "Com a ajuda do Felipe, saí do sedentarismo e completei minha primeira meia maratona. A atenção aos detalhes e a motivação foram fundamentais. Recomendo demais!"
  },
  {
    photo: "https://picsum.photos/seed/maria/100/100",
    name: "Maria Oliveira",
    title: "Triatleta",
    quote: "O planejamento integrado do Felipe foi um divisor de águas na minha preparação. Consegui evoluir nas três modalidades e me senti mais preparada e confiante do que nunca."
  },
  {
    photo: "https://picsum.photos/seed/carlos/100/100",
    name: "Carlos Souza",
    title: "Ciclista",
    quote: "A consultoria me ajudou a entender como treinar com potência e a melhorar muito meu rendimento nas subidas. Os treinos são desafiadores na medida certa!"
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Resultados que <span className="text-blue-800">inspiram</span></h2>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden relative">
            <div
              className="flex transition-transform ease-out duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div className="bg-white p-8 rounded-lg border border-slate-200 flex flex-col h-full">
                    <p className="text-slate-600 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <img src={testimonial.photo} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-blue-800" />
                      <div>
                        <h4 className="text-lg font-bold text-slate-900">{testimonial.name}</h4>
                        <p className="text-blue-800">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, slideIndex) => (
              <button
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentIndex === slideIndex ? 'bg-blue-800' : 'bg-slate-300 hover:bg-slate-400'}`}
                aria-label={`Go to slide ${slideIndex + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;