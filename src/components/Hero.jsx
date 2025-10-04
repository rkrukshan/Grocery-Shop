import React from 'react'
import shopping from '../assets/images/shop.png';

export default function Hero() {
    return (
        <div className='container min-h-screen bg-gray-100 p-4 sm:p-9 mx-auto'>
            <div className="flex flex-col lg:flex-row justify-between items-center pt-16 lg:pt-0">
                <div className='w-full lg:w-3/4 text-center lg:text-left mb-8 lg:mb-0'>
                    <div className='mb-6 lg:mb-9 font-inter text-3xl sm:text-4xl lg:text-6xl text-green-900'>Fresh Picks, Happy Home
                    </div>
                    <div className='mb-8 lg:mb-15 font-inter text-sm sm:text-md lg:text-md text-green-700'>"Stock Up on Goodness, Every Day."
                    </div>
                    <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-4'>
                        <button className="bg-green-500 p-3 rounded-full text-lg sm:text-xl lg:text-2xl text-white font-bold">Shop Now</button>
                        <button className="bg-green-500 p-3 rounded-full text-lg sm:text-xl lg:text-2xl text-white font-bold">Learn More</button>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 text-center'><img src={shopping} alt={shopping} className="w-full max-w-md mx-auto lg:max-w-full" /></div>
            </div>
        </div>
    )
}