import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Heart, Search, ShoppingCart, User, Menu, X } from 'lucide-react'; // Better icons for toys

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const activeClass = ({ isActive }) =>
        isActive ? "text-orange-500 font-bold underline decoration-2 underline-offset-8" : "text-gray-600 hover:text-orange-500 transition font-medium";

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">

                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center">
                        <span className="text-3xl font-black tracking-wider text-orange-500 uppercase">
                            TOY<span className="text-sky-500">LAND</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <NavLink to="/" className={activeClass}>Home</NavLink>
                        <NavLink to="/shop" className={activeClass}>Shop All</NavLink>
                        <NavLink to="/new-arrivals" className={activeClass}>New Arrivals</NavLink>
                        <NavLink to="/categories" className={activeClass}>Categories</NavLink>
                        <NavLink to="/offers" className={activeClass}>Offers</NavLink>
                    </div>

                    {/* Icons Section */}
                    <div className="hidden md:flex items-center space-x-5">
                        <button className="text-gray-400 hover:text-orange-500 transition cursor-pointer">
                            <Search size={22} />
                        </button>

                        {/* Wishlist Link */}
                        <Link to="/wishlist" className="relative text-gray-400 hover:text-red-500 transition cursor-pointer">
                            <Heart size={22} />
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">0</span>
                        </Link>

                        {/* Cart Link */}
                        <Link to="/cart" className="relative text-gray-400 hover:text-sky-500 transition cursor-pointer">
                            <ShoppingCart size={22} />
                            <span className="absolute -top-2 -right-2 bg-sky-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">0</span>
                        </Link>

                        <Link to="/auth/login">
                            <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-full font-bold transition duration-300 shadow-lg cursor-pointer flex items-center gap-2">
                                <User size={18} /> Login
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 outline-none">
                            {isOpen ? <X size={30} /> : <Menu size={30} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 pb-6 animate-in slide-in-from-top duration-300">
                    <div className="px-4 pt-4 space-y-2 text-center">
                        <NavLink to="/" onClick={() => setIsOpen(false)} className="block py-3 border-b border-gray-50 text-gray-600 font-bold">Home</NavLink>
                        <NavLink to="/shop" onClick={() => setIsOpen(false)} className="block py-3 border-b border-gray-50 text-gray-600 font-bold">Shop All</NavLink>
                        <NavLink to="/new-arrivals" onClick={() => setIsOpen(false)} className="block py-3 border-b border-gray-50 text-gray-600 font-bold">New Arrivals</NavLink>
                        <NavLink to="/categories" onClick={() => setIsOpen(false)} className="block py-3 border-b border-gray-50 text-gray-600 font-bold">Categories</NavLink>
                        <NavLink to="/offers" onClick={() => setIsOpen(false)} className="block py-3 border-b border-gray-50 text-gray-600 font-bold">Offers</NavLink>
                        <NavLink to="/wishlist" onClick={() => setIsOpen(false)} className="block py-3 border-b border-gray-50 text-red-500 font-bold">Wishlist</NavLink>
                        <NavLink to="/cart" onClick={() => setIsOpen(false)} className="block py-3 border-b border-gray-50 text-sky-500 font-bold">My Cart</NavLink>
                        <Link to="/auth/login" onClick={() => setIsOpen(false)} className="block mt-4 bg-sky-500 text-white py-3 rounded-xl font-bold">Login</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;