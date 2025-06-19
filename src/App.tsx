import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Mail, Instagram, Facebook, ShoppingCart } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';
import { ImageCarousel } from './components/ImageCarousel';
import { Cart, CartItem } from './components/Cart';
import MensWear from './pages/MensWear';
import WomensWear from './pages/WomensWear';
import ChildrensWear from './pages/ChildrensWear';
import LuxuryWear from './pages/LuxuryWear';
import DesignerCollection from './pages/DesignerCollection';
import PremiumSuits from './pages/PremiumSuits';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const addToCart = (product: { id: number | string; name: string; price: number; images: string[] }) => {
    setCartItems((items) => {
      const existingItem = items.find((item) => item.id === product.id);
      if (existingItem) {
        return items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...items, { ...product, image: product.images[0], quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number | string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number | string, quantity: number) => {
    setCartItems((items) =>
      quantity === 0
        ? items.filter((item) => item.id !== id)
        : items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          )
    );
  };

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <header className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50">
          <div className="container mx-auto px-4">
            {/* Top navigation with collections */}
            <div className="py-2 border-b border-gray-200 dark:border-gray-700">
              <nav className="flex justify-center space-x-8">
                <Link to="/luxury" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Luxury Wear
                </Link>
                <Link to="/designer" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Designer Collection
                </Link>
                <Link to="/suits" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Premium Suits
                </Link>
                <Link to="/mens" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Men
                </Link>
                <Link to="/womens" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Women
                </Link>
                <Link to="/childrens" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Children
                </Link>
              </nav>
            </div>
            
            {/* Main header with logo and cart */}
            <div className="py-4 flex justify-between items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img src="/vibe-logo.svg" alt="VIBE" className="h-12 w-auto" />
                <span className="text-3xl font-bold text-gray-800 dark:text-white">VIBE</span>
              </Link>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="relative p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  <ShoppingCart className="w-6 h-6" />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                    </span>
                  )}
                </button>
                <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
              </div>
            </div>
          </div>
        </header>

        <main className="pt-28">
          <Routes>
            <Route path="/" element={
              <>
                <ImageCarousel />
                <section className="container mx-auto px-4 py-16">
                  <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Our Collections</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Link to="/luxury" className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Luxury Wear</h3>
                      <p className="text-gray-600 dark:text-gray-300">Premium fashion from ₹5,000 to ₹10,000</p>
                    </Link>
                    <Link to="/designer" className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Designer Collection</h3>
                      <p className="text-gray-600 dark:text-gray-300">Tailored fashion under ₹2,000</p>
                    </Link>
                    <Link to="/suits" className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Premium Suits</h3>
                      <p className="text-gray-600 dark:text-gray-300">Exclusive suits under ₹10,000</p>
                    </Link>
                  </div>
                </section>
              </>
            } />
            <Route path="/luxury" element={<LuxuryWear onAddToCart={addToCart} />} />
            <Route path="/designer" element={<DesignerCollection onAddToCart={addToCart} />} />
            <Route path="/suits" element={<PremiumSuits onAddToCart={addToCart} />} />
            <Route path="/mens" element={<MensWear onAddToCart={addToCart} />} />
            <Route path="/womens" element={<WomensWear onAddToCart={addToCart} />} />
            <Route path="/childrens" element={<ChildrensWear onAddToCart={addToCart} />} />
          </Routes>

          <section className="bg-gray-100 dark:bg-gray-800 py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Contact Us</h2>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  <a href="mailto:contact@vibe.com" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                    contact@vibe.com
                  </a>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 VIBE. All rights reserved.</p>
          </div>
        </footer>

        <Cart
          items={cartItems}
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          onRemoveFromCart={removeFromCart}
          onUpdateQuantity={updateQuantity}
        />
      </div>
    </Router>
  );
}

export default App;