import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Sparkles, PlayCircle, Star, Circle, Heart } from 'lucide-react';

const VideoShowcase = () => {
    const containerRef = useRef(null);

    // Smooth scroll progress
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Spring physics for smoother parallax
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Enhanced Parallax Effects
    const yMain = useTransform(smoothProgress, [0, 1], [0, -60]);
    const yLeft = useTransform(smoothProgress, [0, 1], [100, -100]);
    const rotateLeft = useTransform(smoothProgress, [0, 1], [-5, 5]);

    const yRight = useTransform(smoothProgress, [0, 1], [150, -150]);
    const rotateRight = useTransform(smoothProgress, [0, 1], [5, -5]);

    // Background Elements Parallax
    const bgY = useTransform(smoothProgress, [0, 1], [0, -200]);
    const bgRotate = useTransform(smoothProgress, [0, 1], [0, 45]);

    const videoIds = {
        main: "db6F_Lwh5GY",
        left: "btB7JggCcEo",
        right: "2Xd5j3BcWHs"
    };

    const getEmbedUrl = (id) => `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&modestbranding=1`;

    return (
        <section ref={containerRef} className="relative py-10 bg-white overflow-hidden">

            {/* --- ENHANCED ANIMATED BACKGROUND --- */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                {/* Parallax Blobs */}
                <motion.div
                    style={{ y: bgY, rotate: bgRotate }}
                    className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-sky-100/50 rounded-full blur-[100px]"
                />
                <motion.div
                    style={{ y: useTransform(smoothProgress, [0, 1], [0, 200]) }}
                    className="absolute top-1/2 -right-20 w-[700px] h-[700px] bg-orange-50/60 rounded-full blur-[120px]"
                />

                {/* Floating Decorative Icons (Parallax Layer) */}
                <motion.div style={{ y: useTransform(smoothProgress, [0, 1], [0, -150]) }} className="absolute top-[10%] left-[15%] text-sky-200 opacity-40">
                    <Star size={40} fill="currentColor" />
                </motion.div>
                <motion.div style={{ y: useTransform(smoothProgress, [0, 1], [0, -300]) }} className="absolute bottom-[20%] right-[10%] text-orange-200 opacity-40">
                    <Heart size={30} fill="currentColor" />
                </motion.div>
                <motion.div style={{ y: useTransform(smoothProgress, [0, 1], [0, -100]) }} className="absolute top-1/2 left-10 text-sky-100">
                    <Circle size={100} strokeWidth={8} />
                </motion.div>

                {/* Animated Small Particles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.2, 0.5, 0.2],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: 4 + i,
                            repeat: Infinity,
                            delay: i * 0.5
                        }}
                        className="absolute w-3 h-3 bg-sky-300 rounded-full blur-[1px]"
                        style={{
                            left: `${15 * (i + 1)}%`,
                            top: `${10 * (i + 2)}%`
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-sky-100 text-sky-600 px-4 py-1.5 rounded-full mb-4 shadow-sm"
                    >
                        <Sparkles size={16} className="animate-pulse" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Live Action</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
                    >
                        See the <span className="text-orange-500">Joy</span> in Motion
                    </motion.h2>
                </div>

                <div className="relative flex flex-col lg:flex-row items-center justify-center gap-6 min-h-[500px]">

                    {/* Left Small Video - Smooth Parallax */}
                    <motion.div
                        style={{ y: yLeft, rotate: rotateLeft }}
                        className="hidden lg:block absolute left-4 w-56 h-80 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white z-20"
                    >
                        <iframe
                            className="w-full h-full scale-[1.6] object-cover pointer-events-none"
                            src={getEmbedUrl(videoIds.left)}
                            title="Left Showcase"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                        />
                        <div className="absolute inset-0 bg-sky-500/10 pointer-events-none" />
                    </motion.div>

                    {/* MAIN Video Card */}
                    <motion.div
                        style={{ y: yMain }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative w-full max-w-3xl aspect-video rounded-[3rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-[8px] border-white group z-10"
                    >
                        <iframe
                            className="w-full h-full object-cover scale-[1.02]"
                            src={getEmbedUrl(videoIds.main)}
                            title="Main Showcase"
                            frameBorder="0"
                            allow="autoplay; encrypted-media; picture-in-picture"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center pointer-events-none">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="bg-white/20 backdrop-blur-md p-5 rounded-full border border-white/40 shadow-xl"
                            >
                                <PlayCircle size={48} className="text-white" />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Small Video - Smooth Parallax */}
                    <motion.div
                        style={{ y: yRight, rotate: rotateRight }}
                        className="hidden lg:block absolute right-4 w-64 h-52 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white z-20"
                    >
                        <iframe
                            className="w-full h-full scale-[1.8] object-cover pointer-events-none"
                            src={getEmbedUrl(videoIds.right)}
                            title="Right Showcase"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                        />
                        <div className="absolute inset-0 bg-orange-500/10 pointer-events-none" />
                    </motion.div>

                </div>

                {/* Bottom Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-10 flex flex-wrap justify-center gap-10"
                >
                    {['Child Safety First', 'Interactive Learning', 'Premium Materials'].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-orange-400 rounded-full shadow-[0_0_12px_rgba(251,146,60,0.9)]" />
                            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">{item}</span>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default VideoShowcase;