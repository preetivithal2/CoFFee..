// "use client";
// import offerData from "@/data/cards.json"; // ← import JSON
// // import ProductCard from "./ProductCard";
// import React, { useState } from "react";
// console.log("Offer Data:", offerData);

// interface ProductCardProps {
//   price: string;
//   title: string;
//   description: string;
//   image: string;
//   defaultQty?: number;
// }

// const ProductCard: React.FC<ProductCardProps> = ({
//   price,
//   title,
//   description,
//   image,
//   defaultQty = 1,
// }) => {
//   const [qty, setQty] = useState(defaultQty);

//   return (
//     <div className="flex flex-col items-center text-center w-full ">
//       <img src={image} alt={title} className="w-48 sm:w-56 md:w-60 lg:w-64 object-contain" />

//       <p className="text-lg font-semibold mt-4 text-black">${price}</p>

//       <h3 className="text-xl font-semibold mt-2 text-amber-950">{title}</h3>

//       <p className="text-gray-500 text-sm max-w-[250px] mt-1">{description}</p>

//       {/* Quantity + Delivery */}
//       <div className="mt-4 flex items-center gap-4">

//         {/* Quantity Box */}
//         <div className="border text-amber-950 border-gray-400 rounded-md px-3 py-2 flex items-center gap-5 mx-auto max-w-7xl sm:px-6 lg:px-13">
        
//           <button
//             className="text-xl font-bold"
//             onClick={() => setQty((prev) => (prev > 1 ? prev - 1 : 1))}
//           >
//             -
//           </button>
//           <span className="text-lg">{qty}</span>
//           <button
//             className="text-xl font-bold"
//             onClick={() => setQty((prev) => prev + 1)}
//           >
//             +
//           </button>
//         </div>

//         {/* Delivery Button */}
//         <button className="bg-amber-950 text-white px-6 py-2 rounded-md font-medium hover:opacity-80 transition">
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// const BestOfferSection = () => {
//   return (
//     <section className="w-full px-6 py-20 flex flex-col items-center">

//       {/* Heading */}
//       <h2 className="text-3xl md:text-4xl font-semibold text-[#3B260C] text-center">
//         That is Our Best Offer
//       </h2>

//       <p className="text-gray-600 text-center max-w-xl mt-2">
//         A coffee shop will help you to tell the audience what your business.
//       </p>

//       {/* Card Layout */}
//       <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 w-full max-w-7xl place-items-center">

//      {offerData.map((item) => (
//           <ProductCard
//             key={item.id}
//             price={item.price}
//             title={item.title}
//             description={item.description}
//             image={item.image}
//             defaultQty={item.defaultQty}
//           />
         
//         )
       
//         ) } 
    

//       </div>    
//     </section>
//   );
// };

// export default BestOfferSection;



// "use client";
// import offerData from "@/data/cards.json";
// import React, { useState } from "react";

// // --- 1. TypeScript Interfaces & Local Storage Logic ---

// /** Defines the shape of a product item from the JSON file */
// interface Product {
//   id: number;
//   price: string; // Stored as string in JSON
//   title: string;
//   description: string;
//   image: string;
//   defaultQty?: number;
// }

// /** Defines the shape of an item stored in the cart in Local Storage */
// export interface CartItem extends Product {
//   /** The quantity selected by the user for this specific purchase */
//   quantity: number; 
// }

// /** Defines the props for the ProductCard component */
// interface ProductCardProps extends Product {
//   // No need for onAddToCart if we handle storage directly in the card
// }

// const LOCAL_STORAGE_KEY = 'shopping_cart';

// const getCartFromLocalStorage = (): CartItem[] => {
//     try {
//         const cartJson = localStorage.getItem(LOCAL_STORAGE_KEY);
//         // If data exists, parse it back into a CartItem array, otherwise return an empty array
//         return cartJson ? JSON.parse(cartJson) : [];
//     } catch (error) {
//         console.error("Failed to load or parse cart from Local Storage:", error);
//         return [];
//     }
// };

// const saveToLocalStorage = (newCart: CartItem[]) => {
//     try {
//         // Saves the array of CartItem objects as a JSON string
//         localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newCart));
//         console.log("Cart saved successfully to Local Storage!");
//     } catch (error) {
//         console.error("Failed to save cart to Local Storage:", error);
//     }
// };

// // --- 2. Product Card Component with Functionality ---

// const ProductCard: React.FC<ProductCardProps> = ({
//   id,
//   price,
//   title,
//   description,
//   image,
//   defaultQty = 1,
// }) => {
//   // State to hold the quantity the user wants to add to the cart
//   const [qty, setQty] = useState(defaultQty);
//   const [message, setMessage] = useState<string>('');
  
//   // Use the price string, but also ensure it can be parsed later for calculations
//   const displayPrice = `$${parseFloat(price).toFixed(2)}`; 


//   const handleDecrease = () => {
//     setQty((prev) => (prev > 1 ? prev - 1 : 1));
//   };

//   const handleIncrease = () => {
//     setQty((prev) => prev + 1);
//   };

//   // --- The Core "Add to Cart" Functionality ---
//   const handleAddToCart = () => {
//     // 1. Load the existing cart data
//     const currentCart = getCartFromLocalStorage();

//     // 2. Define the product being added
//     const newItem: CartItem = {
//         id,
//         price, // Keep as string for storage consistency
//         title,
//         description,
//         image,
//         defaultQty,
//         quantity: qty, // Use the quantity selected in the component state
//     };

//     // 3. Check if the item is already in the cart
//     const existingItemIndex = currentCart.findIndex(item => item.id === id);

//     let updatedCart: CartItem[];

//     if (existingItemIndex > -1) {
//         // If item exists, increase its quantity (simple merging)
//         updatedCart = currentCart.map((item, index) => 
//             index === existingItemIndex
//                 ? { ...item, quantity: item.quantity + qty }
//                 : item
//         );
//         setMessage(`Added ${qty} more of ${title}!`);
//     } else {
//         // If item is new, add it to the array
//         updatedCart = [...currentCart, newItem];
//         setMessage(`${title} (x${qty}) added to cart!`);
//     }

//     // 4. Save the updated cart array back to Local Storage
//     saveToLocalStorage(updatedCart);

//     // Reset quantity and show confirmation message
//     setQty(1); 
//     setTimeout(() => setMessage(''), 3000);
//   };


//   return (
//     <div className="flex flex-col items-center text-center w-full ">
//       <img 
//           src={image} 
//           alt={title} 
//           className="w-48 sm:w-56 md:w-60 lg:w-64 object-contain" 
//           onError={(e) => {
//             e.currentTarget.src = `https://placehold.co/150x150/D2B48C/ffffff?text=${title.split(' ')[0]}`;
//             e.currentTarget.onerror = null; 
//           }}
//       />

//       <p className="text-lg font-semibold mt-4 text-black">{displayPrice}</p>

//       <h3 className="text-xl font-semibold mt-2 text-amber-950">{title}</h3>

//       <p className="text-gray-500 text-sm max-w-[250px] mt-1">{description}</p>

//       {/* Quantity + Delivery */}
//       <div className="mt-4 flex items-center gap-4">

//         {/* Quantity Box */}
//         <div className="border text-amber-950 border-gray-400 rounded-md px-3 py-2 flex items-center gap-5">
//           <button
//             className="text-xl font-bold"
//             onClick={handleDecrease}
//           >
//             -
//           </button>
//           <span className="text-lg w-4 text-center">{qty}</span>
//           <button
//             className="text-xl font-bold"
//             onClick={handleIncrease}
//           >
//             +
//           </button>
//         </div>

//         {/* Add to Cart Button */}
//         <button 
//           className="bg-amber-950 text-white px-6 py-2 rounded-md font-medium hover:opacity-80 transition shadow-md"
//           onClick={handleAddToCart}
//         >
//           Add to Cart
//         </button>
//       </div>

//       {/* Confirmation Message */}
//       {message && (
//           <p className="mt-3 text-sm font-medium text-green-600 animate-pulse">
//               {message}
//           </p>
//       )}

//     </div>
//   );
// };

// // --- 3. Best Offer Section (Parent Component) ---

// const BestOfferSection = () => {
//   return (
//     <section className="w-full px-6 py-20 flex flex-col items-center">

//       {/* Heading */}
//       <h2 className="text-3xl md:text-4xl font-semibold text-[#3B260C] text-center">
//         That is Our Best Offer
//       </h2>

//       <p className="text-gray-600 text-center max-w-xl mt-2">
//         A coffee shop will help you to tell the audience what your business.
//       </p>

//       {/* Card Layout */}
//       <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 w-full max-w-7xl place-items-center">

//         {/* Ensure data is correctly typed before mapping */}
//         {(offerData as Product[]).map((item) => (
//           <ProductCard
//             key={item.id}
//             id={item.id} // ID is crucial for cart management
//             price={item.price}
//             title={item.title}
//             description={item.description}
//             image={item.image}
//             defaultQty={item.defaultQty}
//           />
//         ))}
//       </div>

//       {/* Checkout Tip */}
//       <div className="mt-16 text-center">
//           <p className="text-lg text-gray-700 bg-amber-100 p-4 rounded-xl shadow-inner inline-block">
//               **To check your cart**, please navigate to the `/checkout` route after adding items.
//           </p>
//       </div>
//     </section>
//   );
// };

// export default BestOfferSection;


"use client";

import React, { useState, useEffect } from 'react';

// --- 1. TypeScript Interfaces (Defining the Data Shapes) ---

/** Defines the shape of a product item from the JSON file */
interface Product {
    id: number;
    price: string;
    title: string;
    description: string;
    image: string;
    defaultQty: number;
}

/** Defines the shape of an item stored in the cart in Local Storage */
interface CartItem extends Product {
    /** The quantity selected by the user for this specific purchase */
    quantity: number; 
}

/** Defines the props for the ProductCard component */
interface ProductCardProps extends Product {
    onCartUpdate: (newCart: CartItem[]) => void;
}

const LOCAL_STORAGE_KEY = 'shopping_cart';

// --- 2. Local Storage Logic (The Core Cart Functionality) ---

const saveToLocalStorage = (newCart: CartItem[]) => {
    try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newCart));
    } catch (error) {
        console.error("Failed to save cart to Local Storage:", error);
    }
};

const getCartFromLocalStorage = (): CartItem[] => {
    try {
        const cartJson = localStorage.getItem(LOCAL_STORAGE_KEY);
        // If cartJson is null or undefined, return an empty array
        return cartJson ? JSON.parse(cartJson) : [];
    } catch (error) {
        console.error("Failed to load or parse cart from Local Storage:", error);
        return [];
    }
};

// --- 3. Mock Data (from data/cards.json) ---
const mockOfferData: Product[] = [
    {
      "id": 1,
      "price": "$5.99",
      "title": "Brazilian coffee beans",
      "description": "Coffee that's always you handle your own the way you like.",
      "image": "https://placehold.co/150x150/8B4513/ffffff?text=Brazilian",
      "defaultQty": 3
    },
    {
      "id": 2,
      "price": "$4.99",
      "title": "Vietnam coffee beans",
      "description": "Coffee that's always you handle your own the way you like.",
      "image": "https://placehold.co/150x150/8B4513/ffffff?text=Vietnam",
      "defaultQty": 2
    },
    {
      "id": 3,
      "price": "$3.99",
      "title": "Indonesian coffee beans",
      "description": "Coffee that's always you handle your own the way you like.",
      "image": "https://placehold.co/150x150/8B4513/ffffff?text=Indonesian",
      "defaultQty": 1
    }
];

// --- 4. Product Card Component (from components/ProductCard.tsx) ---

const ProductCard: React.FC<ProductCardProps> = ({
    id,
    price,
    title,
    description,
    image,
    defaultQty,
    onCartUpdate
}) => {
    const [qty, setQty] = useState<number>(defaultQty || 1);
    const [message, setMessage] = useState<string>('');

    const increaseQty = () => setQty(prev => prev + 1);
    const decreaseQty = () => setQty(prev => (prev > 1 ? prev - 1 : 1));

    const handleAddToCart = () => {
        const currentCart = getCartFromLocalStorage();

        const newItem: CartItem = {
            id,
            price,
            title,
            description,
            image,
            defaultQty,
            quantity: qty,
        };

        const existingItemIndex = currentCart.findIndex(item => item.id === id);

        let updatedCart: CartItem[];

        if (existingItemIndex > -1) {
            updatedCart = currentCart.map((item, index) => 
                index === existingItemIndex
                    ? { ...item, quantity: item.quantity + qty }
                    : item
            );
            setMessage(`Added ${qty} more of ${title} to cart!`);
        } else {
            updatedCart = [...currentCart, newItem];
            setMessage(`${title} (x${qty}) added to cart!`);
        }

        saveToLocalStorage(updatedCart);
        onCartUpdate(updatedCart); // Notify the parent component
        
        // Reset quantity state for the next quick purchase
        setQty(1);

        setTimeout(() => setMessage(''), 3000);
    };

    return (
        <div className="flex flex-col items-center text-center w-full max-w-sm p-4 bg-white rounded-xl shadow-lg transition duration-300 hover:shadow-2xl">
            <img 
                src={image} 
                alt={title} 
                className="w-48 h-48 object-contain mb-4 rounded-lg"
            />

            <h3 className="text-xl font-bold text-gray-800 mb-1">{price}</h3>
            <h4 className="text-2xl font-semibold text-amber-900 mb-2">{title}</h4>
            <p className="text-sm text-gray-600 mb-4">{description}</p>

            {/* Quantity Controls */}
            <div className="flex items-center justify-center space-x-2 mb-4">
                <button 
                    onClick={decreaseQty} 
                    className="bg-gray-100 text-amber-900 px-3 py-1 rounded-full text-lg font-bold hover:bg-gray-200 transition"
                >
                    -
                </button>
                <span className="text-lg font-medium text-gray-800 w-8 text-center">{qty}</span>
                <button 
                    onClick={increaseQty} 
                    className="bg-gray-100 text-amber-900 px-3 py-1 rounded-full text-lg font-bold hover:bg-gray-200 transition"
                >
                    +
                </button>
            </div>

            {/* Add to Cart Button */}
            <button 
                onClick={handleAddToCart}
                className="w-full bg-amber-800 text-white py-3 rounded-xl font-bold uppercase tracking-wider hover:bg-amber-900 transition duration-200 shadow-md hover:shadow-lg"
            >
                Add to Cart
            </button>

            {/* Confirmation Message */}
            {message && (
                <p className="mt-3 text-sm font-medium text-green-600 animate-pulse">
                    {message}
                </p>
            )}
        </div>
    );
};

// --- 5. Main App Component (Similar to app/Offer.tsx) ---

const App = () => {
    const [cartCount, setCartCount] = useState(0);

    // Load initial cart count on mount
    useEffect(() => {
        const currentCart = getCartFromLocalStorage();
        const totalItems = currentCart.reduce((total, item) => total + item.quantity, 0);
        setCartCount(totalItems);
    }, []);

    const handleCartUpdate = (newCart: CartItem[]) => {
        const totalItems = newCart.reduce((total, item) => total + item.quantity, 0);
        setCartCount(totalItems);
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-20 pb-12">
            
            {/* Simple Floating Cart Icon/Indicator */}
            <div className="fixed top-4 right-4 bg-amber-900 text-white p-4 rounded-full shadow-2xl z-50 cursor-pointer transition transform hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartCount > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">{cartCount}</span>
                )}
            </div>

            <div className="container mx-auto px-4">
                <h1 className="text-5xl font-extrabold text-center text-amber-950 mb-12">
                    Our Best Coffee Offers
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                    {mockOfferData.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            price={product.price}
                            title={product.title}
                            description={product.description}
                            image={product.image}
                            defaultQty={product.defaultQty}
                            onCartUpdate={handleCartUpdate} // Pass the handler
                        />
                    ))}
                </div>
                
                {/* Note for the user about the Checkout Page */}
                <div className="mt-16 text-center">
                    <p className="text-lg text-gray-700 bg-amber-100 p-4 rounded-xl shadow-inner inline-block">
                        **Action Required:** Click the "Add to Cart" buttons above, then manually navigate to the 
                        <span className="font-bold text-amber-900"> /checkout </span> 
                        route to see the saved products displayed on the checkout page (`app/checkout/page.tsx`).
                    </p>
                </div>
            </div>
        </div>
    );
};

export default App;