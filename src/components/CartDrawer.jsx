import React from 'react';
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
  const { cartItems, isCartOpen, toggleCart, incrementItem, decrementItem, removeItem } = useCart();

  if (!isCartOpen) return null;

  const totalMRP = cartItems.reduce((acc, item) => acc + item.originalPrice * item.quantity, 0);
  const totalDiscount = cartItems.reduce((acc, item) => {
    const discount = item.originalPrice - item.price;
    return acc + discount * item.quantity;
  }, 0);
  const orderTotal = totalMRP - totalDiscount;

  return (
    <div className="fixed right-0 top-0 w-80 h-full bg-white shadow-lg z-50 p-4 overflow-y-auto">
      <button onClick={toggleCart} className="absolute top-2 right-3 text-xl font-semibold">×</button>
      <h2 className="text-xl font-semibold mb-6">Cart ({cartItems.length} items)</h2>

      <ul className="space-y-4">
        {cartItems.map((item, i) => (
          <li key={i} className="border-b pb-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold text-sm">{item.name}</p>
                <p className="text-sm text-gray-500 mb-1">₹{item.price.toFixed(2)}</p>
                <div className="flex items-center gap-2">
                  <button onClick={() => decrementItem(item._id)} className="border px-2">-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => incrementItem(item._id)} className="border px-2">+</button>
                </div>
              </div>
              <button onClick={() => removeItem(item._id)} className="text-red-500 text-xs">Remove</button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 border-t pt-4 space-y-2 text-sm text-gray-700">
        <div className="flex justify-between">
          <span>Total MRP:</span>
          <span>₹{totalMRP.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Discount on MRP:</span>
          <span className="text-green-600">-₹{totalDiscount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-black text-base">
          <span>Order Total:</span>
          <span>₹{orderTotal.toFixed(2)}</span>
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <button className="flex-1 bg-black text-white py-2 rounded">View Cart</button>
        <button className="flex-1 bg-red-500 text-white py-2 rounded">Proceed</button>
      </div>
    </div>
  );
};

export default CartDrawer;
