import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, Save } from 'lucide-react';

const AddProductModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
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
                    className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
                >
                    <div className="p-8">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-2xl font-black text-slate-800 tracking-tight">Add New Toy</h2>
                            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-xl transition-colors">
                                <X size={24} className="text-slate-400" />
                            </button>
                        </div>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Product Name</label>
                                    <input type="text" placeholder="e.g. Super Sonic Car" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-5 text-sm outline-none focus:bg-white focus:border-purple-300 transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Category</label>
                                    <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-5 text-sm outline-none focus:bg-white focus:border-purple-300 transition-all font-bold text-slate-600">
                                        <option>Select Category</option>
                                        <option>Action Figures</option>
                                        <option>Educational</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Price ($)</label>
                                    <input type="number" placeholder="29.99" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-5 text-sm outline-none focus:bg-white focus:border-purple-300 transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Initial Stock</label>
                                    <input type="number" placeholder="50" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-5 text-sm outline-none focus:bg-white focus:border-purple-300 transition-all" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Product Image</label>
                                <div className="border-2 border-dashed border-slate-200 rounded-[2rem] p-8 text-center hover:border-purple-300 transition-colors cursor-pointer group">
                                    <Upload className="mx-auto text-slate-300 group-hover:text-purple-500 mb-2" size={32} />
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Click to upload image</p>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <button type="button" onClick={onClose} className="flex-1 py-4 rounded-2xl font-bold text-sm text-slate-500 bg-slate-50 hover:bg-slate-100 transition-all">Cancel</button>
                                <button type="submit" className="flex-1 py-4 rounded-2xl font-bold text-sm text-white bg-purple-600 shadow-lg shadow-purple-200 hover:bg-purple-700 transition-all flex items-center justify-center gap-2">
                                    <Save size={18} /> Save Product
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default AddProductModal;