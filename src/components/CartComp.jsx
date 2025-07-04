import { X } from 'lucide-react';
import React from 'react';
import { useSelector } from 'react-redux';

export default function CartComp({ isOpen, onClose }) {
  const { cart } = useSelector(state => state.cart);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-lg z-50 transform 
      transition-transform duration-300 ease-in-out 
      ${isOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto`}
    >
      <div className="flex items-center justify-between px-4 py-4 border-b">
        <h2 className="text-xl font-bold">My Cart</h2>
        <button onClick={onClose} className="text-red-500 hover:text-red-600">
          <X size={24} />
        </button>
      </div>

      <div className="p-4 space-y-4">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">Hey, your cart is empty</p>
        ) : (
          cart.map(item => (
            <div
              key={item.id}
              className="flex items-center gap-4 p-3 bg-gray-50 border border-gray-200 rounded-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded border"
              />
              <div className="flex justify-between items-center w-full">
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-xs text-gray-600">Qty: {item.quantity || 1}</p>
                </div>
                <span className="text-sm font-bold text-green-600">RS {item.price}.00</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
