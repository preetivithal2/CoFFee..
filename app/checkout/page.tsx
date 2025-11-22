"use client";

import React, { useState } from 'react';
import { Minus, Plus, Trash2, ShoppingCart, CreditCard } from 'lucide-react';

// --- 1. TypeScript Interfaces (Defining the structure) ---
/**
 * Defines the strict structure for a single item in the shopping cart.
 */
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// --- 2. Mock Data (Strictly typed array) ---
const initialCartItems: CartItem[] = [
  { id: 1, name: "Nike Air Max 270", price: 160.00, quantity: 1 },
  { id: 2, name: "Nike Air Max 90", price: 105.00, quantity: 1 },
  { id: 3, name: "Air Cross Trainer 3 Low", price: 125.00, quantity: 1 },
];

const SHIPPING_COST: number = 15.00;

// --- 3. Main Cart Component ---

const SimpleCartPage: React.FC = () => {
  // 🍎 State: We explicitly define that cartItems is an array of CartItem objects
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  // --- 4. Core Logic Functions ---

  /**
   * Handles increasing, decreasing, or removing an item from the cart.
   * @param itemId The unique ID of the item to modify.
   * @param newQuantity The quantity to set (handles removal if <= 0).
   */
  const handleQuantityChange = (itemId: number, newQuantity: number): void => {
    if (newQuantity <= 0) {
      // Logic for REMOVAL: Filter out the item with the matching ID
      setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    } else {
      // Logic for UPDATE: Map over items and update the quantity of the matching ID
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  // --- 5. Calculation Logic ---
  
  // Calculate the sum of (price * quantity) for all items
  const calculateSubtotal = (): number => {
    return cartItems.reduce(
      (total: number, item: CartItem) => total + item.price * item.quantity,
      0
    );
  };
  
  const subtotal: number = calculateSubtotal();
  const total: number = subtotal + SHIPPING_COST;

  // Helper to format numbers to currency string
  const formatCurrency = (amount: number): string => amount.toFixed(2);

  // --- 6. Component Structure (JSX/TSX) ---

  return (
    <div className="p-4 sm:p-8 bg-[#F5EFEA] min-h-screen">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Cart Items List */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-amber-950 mb-6 flex items-center">
            <ShoppingCart className="w-6 h-6 mr-2" /> Your Shopping Cart
          </h1>
          
          {cartItems.length === 0 ? (
            <p className="text-amber-950 py-10 text-center">Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item: CartItem) => ( // Explicit type on map callback
                <div 
                  key={item.id} 
                  className="flex items-center justify-between border-b pb-4 last:border-b-0"
                >
                  
                  {/* Item Details */}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-amber-950 truncate">{item.name}</p>
                    <p className="text-sm text-amber-950">${formatCurrency(item.price)} each</p>
                  </div>
                  
                  {/* Quantity Control and Price */}
                  <div className="flex items-center space-x-4">
                    
                    {/* Quantity Controller */}
                    <div className="flex items-center border border-gray-300 rounded-md">
                      {/* Decrease Button */}
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="p-2 text-amber-950 hover:bg-gray-100 rounded-l-md"
                      >
                        <Minus className="w-3 h-3 text-amber-950" />
                      </button>
                      
                      {/* Quantity Display */}
                      <span className="px-3 text-sm font-medium w-6 text-center text-amber-950">{item.quantity}</span>
                      
                      {/* Increase Button */}
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="p-2 text-amber-950 hover:bg-gray-100 rounded-r-md"
                      >
                        <Plus className="w-3 h-3 text-amber-950" />
                      </button>
                    </div>
                    
                    {/* Item Total Price */}
                    <p className="text-lg font-bold w-20 text-right text-amber-950">
                      ${formatCurrency(item.price * item.quantity)}
                    </p>
                    
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md lg:sticky lg:top-8">
            <h2 className="text-xl font-semibold mb-4 text-amber-950">Order Summary</h2>

            {/* Price Lines */}
            <div className="space-y-2 border-b pb-4 mb-4">
              <div className="flex justify-between text-amber-950">
                <span>Subtotal ({cartItems.length} items)</span>
                <span className="font-medium">${formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between text-amber-950">
                <span>Shipping</span>
                <span className="font-medium">${formatCurrency(SHIPPING_COST)}</span>
              </div>
            </div>

            {/* Final Total */}
            <div className="flex justify-between items-center text-xl font-bold text-amber-900">
              <span>Order Total</span>
              <span className="text-gray-900">${formatCurrency(total)}</span>
            </div>

            {/* Checkout Button */}
            <button
              className="w-full mt-6 py-3 bg-amber-950  text-white font-bold rounded-lg hover:opacity-90 transition-colors flex items-center justify-center"
              onClick={() => alert(`Proceeding to checkout for $${formatCurrency(total)}!`)}
            >
              <CreditCard className="w-5 h-5 mr-2" />
              Proceed to Payment
            </button>
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default SimpleCartPage;