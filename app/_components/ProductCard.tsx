// // "use client";
// // import React, { useState } from "react";

// // interface ProductCardProps {
// //   price: string;
// //   title: string;
// //   description: string;
// //   image: string;
// //   defaultQty?: number;
// // }

// // const ProductCard: React.FC<ProductCardProps> = ({
// //   price,
// //   title,
// //   description,
// //   image,
// //   defaultQty = 1,
// // }) => {
// //   const [qty, setQty] = useState(defaultQty);

// //   return (
// //     <div className="flex flex-col items-center text-center w-full ">
// //       <img src={image} alt={title} className="w-48 sm:w-56 md:w-60 lg:w-64 object-contain" />

// //       <p className="text-lg font-semibold mt-4">${price}</p>

// //       <h3 className="text-xl font-semibold mt-2 text-amber-950">{title}</h3>

// //       <p className="text-gray-500 text-sm max-w-[250px] mt-1">{description}</p>

// //       {/* Quantity + Delivery */}
// //       <div className="mt-4 flex items-center gap-4">

// //         {/* Quantity Box */}
// //         <div className="border text-amber-950 border-gray-400 rounded-md px-3 py-2 flex items-center gap-5 mx-auto max-w-7xl sm:px-6 lg:px-13">
// //           <button
// //             className="text-xl font-bold"
// //             onClick={() => setQty((prev) => (prev > 1 ? prev - 1 : 1))}
// //           >
// //             -
// //           </button>
// //           <span className="text-lg">{qty}</span>
// //           <button
// //             className="text-xl font-bold"
// //             onClick={() => setQty((prev) => prev + 1)}
// //           >
// //             +
// //           </button>
// //         </div>

// //         {/* Delivery Button */}
// //         <button className="bg-amber-950 text-white px-6 py-2 rounded-md font-medium hover:opacity-80 transition">
// //           Order Now
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductCard;






// "use client";

// import React, { useState } from 'react';

// // --- 1. TypeScript Interfaces ---

// // Define the shape of a product item from the JSON file
// interface Product {
//   id: number; // Unique ID is crucial for cart logic
//   price: number;
//   title: string;
//   description: string;
//   image: string;
//   defaultQty?: number;
// }

// // Define the shape of an item *in the cart* (includes quantity)
// export interface CartItem extends Product {
//   quantity: number; // This is the final quantity selected by the user
// }

// // Define the props for the ProductCard component
// interface ProductCardProps extends Product {
//   // We add an 'onAddToCart' function passed from the parent component
//   onAddToCart: (item: CartItem) => void; 
// }


// const ProductCard: React.FC<ProductCardProps> = ({
//   id,
//   price,
//   title,
//   description,
//   image,
//   defaultQty = 1,
//   onAddToCart,
// }) => {
//   // State to manage the user-selected quantity for this product
//   const [qty, setQty] = useState(defaultQty);

//   // --- 2. Local State Management (Quantity) ---
//   const handleDecrease = () => {
//     // Prevent quantity from going below 1
//     setQty((prev) => (prev > 1 ? prev - 1 : 1));
//   };

//   const handleIncrease = () => {
//     setQty((prev) => prev + 1);
//   };

//   // --- 3. The Core "Add to Cart" Functionality ---
//   const handleAddToCart = () => {
//     // 1. Create the CartItem object from the product data and the selected quantity
//     const itemToAdd: CartItem = {
//       id,
//       price,
//       title,
//       description,
//       image,
//       quantity: qty, // Use the current quantity from state
//     };

//     // 2. Call the function passed from the parent to save the data
//     onAddToCart(itemToAdd);

//     // OPTIONAL: Give the user feedback
//     alert(`${itemToAdd.quantity} x ${itemToAdd.title} added to cart!`);
//   };


//   return (
//     <div className="flex flex-col items-center text-center w-full">
//       <img src={image} alt={title} className="w-48 sm:w-56 md:w-60 lg:w-64 object-contain" />

//       {/* Price formatting */}
//       <p className="text-lg font-semibold mt-4 text-black">${price.toFixed(2)}</p>

//       <h3 className="text-xl font-semibold mt-2 text-amber-950">{title}</h3>

//       <p className="text-gray-500 text-sm max-w-[250px] mt-1">{description}</p>

//       {/* Quantity + Add to Cart Button */}
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
//           className="bg-amber-950 text-white px-6 py-2 rounded-md font-medium hover:opacity-80 transition"
//           onClick={handleAddToCart} // THIS IS THE KEY CLICK HANDLER
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;



"use client";

import React, { useState } from 'react';

// --- 1. TypeScript Interfaces (Defining the Data Shapes) ---

/** Defines the shape of a product item from the JSON file */
export interface Product {
    id: number;
    price: string;
    title: string;
    description: string;
    image: string;
    defaultQty: number;
}

/** Defines the shape of an item stored in the cart in Local Storage */
export interface CartItem extends Product {
    /** The quantity selected by the user for this specific purchase */
    quantity: number; 
}

/** Defines the props for the ProductCard component */
interface ProductCardProps extends Product {}

const LOCAL_STORAGE_KEY = 'shopping_cart';

// --- 2. Local Storage Logic (The Core Cart Functionality) ---

const saveToLocalStorage = (newCart: CartItem[]) => {
    try {
        // Saves the array of CartItem objects as a JSON string
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newCart));
        console.log("Cart saved successfully to Local Storage!");
    } catch (error) {
        console.error("Failed to save cart to Local Storage:", error);
    }
};

const getCartFromLocalStorage = (): CartItem[] => {
    try {
        const cartJson = localStorage.getItem(LOCAL_STORAGE_KEY);
        // If data exists, parse it back into a CartItem array, otherwise return an empty array
        return cartJson ? JSON.parse(cartJson) : [];
    } catch (error) {
        console.error("Failed to load or parse cart from Local Storage:", error);
        return [];
    }
};


// --- 3. Product Card Component ---

const ProductCard: React.FC<ProductCardProps> = ({
    id, // Crucial for identifying the product in the cart
    price,
    title,
    description,
    image,
    defaultQty,
}) => {
    // State to hold the quantity the user wants to add to the cart
    const [qty, setQty] = useState<number>(defaultQty || 1);
    const [message, setMessage] = useState<string>('');

    // Handlers for quantity changes
    const increaseQty = () => setQty(prev => prev + 1);
    const decreaseQty = () => setQty(prev => (prev > 1 ? prev - 1 : 1));

    // --- Add to Cart Handler (Core Logic) ---
    const handleAddToCart = () => {
        // 1. Load the existing cart data
        const currentCart = getCartFromLocalStorage();

        // 2. Define the product being added
        const newItem: CartItem = {
            id,
            price,
            title,
            description,
            image,
            defaultQty,
            quantity: qty, // Use the quantity selected in the component state
        };

        // 3. Check if the item is already in the cart
        const existingItemIndex = currentCart.findIndex(item => item.id === id);

        let updatedCart: CartItem[];

        if (existingItemIndex > -1) {
            // If item exists, increase its quantity (simple merging)
            updatedCart = currentCart.map((item, index) => 
                index === existingItemIndex
                    ? { ...item, quantity: item.quantity + qty }
                    : item
            );
            setMessage(`Added ${qty} more of ${title} to cart!`);
        } else {
            // If item is new, add it to the array
            updatedCart = [...currentCart, newItem];
            setMessage(`${title} (x${qty}) added to cart!`);
        }

        // 4. Save the updated cart array back to Local Storage
        saveToLocalStorage(updatedCart);

        setTimeout(() => setMessage(''), 3000);
    };

    // --- Render Component ---
    return (
        <div className="flex flex-col items-center text-center w-full max-w-sm p-4 bg-white rounded-xl shadow-lg transition duration-300 hover:shadow-2xl">
            {/* Image (Using placeholder for visual fallback) */}
            <img 
                src={image} 
                alt={title} 
                onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/150x150/8B4513/ffffff?text=Coffee`;
                    e.currentTarget.onerror = null; 
                }}
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

export default ProductCard;