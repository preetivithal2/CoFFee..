import Image from "next/image";

export default function OurStorySection() {
  return (
    <section className="w-full md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      {/* Image */}
      <div className="w-full h-full">
        <Image
          src="/feedback.jpg"
          alt="Restaurant interior"
          width={800}
          height={600}
          className="rounded-xl object-cover w-full h-auto shadow-lg"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3B260C]">Our Story</h2>

        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
         Every great cup of coffee begins long before it reaches your hands.
Our story started in a tiny corner café where the aroma of freshly ground beans filled the air and strangers became friends over warm mugs.
        </p>

        <button className="bg-[#3B260C] hover:opacity-80 transition text-white font-medium px-6 py-3 rounded-md w-fit shadow-md">
          Read More
        </button>
      </div>
    </section>
  );
}
