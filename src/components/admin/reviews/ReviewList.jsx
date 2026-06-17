import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle, Trash2, User, Package, Calendar } from 'lucide-react';

const ReviewList = ({ reviews, onReply, onDelete }) => {

    // Helper to render stars
    const renderStars = (rating, size = 12) => {
        return [...Array(5)].map((_, i) => (
            <Star
                key={i}
                size={size}
                className={i < rating ? "text-amber-400 fill-current" : "text-slate-200"}
            />
        ));
    };

    return (
        <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">

            {/* 1. Desktop Table View (Hidden on Mobile) */}
            <div className="hidden md:block overflow-x-auto">
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
                                    <p className="text-sm text-slate-600 max-w-xs truncate" title={rev.comment}>
                                        {rev.comment}
                                    </p>
                                </td>
                                <td className="py-6">
                                    <span className={`px-4 py-1 rounded-xl text-[10px] font-black uppercase tracking-widest ${rev.status === "Published" ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"
                                        }`}>
                                        {rev.status}
                                    </span>
                                </td>
                                <td className="py-6 pr-8 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button
                                            onClick={() => onReply(rev)}
                                            className="p-2.5 bg-slate-50 text-slate-400 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all cursor-pointer"
                                            title="Reply to review"
                                        >
                                            <MessageCircle size={18} />
                                        </button>
                                        <button
                                            onClick={() => onDelete(rev.id)}
                                            className="p-2.5 bg-slate-50 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all cursor-pointer"
                                            title="Delete review"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* 2. Mobile Card View (Visible only on Mobile) */}
            <div className="md:hidden divide-y divide-slate-100 px-4">
                {reviews.map((rev, i) => (
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        key={rev.id}
                        className="py-6 flex flex-col gap-4"
                    >
                        {/* Header: User & Rating */}
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                                    <User size={20} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-black text-slate-800">{rev.user}</h3>
                                    <div className="flex gap-0.5 mt-0.5">{renderStars(rev.rating, 10)}</div>
                                </div>
                            </div>
                            <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider ${rev.status === "Published" ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"
                                }`}>
                                {rev.status}
                            </span>
                        </div>

                        {/* Product Info */}
                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 w-fit px-3 py-1.5 rounded-lg">
                            <Package size={12} /> {rev.product}
                        </div>

                        {/* Comment Block */}
                        <div className="bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                            <p className="text-sm text-slate-600 leading-relaxed italic">
                                "{rev.comment}"
                            </p>
                            <div className="flex items-center gap-1 mt-3 text-[10px] text-slate-400 font-bold">
                                <Calendar size={12} /> {rev.date}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2">
                            <button
                                onClick={() => onReply(rev)}
                                className="flex-1 bg-slate-900 text-white py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform"
                            >
                                <MessageCircle size={16} /> Reply
                            </button>
                            <button
                                onClick={() => onDelete(rev.id)}
                                className="p-3 bg-red-50 text-red-500 rounded-xl active:scale-95 transition-transform"
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* 3. Empty State Logic */}
            {reviews.length === 0 && (
                <div className="py-20 text-center">
                    <p className="text-slate-400 font-black uppercase tracking-widest text-sm">No reviews found</p>
                </div>
            )}
        </div>
    );
};

export default ReviewList;