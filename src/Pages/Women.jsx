import React from "react";
import Footer from '../Components/Footer';
import img1 from "/55.jpg"; // University wear
import img2 from "/54.jpg"; // Shadi baya wear
import p1 from "/56.jpg";   // Blue outfit
import p2 from "/58.jpg";   // Green outfit
import p3 from "/57.jpg";   // Orange outfit




const categories = [
  {
    title: "UNIVERSITY WEAR",
    subtitle: "Short shirts\nLong shirts\nFrocks",
    image: img1,
  },
  {
    title: "SHADDI BAYA WEAR",
    subtitle: "Sharara\nLehngha\nMaxi\nAnghrakha",
    image: img2,
  },
];

const products = [
  {
    title: "Drop Shoulder",
    fabric: "Printed | Cambric",
    price: "Rs. 4,020/-",
    image: p1,
  },
  {
    title: "Drop Shoulder",
    fabric: "Dyed Embroidered | Waffle Jacquard",
    price: "Rs. 4,080/-",
    image: p2,
  },
  {
    title: "Classic Kurta",
    fabric: "Printed | Cambric",
    price: "Rs. 2,190/-",
    image: p3,
  },
];

 const items = [
    { id: 1, src: "20.jpg", alt: "Blue Dress" },
    { id: 2, src: "21.jpg", alt: "Green Dress" },
    { id: 3, src: "22.jpg", alt: "Orange Dress" },
    { id: 4, src: "23.jpg", alt: "Purple Dress" },
    { id: 5, src: "24.jpg", alt: "Pink Dress" },
  ];

export default function Women() {
  return (
    <>
    <section className="px-4 md:px-20 py-10">
      {/* Top Text */}
      <p className="text-gray-500 text-sm">HOME / WOMEN</p>
      <h2 className="text-3xl font-bold mt-2 mb-2">WOMENS</h2>
      <p className="text-gray-700 mb-6 max-w-xl">
        Elisha offers a vast selection of women’s clothing to shop. Each season finds a careful assortment of clothing no matter the season, trend-driven and classic pieces are available. Elisha is committed to helping shoppers be their most stylish selves.
      </p>

      {/* Categories */}
      <h3 className="text-5xl text-center font-semibold mb-4">CATEGORIES</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="relative overflow-hidden  rounded-md h-52 md:h-64 shadow"
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-full object-top  object-cover"
            />
            <div className={`absolute inset-0 bg-black bg-opacity-30 text-white p-4 flex flex-col justify-end ${i === 1 ? "items-start text-left" : "items-center text-center"}`}>
              <h4 className="text-lg font-bold">{cat.title}</h4>
              <p className="whitespace-pre-line text-sm">{cat.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Product Grid with only 3 items in 1 row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, i) => (
          <div key={i} className="">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-80 object-top object-cover rounded-md mb-2"
            />
            <h5 className="font-semibold">{product.title}</h5>
            <p className="text-gray-500 text-sm">{product.fabric}</p>
            <p className="text-black font-semibold">{product.price}</p>
          </div>
        ))}
      </div>

       <section className="py-12 px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10 flex items-center justify-center gap-2">
            <span className="w-10 h-px bg-gray-400"></span>
            NEW ARRIVALS
            <span className="w-10 h-px bg-gray-400"></span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Large Left Image */}
            <div className="lg:col-span-1">
              <img
                src={items[0].src}
                alt={items[0].alt}
                className="w-[400px] lg:h-[675px] md:h-[500px] h-300px object-cover  shadow-md"
              />
            </div>

            {/* Right Side 2x2 grid */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              {items.slice(1).map((item) => (
                <img
                  key={item.id}
                  src={item.src}
                  alt={item.alt}
                  className="w-[300px] h-[330px] object-cover  shadow-md object-top"
                />
              ))}
            </div>
          </div>
        </section>

        

      
    </section>

    <Footer/>

    </>

    
  );
}
