import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Timer, Gift, ArrowRight, Zap, Sparkles } from 'lucide-react';

const PromoBanner = () => {
    const sectionRef = useRef(null);

    // Parallax Logic
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Background blobs move at different speeds
    const yBlob1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
    const yBlob2 = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const cardScrollY = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section ref={sectionRef} className="py-20 px-4 md:px-8 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-7xl mx-auto relative overflow-hidden bg-sky-600 rounded-[3rem] p-8 md:p-20 shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
            >

                {/* --- Animated & Parallax Background Elements --- */}
                <motion.div
                    style={{ y: yBlob1 }}
                    className="absolute top-[-10%] left-[-5%] w-80 h-80 bg-sky-400 opacity-40 blur-3xl animate-morph"
                />
                <motion.div
                    style={{ y: yBlob2 }}
                    className="absolute bottom-[-20%] right-[-5%] w-96 h-96 bg-orange-400 opacity-30 blur-3xl animate-morph"
                />

                {/* Floating Elements with additional Parallax */}
                <motion.div
                    style={{ y: yBlob1 }}
                    className="absolute top-10 right-20 w-16 h-16 border-4 border-white/20 rounded-full animate-float-slow hidden md:block"
                />
                <motion.div
                    style={{ y: yBlob2 }}
                    className="absolute bottom-20 left-1/4 w-10 h-10 bg-yellow-400/20 rounded-full animate-bounce hidden md:block"
                />

                {/* --- Content --- */}
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">

                    {/* Left Side: Content Reveal */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-center lg:text-left text-white max-w-2xl"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-xl px-5 py-2 rounded-full mb-8 border border-white/30 shadow-lg"
                        >
                            <Timer size={20} className="text-yellow-300 animate-pulse" />
                            <span className="text-sm font-black uppercase tracking-[0.2em]">Flash Deal Ending Soon</span>
                        </motion.div>

                        <h2 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1]">
                            Mega Sale on <br />
                            <span className="text-yellow-300 italic underline decoration-wavy decoration-orange-400 underline-offset-8">Outdoor Toys!</span>
                        </h2>

                        <p className="text-sky-50 text-xl mb-10 font-medium leading-relaxed opacity-90">
                            Grab up to <span className="text-white font-black text-3xl bg-orange-500 px-3 rounded-lg shadow-lg rotate-3 inline-block">60% OFF</span> on trampolines,
                            slides, and swings.
                        </p>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(249, 115, 22, 0.5)" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-orange-500 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all flex items-center gap-3 shadow-2xl group"
                            >
                                Claim Offer <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </motion.button>
                            <motion.button
                                whileHover={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                                className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all"
                            >
                                View Catalog
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Right Side: Parallax Card */}
                    <motion.div
                        style={{ y: cardScrollY }}
                        className="relative group"
                    >
                        {/* Main Floating Card */}
                        <motion.div
                            whileHover={{ rotate: 0, scale: 1.05 }}
                            initial={{ rotate: 5 }}
                            className="bg-white p-6 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-500 relative z-20 w-72 md:w-80"
                        >
                            <div className="bg-gray-100 rounded-[2rem] mb-5 overflow-hidden relative group">
                                <img
                                    src="https://images.unsplash.com/photo-1577896852336-e749dd04f202?w=500&auto=format&fit=crop&q=60"
                                    alt="Toy"
                                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-3 right-3 bg-orange-500 text-white p-3 rounded-2xl shadow-lg animate-bounce">
                                    <Zap size={24} fill="currentColor" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Sparkles size={16} className="text-yellow-500" />
                                    <div className="h-1.5 w-16 bg-sky-100 rounded-full"></div>
                                </div>
                                <h4 className="text-2xl font-black text-gray-800">Adventure Playhouse</h4>
                                <div className="flex items-center justify-between pt-4">
                                    <div className="flex flex-col">
                                        <span className="text-3xl font-black text-sky-600">$120</span>
                                        <span className="text-sm line-through text-gray-400 font-bold">$250</span>
                                    </div>
                                    <button className="bg-sky-100 text-sky-600 p-4 rounded-2xl hover:bg-sky-600 hover:text-white transition-colors">
                                        <Gift size={20} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Animated Decorative Shadow Card */}
                        <motion.div
                            animate={{ rotate: [-3, -6, -3], scale: [1, 1.02, 1] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute top-6 left-6 w-full h-full bg-yellow-400 rounded-[2.5rem] -z-10 opacity-60 blur-sm"
                        />
                    </motion.div>

                </div>
            </motion.div>
        </section>
    );
};

export default PromoBanner;