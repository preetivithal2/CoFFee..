import React from "react";

const ServicesSection = () => {
  return (
    <section className="w-full bg-[#F5EFEA] py-20 px-6 flex flex-col items-center">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-[#4B2E2A] tracking-wide">
        OUR DELICIOUS SERVICES
      </h2>

      <p className="text-center text-[#6B5A56] mt-3 max-w-2xl">
        We offer a carefully curated collection that showcases the distinct characteristics 
        of beans sourced from specific regions.
      </p>

      {/* Card Container */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-2xl p-10 flex flex-col items-center text-center">
          <div className="bg-[#F5EFEA] p-5 rounded-full mb-5">
            {/* Coffee Cup Icon */}
            <svg width="45" height="45" fill="none" stroke="#A67C52" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 10h13v7a4 4 0 01-4 4H7a4 4 0 01-4-4v-7z" />
              <path d="M16 10h2a3 3 0 010 6h-2" />
              <path d="M8 6h.01M12 4h.01M10 8h.01" strokeLinecap="round" />
            </svg>
          </div>

          <h3 className="text-xl font-semibold text-[#4B2E2A]">Coffee Types</h3>
          <p className="text-[#6B5A56] mt-3">
            We offer a tantalizing variety of coffee types to cater to your unique preferences.
          </p>

          <a className="mt-5 text-[#A67C52] hover:underline cursor-pointer flex items-center gap-2">
            Learn More →
          </a>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-2xl p-10 flex flex-col items-center text-center">
          <div className="bg-[#F5EFEA] p-5 rounded-full mb-5">
            {/* Beans Icon */}
            <svg width="45" height="45" fill="none" stroke="#A67C52" strokeWidth="2" viewBox="0 0 24 24">
              <ellipse cx="7" cy="12" rx="3" ry="5" />
              <ellipse cx="17" cy="12" rx="3" ry="5" />
            </svg>
          </div>

          <h3 className="text-xl font-semibold text-[#4B2E2A]">Different Beans</h3>
          <p className="text-[#6B5A56] mt-3">
            We take pride in sourcing and roasting the finest quality beans from around the world.
          </p>

          <a className="mt-5 text-[#A67C52] hover:underline cursor-pointer flex items-center gap-2">
            Learn More →
          </a>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-2xl p-10 flex flex-col items-center text-center">
          <div className="bg-[#F5EFEA] p-5 rounded-full mb-5">
            {/* Cold Coffee Icon */}
            <svg width="45" height="45" fill="none" stroke="#A67C52" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 8h12l-1 12a4 4 0 01-4 4H11a4 4 0 01-4-4L6 8z" />
              <path d="M6 4h12v4H6z" />
            </svg>
          </div>

          <h3 className="text-xl font-semibold text-[#4B2E2A]">Cold Coffee</h3>
          <p className="text-[#6B5A56] mt-3">
            We offer a variety of cold coffee options to satisfy your cravings.
          </p>

          <a className="mt-5 text-[#A67C52] hover:underline cursor-pointer flex items-center gap-2">
            Learn More →
          </a>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
