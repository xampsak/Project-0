import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import rightArrow from "/46.svg";
import img1 from "/47.jpg";
import img2 from "/49.jpg";
import img3 from "/48.jpg";
import img4 from "/17.jpg";

function CategorySlider() {
 // LEFT ARROW
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute lg:-left-16 md:-left-6 -left-1 top-[40%] -translate-y-1/2 z-10 p-0 bg-transparent hover:scale-105 transition"
  >
    <img
      src={rightArrow}
      alt="Previous"
      className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] lg:w-[80px] lg:h-[80px] scale-x-[-1]"
    />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute lg:-right-16 md:-right-6 -right-1 top-[40%] -translate-y-1/2 z-10 p-0 bg-transparent hover:scale-105 transition"
  >
    <img
      src={rightArrow}
      alt="Next"
      className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] lg:w-[80px] lg:h-[80px]"
    />
  </button>
);



const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ],
};
  const data = [
    { title: "UNIVERSITY WEAR", image: img1 },
    { title: "SHADDI BAYA WEAR", image: img2 },
    { title: "ABAYAS", image: img3 },
    { title: "DESI WEAR", image: img4 },
  ];

// const categories = [
//   { name: "LONG SHIRT", image: red },
//   { name: "KURTA", image: red1 },
//   { name: "KAFTAN", image: red2 },
//   { name: "SHALWAR KAMEEZ", image: red3 },
// ];

// const CategorySlider = () => {
//   const [startIndex, setStartIndex] = useState(0);
//   const [count, setCount] = useState(() => {
//     if (window.innerWidth < 640) return 1;
//     if (window.innerWidth < 768) return 2;
//     if (window.innerWidth < 1024) return 3;
//     return 4;
//   });

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) setCount(1);
//       else if (window.innerWidth < 768) setCount(2);
//       else if (window.innerWidth < 1024) setCount(3);
//       else setCount(4);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // ✅ Instantly move slide (no delay)
//   const handlePrev = () => {
//     setStartIndex((prev) => (prev - 1 + categories.length) % categories.length);
//   };

//   const handleNext = () => {
//     setStartIndex((prev) => (prev + 1) % categories.length);
//   };

//   const visibleItems = Array.from({ length: count }, (_, i) => {
//     const index = (startIndex + i) % categories.length;
//     return categories[index];
//   });

  return (

    <div className="max-w-3xl mx-auto relative">
      <Slider
        {...settings}
        prevArrow={<PrevArrow />}
        nextArrow={<NextArrow />}
      >
        {data.map((item, index) => (
          <div key={index}>
            <div className="flex flex-col items-center mt-6">
              <div className="flex justify-center items-center w-40 h-40 rounded-full bg-[#4B433D] overflow-hidden">
                <div className="w-36 h-36 rounded-full border-[32px] border-[#e8ded3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-top object-cover"
                  />
                </div>
              </div>
              <p className="mt-2 text-gray-700 font-semibold text-sm">{item.title}</p>
              <button className="mt-2 mb-2 px-6 py-3 text-sm rounded-full bg-[#4B433D] text-white hover:bg-[#3a322b] transition">
                  Shop Now
              </button>
            </div>
            
          </div>
        ))}
      </Slider>
    </div>
    // <div className="flex items-center justify-center space-x-4 my-10 px-4">
    //   <button
    //     onClick={handlePrev}
    //     className="text-2xl sm:text-3xl md:text-4xl mb-10 sm:mb-4 md:mb-6 text-gray-600 hover:text-black"
    //   >
    //     <FaArrowLeft />
    //   </button>

    //   <div className="flex space-x-4 sm:space-x-6">
    //     {visibleItems.map((category, index) => (
    //       <div
    //         key={index}
    //         className="flex flex-col items-center space-y-2 w-28 sm:w-32"
    //       >
    //         <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-gray-600 overflow-hidden">
    //           <img
    //             src={category.image}
    //             alt={category.name}
    //             className="w-full h-full object-cover object-top"
    //           />
    //         </div>
    //         <p className="text-sm font-semibold text-center">{category.name}</p>
    //         <button className="bg-gray-200 text-xs sm:text-sm px-4 py-1 rounded-full hover:bg-gray-300">
    //           SHOP NOW
    //         </button>
    //       </div>
    //     ))}
    //   </div>

    //   <button
    //     onClick={handleNext}
    //     className="text-2xl sm:text-3xl md:text-4xl mb-10 sm:mb-4 md:mb-6 text-gray-600 hover:text-black"
    //   >
    //     <FaArrowRight />
    //   </button>
    // </div>
  );
};

export default CategorySlider;
