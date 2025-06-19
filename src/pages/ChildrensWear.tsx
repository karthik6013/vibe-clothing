import React from 'react';
import { ProductCard } from '../components/ProductCard';

const products = [
  {
    id: 201,
    name: "Kids Cotton T-Shirt",
    price: 299,
    images: [
      "https://images.unsplash.com/photo-1519238263530-99bdd11f3271",
      "https://images.unsplash.com/photo-1519238272971-563cde7bef4e",
      "https://images.unsplash.com/photo-1519238272906-3a708f6878d3"
    ]
  },
  {
    id: 202,
    name: "Children's Party Dress",
    price: 899,
    images: [
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7",
      "https://images.unsplash.com/photo-1518831959983-8d51e33919a5",
      "https://images.unsplash.com/photo-1518831959892-6a3c7a5a56a6"
    ]
  },
  {
    id: 203,
    name: "Boys Casual Shorts",
    price: 399,
    images: [
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4",
      "https://images.unsplash.com/photo-1503919545889-c7d9cf0a1c3f",
      "https://images.unsplash.com/photo-1503919545889-3c7d9cf0a1c3"
    ]
  },
  {
    id: 204,
    name: "Kids Traditional Wear",
    price: 799,
    images: [
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b",
      "https://images.unsplash.com/photo-1519457431-44ccd64a579c",
      "https://images.unsplash.com/photo-1519457431-44ccd64a579d"
    ]
  },
  {
    id: 205,
    name: "Girls Summer Dress",
    price: 599,
    images: [
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7",
      "https://images.unsplash.com/photo-1518831959983-8d51e33919a5",
      "https://images.unsplash.com/photo-1518831959892-6a3c7a5a56a6"
    ]
  },
  {
    id: 206,
    name: "Kids Winter Jacket",
    price: 999,
    images: [
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4",
      "https://images.unsplash.com/photo-1503919545889-c7d9cf0a1c3f",
      "https://images.unsplash.com/photo-1503919545889-3c7d9cf0a1c3"
    ]
  }
];

interface ChildrensWearProps {
  onAddToCart: (product: typeof products[0]) => void;
}

export default function ChildrensWear({ onAddToCart }: ChildrensWearProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Children's Collection Under ₹1000</h1>
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