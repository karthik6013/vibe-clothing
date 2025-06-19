import React from 'react';
import { ProductCard } from '../components/ProductCard';

const products = [
  {
    id: 'des1',
    name: "Tailored Cotton Kurta",
    price: 1899,
    images: [
      "https://images.unsplash.com/photo-1597983073493-88cd35cf93b0",
      "https://images.unsplash.com/photo-1604695573706-53170668f6a6",
      "https://images.unsplash.com/photo-1604695573787-46b9d87c0fac"
    ]
  },
  {
    id: 'des2',
    name: "Designer Palazzo Set",
    price: 1999,
    images: [
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03",
      "https://images.unsplash.com/photo-1586323287528-80948b1b6b8e",
      "https://images.unsplash.com/photo-1583846783214-7229a91b20ed"
    ]
  },
  {
    id: 'des3',
    name: "Handcrafted Blouse",
    price: 1499,
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105",
      "https://images.unsplash.com/photo-1503342394128-c104d54dba01",
      "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7"
    ]
  },
  {
    id: 'des4',
    name: "Custom Fit Shirt",
    price: 1799,
    images: [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e",
      "https://images.unsplash.com/photo-1563630423918-b58f07336ac9"
    ]
  }
];

interface DesignerCollectionProps {
  onAddToCart: (product: typeof products[0]) => void;
}

export default function DesignerCollection({ onAddToCart }: DesignerCollectionProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Designer Collection</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">Tailored fashion under ₹2,000</p>
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