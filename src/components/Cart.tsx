import React, { useState } from 'react';
import { ShoppingCart, X, CreditCard, Trash2 } from 'lucide-react';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartProps {
  items: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onRemoveFromCart: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
}

export function Cart({ items, isOpen, onClose, onRemoveFromCart, onUpdateQuantity }: CartProps) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: ''
  });
  const [loading, setLoading] = useState(false);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
    setIsCheckingOut(false);
    alert('Payment successful! Your order has been placed.');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex justify-end">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 h-full">
        <div className="p-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-light tracking-wide flex items-center gap-3 text-gray-900 dark:text-white">
            <ShoppingCart className="w-6 h-6" />
            {isCheckingOut ? 'Secure Checkout' : 'Shopping Cart'}
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {isCheckingOut ? (
          <div className="p-6">
            <form onSubmit={handlePayment} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  value={paymentDetails.cardNumber}
                  onChange={(e) => setPaymentDetails({...paymentDetails, cardNumber: e.target.value})}
                  required
                  pattern="[0-9\s]{16,19}"
                  maxLength={19}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Card Holder Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  value={paymentDetails.cardHolder}
                  onChange={(e) => setPaymentDetails({...paymentDetails, cardHolder: e.target.value})}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    value={paymentDetails.expiryDate}
                    onChange={(e) => setPaymentDetails({...paymentDetails, expiryDate: e.target.value})}
                    required
                    pattern="(0[1-9]|1[0-2])\/([0-9]{2})"
                    maxLength={5}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    value={paymentDetails.cvv}
                    onChange={(e) => setPaymentDetails({...paymentDetails, cvv: e.target.value})}
                    required
                    pattern="[0-9]{3,4}"
                    maxLength={4}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-lg hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 font-medium"
                disabled={loading}
              >
                <CreditCard className="w-5 h-5" />
                {loading ? 'Processing...' : `Pay ₹${total.toLocaleString()}`}
              </button>
            </form>
          </div>
        ) : (
          <>
            <div className="p-6 overflow-y-auto h-[calc(100vh-180px)]">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-500 dark:text-gray-400">
                  <ShoppingCart className="w-16 h-16 mb-4" />
                  <p className="text-xl font-light">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <img src={item.image} alt={item.name} className="w-24 h-32 object-cover rounded-lg" />
                      <div className="flex-1">
                        <h3 className="font-light text-lg text-gray-900 dark:text-white mb-2">{item.name}</h3>
                        <p className="text-lg font-medium text-gray-900 dark:text-white">₹{item.price}</p>
                        <div className="flex items-center gap-4 mt-4">
                          <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-lg">
                            <button
                              onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                              className="px-3 py-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                            >
                              -
                            </button>
                            <span className="px-3 py-1 text-gray-900 dark:text-white">{item.quantity}</span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="px-3 py-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => onRemoveFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 sticky bottom-0">
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-light text-gray-900 dark:text-white">Total</span>
                <span className="text-2xl font-medium text-gray-900 dark:text-white">₹{total.toLocaleString()}</span>
              </div>
              <button
                className="w-full bg-black text-white py-4 rounded-lg hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={items.length === 0}
                onClick={() => setIsCheckingOut(true)}
              >
                <CreditCard className="w-5 h-5" />
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}