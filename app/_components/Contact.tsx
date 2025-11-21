import Image from "next/image";

export default function OurStorySection() {
  return (
    <section className="w-full px-4 md:px-12 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Image */}
      <div className="w-full h-full">
        <Image
          src="/off4.jpeg"
          alt="Restaurant interior"
          width={800}
          height={600}
          className="rounded-xl object-cover w-full h-auto shadow-lg"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#B97A20]">Our Story</h2>

        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
          Paragraph text comes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <button className="bg-[#B97A20] hover:bg-[#9a651a] transition text-white font-medium px-6 py-3 rounded-md w-fit shadow-md">
          Read More
        </button>
      </div>
    </section>
  );
}
