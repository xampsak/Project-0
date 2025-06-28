import React from "react";

const categories = [
  { title: "SILK", image: "/images/cat1.jpg" },
  { title: "COTTON", image: "/images/cat2.jpg" },
  { title: "LAWN", image: "/images/cat3.jpg" },
  { title: "KHADDAR", image: "/images/cat4.jpg" },
];

const CategorySlider = () => {
  return (
    <div className="flex justify-center gap-10 my-16">
      {categories.map((cat, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="w-36 h-36 bg-[#4B433D] rounded-full flex items-center justify-center">
            <div className="w-28 h-28 bg-[#EDE0D3] rounded-full flex items-center justify-center">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
          </div>
          <p className="mt-2">{cat.title}</p>
          <button className="mt-2 px-6 py-1 bg-gray-700 text-white rounded-full text-sm">
            Shop Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default CategorySlider;
