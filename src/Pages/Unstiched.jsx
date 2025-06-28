import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import { useCart } from "../Pages/CartContext";

function Unstiched() {
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [price, setPrice] = useState(3590);
  const thumbnails = ["/26.jpg", "/27.jpg", "/28.jpg", "/29.jpg"];
  const [mainImage, setMainImage] = useState("/25.jpg");
  const [size, setSize] = useState(null);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      img: "/29.jpg",
      price: "PKR. 5,390",
      desc: "Fabric: 3 Piece Suit\nPrinted/Embroidered Lawn | Top Bottom Dupatta",
    },
    {
      id: 2,
      img: "/30.jpg",
      price: "PKR. 4,190",
      desc: "Fabric: 2 Piece\nPrinted/Embroidered Lawn | Top Dupatta",
    },
    {
      id: 3,
      img: "/31.jpg",
      price: "PKR. 3,590",
      desc: "Fabric: 3 Piece Suit\nPrinted/Embroidered Lawn | Top Bottom Dupatta",
    },
    {
      id: 4,
      img: "/32.jpg",
      price: "PKR. 5,390",
      desc: "Fabric: 3 Piece Suit\nPrinted/Embroidered Lawn | Top Bottom Dupatta",
    },
    {
      id: 5,
      img: "/33.jpg",
      price: "PKR. 4,190",
      desc: "Fabric: 2 Piece\nPrinted/Embroidered Lawn | Top Dupatta",
    },
  ];

  const currentProduct =
    products.find((p) => p.img === mainImage) || {
      id: 0,
      title: "Selected Product",
      img: mainImage,
      price: `PKR ${price}`,
      desc: "Fabric Info",
    };

  return (
    <>
      <div className="text-center text-xl font-bold py-4 border-b border-gray-300">
        UNSTITCHED COLLECTION
      </div>

      <div className="flex flex-col lg:flex-row gap-8 p-4 sm:p-6 md:p-10">
        <div className="flex flex-col-reverse lg:flex-row lg:w-1/2 gap-4">
          <div className="flex flex-row lg:flex-col gap-2 overflow-auto max-h-[500px]">
            {thumbnails.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Thumb ${i + 1}`}
                onClick={() => setMainImage(src)}
                className="w-20 h-28 object-cover rounded-lg cursor-pointer border hover:border-gray-500"
              />
            ))}
          </div>

          <img
            src={mainImage}
            alt="Product"
            className="w-full object-top sm:h-[600px] object-cover rounded-xl"
          />
        </div>

        <div className="lg:w-1/2 space-y-4 text-sm sm:text-base bg-[#e8ded3] p-5">
          <h2 className="text-xl sm:text-2xl font-semibold">
            {currentProduct.desc}
          </h2>
          <p className="text-2xl font-bold">{currentProduct.price}</p>
          <p>
            Availability: <span className="font-semibold">In stock</span>
          </p>
          <p>SKU ICA230601</p>

          <div>
            <p className="font-bold text-2xl mb-2">Filters color:</p>
            <div className="grid grid-cols-6 gap-2">
              {["White", "Red", "Cyan", "Navy", "Vermillion", "Orange", "Black", "Yellow", "Green", "Magenta", "Brown", "Grey", "Blue", "Beige", "Purple", "Pink", "Darks"].map((color, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 border rounded text-center"
                >
                  {color}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <p className="font-semibold mb-1">Size</p>
            <div className="flex gap-2">
              {["XS", "S", "M", "L", "XL"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-3 py-1 border-[1px] rounded-full ${
                    size === s ? "bg-black text-white" : "bg-white"
                  } hover:bg-gray-100`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <label className="font-semibold block mb-1">Price</label>
            <input
              type="range"
              min="2000"
              max="10000"
              value={price}
              onChange={(e) => setPrice(parseInt(e.target.value))}
              className="w-[250px]"
            />
            <div className="flex gap-24 p-3 text-sm">
              <span>2000 PKR</span>
              <span>10000 PKR</span>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center border-[1px] border-black rounded">
              <button
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                className="px-2"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-2"
              >
                +
              </button>
            </div>
            <button
              onClick={() => {
                if (!size) {
                  setMessage("❗ Please select a size before adding to bag.");
                  return;
                }
                addToCart({
                  id: currentProduct.id,
                  title: currentProduct.desc,
                  img: currentProduct.img,
                  price: currentProduct.price,
                  size,
                  quantity,
                });
                setMessage("✅ Added to Bag!");
              }}
              className="bg-gray-800 text-white px-6 py-2 rounded"
            >
              + ADD TO BAG
            </button>
          </div>

          {message && (
            <p className="text-sm mt-2 font-medium text-green-700">{message}</p>
          )}

          <div className="mt-6 p-4">
            <h3 className="font-semibold text-lg mb-1">Details</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Top Fabric: Digital Printed Embroidered Cambric | 3m</li>
              <li>Bottom Fabric: Digital Printed Cambric | 2.5m</li>
              <li>Technique: Printed Embroidered</li>
              <li>Fabric Content: 100% Cotton</li>
              <li>Description: Essentials Printed Embroidered Top Bottoms</li>
            </ul>
          </div>

          <div className="mt-6 p-4">
            <h3 className="text-lg font-semibold mb-2">REVIEWS</h3>
            <p>
              Your Reviewing: <strong>Printed Embroidered Cambric | Top Bottoms</strong>
            </p>
            <p className="mt-2 font-semibold">Your Rating</p>
            <div className="flex gap-1 text-yellow-500 text-xl">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className={rating >= star ? "text-yellow-500" : "text-gray-300"}
                >
                  ★
                </button>
              ))}
            </div>

            <div className="mt-4 space-y-2">
              <input
                type="text"
                placeholder="Nickname"
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Summary"
                className="w-full border p-2 rounded"
              />
              <textarea
                rows="3"
                placeholder="Review"
                className="w-full border p-2 rounded"
              ></textarea>
              <button className="bg-gray-800 text-white px-4 py-2 rounded">
                SUBMIT REVIEW
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-10 px-4">
        <h2 className="text-center text-2xl font-bold mb-10">RELATED PRODUCTS</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((item) => (
            <div
              onClick={() => navigate(`/product/${item.id}`)}
              key={item.id}
              className="flex flex-col items-center text-center hover:opacity-80 transition cursor-pointer"
            >
              <img
                src={item.img}
                alt="Product"
                className="w-[230px] h-[300px] object-cover object-top"
              />
              <p className="mt-2 text-gray-800 whitespace-pre-line text-sm">{item.desc}</p>
              <p className="mt-1 font-semibold">{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Unstiched;
