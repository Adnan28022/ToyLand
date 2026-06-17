import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CategoryCard = ({ category, index }) => {
    const Icon = category.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            whileHover={{ y: -8 }}
            className={`relative group overflow-hidden rounded-3xl border border-gray-100 ${category.bgColor} p-6 h-[320px] transition-all duration-300 hover:shadow-xl hover:shadow-gray-100`}
        >
            <div className="relative z-10 flex flex-col h-full">
                {/* Compact Icon */}
                <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className={`${category.color}`} size={22} strokeWidth={2} />
                </div>

                <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800 leading-tight mb-1">
                        {category.title}
                    </h3>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                        {category.count}
                    </p>
                </div>

                <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="mt-auto flex items-center gap-2 bg-white/80 backdrop-blur-sm w-fit px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-900 hover:text-white transition-all border border-white shadow-sm"
                >
                    Explore <ArrowRight size={14} />
                </motion.button>
            </div>

            {/* Smaller & Refined Floating Image */}
            <motion.div
                className="absolute right-[-15px] bottom-[-10px] w-44 h-44"
                whileHover={{ rotate: 5, scale: 1.05 }}
            >
                <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover rounded-2xl shadow-lg border-2 border-white rotate-[-8deg] group-hover:rotate-0 transition-all duration-500"
                />
            </motion.div>
        </motion.div>
    );
};

export default CategoryCard;