import React from 'react';
import { motion } from 'framer-motion';
import { Edit3, Trash2, Package } from 'lucide-react';

const CategoryCard = ({ category, onEdit, onDelete }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden"
        >
            <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600`}>
                    <Package size={28} />
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => onEdit(category)} className="p-2 bg-slate-50 text-slate-400 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all">
                        <Edit3 size={16} />
                    </button>
                    <button onClick={() => onDelete(category.id)} className="p-2 bg-slate-50 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all">
                        <Trash2 size={16} />
                    </button>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-black text-slate-800 tracking-tight mb-1">{category.name}</h3>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                    {category.productCount} Products
                </p>
            </div>

            {/* Background Decorative Icon */}
            <Package className="absolute -right-4 -bottom-4 text-slate-50 opacity-50 group-hover:text-purple-50 transition-colors" size={100} />
        </motion.div>
    );
};

export default CategoryCard;