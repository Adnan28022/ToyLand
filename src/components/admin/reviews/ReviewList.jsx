import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle, Trash2, CheckCircle2 } from 'lucide-react';

const ReviewList = ({ reviews, onReply, onDelete }) => {
    // Helper to render stars
    const renderStars = (rating) => {
        return [...Array(5)].map((_, i) => (
            <Star key={i} size={12} className={i < rating ? "text-amber-400 fill-current" : "text-slate-200"} />
        ));
    };

    return (
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] border-b border-slate-50">
                            <th className="py-6 pl-8">Customer</th>
                            <th className="py-6">Product</th>
                            <th className="py-6">Rating</th>
                            <th className="py-6">Comment</th>
                            <th className="py-6">Status</th>
                            <th className="py-6 pr-8 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {reviews.map((rev, i) => (
                            <motion.tr
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                key={rev.id}
                                className="group hover:bg-slate-50/50 transition-all"
                            >
                                <td className="py-6 pl-8">
                                    <p className="text-sm font-bold text-slate-800">{rev.user}</p>
                                    <p className="text-[10px] text-slate-400 font-bold">{rev.date}</p>
                                </td>
                                <td className="py-6 text-sm font-medium text-slate-500">{rev.product}</td>
                                <td className="py-6">
                                    <div className="flex gap-0.5">{renderStars(rev.rating)}</div>
                                </td>
                                <td className="py-6">
                                    <p className="text-sm text-slate-600 max-w-xs truncate">{rev.comment}</p>
                                </td>
                                <td className="py-6">
                                    <span className={`px-4 py-1 rounded-xl text-[10px] font-black uppercase tracking-widest ${rev.status === "Published" ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"
                                        }`}>
                                        {rev.status}
                                    </span>
                                </td>
                                <td className="py-6 pr-8 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button onClick={() => onReply(rev)} className="p-2.5 bg-slate-50 text-slate-400 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all"><MessageCircle size={18} /></button>
                                        <button onClick={() => onDelete(rev.id)} className="p-2.5 bg-slate-50 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"><Trash2 size={18} /></button>
                                    </div>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReviewList;