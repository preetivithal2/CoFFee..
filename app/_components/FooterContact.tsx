import React from "react";
import Image from "next/image";

export default function ContactFooter() {
  return (
    <footer className="w-full bg-[#E8DDD3] py-12 px-4 md:px-12 lg:px-20 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#461901]">Contact Us</h2>

          <div className="space-y-4 text-[#3d2a22] font-medium">
            <p className="flex items-start gap-3">
              <span>📍</span>
              49 Featherstone Street London, EC1Y 8SY United Kingdom
            </p>
            <p className="flex items-start gap-3">
              <span>📧</span>
              Coffbrew@Yahoo.com
            </p>
            <p className="flex items-start gap-3">
              <span>📞</span>
              1800-384-4854
            </p>
          </div>
        </div>

        {/* Form */}
        <form className="w-full bg-white/40 backdrop-blur-sm border border-[#d8c2aa] p-6 md:p-8 rounded-xl shadow-sm space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full text-black border border-[#b9a693] bg-white/70 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#461901]"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border text-black border-[#b9a693] bg-white/70 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#461901]"
          />

          <input
            type="text"
            placeholder="Contact number"
            className="w-full border text-black border-[#b9a693] bg-white/70 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#461901]"
          />

          <textarea
            placeholder="Message"
            rows={4}
            className="w-full border text-black border-[#b9a693] bg-white/70 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#461901]"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#461901] text-white py-2 rounded-md font-semibold hover:opacity-80 transition"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </footer>
  );
}
