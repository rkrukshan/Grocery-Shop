import { BaggageClaimIcon, ShoppingCart } from 'lucide-react'
import React from 'react'

export default function ProductCard(props) {
    return (
        <div key={props.key} className='border-b-2 rounded-2xl'>
            <div>
                <img src={props.image} alt={props.image} className='w-65 h-65 rounded-t-2xl' />
            </div>
            <div className='font-bold text-center text-md'>
                {props.name}
                {props.price}
            </div>
            <div>
                <button className="text-white font-bold p-2 bg-green-500 rounded flex mx-auto my-5"><ShoppingCart />Add to Cart</button>
            </div>
        </div>
    )
}
