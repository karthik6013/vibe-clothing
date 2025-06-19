import React from 'react';
import { ProductCard } from '../components/ProductCard';

const products = [
  {
    id: 101,
    name: "Floral Summer Dress",
    price: 899,
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1",
      "https://images.unsplash.com/photo-1612336307429-8a898d10e223"
    ]
  },
  {
    id: 102,
    name: "Casual Cotton Top",
    price: 499,
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105",
      "https://images.unsplash.com/photo-1503342394128-c104d54dba01",
      "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7"
    ]
  },
  {
    id: 103,
    name: "Traditional Kurti",
    price: 799,
    images: [
      "https://images.unsplash.com/photo-1583391733956-6c77a0cf4d01",
      "https://images.unsplash.com/photo-1583391733742-1296f1a53dc4",
      "https://images.unsplash.com/photo-1583391733859-0a08e7260de7"
    ]
  },
  {
    id: 104,
    name: "Ethnic Palazzo",
    price: 699,
    images: [
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03",
      "https://images.unsplash.com/photo-1586323287528-80948b1b6b8e",
      "https://images.unsplash.com/photo-1583846783214-7229a91b20ed"
    ]
  },
  {
    id: 105,
    name: "Designer Saree",
    price: 999,
    images: [
      "https://images.unsplash.com/photo-1610030469668-8e9f641aeb49",
      "https://images.unsplash.com/photo-1583391733956-6c77a0cf4d01",
      "https://images.unsplash.com/photo-1583391733742-1296f1a53dc4"
    ]
  },
  {
    id: 106,
    name: "Casual Jumpsuit",
    price: 899,
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446",
      "https://images.unsplash.com/photo-1583846552345-d2aa9d47b9f8",
      "https://images.unsplash.com/photo-1583846552654-229e932c9f43"
    ]
  },
  {
    id: 107,
    name: "Silk Saree",
    price: 999,
    images: [
      "https://images.unsplash.com/photo-1610030469668-8e9f641aeb49",
      "https://images.unsplash.com/photo-1610030469669-8e9f641aeb49",
      "https://images.unsplash.com/photo-1610030469670-8e9f641aeb49"
    ]
  },
  {
    id: 108,
    name: "Bridal Saree",
    price: 999,
    images: [
      "https://images.unsplash.com/photo-1595981267035-7f04d35b998a",
      "https://images.unsplash.com/photo-1595981267036-7f04d35b998a",
      "https://images.unsplash.com/photo-1595981267037-7f04d35b998a"
    ]
  },
  {
    id: 109,
    name: "Party Wear Gown",
    price: 999,
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae",
      "https://images.unsplash.com/photo-1566174053880-31528523f8ae",
      "https://images.unsplash.com/photo-1566174053881-31528523f8ae"
    ]
  },
  {
    id: 110,
    name: "Business Suit Set",
    price: 999,
    images: [
      "https://images.unsplash.com/photo-1580913428735-bd3c269d6a82",
      "https://images.unsplash.com/photo-1580913428736-bd3c269d6a82",
      "https://images.unsplash.com/photo-1580913428737-bd3c269d6a82"
    ]
  },
  {
    id: 111,
    name: "Festive Lehenga",
    price: 999,
    images: [
      "https://images.unsplash.com/photo-1595981267035-7f04d35b998a",
      "https://images.unsplash.com/photo-1595981267036-7f04d35b998a",
      "https://images.unsplash.com/photo-1595981267037-7f04d35b998a"
    ]
  },
  {
    id: 112,
    name: "Cotton Saree",
    price: 799,
    images: [
      "https://images.unsplash.com/photo-1610030469668-8e9f641aeb49",
      "https://images.unsplash.com/photo-1583391733956-6c77a0cf4d01",
      "https://images.unsplash.com/photo-1583391733742-1296f1a53dc4"
    ]
  }
];

interface WomensWearProps {
  onAddToCart: (product: typeof products[0]) => void;
}

export default function WomensWear({ onAddToCart }: WomensWearProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Women's Collection Under ₹1000</h1>
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