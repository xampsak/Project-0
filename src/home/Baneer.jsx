import React from "react";

const HeroBanner = () => {
  return (
    <div className="relative h-[550px] w-full overflow-hidden">
      <img
        src="/images/hero.jpg"
        alt="Hero"
        className="absolute w-full h-full object-cover"
      />
      <div className="relative z-10 pt-80 pl-20 text-white font-serif">
        <p>SUMMER LAWN'23</p>
        <h1 className="text-6xl font-bold">New Arrivals</h1>
        <p>10,000+ DESIGNS ADDED</p>
        <button className="mt-4 px-11 py-2 bg-black text-white font-semibold">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
  