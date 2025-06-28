import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategorySlider from "../Components/CategorySlider";
import Footer from "../Components/Footer";

// Images
import rightArrow from "/46.svg";
import red from "/1.jpg";
import red0 from "/2.jpg";
import red1 from "/10.jpg";
import red2 from "/3.jpg";
import red3 from "/2.jpg";
import red8 from "/12.jpg";
import red9 from "/13.jpg";
import red10 from "/14.jpg";
import red11 from "/15.jpg";
import red5 from "/5.jpg";
import red6 from "/6.jpg";
import img1 from "/3.jpg";
import img2 from "/3.jpg";
import img3 from "/3.jpg";
import img4 from "/3.jpg";
import img5 from "/7.jpg";
import img6 from "/8.jpg";
import img7 from "/9.jpg";
import img8 from "/16.jpg";
import img9 from "/17.jpg";
import img10 from "/18.jpg";
import img11 from "/19.jpg";
import img12 from "/47.jpg";
import img13 from "/48.jpg";
import img14 from "/49.jpg";
import img15 from "/50.jpg";
import img16 from "/51.jpg";
import img17 from "/52.jpg";
import img18 from "/53.jpg";

// Category Data for CategorySlider
const categories1 = [
  { name: "LONG SHIRT", image: red9 },
  { name: "KURTA", image: img9 },
  { name: "KAFTAN", image: img10 },
  { name: "SHALWAR KAMEEZ", image: red11 },
];

function Home() {
 // LEFT ARROW
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -left-1 md:-left-10 lg:-left-14 top-1/2 -translate-y-1/2 z-10 p-0 bg-transparent hover:scale-105 transition"
  >
    <img
      src={rightArrow}
      alt="Previous"
      className="w-[50px] h-[50px] md:w-[80px] md:h-[100px] lg:w-[80px] lg:h-[80px] scale-x-[-1]"
    />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -right-1 md:-right-10 lg:-right-14 top-1/2 -translate-y-1/2 z-10 p-0 bg-transparent hover:scale-105 transition"
  >
    <img
      src={rightArrow}
      alt="Next"
      className=":w-[50px] h-[50px] md:w-[80px] md:h-[100px] lg:w-[80px] lg:h-[80px]"
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


  const outfits = ["/50.jpg", "/51.jpg", "/52.jpg", "/53.jpg"];

  return (
    <>
      <div className="overflow-x-hidden">
        {/* Hero Section */}
        <div className="relative w-full lg:h-[550px] md:[550px] h-[350px]">
          <img className="lg:w-full md:w-full w-[900px] lg:h-full md:h-full h-[300px]  lg:object-cover md:object-cover  object-right absolute" src={red} alt="pic" />
          <div className="relative z-10 text-white font-serif lg:pt-80 md:pt-40 pt-44 pl-4 ">
            <p className="lg:text-3xl md:text-md text-sm ">SUMMER LAWN'23</p>
            <h1 className="lg:text-3xl  md:text-2xl text-sm ">New Arrivals</h1>
            <p className="lg:text-3xl md:text-md text-sm">10,000+ DESIGNS ADDED</p>
            <button className="mt-3 lg:px-12 md:px-4 px-4 py-2 md:text-xl text-sm text-black bg-white hover:bg-gray-100 transition">Shop Now</button>
          </div>
        </div>


        {/* Card Section */}
        <div className="flex flex-wrap justify-center  gap-6 lg:mt-24 md:pt-10 pt-3 ">
          {[red0, red1, red2].map((img, i) => (
            <div key={i} className="w-64">
              <img className="h-[300px] w-full  object-cover" src={img} alt="pic" />
              <div className="flex justify-between text-sm mt-2">
                <p>ZCE23-1A</p>
                <p>Rs.9,030</p>
              </div>
            </div>
          ))}
        </div>

       <div className="w-full py-12 px-4 flex flex-col items-center">
  {/* SHOP BY TYPE Heading + Shadow + Line */}
  <div className="relative w-full flex justify-center items-center mb-12">
    {/* Horizontal line behind the heading */}
    <div className="w-[700px] max-w-[90%] h-[8px] bg-[#4f4e4a] rounded-full"></div>

    {/* Heading box with shadow on bottom-right */}
    <div className="absolute bg-[#4f4e4a] text-white px-10 py-4 text-xl font-semibold z-10 shadow-[6px_6px_0_#EDE0D3]">
      SHOP BY TYPE
    </div>
  </div>

  {/* Category Items */}
  <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10">
    {[
      { img: red1, label: "SILK" },
      { img: red2, label: "COTTON NET" },
      { img: red3, label: "ORGANZA" },
      { img: img5, label: "LAWN" },
    ].map((item, i) => (
      <div key={i} className="flex flex-col items-center space-y-2">
        {/* Two-tone circle border */}
        <div className="w-42 h-42 sm:w-20 sm:h-20 md:w-32 md:h-32 rounded-full border-[8px] border-[#4B433D] overflow-hidden  flex items-center justify-center shadow-lg">
        
          <div className="w-18 h-18 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full  flex items-center justify-center overflow-hidden border-[32px] border-[#EDE0D3]">
            <img
              src={item.img}
              alt={item.label}
              className="lg:w-22 lg:h-22  md:w-14 md:h-14 w-10 h-10  object-top rounded-full"
            />
          </div>
          
        </div>
        <p className="text-sm md:text-base font-medium">{item.label}</p>
        <button className="px-6 py-1 text-sm md:text-base rounded-full bg-slate-600 text-white hover:bg-slate-700">
          Shop Now
        </button>
      </div>
    ))}
  </div>
</div>



        {/* New Arrivals */}
        <div className="text-center px-4">
          <h2 className="text-2xl sm:text-3xl font-semibold">New Arrivals</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {[img18, red9, red10, red11].map((img, i) => (
              <img key={i} className="h-[300px] w-full object-cover object-top rounded" src={img} alt="pic" />
            ))}
          </div>
        </div>

        {/* Double Images */}
        <div className="grid grid-cols-2 gap-6 mt-6 px-4">
          <img src={img15} alt="pic" className="w-full lg:h-[550px] md:h-[600px] h-[350px] object-top object-cover" />
          <img src={img18} alt="pic" className="w-full lg:h-[550px] md:h-[600px] h-[350px] object-top object-cover" />
        </div>

        <div className="grid grid-cols-2 gap-6 mt-6 px-4">
          <img src={red5} alt="pic" className="w-full   object-cover" />
          <img src={red6} alt="pic" className="w-full object-cover" />
        </div>

        {/* 50% OFF */}
        <div className="text-center py-16 px-4">
          <div className="relative w-full flex justify-center items-center my-10">
            <div className="w-[90%] max-w-xl h-[8px] rounded-full bg-gray-400"></div>
            <div className="absolute bg-[#4A4A4A] text-white px-10 py-4 text-lg font-bold shadow-md rounded-sm">50 % OFF</div>
          </div>

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
            <div className="w-36 h-36 rounded-full border-[8px] border-[#e8ded3] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="mt-2 text-gray-700 font-semibold text-sm">{item.title}</p>
        </div>
      </div>
    ))}
  </Slider>
</div>


          <div className="mt-6 text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
            <hr className="w-10 border-gray-500" />
            ALL PRODUCTS
            <hr className="w-10 border-gray-500" />
          </div>
        </div>

        {/* All Products */}
        <div className="flex flex-wrap justify-center   gap-6 px-4">
          {[img14, img12, img13].map((img, i) => (
            <img key={i} className="h-[400px] w-[300px] object-cover object-top  rounded" src={img} alt="pic" />
          ))}
        </div>

        {/* Outfits */}
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



        {/* Deals by Category */}
        <div className="relative w-full flex justify-center items-center my-10 px-4">
          <div className="w-[90%] max-w-xl h-[8px] rounded-full bg-gray-400"></div>
          <div className="absolute bg-[#4A4A4A] text-white lg:px-14 md:px-8 px-5 py-6 lg:text-xl md:text-md text-sm font-bold shadow-md rounded-sm">
            <p> Deals By Category</p>
          </div>
        </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-6 md:gap-20 justify-center  px-20">
          {[img13, img9, img10].map((img, i) => (
            <div
              key={i}
              className="text-center text-lg flex flex-col items-center"
            >
              <div className="lg:w-[320px] md:w-[230px] w-[260px] h-[370px] overflow-hidden   rounded">
          <img
            className="w-full h-full object-cover object-top"
            src={img}
            alt={`pic-${i}`}
          />
        </div>

      <div className="mt-2 space-y-1">
        <p>Brand {i + 1}</p>
        <p>
          upto <span className="font-bold">{30 + i * 10}%</span> Off
        </p>
      </div>
    </div>
  ))}
</div>



        <div className="flex justify-center px-4 mt-10">
          <img src={img11} alt="pic" className="w-full max-w-6xl rounded" />
        </div>

        {/* Pret Styles */}
        <div className="text-center py-3 px-4">
          <div className="relative w-full flex justify-center items-center my-10">
            <div className="w-[90%] max-w-xl h-[8px] rounded-full bg-gray-400"></div>
            <div className="absolute bg-[#4A4A4A] text-white px-10 py-4 text-lg font-bold shadow-md rounded-sm">
              <p>PRET STYLES</p>
            </div>
          </div>
        </div>

        {/* ✅ Custom CategorySlider With Props */}
        <CategorySlider categories={categories1} />
        <Footer />
      </div>
    </>
  );
}

export default Home;
