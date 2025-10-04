import { Facebook, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <div className='w-full p-4 sm:p-9 bg-slate-300 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6'>
      <div className="flex flex-col sm:col-span-2 lg:col-span-1 mr-0 sm:mr-9">
        <div className="text-2xl sm:text-3xl text-center sm:text-left font-inter font-bold mb-5">Grocery Shop</div>
        <div className="text-sm sm:text-md text-justify font-inter">Our grocery shop offers a wide range of everyday essentials—from fresh produce to household items—with reliable quality, friendly service, and affordable prices to serve the community with comfort and convenience.</div>
      </div>

      <div className='flex flex-col'>
        <div className="font-bold text-xl sm:text-2xl mb-5 px-0 sm:px-5">
          Quick Link
        </div>
        <div className="font-thin text-sm mb-5 px-0 sm:px-5">
          About
        </div>
        <div className="font-thin text-sm mb-5 px-0 sm:px-5">
          Shop
        </div>
        <div className="font-thin text-sm mb-5 px-0 sm:px-5">
          Contact
        </div>
      </div>

      <div className='flex flex-col'>
        <div className="font-bold text-xl sm:text-2xl mb-5 px-0 sm:px-5">
          Quick Link
        </div>
        <div className="font-thin text-sm mb-5 px-0 sm:px-5">
          About
        </div>
        <div className="font-thin text-sm mb-5 px-0 sm:px-5">
          Shop
        </div>
        <div className="font-thin text-sm mb-5 px-0 sm:px-5">
          Contact
        </div>
      </div>

      <div className='flex flex-col'>
        <div className="font-bold text-xl sm:text-2xl mb-5 px-0 sm:px-5">
          Quick Link
        </div>
        <div className="font-thin text-sm mb-5 px-0 sm:px-5">
          About
        </div>
        <div className="font-thin text-sm mb-5 px-0 sm:px-5">
          Shop
        </div>
        <div className="font-thin text-sm mb-5 px-0 sm:px-5">
          Contact
        </div>
      </div>

      <div className='flex flex-col'>
        <div className="font-bold text-xl sm:text-2xl mb-5 px-0 sm:px-5">
          Quick Link
        </div>
        <div className="font-thin text-sm mb-5 px-0 sm:px-5">
          About
        </div>
        <div className="font-thin text-sm mb-5 px-0 sm:px-5">
          Shop
        </div>
        <div className="font-thin text-sm mb-5 px-0 sm:px-5">
          Contact
        </div>
      </div>

      <div className="text-lg sm:text-xl text font-inter sm:col-span-2 lg:col-span-1">
        Follow Us
        <ul className="flex space-x-5 pt-5 justify-center sm:justify-start">
          <li><Facebook /></li>
          <li><Twitter /></li>
          <li><Linkedin /></li>
        </ul>
      </div>
    </div>
  )
}