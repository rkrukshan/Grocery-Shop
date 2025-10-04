import React from 'react'
import categories from '../utils/categories'
import CategoryCard from './CategoryCard'

export default function Category() {
    return (
        <div className='container mx-auto bg-slate-100 py-6 sm:py-9 px-4'>
            <div className='text-center text-2xl sm:text-3xl lg:text-4xl pb-6 sm:pb-9'>Shop by Categories</div>

            <div className='w-full lg:w-3/4 mb-6 sm:mb-9 mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-9'>
                {categories.map((category, i) => {
                    return <CategoryCard key={category.name} name={category.name} image={category.image} />
                }
                )}
            </div>
        </div>
    )
}