import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Package, Truck, CreditCard } from 'lucide-react';

const OrderDetailsModal = ({ order, onClose }) => {
    if (!order) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
                >
                    {/* Header - Fixed */}
                    <div className="p-8 sm:p-12 pb-4 flex justify-between items-center bg-white z-10">
                        <div>
                            <h2 className="text-2xl font-black text-slate-800 tracking-tight">Order Details</h2>
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">{order.id} • {order.date}</p>
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-xl transition-colors">
                            <X size={24} className="text-slate-400" />
                        </button>
                    </div>

                    {/* Scrollable Content Area - Scrollbar Hidden */}
                    <div className="flex-1 overflow-y-auto px-8 sm:px-12 pb-12 no-scrollbar">

                        {/* Order Items */}
                        <div className="space-y-4 mb-10 mt-4">
                            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Items Ordered</h4>
                            {order.items.map((item, index) => (
                                <div key={index} className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl">
                                    <div className="w-14 h-14 bg-white rounded-xl overflow-hidden shrink-0 border border-slate-100">
                                        <img src={item.image} alt="" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-bold text-slate-800">{item.name}</p>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase">Qty: {item.qty}</p>
                                    </div>
                                    <p className="font-black text-slate-900">${item.price}</p>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-y border-slate-50">
                            <div className="space-y-4">
                                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                    <Truck size={14} /> Shipping Address
                                </h4>
                                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                                    {order.customer}<br />
                                    123 Magic Street, Toy City<br />
                                    TC 5678, Wonderland
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                    <CreditCard size={14} /> Payment Method
                                </h4>
                                <p className="text-sm text-slate-600 font-medium italic">Visa Card ending in **** 4242</p>
                            </div>
                        </div>

                        {/* Pricing Summary */}
                        <div className="pt-8 space-y-3 max-w-xs ml-auto">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-400 font-bold">Subtotal:</span>
                                <span className="text-slate-800 font-bold">${order.amount - 10}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-400 font-bold">Shipping:</span>
                                <span className="text-slate-800 font-bold">$10.00</span>
                            </div>
                            <div className="flex justify-between pt-3 border-t border-slate-50">
                                <span className="text-lg font-black text-slate-800 tracking-tight">Total:</span>
                                <span className="text-2xl font-black text-purple-600 tracking-tight">${order.amount}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* CSS to hide scrollbar */}
            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                }
            `}</style>
        </AnimatePresence>
    );
};

export default OrderDetailsModal;