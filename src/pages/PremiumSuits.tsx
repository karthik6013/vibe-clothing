import React from 'react';
import { ProductCard } from '../components/ProductCard';

const products = [
  {
    id: 'suit1',
    name: "Classic Business Suit",
    price: 9999,
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35",
      "https://images.unsplash.com/photo-1594938374182-a57061dac3df",
      "https://images.unsplash.com/photo-1594938328870-9623159c8c99"
    ]
  },
  {
    id: 'suit2',
    name: "Women's Power Suit",
    price: 8999,
    images: [
      "https://images.unsplash.com/photo-1580913428735-bd3c269d6a82",
      "https://images.unsplash.com/photo-1580913428706-c311e67898b3",
      "https://images.unsplash.com/photo-1580913428023-02c695666d61"
    ]
  },
  {
    id: 'suit3',
    name: "Wedding Tuxedo",
    price: 9499,
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
      "https://images.unsplash.com/photo-1598032895397-b9472444bf93",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7"
    ]
  },
  {
    id: 'suit4',
    name: "Evening Suit Set",
    price: 7999,
    images: [
      "https://images.unsplash.com/photo-1598032895397-b9472444bf93",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10"
    ]
  }
];

interface PremiumSuitsProps {
  onAddToCart: (product: typeof products[0]) => void;
}

export default function PremiumSuits({ onAddToCart }: PremiumSuitsProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Premium Suits Collection</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">Exclusive suits under ₹10,000</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onAddToCart={() => onAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
}