import React, { useState } from 'react';
import { ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductCardProps {
  id: number | string;
  name: string;
  price: number;
  images: string[];
  onAddToCart: () => void;
}

export function ProductCard({ id, name, price, images, onAddToCart }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((current) => (current + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((current) => (current - 1 + images.length) % images.length);
  };

  return (
    <div className="group relative overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-lg">
      <div className="relative aspect-[3/4] overflow-hidden">
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`${name} view ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        
        {/* Navigation arrows */}
        <button
          onClick={(e) => {
            e.preventDefault();
            previousImage();
          }}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <button
          onClick={(e) => {
            e.preventDefault();
            nextImage();
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-1">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault();
                setCurrentImageIndex(index);
              }}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-xl font-light text-white mb-2">{name}</h3>
        <div className="flex items-center justify-between">
          <p className="text-lg font-light text-white">₹{price.toLocaleString()}</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              onAddToCart();
            }}
            className="bg-white text-black px-4 py-2 rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors duration-300"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}