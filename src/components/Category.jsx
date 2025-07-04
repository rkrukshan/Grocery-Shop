import React from 'react'
import categories from '../utils/categories'
import CategoryCard from './CategoryCard'

export default function Category() {
    return (
        <div className='container mx-auto bg-slate-100 py-9'>
            <div className='text-center text-4xl pb-9'>Shop by Categories</div>

            <div className='w-3/4 mb-9 mx-auto grid grid-cols-5 gap-9'>
                {categories.map((category, i) => {
                     return <CategoryCard key={category.name} name={category.name} image={category.image} /> 
                    }
                )}
            </div>
        </div>
    )
}
