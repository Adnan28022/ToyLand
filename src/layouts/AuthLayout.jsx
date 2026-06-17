import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Rocket, Star, Heart } from 'lucide-react';

const AuthLayout = () => {
    return (
        <div className="min-h-screen bg-white flex overflow-hidden">
            {/* Left Side: Branding & Animation */}
            <div className="hidden lg:flex lg:w-1/2 bg-slate-900 relative items-center justify-center p-12 overflow-hidden">
                {/* Animated Shapes */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-20 -left-20 w-96 h-96 border border-white/5 rounded-[4rem]"
                />
                <motion.div
                    animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute bottom-20 right-20 text-purple-500/20"
                >
                    <Rocket size={200} />
                </motion.div>

                <div className="relative z-10 text-center">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs font-bold tracking-widest mb-8 border border-white/10"
                    >
                        <Star size={14} className="text-yellow-400" /> MAGIC STARTS HERE
                    </motion.div>
                    <h1 className="text-5xl font-bold text-white mb-6 leading-tight">Bring Home <br /> The Happiness</h1>
                    <p className="text-slate-400 text-base max-w-sm mx-auto leading-relaxed">
                        Join our world of wonder and find the perfect toys for your little ones.
                    </p>
                </div>

                {/* Floating Icons */}
                <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-1/4 right-20 text-pink-500/30"><Heart size={40} /></motion.div>
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-1/4 left-20 text-yellow-500/30"><Star size={40} /></motion.div>
            </div>

            {/* Right Side: Simple & Clean Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-slate-50">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="w-full max-w-md"
                >
                    <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-white">
                        <Outlet />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AuthLayout;