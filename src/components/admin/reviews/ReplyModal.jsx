import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User } from 'lucide-react';

const ReplyModal = ({ review, onClose }) => {
    if (!review) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />

                <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative w-full max-w-lg bg-white rounded-[3rem] shadow-2xl p-8 sm:p-10">
                    <div className="flex justify-between items-start mb-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600"><User size={24} /></div>
                            <div>
                                <h3 className="text-xl font-black text-slate-800 tracking-tight">Reply to Review</h3>
                                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{review.user}</p>
                            </div>
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-xl text-slate-400"><X size={24} /></button>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-2xl mb-8 italic text-slate-600 text-sm border-l-4 border-purple-200">
                        "{review.comment}"
                    </div>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                            <textarea
                                placeholder="Type your response here..."
                                className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-5 text-sm outline-none focus:bg-white focus:border-purple-300 transition-all min-h-[120px] resize-none"
                            ></textarea>
                        </div>

                        <button className="w-full py-4 bg-purple-600 text-white rounded-2xl font-bold text-sm shadow-xl shadow-purple-200 flex items-center justify-center gap-2 hover:bg-purple-700 transition-all">
                            <Send size={18} /> Send Response
                        </button>
                    </form>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ReplyModal;