import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const PageHero = ({ title, description, breadcrumb, image }) => {
    const { scrollY } = useScroll();

    // Subtle Parallax
    const y1 = useTransform(scrollY, [0, 500], [0, -80]);
    const y2 = useTransform(scrollY, [0, 500], [0, 80]);

    return (
        <section className="relative min-h-[320px] md:min-h-[380px] flex items-center justify-center overflow-hidden bg-[#0f172a] py-10 px-4">

            {/* --- BACKGROUND MESH GRADIENTS (Compact) --- */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[60%] bg-purple-600/40 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[60%] bg-sky-600/40 rounded-full blur-[100px]" />
            </div>

            {/* --- MAIN GLASS PANEL (Thinner Height) --- */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 max-w-5xl w-full bg-white/[0.07] backdrop-blur-lg rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 md:p-10 items-center">

                    {/* Content Section */}
                    <div className="text-center lg:text-left space-y-4">

                        {/* Compact Breadcrumb */}
                        <div className="inline-flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 text-white/60 text-[10px] font-bold tracking-widest uppercase">
                            <Link to="/" className="hover:text-sky-400 transition-colors">Home</Link>
                            <ChevronRight size={12} />
                            <span className="text-sky-400">{breadcrumb}</span>
                        </div>

                        {/* Title (Sized Down & Less Bold) */}
                        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                            {title.split(' ').slice(0, -1).join(' ')} <br />
                            <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
                                {title.split(' ').pop()}
                            </span>
                        </h1>

                        <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
                            {description}
                        </p>

                        {/* Action Buttons (Compact) */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                className="bg-sky-500 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg flex items-center gap-2"
                            >
                                <Sparkles size={16} /> EXPLORE
                            </motion.button>
                            <motion.button
                                className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-6 py-2.5 rounded-xl font-bold text-sm"
                            >
                                BEST SELLERS
                            </motion.button>
                        </div>
                    </div>

                    {/* Image Section (Sized Down) */}
                    <div className="relative flex justify-center lg:justify-end pr-0 lg:pr-10">
                        {/* Glow Behind Image */}
                        <div className="absolute w-48 h-48 bg-sky-500/20 rounded-full blur-[60px]" />

                        <motion.div
                            style={{ y: y1 }}
                            className="relative z-20"
                        >
                            <img
                                src={image}
                                alt={title}
                                className="w-44 md:w-64 h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)] animate-float"
                            />
                        </motion.div>

                        {/* Small Floating Orb */}
                        <motion.div
                            style={{ y: y2 }}
                            className="absolute -top-4 right-10 w-8 h-8 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hidden md:block"
                        />
                    </div>

                </div>
            </motion.div>

            {/* Subtle Dust Particles */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${i}s`
                        }}
                    />
                ))}
            </div>
        </section>
    );
};

export default PageHero;