import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Truck, Sparkles, Smile, Recycle, Heart } from 'lucide-react';

const ServiceHighlights = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Suble Parallax for background orbs
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    const features = [
        {
            icon: <ShieldCheck size={28} />,
            title: "100% Kid-Safe",
            desc: "Non-toxic, high-quality materials certified for safety.",
            color: "text-blue-500",
            bg: "bg-blue-50"
        },
        {
            icon: <Truck size={28} />,
            title: "Swift Delivery",
            desc: "Fast and reliable shipping right to your doorstep.",
            color: "text-orange-500",
            bg: "bg-orange-50"
        },
        {
            icon: <Recycle size={28} />,
            title: "Eco-Friendly",
            desc: "Sustainable wood and recycled packaging for a greener planet.",
            color: "text-green-500",
            bg: "bg-green-50"
        },
        {
            icon: <Heart size={28} />,
            title: "Expertly Curated",
            desc: "Handpicked toys that spark creativity and learning.",
            color: "text-red-500",
            bg: "bg-red-50"
        },
    ];

    return (
        <section ref={sectionRef} className="relative py-16 bg-white overflow-hidden">

            {/* --- Subtle Parallax Background Orbs (Very Light) --- */}
            <motion.div style={{ y: y1 }} className="absolute top-10 left-[-5%] w-64 h-64 bg-sky-50 rounded-full blur-[80px] opacity-40 -z-0" />
            <motion.div style={{ y: y2 }} className="absolute bottom-10 right-[-5%] w-72 h-72 bg-pink-50 rounded-full blur-[80px] opacity-40 -z-0" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="flex justify-center items-center gap-2 text-sky-500 mb-2">
                        <Sparkles size={16} />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Quality Matters</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                        Extraordinary Play, <span className="text-sky-500">Guaranteed</span>
                    </h2>
                    <p className="text-gray-400 text-sm mt-2 max-w-lg mx-auto font-medium leading-relaxed">
                        We don't just sell toys; we deliver happiness, safety, and learning experiences for your children.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 group text-center"
                        >
                            {/* Icon Box */}
                            <div className={`${item.bg} ${item.color} w-16 h-16 rounded-[1.5rem] flex items-center justify-center mx-auto mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                                {item.icon}
                            </div>

                            {/* Text Content */}
                            <h3 className="text-lg font-bold text-gray-800 mb-3 tracking-tight">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed font-medium">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Decorative Line */}
                <div className="mt-16 flex items-center justify-center gap-3 opacity-20">
                    <div className="h-px w-16 bg-gray-400" />
                    <Smile size={20} className="text-gray-400" />
                    <div className="h-px w-16 bg-gray-400" />
                </div>

            </div>
        </section>
    );
};

export default ServiceHighlights;