import React from 'react';
import { ProductCard } from '../components/ProductCard';

const products = [
  {
    id: 'lux1',
    name: "Armani Wool Blazer",
    price: 9999,
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
      "https://images.unsplash.com/photo-1598032895397-b9472444bf93",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7"
    ]
  },
  {
    id: 'lux2',
    name: "Designer Evening Gown",
    price: 8499,
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1"
    ]
  },
  {
    id: 'lux3',
    name: "Premium Silk Saree",
    price: 7999,
    images: [
      "https://images.unsplash.com/photo-1610030469668-8e9f641aeb49",
      "https://images.unsplash.com/photo-1583391733956-6c77a0cf4d01",
      "https://images.unsplash.com/photo-1583391733742-1296f1a53dc4"
    ]
  },
  {
    id: 'lux4',
    name: "Italian Leather Jacket",
    price: 9499,
    images: [
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504",
      "https://images.unsplash.com/photo-1520975708797-fd2543e902bf"
    ]
  }
];

interface LuxuryWearProps {
  onAddToCart: (product: typeof products[0]) => void;
}

export default function LuxuryWear({ onAddToCart }: LuxuryWearProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Luxury Collection</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">Exclusive designer pieces ranging from ₹5,000 to ₹10,000</p>
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