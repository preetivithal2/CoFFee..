"use client";

import Image from "next/image";

const Banner = () => {
  return (
    <section className="w-full bg-[#e8ddd3] py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

        <div className="max-w-lg text-center md:text-left space-y-4">
          <p className="text-sm text-gray-700">The Smokey</p>

          <h1 className="text-5xl md:text-6xl font-extrabold text-[#3b260c]">
            COFFEE
          </h1>

          <p className="text-gray-700 text-base">
            Discover the essence of exquisite coffee beans. Each bean is carefully
            sourced from the finest coffee-growing regions.
          </p>

          <div className="flex gap-3 justify-center md:justify-start pt-3">
            <button className="px-5 py-2 bg-[#3b260c] text-white rounded-full hover:opacity-90">
              Shop Beans
            </button>
            <button className="px-5 py-2 border border-[#3b260c] text-[#3b260c] rounded-full hover:bg-[#3b260c] hover:text-white">
              Our Cafes
            </button>
          </div>
        </div>

        <div className="mt-10 md:mt-0">
          <div className="relative w-[500px] md:w-[300px] h-[330px] md:h-[400px]">
            <Image
              src="/banner.png"
              alt="Coffee Cup"
              fill
              className="object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;
