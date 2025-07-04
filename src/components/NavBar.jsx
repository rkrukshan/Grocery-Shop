import { BaggageClaim, ShoppingBag } from 'lucide-react'
import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import CartComp from './CartComp';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => {
        setIsOpen(false)
    }
    return (
        <div className='container bg-slate-100 px-15 py-9 mx-auto flex justify-between items-center'>
            <div className="rounded-full text-white p-2 bg-slate-500">
                <img src={logo} alt={logo} className='h-10 w-10' />
            </div>
            <nav className='flex'>
                <ul className='flex'>
                    <li className="text-xl font-bold px-5 text-slate-700 hover:rounded-full hover:cursor-pointer hover:bg-slate-500 hover:text-white"><Link to={'/'}>Home</Link></li>
                    <li className="text-xl font-bold px-5 text-slate-700 hover:rounded-full hover:cursor-pointer hover:bg-slate-500 hover:text-white"><Link to={'shop'}>Shop</Link></li>
                    <li className="text-xl font-bold px-5 text-slate-700 hover:rounded-full hover:cursor-pointer hover:bg-slate-500 hover:text-white"><Link to={'about'}>About</Link></li>
                    <li className="text-xl font-bold px-5 text-slate-700 hover:rounded-full hover:cursor-pointer hover:bg-slate-500 hover:text-white"><Link to={'contact'}>Contact</Link></li>
                </ul>
                <Link className="text-xl font-bold px-5 text-slate-700 hover:cursor-pointer hover:text-gray-500" onClick={() => { setIsOpen(true) }}><ShoppingBag /></Link>

            </nav>
            <CartComp isOpen={isOpen} onClose={onClose} />
        </div>

    )
}
