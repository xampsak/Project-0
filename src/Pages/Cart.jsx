import React from "react";
import { useCart } from "./CartContext";
import Footer from "../components/Footer";

function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <>
    <div className="pt-20 px-6 bg-[#fbeeee] min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">🛒 Your Shopping Bag</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6 max-w-4xl mx-auto pb-6">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white rounded-lg shadow p-4"
            >
              <div className="flex items-center gap-4">
                <img src={item.img} alt={item.title} className="w-24 h-24 object-cover rounded" />
                <div>
                  <h2 className="font-bold">{item.title}</h2>
                  <p>{item.price}</p>
                  <p>Size: {item.size}</p>
                  <p>Qty: {item.quantity}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(index)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

    </div>
      <Footer />
    </>
  );
}

export default Cart;
