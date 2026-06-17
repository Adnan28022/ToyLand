import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, ShoppingCart, Heart, Eye, Sparkles } from 'lucide-react';

const FeaturedProducts = () => {
    const sectionRef = useRef(null);

    // Parallax Logic for background decorative elements
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const yLeft = useTransform(scrollYProgress, [0, 1], [-50, 150]);
    const yRight = useTransform(scrollYProgress, [0, 1], [50, -150]);

    const products = [
        {
            id: 1,
            name: "Remote Control Racing Car",
            price: "$45.00",
            oldPrice: "$60.00",
            rating: 5,
            image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?q=80&w=500&auto=format&fit=crop",
            badge: "Hot",
            badgeColor: "bg-red-500"
        },
        {
            id: 2,
            name: "Soft Teddy Bear (Large)",
            price: "$25.00",
            oldPrice: null,
            rating: 4,
            image: "https://images.unsplash.com/photo-1648311203209-da34f7d0d800?w=500&auto=format&fit=crop&q=60",
            badge: "New",
            badgeColor: "bg-green-500"
        },
        {
            id: 3,
            name: "Educational Building Blocks",
            price: "$35.00",
            oldPrice: "$40.00",
            rating: 5,
            image: "https://plus.unsplash.com/premium_photo-1750830335465-920672d3ee40?w=500&auto=format&fit=crop&q=60",
            badge: "Sale",
            badgeColor: "bg-orange-500"
        },
        {
            id: 4,
            name: "Superhero Action Figure",
            price: "$18.00",
            oldPrice: null,
            rating: 4,
            image: "https://images.unsplash.com/photo-1556707752-481d500a2c58?w=500&auto=format&fit=crop&q=60",
            badge: "Hot",
            badgeColor: "bg-red-500"
        }
    ];

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 } // Cards ek ke baad ek ayenge
        }
    };

    const cardVariants = {
        hidden: { y: 60, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", damping: 15, stiffness: 100 }
        }
    };

    return (
        <section ref={sectionRef} className="relative py-24 bg-gray-50 overflow-hidden">

            {/* Parallax Background Decorations */}
            <motion.div
                style={{ y: yLeft }}
                className="absolute top-20 left-[-5%] w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-50"
            />
            <motion.div
                style={{ y: yRight }}
                className="absolute bottom-20 right-[-5%] w-80 h-80 bg-sky-100 rounded-full blur-3xl opacity-50"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Animated Section Header */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-between items-end mb-12"
                >
                    <div>
                        <div className="flex items-center gap-2 text-orange-500 mb-2">
                            <Sparkles size={20} className="animate-pulse" />
                            <span className="font-bold text-sm uppercase tracking-widest">Our Best Sellers</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                            Featured <span className="text-orange-500 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Products</span>
                        </h2>
                        <p className="text-gray-500 mt-2 text-lg italic">Handpicked toys for your little ones</p>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden md:block text-sky-600 font-black hover:text-sky-700 underline decoration-4 underline-offset-8 transition-all"
                    >
                        View All Products
                    </motion.button>
                </motion.div>

                {/* Staggered Products Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
                >
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            variants={cardVariants}
                            whileHover={{ y: -15 }}
                            className="group bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-2xl transition-all duration-500 relative border border-gray-100"
                        >
                            {/* Product Image & Badge */}
                            <div className="relative h-72 overflow-hidden bg-gray-100">
                                <motion.img
                                    whileHover={{ scale: 1.15 }}
                                    transition={{ duration: 0.6 }}
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                                <span className={`absolute top-5 left-5 ${product.badgeColor} text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-tighter shadow-lg`}>
                                    {product.badge}
                                </span>

                                {/* Floating Hover Icons */}
                                <div className="absolute top-5 -right-16 group-hover:right-5 transition-all duration-500 flex flex-col gap-3">
                                    <motion.button whileHover={{ scale: 1.2 }} className="p-3 bg-white rounded-2xl text-gray-600 hover:bg-orange-500 hover:text-white shadow-xl transition-colors">
                                        <Heart size={20} />
                                    </motion.button>
                                    <motion.button whileHover={{ scale: 1.2 }} className="p-3 bg-white rounded-2xl text-gray-600 hover:bg-sky-500 hover:text-white shadow-xl transition-colors">
                                        <Eye size={20} />
                                    </motion.button>
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="p-8">
                                <div className="flex mb-3 gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className={i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"} />
                                    ))}
                                </div>
                                <h3 className="text-xl font-extrabold text-gray-800 mb-2 truncate group-hover:text-sky-600 transition-colors">
                                    {product.name}
                                </h3>
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-2xl font-black text-gray-900">{product.price}</span>
                                    {product.oldPrice && (
                                        <span className="text-sm text-gray-400 line-through font-bold">{product.oldPrice}</span>
                                    )}
                                </div>

                                {/* Modern Add to Cart Button */}
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    className="w-full bg-sky-500 text-white py-4 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-gray-900 shadow-lg shadow-sky-100 hover:shadow-gray-200 transition-all duration-300"
                                >
                                    <ShoppingCart size={20} />
                                    ADD TO CART
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Mobile Button with Bounce */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="md:hidden w-full mt-12 bg-white border-4 border-sky-500 text-sky-600 py-4 rounded-[2rem] font-black text-lg shadow-xl"
                >
                    EXPLORE ALL
                </motion.button>
            </div>
        </section>
    );
};

export default FeaturedProducts;