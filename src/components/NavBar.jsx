import { BaggageClaim, ShoppingBag } from 'lucide-react'
import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className='container bg-slate-100 px-15 py-9 mx-auto flex justify-between items-center'>
            <div className="rounded-full text-white p-2 bg-slate-500">
                <img src={logo} alt={logo} className='h-10 w-10' />
            </div>
            <div>
                <ul className='flex'>
                    <li className="text-xl font-bold px-5 text-slate-700 hover:rounded-full hover:cursor-pointer hover:bg-slate-500 hover:text-white"><Link to={'/'}>Home</Link></li>
                    <li className="text-xl font-bold px-5 text-slate-700 hover:rounded-full hover:cursor-pointer hover:bg-slate-500 hover:text-white"><Link to={'shop'}>Shop</Link></li>
                    <li className="text-xl font-bold px-5 text-slate-700 hover:rounded-full hover:cursor-pointer hover:bg-slate-500 hover:text-white"><Link to={'about'}>About</Link></li>
                    <li className="text-xl font-bold px-5 text-slate-700 hover:rounded-full hover:cursor-pointer hover:bg-slate-500 hover:text-white"><Link to={'contact'}>Contact</Link></li>
                    <li className="text-xl font-bold px-5 text-slate-700 hover:cursor-pointer hover:text-gray-500"><ShoppingBag /></li>
                </ul>
            </div>
        </div>
    )
}
