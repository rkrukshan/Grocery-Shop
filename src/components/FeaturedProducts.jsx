import React from 'react';
import products from '../utils/products';
import ProductCard from './ProductCard';

export default function FeaturedProducts() {
  return (
    <div className='container mx-auto py-6 sm:py-9 pt-6 sm:pt-9 bg-gray-100 px-4'>
      <div className='text-center text-2xl sm:text-3xl lg:text-4xl my-6 sm:my-9'>Featured Products</div>
      <div className='w-full lg:w-3/4 mb-6 sm:mb-9 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-9'>
        {products.slice(0, 5).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="px-3 py-2 font-bold border rounded-full">
          View More
        </button>
      </div>
    </div>
  );
}