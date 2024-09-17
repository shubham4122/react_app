import React from "react";
import { useCart } from "./context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 }); // Add the product with an initial quantity of 1
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col justify-between">
      <img
        className="w-full h-48 object-cover mb-4"
        src={product.image}
        alt={product.title}
      />
      <div className="flex-grow">
        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
        <p className="text-gray-700 mb-4">${product.price.toFixed(2)}</p>
      </div>
      <button
        onClick={handleAddToCart}
        className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
