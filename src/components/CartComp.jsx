import { ChevronRight, Notebook, NotebookIcon, ScrollText, Truck, X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../Redux/Slices/cartSlice';

export default function CartComp({ isOpen, onClose }) {
  const { cart } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const updateQuantity = (cart, productId, action) => {
    dispatch(setCart(
      cart.map(item => {
        if (item.id === productId) {
          let newUnit = item.quantity || 1;
          newUnit = action === "increase" ? newUnit + 1 : newUnit - 1;
          return newUnit > 0 ? { ...item, quantity: newUnit } : null;
        }
        return item;
      }).filter(item => item !== null)
    ));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-slate-200 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
        } overflow-y-auto`}
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
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full gap-2">
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-800">{item.name}</h3>
                  <span className="text-sm font-bold text-green-600">RS {item.price}.00</span>
                </div>
                <div className="flex items-center space-x-1 self-end sm:self-auto">
                  <button
                    className="bg-green-500 p-2 text-white font-bold rounded-s-md min-w-[40px]"
                    onClick={() => updateQuantity(cart, item.id, 'increase')}
                  >
                    +
                  </button>
                  <div className="bg-green-500 px-3 text-white py-2 text-sm font-bold min-w-[40px] text-center">
                    {item.quantity}
                  </div>
                  <button
                    className="bg-green-500 p-2 text-white font-bold rounded-e-md min-w-[40px]"
                    onClick={() => updateQuantity(cart, item.id, 'decrease')}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          ))
        )}

        {cart.length > 0 && (
          <>
            <div className="flex flex-col p-4 bg-white rounded-md">
              <h3 className="flex items-center font-semibold mb-3">
                <Notebook className="h-4 w-4 mr-1" /> Bill Details
              </h3>
              <div className="flex justify-between mb-2">
                <span className="flex items-center text-sm font-semibold text-gray-700">
                  <ScrollText className="h-4 w-4 mr-1" /> Item Total
                </span>
                <span className="text-sm font-semibold text-gray-700">RS {totalPrice}.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="flex items-center text-sm font-semibold text-gray-700">
                  <Truck className="h-4 w-4 mr-1" /> Delivery Charges
                </span>
                <span className="text-sm font-semibold text-gray-700">RS 250.00</span>
              </div>
              <div className="flex justify-between border-t pt-2 mt-2">
                <span className="flex items-center text-lg sm:text-xl font-bold text-slate-700">
                  <NotebookIcon className="h-5 w-5 mr-2" /> Grand Total
                </span>
                <span className="text-lg sm:text-xl font-bold text-slate-700">RS {totalPrice + 250}.00</span>
              </div>
            </div>

            <div className="flex flex-col p-4 bg-white rounded-md">
              <h3 className="flex items-center font-semibold mb-3">
                <Notebook className="h-4 w-4 mr-1" /> Cancellation Policy
              </h3>
              <p className="text-sm text-justify font-light text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore accusantium
                nostrum libero sunt soluta, dicta nemo neque iusto, dignissimos labore sequi
                facilis autem suscipit unde tempora praesentium magni molestiae velit.
              </p>
            </div>

            <div className="bg-green-600 flex flex-col sm:flex-row sm:justify-between rounded-md">
              <div className="p-5 flex flex-col">
                <h3 className="text-white font-bold text-md mb-1">RS {totalPrice + 250}.00</h3>
                <h3 className="text-white font-bold text-md">Total</h3>
              </div>
              <div className="p-5 sm:py-9 sm:pr-4">
                <button className="flex items-center justify-center font-bold text-lg sm:text-xl text-white hover:underline">
                  Login to Proceed <ChevronRight className="ml-1" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}