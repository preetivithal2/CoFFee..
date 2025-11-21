import React from "react";

interface NewsCardProps {
  image: string;
  title: string;
  description: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ image, title, description }) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-md overflow-hidden">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover"
      />

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-black">{title}</h3>

        <p className="text-gray-500 text-sm mt-2 leading-relaxed">
          {description}
        </p>

        <a className="text-[#FF5A3C] font-medium text-sm mt-4 inline-flex items-center gap-1 cursor-pointer hover:underline">
          Learn More →
        </a>
      </div>
    </div>
  );
};

const UpdateNewsSection = () => {
  return (
    <section className="w-full px-6 py-20 flex flex-col items-center">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-black text-center">
       Enjoy you CoFFee here..
      </h2>

      <p className="text-gray-600 text-center mt-3 max-w-2xl">
        Select you favourite coffee place with a cup of brewed coffee represents a contribution of up to 1.8 grams of
        fiber of the recommended.
      </p>

      {/* Cards Grid */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl place-items-center">
        
        <NewsCard
          image="/off1.jpg"
          title="Coffe beans"
          description="These advertising mottos are targeted to the 56% of coffee drinking consumers."
        />

        <NewsCard
          image="/off2.jpg"
          title="Coffe beans"
          description="These advertising mottos are targeted to the 56% of coffee drinking consumers."
        />

        <NewsCard
          image="/off3.webp"
          title="Coffe beans"
          description="These advertising mottos are targeted to the 56% of coffee drinking consumers."
        />

      </div>
    </section>
  );
};

export default UpdateNewsSection;
