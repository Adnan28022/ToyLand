import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Send, Heart, Sparkles } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

const SocialNewsletter = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // --- High-End Parallax Transforms ---
    // Background Blobs: Moving in opposite directions
    const yBlobPink = useTransform(scrollYProgress, [0, 1], [-150, 150]);
    const yBlobYellow = useTransform(scrollYProgress, [0, 1], [150, -150]);

    // Content layers: Newsletter vs Grid vs Heading
    const yCard = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const yGrid = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const yHeading = useTransform(scrollYProgress, [0, 1], [0, -30]);

    const instagramPhotos = [
        "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?q=80&w=300&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=300&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600933674077-6eb0328dc2fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2lkc3MlMjBwbGF5aW5nJTIwdG95cyUyMHZpZGVvc3xlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1558060370-d644479cb6f7?q=80&w=300&auto=format&fit=crop",
    ];

    return (
        <section ref={containerRef} className="relative py-10 bg-sky-50/30 overflow-hidden">

            {/* --- Parallax Decorative Blobs --- */}
            <motion.div
                style={{ y: yBlobPink }}
                className="absolute top-0 right-[-10%] w-96 h-96 bg-pink-100 rounded-full blur-[110px] opacity-60 -z-10"
            />
            <motion.div
                style={{ y: yBlobYellow }}
                className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-yellow-100 rounded-full blur-[110px] opacity-60 -z-10"
            />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Newsletter Card with Parallax */}
                    <motion.div
                        style={{ y: yCard }}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] border border-white relative overflow-hidden"
                    >
                        {/* Decorative Background Icon */}
                        <motion.div
                            style={{ rotate: 15, y: yHeading }}
                            className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none"
                        >
                            <Send size={150} />
                        </motion.div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-2 text-sky-500 mb-4">
                                <Sparkles size={20} className="animate-pulse" />
                                <span className="font-bold text-[10px] uppercase tracking-[0.3em]">Join the Toy Club</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                Get <span className="text-pink-500">20% Off</span> Your <br /> First Adventure!
                            </h2>
                            <p className="text-gray-500 mb-8 text-sm font-medium">
                                Subscribe to get exclusive offers, new toy alerts, and fun activities for kids.
                            </p>

                            <form className="relative max-w-md">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full py-4 px-6 rounded-2xl bg-gray-50 border-2 border-gray-100 focus:border-sky-400 focus:outline-none transition-all text-sm font-medium pr-32"
                                />
                                <button className="absolute right-2 top-2 bottom-2 px-6 bg-sky-500 text-white rounded-xl font-bold text-sm hover:bg-gray-900 transition-all flex items-center gap-2">
                                    Join <Send size={14} />
                                </button>
                            </form>
                            <p className="mt-4 text-[10px] text-gray-400 font-medium">
                                *No spam, just pure fun. Unsubscribe anytime.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Side: Instagram Grid with Speed Parallax */}
                    <motion.div style={{ y: yGrid }} className="relative">
                        <motion.div style={{ y: yHeading }} className="text-center lg:text-left mb-8">
                            <div className="flex items-center justify-center lg:justify-start gap-2 text-pink-500 mb-2">
                                <FaInstagram size={20} />
                                <span className="font-bold text-sm tracking-tight">@ToyLandAdventures</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Share the Joy with Us</h3>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-4">
                            {instagramPhotos.map((photo, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="relative group aspect-square rounded-[2rem] overflow-hidden shadow-lg border-4 border-white cursor-pointer"
                                >
                                    <img
                                        src={photo}
                                        alt="Social"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <Heart size={32} className="text-white fill-white animate-bounce" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>

                {/* Bottom Stats / Trust Bar (Compact) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.6 }}
                    className="mt-24 py-8 border-t border-gray-200 flex flex-wrap justify-center gap-12 grayscale hover:grayscale-0 transition-all"
                >
                    <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-gray-800">50k+</span>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Happy <br /> Kids</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-gray-800">100%</span>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Safe <br /> Materials</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-gray-800">24/7</span>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Parent <br /> Support</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SocialNewsletter;