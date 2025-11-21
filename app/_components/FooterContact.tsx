import React from "react";
import Image from "next/image";

export default function ContactFooter() {
  return (
    <footer className="w-full bg-[#E8DDD3] py-12 px-4 md:px-12 lg:px-20 ">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
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
        <form className="w-full shadow-2xl bg-white/40 backdrop-blur-sm border border-[#d8c2aa] p-6 md:p-8 rounded-xl  space-y-4">
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
        {/* <div className="flex items-center flex-col justify-center"><hr className="my-6 border-default sm:mx-auto lg:my-8" />
        <span className="block text-sm text-body text-amber-900 sm:text-center ">© 2025 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span></div> */}
    


   <footer className="bg-neutral-primary-soft rounded-base shadow-2xl border border-default m-4 ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        
        <div className="sm:flex sm:items-center sm:justify-between text-black">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-7"
              alt="Flowbite Logo"
            />
            <span className="text-heading self-center text-2xl font-semibold whitespace-nowrap">
              Flowbite
            </span>
          </a>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-body sm:mb-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-amber-950 sm:mx-auto lg:my-8" />

        <span className="block text-sm text-body text-center ">
          © 2025{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>



      </div>
    </footer>
  );
}
