import React, { useState } from 'react'
import categories from '../utils/categories';
import products from '../utils/products'
import ProductCard from '../components/ProductCard'
export default function Shop() {
  const [priceRange, setPriceRange] = useState([0, 5000]);

  return (
    <div className="flex justify-between container mx-auto mb-9">
      <div className='max-w-6xl mr-5 flex flex-col lg: gap-6 my-7 lg:mt-15 mt-24 h-max'>
        <div className="col-span p-4 bg-gray-100 h-max rounded-xl w-[280px] mb-10 hidden md:block">
          <h2 className="text-lg font-semibold mb-4">
            Filter
          </h2>
          <input type="text" placeholder='Search...' className='mb-4 bg-white p-2 w-full rounded-md' />
          <select className='w-full p-2 border rounded mb-4'>
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category.name} value={category.name}>{category.name}</option>
            ))}
          </select>
          <div className="mb-4">
            <label htmlFor="">{priceRange[0]}-{priceRange[1]}</label>
            <input type="range" min="0" max="5000" value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])} />
          </div>
          <div className="w-1/2 mx-auto">
            <button className="bg-red-500 p-3 text-center font-bold text-white rounded-xl hover:cursor-pointer">Reset Filter</button>

          </div>
        </div>
      </div>
      <div className="span-3 grid grid-cols-5 gap-3 mt-15">
        {products.map((product) => {
          return <ProductCard key={product.id} name={product.name} image={product.image} />
        })}
      </div>
    </div>
  )
}
