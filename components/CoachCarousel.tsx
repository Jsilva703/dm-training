import React, { useState, useEffect, useCallback } from 'react';

const coachImages = [
  "https://mkdocs-201908.s3.sa-east-1.amazonaws.com:443/1624/production/80b34f8730370b626ca64eb2458c3f6f_1624/production/IMG_1472_1762305654632.JPG",
  "https://mkdocs-201908.s3.sa-east-1.amazonaws.com:443/1624/production/e78194c3e97a8e18437de87eb0daa600_1624/production/IMG_1466_1762305835429.JPG",
  "https://mkdocs-201908.s3.sa-east-1.amazonaws.com:443/1624/production/b5095d26b8dc19b25891d7c4c8fdf7e8_1624/production/IMG_1468_1762305916529.JPG",
];

const CoachCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % coachImages.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + coachImages.length) % coachImages.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <div className="relative w-full max-w-sm mx-auto rounded-lg overflow-hidden shadow-xl shadow-blue-600/10 group h-[400px]">
      <div
        className="flex transition-transform ease-in-out duration-700 h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {coachImages.map((src, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 relative"
          >
            <img
              src={src}
              alt={`Coach Felipe Damascena in action ${index + 1}`}
              className="w-full h-full object-cover absolute inset-0"
              style={{ objectPosition: 'center center' }}
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/50 text-slate-900 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
        aria-label="Previous image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/50 text-slate-900 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
        aria-label="Next image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {coachImages.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-white scale-125' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CoachCarousel;
