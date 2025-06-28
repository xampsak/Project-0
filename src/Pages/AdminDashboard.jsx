import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const dummyProducts = [
  { id: 1, img: "/34.jpg", name: "Classic Kurta", price: "Rs. 2,000", size: "S / M / L" },
  { id: 2, img: "/35.jpg", name: "Green Kurta", price: "Rs. 2,200", size: "M / L" },
  { id: 3, img: "/36.jpg", name: "Yellow Dress", price: "Rs. 1,800", size: "S / M" },
  { id: 4, img: "/37.jpg", name: "Black Kurta", price: "Rs. 2,300", size: "L" },
  { id: 5, img: "/38.jpg", name: "Blue Kurta", price: "Rs. 2,000", size: "S / M / L" },
  { id: 6, img: "/39.jpg", name: "Orange Dress", price: "Rs. 2,400", size: "S / M" },
  { id: 7, img: "/40.jpg", name: "Stylish Kurta", price: "Rs. 1,700", size: "M / L" },
  { id: 8, img: "/41.jpg", name: "Modern Kurta", price: "Rs. 2,100", size: "S / M / L" },
];

export default function AdminDashboard() {
  const [search, setSearch] = useState("");

  const filteredProducts = dummyProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="bg-[#d3cabe] w-64 p-6 hidden md:block">
        <h1 className="text-xl font-bold mb-6">Elsha Admin</h1>
        <ul className="space-y-4">
          <li className="font-medium">Dashboard</li>
          <li className="bg-[#a39c93] px-2 py-1 rounded">Products</li>
          <li className="font-medium">Add products</li>
          <li className="font-medium">Products list</li>
          <li className="font-medium">Categories</li>
          <li className="font-medium">Brands</li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <div className="border rounded-xl p-6 shadow-md bg-white">
          {/* Topbar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="border border-gray-300 px-4 py-2 rounded-md w-full max-w-xs"
            />

            <div className="flex flex-wrap gap-2">
              <select className="border lg:text-lg md:text-md text-sm px-2 py-1 rounded">
                <option>Category</option>
                <option>Kurta</option>
                <option>Lawn</option>
              </select>

              <button className="border-[1px] px-6 py-2 rounded-full">Export</button>
              <button className="bg-black border-[1px] text-white px-4 py-2 rounded-full">Create New</button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="border-[1px] border-black p-3 flex flex-col justify-center items-center rounded-xl shadow">
                <img src={product.img} alt={product.name} className="h-60 w-42 object-top object-cover rounded" />
                <h3 className="mt-2 text-sm font-semibold">{product.name}</h3>
                <p className="text-xs">{product.price}</p>
                <p className="text-xs mb-2">Size: {product.size}</p>
                <div className="flex justify-between gap-2">
                  <button className="text-black flex border-[1px] border-black px-3 items-center text-sm gap-1">
                    <FaEdit /> Edit
                  </button>
                  <button className="text-black border-[1px] border-black px-3 flex items-center text-sm gap-1">
                    <FaTrash /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination (Right Aligned) */}
          <div className="flex justify-end items-center gap-2 mt-6">
            <button className="px-3 py-1 border rounded hover:bg-gray-100">Previous</button>
            <button className="px-3 py-1 border rounded bg-black text-white">1</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-100">2</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-100">3</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-100">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
