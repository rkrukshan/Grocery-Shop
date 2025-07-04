import React from 'react'
import shopping from '../assets/images/shop.png';

export default function Hero() {
    return (
        <div className='container h-screen bg-gray-100 p-9 mx-auto
        '>
            <div className=" flex justify-between items-center">
                <div className='w-3/4 text-center'>
                    <div className='mb-9 font-inter text-6xl text-green-900'>Fresh Picks, Happy Home
                    </div><div className='mb-15 font-inter text-md text-green-700'>"Stock Up on Goodness, Every Day."
                    </div>
                    <button className="bg-green-500 p-3 mx-5 rounded-full text-2xl text-white font-bold">Shop Now</button>
                    <button className="bg-green-500 p-3 mx-5 rounded-full text-2xl text-white font-bold">Learn More</button>
                </div>
                <div className='w-1/2 text-center'><img src={shopping} alt={shopping} /></div>
            </div>
        </div>
    )
}
