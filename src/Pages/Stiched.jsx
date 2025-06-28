import React from 'react';
import Footer from '../Components/Footer';

const stitched2pcs = [
  { id: 1, img: '/34.jpg' },
  { id: 2, img: '/35.jpg' },
  { id: 3, img: '/36.jpg' },
  { id: 4, img: '/37.jpg' },
];

const stitched3pcs = [
  { id: 1, img: '/39.jpg' },
  { id: 2, img: '/40.jpg' },
  { id: 3, img: '/41.jpg' },
  { id: 4, img: '/38.jpg' },
];

const newArrivals = [
  { id: 1, img: '/42.jpg' },
  { id: 2, img: '/43.jpg' },
  { id: 3, img: '/44.jpg' },
  { id: 4, img: '/45.jpg' },
];

const outfits = ["/50.jpg", "/51.jpg", "/52.jpg", "/53.jpg"];


// Section Heading with horizontal lines
const SectionHeading = ({ title }) => (
  <div className="flex items-center justify-center mb-6">
    <div className="w-10 h-[1px] bg-black mr-2" />
    <h2 className="text-2xl font-bold text-center">{title}</h2>
    <div className="w-10 h-[1px] bg-black ml-2" />
  </div>
);

// Reusable Product Section using flex
const ProductSection = ({ title, products }) => (
  <div className="my-12">
    <SectionHeading title={title} />
    <div className="flex flex-wrap justify-center gap-3">
      {products.map((item) => (
        <div
          key={item.id}
          className="w-[280px] flex flex-col items-center"
        >
          <img
            src={item.img}
            alt="Product"
            className="h-[370px] w-full object-cover object-top"
          />
          <p className="mt-1 text-sm text-center">Ladies suit AL 01</p>
          <p className="text-sm font-medium text-center">PKR: 1800</p>
        </div>
      ))}
    </div>
  </div>
);

// Main Page Component
export default function Stiched() {
  return (
    <>
    <div className="bg-white px-4 py-8">
      <ProductSection title="Stitched 2pcs" products={stitched2pcs} />
      <ProductSection title="Stitched 3pcs" products={stitched3pcs} />

      <div className="my-12">
        <SectionHeading title="NEW ARRIVALS" />
        <div className="flex flex-wrap justify-center gap-3">
          {newArrivals.map((item) => (
            <div
              key={item.id}
              className="w-[280px] flex flex-col items-center"
            >
              <img
                src={item.img}
                alt="New Arrival"
                className="h-[370px] w-full object-cover object-top"
              />
              <p className="mt-1 text-sm text-center">Ladies suit AL 01</p>
              <p className="text-sm font-medium text-center">PKR: 1800</p>
            </div>
          ))}
        </div>

        
      </div>

      
      
    </div>
    <div className="w-full flex justify-center mt-10">
  <div className="bg-[#C8CBC1] rounded-3xl p-6 w-full max-w-6xl">
    <div className="flex flex-wrap justify-center gap-6">
      {outfits.map((img, index) => (
        <div
          key={index}
          className="flex justify-center w-full sm:w-[45%] md:w-[45%] lg:w-[22%] hover:scale-105 transition-transform duration-300"
        >
          <img
            src={img}
            alt={`Outfit ${index + 1}`}
            className="w-[220px] h-[280px] object-cover object-top shadow-lg rounded-xl"
          />
        </div>
      ))}
    </div>
  </div>
</div>

<div className='mt-5'>
<Footer/>

</div>


    </>
  );
}
