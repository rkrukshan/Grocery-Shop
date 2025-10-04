import React from 'react'

export default function Template() {
    return (
        <div className='bg-blue-100 py-6 sm:py-9 px-4'>
            <div className='text-center font-inter text-3xl sm:text-5xl lg:text-7xl text-white pb-4 sm:pb-5'>
                Fresh Picks, Happy Home
            </div>
            <div className='text-center font-inter text-sm sm:text-md lg:text-md text-green-800 pb-4 sm:pb-5'>
                "Stock Up on Goodness, Every Day."
            </div>
            <div className="flex justify-center">
                <button className="px-3 py-1 sm:py-2 rounded-full font-semibold border bg-green-400 text-white hover:cursor-pointer">
                    Shop Now
                </button>
            </div>
        </div>
    )
}