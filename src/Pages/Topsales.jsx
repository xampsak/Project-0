import { useState } from 'react';
import CategorySlider from '../Components/CategorySlider';
import Footer from '../Components/Footer';

const allProducts = [
  // Page 1
  { id: 1, img: '/20.jpg', title: 'Classic Suit', size: 'S', price: 2500, discount: 40 },
  { id: 2, img: '/21.jpg', title: 'Modern Kurti', size: 'M', price: 1800, discount: 50 },
  { id: 3, img: '/22.jpg', title: 'Luxury Dress', size: 'L', price: 3200, discount: 30 },
  { id: 4, img: '/23.jpg', title: 'Cotton Wear', size: 'S', price: 1500, discount: 60 },
  { id: 5, img: '/24.jpg', title: 'Silk Tunic', size: 'M', price: 2800, discount: 50 },
  { id: 6, img: '/13.jpg', title: 'Party Wear', size: 'L', price: 4000, discount: 35 },
  { id: 7, img: '/12.jpg', title: 'Office Look', size: 'S', price: 2200, discount: 45 },
  { id: 8, img: '/18.jpg', title: 'Chic Style', size: 'M', price: 1900, discount: 40 },
  { id: 9, img: '/17.jpg', title: 'Minimal Fit', size: 'L', price: 2600, discount: 50 },

  // Page 2
  { id: 10, img: '/15.jpg', title: 'Printed Dress', size: 'S', price: 2300, discount: 35 },
  { id: 11, img: '/20.jpg', title: 'Boho Kurti', size: 'M', price: 2100, discount: 50 },
  { id: 12, img: '/21.jpg', title: 'Maxi Wear', size: 'L', price: 3100, discount: 40 },

  // Page 3 - using public images
  { id: 13, img: '22.jpg', title: 'Pastel Beauty', size: 'S', price: 2700, discount: 30 },
  { id: 14, img: '23.jpg', title: 'Bold Pink', size: 'M', price: 2900, discount: 45 },
  { id: 15, img: '24.jpg', title: 'Sunshine Fit', size: 'L', price: 3100, discount: 40 },
];

const Topsales = () => {
  const [selectedSize, setSelectedSize] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [minDiscount, setMinDiscount] = useState(0);
  const [page, setPage] = useState(1);

  const filteredProducts = allProducts
    .filter((p) => (selectedSize ? p.size === selectedSize : true))
    .filter((p) => p.discount >= minDiscount)
    .sort((a, b) => {
      if (sortOrder === 'asc') return a.price - b.price;
      if (sortOrder === 'desc') return b.price - a.price;
      return 0;
    });

  const itemsPerPage = 9;
  const paginatedProducts = filteredProducts.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <>
    <div className="bg-white px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-1">Top Sales</h2>
      <p className="text-center text-xs max-w-md mx-auto text-gray-600 mb-6">
        Elisha offers a vast selection of women’s clothing to shop. Each season brings a fresh assortment of Elisha pieces to match your mood.
      </p>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 text-xs  mb-6">
        <button className="border px-8 py-2 bg-[#e8ded3] rounded-full hover:bg-black hover:text-white transition">Filter</button>
        <button className="border bg-[#e8ded3]  px-4 py-1 rounded-full hover:bg-black hover:text-white transition">Readyship</button>
        <select onChange={(e) => setSelectedSize(e.target.value)} className="border bg-[#e8ded3] px-4 py-1 rounded-full">
          <option value="">Size</option>
          <option value="S">S</option><option value="M">M</option><option value="L">L</option>
        </select>
        <select onChange={(e) => setSortOrder(e.target.value)} className="border bg-[#e8ded3] px-4 py-1 rounded-full">
          <option value="">Price</option>
          <option value="asc">Low → High</option>
          <option value="desc">High → Low</option>
        </select>
        <select onChange={(e) => setMinDiscount(Number(e.target.value))} className="border bg-[#e8ded3] px-4 py-1 rounded-full">
          <option value={0}>Discount</option>
          <option value={30}>30%+</option>
          <option value={40}>40%+</option>
          <option value={50}>50%+</option>
        </select>
        <button className="border px-4 py-1 bg-[#e8ded3] rounded-full hover:bg-black hover:text-white transition">Sort By</button>
      </div>

      <CategorySlider />

      {/* Product Cards */}
      <div className="flex justify-center mt-4">
        <div className="flex flex-wrap justify-center gap-[4px] max-w-[1200px]">
          {paginatedProducts.map((product) => (
            <div key={product.id} className="flex flex-col items-center w-[320px] p-1">
              <img src={product.img} alt={product.title} className="w-[300px] object-cover h-[350px] object-top" />
              <div className="flex justify-between items-center mt-1 text-xs px-2 pb-2 w-[300px]">
                <div className="text-left">
                  <p className="text-sm font-medium">{product.title}</p>
                  <p className="text-gray-400">Printed | Cambric</p>
                  <p className="text-gray-500 font-medium">PKR: {product.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="border border-gray-400 text-black rounded-full px-3 py-1 text-xs">
                    {product.discount}% OFF
                  </span>
                  <button className="border border-gray-400 px-4 py-1 rounded-full hover:bg-black hover:text-white transition text-xs">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

{/* Pagination */}
      <div className="flex justify-center items-center gap-3 mt-6 text-sm font-medium">
        <span>Page</span>
        {[...Array(7)].map((_, index) => (
          <button
            key={index + 1}
            className={`w-7 h-7 border rounded flex items-center justify-center ${
              page === index + 1 ? 'border-black font-bold' : ''
            }`}
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
  </div>
    <Footer/>
  </>
  );
};

export default Topsales;
