import React from "react";
import { useCart } from "./context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, editCartItem } = useCart();

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const handleEditQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    editCartItem(productId, newQuantity);
  };

  return (
    <section className="p-4">
      <h2 className="text-3xl font-bold text-center mb-8">Selected Items</h2>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-white p-4 rounded-lg shadow-lg"
          >
            <div className="flex items-center">
              <img
                className="w-16 h-16 object-cover mr-4"
                src={item.image}
                alt={item.title}
              />
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-700">${item.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center">
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) =>
                  handleEditQuantity(item.id, parseInt(e.target.value))
                }
                className="w-16 text-center border border-gray-300 rounded mr-4"
              />
              <button
                onClick={() => handleRemove(item.id)}
                className="bg-red-600 text-white py-1 px-3 rounded-full hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cart;
