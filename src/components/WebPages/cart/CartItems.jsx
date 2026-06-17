import React from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus, Trash2 } from 'lucide-react';

const CartItem = ({ item, onRemove, onUpdateQty }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="bg-white p-4 rounded-3xl border border-gray-100 flex items-center gap-4 shadow-sm group hover:shadow-md transition-shadow"
        >
            {/* Product Image */}
            <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gray-50 shrink-0">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>

            {/* Details */}
            <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-gray-800 truncate">{item.title}</h3>
                <p className="text-xs text-gray-400 font-medium mb-2">Color: {item.color}</p>
                <p className="text-lg font-bold text-purple-600">${item.price.toFixed(2)}</p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-3 bg-slate-50 px-3 py-2 rounded-2xl border border-slate-100">
                <button
                    onClick={() => onUpdateQty(item.id, -1)}
                    className="p-1 hover:bg-white rounded-md transition-colors text-gray-500"
                >
                    <Minus size={14} />
                </button>
                <span className="text-sm font-bold w-4 text-center">{item.qty}</span>
                <button
                    onClick={() => onUpdateQty(item.id, 1)}
                    className="p-1 hover:bg-white rounded-md transition-colors text-gray-500"
                >
                    <Plus size={14} />
                </button>
            </div>

            {/* Delete Button */}
            <button
                onClick={() => onRemove(item.id)}
                className="p-3 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all"
            >
                <Trash2 size={20} />
            </button>
        </motion.div>
    );
};

export default CartItem;