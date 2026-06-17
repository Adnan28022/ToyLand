import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Truck, ShieldCheck, Heart, Star, Quote, Sparkles } from 'lucide-react';

const TrustSection = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Parallax movement for cards and background
    const yCards = useTransform(scrollYProgress, [0, 1], [30, -30]);
    const yBg = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    const features = [
        { icon: <Truck size={22} />, title: "Free Shipping", color: "text-blue-500", bg: "bg-blue-50" },
        { icon: <ShieldCheck size={22} />, title: "100% Safe", color: "text-green-500", bg: "bg-green-50" },
        { icon: <Heart size={22} />, title: "Handmade", color: "text-red-500", bg: "bg-red-50" },
    ];

    return (
        <section ref={sectionRef} className="relative py-12 bg-[#f8fafc] overflow-hidden">

            {/* --- Animated Background Particles --- */}
            <motion.div style={{ y: yBg }} className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 w-4 h-4 bg-orange-200 rounded-full animate-particle" />
                <div className="absolute top-40 right-20 w-6 h-6 bg-sky-200 rounded-full animate-particle opacity-60" style={{ animationDelay: '2s' }} />
                <div className="absolute bottom-20 left-1/2 w-3 h-3 bg-yellow-300 rounded-full animate-particle" style={{ animationDelay: '4s' }} />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
            </motion.div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">

                {/* 1. Features Strip (Compact) */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center gap-3 px-5 py-2.5 bg-white shadow-sm rounded-full border border-gray-100"
                        >
                            <span className={`${f.bg} ${f.color} p-2 rounded-full`}>{f.icon}</span>
                            <span className="text-sm font-bold text-gray-700">{f.title}</span>
                        </motion.div>
                    ))}
                </div>

                {/* 2. Heading Section (Clean) */}
                <div className="text-center mb-10">
                    <div className="flex items-center justify-center gap-2 text-orange-500 mb-1">
                        <Sparkles size={16} />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Happy Parents</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                        Why Families <span className="text-sky-500">Trust Us</span>
                    </h2>
                </div>

                {/* 3. Testimonials (Parallax & Animated) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[1, 2].map((item, i) => (
                        <motion.div
                            key={i}
                            style={{ y: i % 2 === 0 ? yCards : 0 }} // Only first card has vertical parallax
                            initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-white shadow-xl flex flex-col gap-4 relative group"
                        >
                            <Quote className="absolute top-4 right-6 text-sky-100 group-hover:text-sky-200 transition-colors" size={40} />

                            <div className="flex gap-1">
                                {[...Array(5)].map((_, star) => (
                                    <Star key={star} size={14} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            <p className="text-gray-600 font-medium text-sm leading-relaxed italic">
                                "{i === 0
                                    ? "Quality of the wooden puzzles is amazing! My son spends hours playing with them. Truly premium."
                                    : "Super fast delivery and the packaging was so cute. Highly recommended for birthday gifts!"}"
                            </p>

                            <div className="flex items-center gap-3 border-t border-gray-50 pt-4">
                                <img
                                    src={`https://randomuser.me/api/portraits/${i === 0 ? 'women/44' : 'men/32'}.jpg`}
                                    className="w-10 h-10 rounded-full ring-2 ring-sky-50 shadow-md"
                                    alt="user"
                                />
                                <div>
                                    <h4 className="font-bold text-gray-800 text-sm">{i === 0 ? "Sarah Johnson" : "David Smith"}</h4>
                                    <p className="text-xs text-gray-400 font-medium">{i === 0 ? "Verified Mom" : "Dad of Two"}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TrustSection;