import React from "react";

const products = [
  { code: "ZCE23-1A", price: "Rs.9,030", image: "/images/p1.jpg" },
  { code: "ZCE23-2B", price: "Rs.8,400", image: "/images/p2.jpg" },
  { code: "ZCE23-3C", price: "Rs.7,950", image: "/images/p3.jpg" },
  { code: "ZCE23-4D", price: "Rs.10,200", image: "/images/p4.jpg" },
];

const FeaturedProducts = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-6">New Arrivals</h2>
      <div className="flex justify-center gap-10 mb-16 flex-wrap">
        {products.map((p, index) => (
          <div key={index} className="w-[250px]">
            <img
              src={p.image}
              alt={p.code}
              className="h-[300px] w-full object-cover object-top rounded-lg"
            />
            <div className="flex justify-between mt-2">
              <p>{p.code}</p>
              <p>{p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
