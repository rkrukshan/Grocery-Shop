import { Facebook, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <div className='w-full p-9 bg-slate-300 grid grid-cols-6'>
      <div className="flex  flex-col mr-9">
        <div className="text-3xl text text-cente font-inter font-bold mb-5">Grocery Shop</div>
        <div className="text-md text text-justify font-inter">Our grocery shop offers a wide range of everyday essentials—from fresh produce to household items—with reliable quality, friendly service, and affordable prices to serve the community with comfort and convenience.</div>

      </div>

      <div className='flex flex-col'>
        <div className="font-bold text-2xl mb-5 px-5">
          Quick Link
        </div><div className="font-thin text-sm mb-5 px-5">
          About
        </div><div className="font-thin text-sm mb-5 px-5">
          Shop
        </div><div className="font-thin text-sm mb-5 px-5">
          Contact
        </div>

      </div><div className='flex flex-col'>
        <div className="font-bold text-2xl mb-5 px-5">
          Quick Link
        </div><div className="font-thin text-sm mb-5 px-5">
          About
        </div><div className="font-thin text-sm mb-5 px-5">
          Shop
        </div><div className="font-thin text-sm mb-5 px-5">
          Contact
        </div>

      </div>
      <div className='flex flex-col'>
        <div className="font-bold text-2xl mb-5 px-5">
          Quick Link
        </div><div className="font-thin text-sm mb-5 px-5">
          About
        </div><div className="font-thin text-sm mb-5 px-5">
          Shop
        </div><div className="font-thin text-sm mb-5 px-5">
          Contact
        </div>

      </div><div className='flex flex-col'>
        <div className="font-bold text-2xl mb-5 px-5">
          Quick Link
        </div><div className="font-thin text-sm mb-5 px-5">
          About
        </div><div className="font-thin text-sm mb-5 px-5">
          Shop
        </div><div className="font-thin text-sm mb-5 px-5">
          Contact
        </div>

      </div>
      <div className="text-xl text font-inter">Follow Us
        <ul className="flex space-x-5 pt-5">
          <li><Facebook /></li>
          <li><Twitter /></li>
          <li><Linkedin /></li>
        </ul>
      </div>

    </div>
  )
}
