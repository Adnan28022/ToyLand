import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Rocket, ArrowUpRight } from 'lucide-react';

const WelcomeBanner = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative bg-gradient-to-r from-indigo-600 to-purple-600 p-8 rounded-[2.5rem] overflow-hidden shadow-xl shadow-purple-100 mb-8"
        >
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <div className="flex items-center gap-2 text-purple-100 font-bold text-[10px] uppercase tracking-[0.2em] mb-3">
                        <Sparkles size={14} className="text-yellow-400" /> System Overview
                    </div>
                    <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight flex items-center gap-3">
                        Welcome Back, Admin <Rocket className="text-orange-400" size={28} />
                    </h1>
                    <p className="text-purple-100/70 text-sm max-w-md leading-relaxed font-medium">
                        Aapka store acha perform kar raha hai. Sales mein izafa dekhne ke liye analytics check karein.
                    </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-3xl flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-lg">
                        <ArrowUpRight size={24} />
                    </div>
                    <div>
                        <p className="text-white text-xl font-black">+24%</p>
                        <p className="text-purple-100 text-[10px] font-bold uppercase tracking-wider">Weekly Growth</p>
                    </div>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-[-20%] right-[-5%] w-64 h-64 bg-white opacity-5 rounded-full blur-3xl" />
        </motion.div>
    );
};

export default WelcomeBanner;