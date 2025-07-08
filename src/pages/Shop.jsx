import React, { useState } from 'react'
import categories from '../utils/categories';
import products from '../utils/products'
import ProductCard from '../components/ProductCard'

export default function Shop() {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "" || product.category === category) &&
    product.price >= priceRange[0] && product.price <= priceRange[1])

  const resetFilter = () => {
    setCategory("");  // Changed from "All Category" to empty string
    setSearch("");
    setPriceRange([0, 500]);
  }

  return (
    <div className="flex justify-between container mx-auto mb-9">
      <div className='max-w-6xl mr-5 flex flex-col lg:gap-6 my-7 lg:mt-15 mt-24 h-max'>
        <div className="col-span p-4 bg-gray-100 h-max rounded-xl w-[280px] mb-10 hidden md:block">
          <h2 className="text-lg font-semibold mb-4">Filter</h2>
          <input
            type="text"
            placeholder='Search...'
            className='mb-4 bg-white p-2 w-full rounded-md'
            onChange={(event) => setSearch(event.target.value)}
            value={search}
          />
          <select
            className='w-full p-2 border rounded mb-4'
            onChange={(event) => setCategory(event.target.value)}
            value={category}  // Added value prop to control the select
          >
            <option value="">All Categories</option>  {/* Changed from disabled empty string */}
            {categories.map((category) => (
              <option key={category.name} value={category.name}>{category.name}</option>
            ))}
          </select>
          <div className="mb-4">
            <label htmlFor="">{priceRange[0]}-{priceRange[1]}</label>
            <input
              type="range"
              min="0"
              max="500"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            />
          </div>
          <div className="w-1/2 mx-auto">
            <button
              className="bg-red-500 p-3 text-center font-bold text-white rounded-xl hover:cursor-pointer"
              onClick={resetFilter}
            >
              Reset Filter
            </button>
          </div>
        </div>
      </div>
      <div className="span-3 grid grid-cols-5 gap-3 mt-15">
        {filteredProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />
        })}
      </div>
    </div>
  )
}