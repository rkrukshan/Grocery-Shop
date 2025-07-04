import React from 'react'

export default function Template() {
    return (
        <div className='bg-blue-100 py-9'>
            <div className='text-center font-inter text-7xl text-white pb-5'>
                Fresh Picks, Happy Home
            </div><div className='text-center font-inter text-md text-green-800 pb-5'>
                "Stock Up on Goodness, Every Day."
            </div>
            <div className="flex justify-center">
                <button className="px-3 py-1 rounded-full font-semibold border bg-green-400 text-white hover:cursor-pointer">
                    Shop Now
                </button>
            </div>
        </div>
    )
}
