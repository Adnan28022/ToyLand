import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rabbit, Sword, Puzzle, Car, BookOpen, Baby, Sparkles } from 'lucide-react';

const Categories = () => {
    const targetRef = useRef(null);

    // Parallax logic for background elements
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    const categories = [
        { name: 'Soft Toys', icon: <Rabbit size={40} />, color: 'bg-pink-100', text: 'text-pink-600', count: '120+ Items' },
        { name: 'Action Figures', icon: <Sword size={40} />, color: 'bg-blue-100', text: 'text-blue-600', count: '85+ Items' },
        { name: 'Puzzles', icon: <Puzzle size={40} />, color: 'bg-yellow-100', text: 'text-yellow-600', count: '50+ Items' },
        { name: 'Cars & Vehicles', icon: <Car size={40} />, color: 'bg-red-100', text: 'text-red-600', count: '95+ Items' },
        { name: 'Educational', icon: <BookOpen size={40} />, color: 'bg-green-100', text: 'text-green-600', count: '70+ Items' },
        { name: 'Dolls', icon: <Baby size={40} />, color: 'bg-purple-100', text: 'text-purple-600', count: '110+ Items' },
    ];

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <section ref={targetRef} className="relative py-24 bg-white overflow-hidden">

            {/* Parallax Background Blobs */}
            <motion.div style={{ y: y1 }} className="absolute top-10 right-[-5%] w-64 h-64 bg-sky-100 rounded-full blur-3xl opacity-60" />
            <motion.div style={{ y: y2 }} className="absolute bottom-10 left-[-5%] w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-60" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Heading with Fade-up */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex justify-center mb-2">
                        <Sparkles className="text-orange-400 animate-pulse" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                        Shop by <span className="text-sky-500">Category</span>
                    </h2>
                    <p className="text-gray-500 font-medium italic text-lg">High-quality toys for every little dreamer</p>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        transition={{ duration: 0.8 }}
                        className="h-2 bg-orange-400 mx-auto mt-6 rounded-full"
                    />
                </motion.div>

                {/* Categories Grid with Staggered Reveal */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
                >
                    {categories.map((cat, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10, scale: 1.05 }}
                            className="group cursor-pointer flex flex-col items-center text-center"
                        >
                            {/* Animated Icon Container */}
                            <motion.div
                                whileHover={{ rotate: [0, -10, 10, 0] }}
                                transition={{ duration: 0.5 }}
                                className={`${cat.color} ${cat.text} w-28 h-28 md:w-32 md:h-32 rounded-[2.5rem] flex items-center justify-center mb-5 shadow-sm group-hover:shadow-2xl group-hover:shadow-sky-100 transition-all duration-300 border-4 border-white relative`}
                            >
                                {cat.icon}
                                {/* Subtle Inner Glow on Hover */}
                                <div className="absolute inset-0 rounded-[2.5rem] bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                            </motion.div>

                            {/* Category Info */}
                            <h3 className="font-extrabold text-gray-800 text-xl group-hover:text-orange-500 transition-colors">
                                {cat.name}
                            </h3>
                            <div className="mt-2 overflow-hidden">
                                <motion.p
                                    initial={{ y: 20 }}
                                    whileInView={{ y: 0 }}
                                    className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]"
                                >
                                    {cat.count}
                                </motion.p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Decorative Line with Parallax shift */}
                <motion.div
                    style={{ x: y1 }}
                    className="mt-20 flex items-center justify-center space-x-4 opacity-30"
                >
                    <div className="h-[2px] w-32 bg-gradient-to-r from-transparent to-gray-400"></div>
                    <div className="w-3 h-3 border-2 border-gray-400 rounded-full"></div>
                    <div className="h-[2px] w-32 bg-gradient-to-l from-transparent to-gray-400"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Categories;