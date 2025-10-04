import { ShoppingBag, Menu } from 'lucide-react';
import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import CartComp from './CartComp';
import { useSelector } from 'react-redux';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const cart = useSelector((store) => store.cart?.cart || []);

    const onClose = () => setIsOpen(false);

    isOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

    return (
        <div className='container bg-slate-100 px-4 sm:px-15 py-4 sm:py-9 mx-auto flex justify-between items-center'>
            <div className="rounded-full text-white p-2 bg-slate-500">
                <img src={logo} alt="Logo" className='h-8 w-8 sm:h-10 sm:w-10' />
            </div>

            {/* Mobile Menu Button */}
            <button 
                className="lg:hidden text-slate-700"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <Menu size={24} />
            </button>

            <nav className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:flex absolute lg:static top-16 left-0 w-full lg:w-auto bg-slate-100 lg:bg-transparent z-40`}>
                <ul className='flex flex-col lg:flex-row lg:items-center w-full lg:w-auto'>
                    <li className="text-lg lg:text-xl font-bold px-4 py-2 lg:px-5 lg:py-0 text-slate-700 hover:rounded-full hover:cursor-pointer hover:bg-slate-500 hover:text-white">
                        <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    </li>
                    <li className="text-lg lg:text-xl font-bold px-4 py-2 lg:px-5 lg:py-0 text-slate-700 hover:rounded-full hover:cursor-pointer hover:bg-slate-500 hover:text-white">
                        <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
                    </li>
                    <li className="text-lg lg:text-xl font-bold px-4 py-2 lg:px-5 lg:py-0 text-slate-700 hover:rounded-full hover:cursor-pointer hover:bg-slate-500 hover:text-white">
                        <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                    </li>
                    <li className="text-lg lg:text-xl font-bold px-4 py-2 lg:px-5 lg:py-0 text-slate-700 hover:rounded-full hover:cursor-pointer hover:bg-slate-500 hover:text-white">
                        <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                    </li>
                </ul>

                <button
                    aria-label="Open cart"
                    onClick={() => {
                        setIsOpen(true);
                        setIsMobileMenuOpen(false);
                    }}
                    className="relative text-lg lg:text-xl font-bold px-4 py-2 lg:px-5 lg:py-0 text-slate-700 hover:cursor-pointer hover:text-gray-500 block lg:inline"
                >
                    <ShoppingBag className='w-6 h-6' />
                    <span className="absolute -top-1 -right-1 lg:-top-2 lg:-right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {cart.length}
                    </span>
                </button>
            </nav>
            {
                isOpen && (
                    <div className="fixed inset-0 w-full h-full bg-black/15 z-40" onClick={() => setIsOpen(false)}></div>
                )
            }
            <CartComp isOpen={isOpen} onClose={onClose} />
        </div>
    );
}