import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Truck, ShieldCheck } from 'lucide-react';

const CartSummary = ({ subtotal }) => {
    const shipping = subtotal > 100 ? 0 : 15.00;
    const total = subtotal + shipping;

    return (
        <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm sticky top-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h3>

            <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500 font-medium">Subtotal</span>
                    <span className="text-gray-800 font-bold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500 font-medium">Shipping</span>
                    <span className="text-gray-800 font-bold">
                        {shipping === 0 ? <span className="text-green-500 italic font-medium tracking-tight">FREE</span> : `$${shipping.toFixed(2)}`}
                    </span>
                </div>
                <div className="h-px bg-gray-100 w-full my-2" />
                <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-800">Total</span>
                    <span className="text-2xl font-bold text-purple-600">${total.toFixed(2)}</span>
                </div>
            </div>

            <div className="space-y-3">
                <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold text-sm shadow-xl shadow-gray-200 flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
                >
                    <CreditCard size={18} /> Checkout Now
                </motion.button>

                <div className="flex items-center justify-center gap-4 py-4">
                    <div className="flex items-center gap-1 text-[10px] font-bold text-gray-400 uppercase tracking-tight">
                        <Truck size={14} className="text-blue-500" /> Fast Delivery
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-bold text-gray-400 uppercase tracking-tight">
                        <ShieldCheck size={14} className="text-green-500" /> Secure Payment
                    </div>
                </div>
            </div>

            {/* Promo Code Input */}
            <div className="mt-6">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-2 ml-1">Have a promo code?</p>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="TOY2024"
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-purple-100 transition-all"
                    />
                    <button className="absolute right-2 top-2 bottom-2 bg-white px-3 rounded-lg text-xs font-bold text-gray-800 border border-gray-100">Apply</button>
                </div>
            </div>
        </div>
    );
};

export default CartSummary;