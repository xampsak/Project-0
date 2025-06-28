import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../Pages/CartContext"; // ✅ Make sure path is correct
import Footer from "../components/Footer"; // ✅ Adjust if path differs

// Dummy product data
const productData = {
  1: {
    title: "3pc Embroidered Lawn Suit",
    price: "PKR 5,390",
    img: "/29.jpg",
  },
  2: {
    title: "2pc Printed Lawn Set",
    price: "PKR 4,190",
    img: "/30.jpg",
  },
  3: {
    title: "3pc Lawn Summer Collection",
    price: "PKR 3,590",
    img: "/31.jpg",
  },
};

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart(); // ✅ Use cart context

  const [size, setSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  const product = productData[id] || {
    title: "Unknown Product",
    price: "PKR 0",
    img: "/placeholder.jpg",
  };

  const handleAddToCart = () => {
    if (!size) {
      setMessage("❗ Please select a size before adding to the bag.");
      return;
    }

    addToCart({
      id,
      title: product.title,
      price: product.price,
      img: product.img,
      size,
      quantity,
    });

    setMessage(`✅ Added to Bag: ${product.title} (Size: ${size}, Qty: ${quantity})`);
  };

  return (
    <>
      <div className="pt-20 px-4 sm:px-6 bg-[#fbeeee] min-h-screen flex flex-col">
        <div className="max-w-6xl mx-auto flex-grow">

          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="mb-6 text-sm hover:underline"
          >
            ← Back to Products
          </button>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">{product.title}</h1>

          {/* Product Layout */}
          <div className="flex flex-col md:flex-row gap-6 pb-5">
            {/* Image */}
            <img
              src={product.img}
              alt={product.title}
              className="w-full md:w-1/2 h-[350px] sm:h-[450px] object-cover object-top rounded-lg"
            />

            {/* Info */}
            <div className="md:w-1/2 bg-white p-5 sm:p-6 rounded-xl shadow">
              <h2 className="text-lg sm:text-xl font-semibold mb-2">{product.title}</h2>
              <p className="text-pink-600 font-bold text-lg sm:text-xl mb-4">{product.price}</p>

              {/* Size */}
              <div className="mb-4">
                <p className="font-semibold">Select Size:</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {["S", "M", "L", "XL"].map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`px-3 py-1 border rounded ${
                        size === s ? "bg-blue-600 text-white" : "bg-white"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-4">
                <p className="font-semibold">Quantity:</p>
                <div className="flex items-center border w-fit px-2 py-1 rounded">
                  <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</button>
                  <span className="px-4">{quantity}</span>
                  <button onClick={() => setQuantity((q) => q + 1)}>+</button>
                </div>
              </div>

              {/* Add to Bag */}
              <button
                onClick={handleAddToCart}
                className="bg-black text-white px-6 py-2 rounded"
              >
                + Add to Bag
              </button>

              {/* Message */}
              {message && <p className="mt-3 font-medium text-green-700">{message}</p>}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductDetails;
