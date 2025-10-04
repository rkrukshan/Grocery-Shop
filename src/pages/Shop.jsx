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
    <div className="flex flex-col lg:flex-row justify-between container mx-auto mb-9 px-4">
      <div className='w-full lg:max-w-6xl lg:mr-5 flex flex-col gap-6 my-7 lg:mt-15 mt-24 h-max'>
        <div className="col-span p-4 bg-gray-100 h-max rounded-xl w-full lg:w-[280px] mb-6">
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
            value={category}
          >
            <option value="">All Categories</option>
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
              className="w-full"
            />
          </div>
          <div className="w-full lg:w-1/2 mx-auto">
            <button
              className="bg-red-500 p-3 text-center font-bold text-white rounded-xl hover:cursor-pointer w-full"
              onClick={resetFilter}
            >
              Reset Filter
            </button>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6 lg:mt-15">
        {filteredProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />
        })}
      </div>
    </div>
  )
}