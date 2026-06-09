import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-32 px-6 text-center text-white h-[65vh]"
      style={{
        backgroundImage: "url('../../../public/herobg.jpg')",
      }}
    >
      <div className="bg-black/60 p-10 rounded-xl max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discover Authentic Handicrafts
        </h1>
        <p className="text-lg text-gray-100 mb-6">
          Handcrafted treasures that tell stories — elevate your space with culture and art.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/masks"
            className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition"
          >
            Explore Now
          </Link>
          {/* <Link
            to="/"
            className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            Learn More
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
