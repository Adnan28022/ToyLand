import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';

const OfferCard = ({ item, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
        >
            <div className="relative h-56 overflow-hidden">
                {/* Discount Badge */}
                <div className="absolute top-3 left-3 z-10 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-lg">
                    {item.discount}
                </div>
                {/* Image */}
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
            </div>

            <div className="p-5">
                <div className="flex items-center gap-1 text-amber-400 mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                </div>
                <h3 className="text-base font-bold text-gray-800 mb-1 truncate">{item.title}</h3>
                <p className="text-xs text-gray-400 font-medium mb-3">{item.tag}</p>

                <div className="flex items-center justify-between mt-4">
                    <div className="flex flex-col">
                        <span className="text-gray-400 line-through text-xs font-medium">${item.originalPrice}</span>
                        <span className="text-lg font-bold text-orange-600">${item.discountPrice}</span>
                    </div>
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-gray-900 text-white rounded-xl hover:bg-orange-500 transition-colors"
                    >
                        <ShoppingCart size={18} />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default OfferCard;