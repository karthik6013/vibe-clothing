import React from 'react';
import { ProductCard } from '../components/ProductCard';

const products = [
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    price: 2499,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a"
    ]
  },
  {
    id: 2,
    name: "Designer Denim Shirt",
    price: 3499,
    images: [
      "https://images.unsplash.com/photo-1589310243389-96a5483213a8",
      "https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157"
    ]
  },
  {
    id: 3,
    name: "Luxury Cotton Shirt",
    price: 2999,
    images: [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e",
      "https://images.unsplash.com/photo-1563630423918-b58f07336ac9"
    ]
  },
  {
    id: 4,
    name: "Designer Kurta",
    price: 4999,
    images: [
      "https://images.unsplash.com/photo-1597983073493-88cd35cf93b0",
      "https://images.unsplash.com/photo-1604695573706-53170668f6a6",
      "https://images.unsplash.com/photo-1604695573787-46b9d87c0fac"
    ]
  },
  {
    id: 5,
    name: "Premium Slim Fit Jeans",
    price: 3999,
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
      "https://images.unsplash.com/photo-1584865288642-42078afe6942"
    ]
  },
  {
    id: 6,
    name: "Luxury Blazer",
    price: 7999,
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
      "https://images.unsplash.com/photo-1598032895397-b9472444bf93",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7"
    ]
  }
];

interface MensWearProps {
  onAddToCart: (product: typeof products[0]) => void;
}

export default function MensWear({ onAddToCart }: MensWearProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Men's Premium Collection</h1>
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