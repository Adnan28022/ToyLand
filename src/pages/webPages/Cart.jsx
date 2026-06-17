import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CartItem from '../../components/WebPages/cart/CartItems';
import CartSummary from '../../components/WebPages/cart/CartSummary';

const Cart = () => {
    const navigate = useNavigate();
    // Example State: Real app mein ye Redux ya Context se aayega
    const [cartItems, setCartItems] = useState([
        { id: 1, title: "Super Sonic RC Car", price: 45.00, qty: 1, color: "Blue", image: "https://images.unsplash.com/photo-1591438252948-fa5dd3701c2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmMlMjBjYXIlMjB0b3l8ZW58MHx8MHx8fDA%3D" },
        { id: 2, title: "Plush Cuddle Bear", price: 25.00, qty: 2, color: "Brown", image: "https://media.istockphoto.com/id/2269819803/photo/soft-plush-bear-toy-isolated-white-background-childhood-nostalgia.webp?a=1&b=1&s=612x612&w=0&k=20&c=n06ZblJtWG7y8KdhXn4428S_vMyzFAw0PVXCq1Hymiw=" },
    ]);

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const updateQty = (id, delta) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
        ));
    };

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* Header Section */}
            <div className="bg-white border-b border-gray-100 py-10 mb-8">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-gray-400 hover:text-gray-800 transition-colors mb-4 text-sm font-semibold"
                    >
                        <ArrowLeft size={16} /> Back to Shop
                    </motion.button>
                    <div className="flex items-center gap-3">
                        <ShoppingBag className="text-purple-500" size={28} />
                        <h1 className="text-3xl font-bold text-gray-800">Your Toy Box</h1>
                        <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs font-bold">
                            {cartItems.length} ITEMS
                        </span>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6">
                {cartItems.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Items List */}
                        <div className="lg:col-span-2 space-y-4">
                            <AnimatePresence>
                                {cartItems.map((item) => (
                                    <CartItem
                                        key={item.id}
                                        item={item}
                                        onRemove={removeItem}
                                        onUpdateQty={updateQty}
                                    />
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Summary Section */}
                        <div className="lg:col-span-1">
                            <CartSummary subtotal={subtotal} />
                        </div>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20 bg-white rounded-[2rem] border border-dashed border-gray-200"
                    >
                        <ShoppingBag size={60} className="mx-auto text-gray-200 mb-4" />
                        <h2 className="text-xl font-bold text-gray-800">Your cart is empty</h2>
                        <p className="text-gray-400 text-sm mb-6">Looks like you haven't added any magic yet!</p>
                        <button
                            onClick={() => navigate('/')}
                            className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold text-sm"
                        >
                            Start Shopping
                        </button>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Cart;