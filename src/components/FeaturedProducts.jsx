import React from 'react'
import products from '../utils/products'
import ProductCard from './ProductCard'

export default function FeaturedProducts() {
  return (
    <div className='container mx-auto py-9 pt-9 bg-gray-100'>
      <div className='text-center text-4xl my-9 '>Featured Products</div>
      <div className='w-3/4 mb-9 mx-auto grid grid-cols-5 gap-9'>
        {products.slice(0, 5).map((product, i) => {
          return <ProductCard key={product.id} name={product.name} image={product.image} price={product.price} />
        })}
      </div>
      <div className="flex justify-center">
        <button className="px-3 py-2 font-bold border rounded-full">
          View More
        </button>
      </div>

    </div>

  )
}
