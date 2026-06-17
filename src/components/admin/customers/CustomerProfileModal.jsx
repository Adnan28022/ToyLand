import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, MapPin, Calendar, ShoppingBag } from 'lucide-react';

const CustomerProfileModal = ({ user, onClose }) => {
    if (!user) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative w-full max-w-xl bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
                >
                    <button onClick={onClose} className="absolute top-6 right-6 p-2 bg-slate-50 text-slate-400 hover:text-slate-600 rounded-xl z-10 transition-colors">
                        <X size={20} />
                    </button>

                    <div className="flex-1 overflow-y-auto no-scrollbar p-10">
                        {/* Header Info */}
                        <div className="flex flex-col items-center text-center mb-8">
                            <div className="w-24 h-24 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center text-3xl font-black mb-4 border-4 border-white shadow-lg">
                                {user.name.charAt(0)}
                            </div>
                            <h2 className="text-2xl font-black text-slate-800">{user.name}</h2>
                            <p className="text-purple-500 font-bold text-xs uppercase tracking-widest mt-1">Premium Member</p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-10">
                            <div className="bg-slate-50 p-4 rounded-2xl text-center">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Spent</p>
                                <p className="text-xl font-black text-slate-800">${user.spent}</p>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-2xl text-center">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Orders</p>
                                <p className="text-xl font-black text-slate-800">{user.orders}</p>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-4 mb-8">
                            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50 pb-2">Contact Details</h4>
                            <div className="flex items-center gap-3 text-sm text-slate-600 font-medium"><Mail size={16} className="text-purple-400" /> {user.email}</div>
                            <div className="flex items-center gap-3 text-sm text-slate-600 font-medium"><Phone size={16} className="text-purple-400" /> +1 234 567 890</div>
                            <div className="flex items-center gap-3 text-sm text-slate-600 font-medium"><MapPin size={16} className="text-purple-400" /> New York, USA</div>
                            <div className="flex items-center gap-3 text-sm text-slate-600 font-medium"><Calendar size={16} className="text-purple-400" /> Joined {user.joined}</div>
                        </div>

                        <button className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold text-sm shadow-xl shadow-gray-200 flex items-center justify-center gap-2 hover:bg-purple-600 transition-all">
                            <ShoppingBag size={18} /> View Purchase History
                        </button>
                    </div>

                    <style jsx>{`
                        .no-scrollbar::-webkit-scrollbar { display: none; }
                        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                    `}</style>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default CustomerProfileModal;