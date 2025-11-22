"use client";
import offerData from "@/data/cards.json"; // ← import JSON
// import ProductCard from "./ProductCard";
import React, { useState } from "react";
console.log("Offer Data:", offerData);

interface ProductCardProps {
  price: string;
  title: string;
  description: string;
  image: string;
  defaultQty?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  price,
  title,
  description,
  image,
  defaultQty = 1,
}) => {
  const [qty, setQty] = useState(defaultQty);

  return (
    <div className="flex flex-col items-center text-center w-full ">
      <img src={image} alt={title} className="w-48 sm:w-56 md:w-60 lg:w-64 object-contain" />

      <p className="text-lg font-semibold mt-4 text-black">${price}</p>

      <h3 className="text-xl font-semibold mt-2 text-amber-950">{title}</h3>

      <p className="text-gray-500 text-sm max-w-[250px] mt-1">{description}</p>

      {/* Quantity + Delivery */}
      <div className="mt-4 flex items-center gap-4">

        {/* Quantity Box */}
        <div className="border text-amber-950 border-gray-400 rounded-md px-3 py-2 flex items-center gap-5 mx-auto max-w-7xl sm:px-6 lg:px-13">
        
          <button
            className="text-xl font-bold"
            onClick={() => setQty((prev) => (prev > 1 ? prev - 1 : 1))}
          >
            -
          </button>
          <span className="text-lg">{qty}</span>
          <button
            className="text-xl font-bold"
            onClick={() => setQty((prev) => prev + 1)}
          >
            +
          </button>
        </div>

        {/* Delivery Button */}
        <button className="bg-amber-950 text-white px-6 py-2 rounded-md font-medium hover:opacity-80 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const BestOfferSection = () => {
  return (
    <section className="w-full px-6 py-20 flex flex-col items-center">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-[#3B260C] text-center">
        That is Our Best Offer
      </h2>

      <p className="text-gray-600 text-center max-w-xl mt-2">
        A coffee shop will help you to tell the audience what your business.
      </p>

      {/* Card Layout */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 w-full max-w-7xl place-items-center">

     {offerData.map((item) => (
          <ProductCard
            key={item.id}
            price={item.price}
            title={item.title}
            description={item.description}
            image={item.image}
            defaultQty={item.defaultQty}
          />
         
        )
       
        ) } 
    

      </div>    
    </section>
  );
};

export default BestOfferSection;



