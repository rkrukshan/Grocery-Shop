import React from 'react'
import Hero from '../components/Hero'
import Category from '../components/category'
import FeaturedProducts from '../components/FeaturedProducts'
import Template from '../components/Template'

export default function Home() {
  return (
    <div>
      <Hero />
      <Category />
      <FeaturedProducts />
      <Template />
    </div>
  )
}
