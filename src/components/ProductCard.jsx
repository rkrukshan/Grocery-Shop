import { ShoppingCart } from 'lucide-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../Redux/Slices/cartSlice';

export default function ProductCard({ product }) {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart?.cart || []);

    if (!product) return null;

    const addToCart = (product) => {
        const productExist = cart.some(item => item.id === product.id);
        if (productExist) {
            let newUnit = product.unit || 1;
            newUnit += 1;
            dispatch(setCart([...cart]));
        } else {
            dispatch(setCart([...cart, product]));
        }
    };

    return (
        <div className='border-b-2 rounded-2xl'>
            <div>
                <img src={product.image} alt={product.name} className='w-65 h-65 rounded-t-2xl' />
            </div>
            <div className='font-bold text-center text-md'>
                {product.name} - ${product.price}
            </div>
            <div>
                <button
                    onClick={() => addToCart(product)}
                    className="text-white font-bold p-2 bg-green-500 rounded flex mx-auto my-5 hover:cursor:pointer"
                >
                    <ShoppingCart className="mr-2" />
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
