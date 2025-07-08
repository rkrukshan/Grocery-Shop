import { Notebook, NotebookIcon, NotebookText, ScrollText, Truck, X } from 'lucide-react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default function CartComp({ isOpen, onClose }) {
  const { cart } = useSelector(state => state.cart);
  const [quantity, setQuantity] = useState(0);
  const addQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }
  const reduceQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
  }

  const totalPrice = cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0)


  return (
    <div
      className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-slate-200 shadow-lg z-50 transform 
      transition-transform duration-300 ease-in-out 
      ${isOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto`}
    >
      <div className="flex items-center justify-between px-4 py-4 border-b border-slate-300">
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
              <div className="flex justify-between items-center w-full rounded-md">
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">{item.name}</h3>
                  {/* <p className="text-xs text-gray-600">Qty: {item.quantity}</p> */}
                  <span className="text-sm font-bold text-green-600">RS {item.price}.00</span>
                </div>
                <div className="flex items  justify-center p-2">
                  <button onClick={addQuantity} className="bg-green-500 p-2 text-white font-bold rounded-s-md">+</button>
                  <button className="bg-green-500 p-2 text-white font-bold">{quantity}</button>
                  <button onClick={reduceQuantity} className="bg-green-500 p-2 text-white font-bold rounded-e-md">-</button>
                </div>
              </div>

            </div>
          ))
        )}
        {cart.length > 0 && (
          <div className="flex flex-col p-2 bg-white rounded-md">
            <h3 className="flex  items-center font-semibold mb-3"><Notebook className='h-3 w-3 mr-1' />Bill Detail</h3>
            <p className="flex justify-between">
              <h2 className="flex  items-center justify-center font-semiboldtext-sm"><ScrollText className='h-3 w-3 mr-1' />Item Total</h2>
              <h2 className="font-semiboldtext-sm">RS{totalPrice}.00</h2>
            </p>
            <p className="flex justify-between">
              <h2 className="flex  items-center justify-center font-semiboldtext-sm"><Truck className='h-3 w-3 mr-1' />Delivery Charges</h2>
              <h2 className="font-semiboldtext-sm">RS 250.00</h2>
            </p>
            <p className="flex justify-between">
              <h2 className="flex  items-center justify-center font-semiboldtext-sm"><NotebookIcon className='h-3 w-3 mr-1' />Grand Total</h2>
              <h2 className="font-semiboldtext-sm">RS {totalPrice + 250}.00</h2>
            </p>

          </div>
        )}


        {cart.length > 0 && (
          <div className="flex flex-col p-2 bg-white rounded-md">
            <h3 className="flex  items-center font-semibold mb-3"><Notebook className='h-3 w-3 mr-1' />Cancellation Policy</h3>
            <p className="flex justify-between">
              <h2 className="  items-center text-justify font-thin text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore accusantium nostrum libero sunt soluta, dicta nemo neque iusto, dignissimos labore sequi facilis autem suscipit unde tempora praesentium magni molestiae velit.</h2>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
