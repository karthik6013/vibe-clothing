import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    url: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
    category: "Premium Fashion"
  },
  {
    url: "https://images.unsplash.com/photo-1445205170230-053b83016050",
    category: "Luxury Collection"
  },
  {
    url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
    category: "Designer Wear"
  },
  {
    url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b",
    category: "Seasonal Edit"
  }
];

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const navigate = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentIndex((current) => (current - 1 + images.length) % images.length);
    } else {
      setCurrentIndex((current) => (current + 1) % images.length);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-all duration-1000 ${
            index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
        >
          <img
            src={image.url}
            alt={image.category}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-20 text-white">
            <h3 className="text-6xl font-light tracking-wider mb-4">{image.category}</h3>
            <p className="text-xl font-light tracking-wide">Discover the Latest Collection</p>
          </div>
        </div>
      ))}
      
      <button
        onClick={() => navigate('prev')}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={() => navigate('next')}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}