import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Star, Sparkles, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const RecentlyAdded = () => {
    // 1. New Products Data
    const NEW_PRODUCTS = [
        { id: 101, name: "Electric Monster Truck", price: 150, category: "RC Cars", rating: 5, img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?q=80&w=400", tag: "Just In" },
        { id: 102, name: "Magical Fairy Doll", price: 30, category: "Dolls", rating: 4, img: "https://images.unsplash.com/photo-1572604243380-ae5d59e45d1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hZ2ljYWwlMjBmYWlyeSUyMGRvbGwlMjB0b3l8ZW58MHx8MHx8fDA%3D", tag: "New" },
        { id: 103, name: "Solar System Puzzle", price: 25, category: "Educational", rating: 5, img: "https://plus.unsplash.com/premium_photo-1720189952226-5d72d4b73554?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29sYXIlMjBzeXN0ZW0lMjBwdXp6bGUlMjB0b3l8ZW58MHx8MHx8fDA%3D", tag: "Hot" },
        { id: 104, name: "Giant Inflatable Dino", price: 55, category: "Outdoor", rating: 5, img: "https://images.unsplash.com/photo-1560008511-11c63416e52d?q=80&w=400", tag: "Just In" },
    ];

    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (id) => {
        setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
    };

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* --- Section Header --- */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-pink-500 bg-pink-50 w-fit px-3 py-1 rounded-full">
                            <Clock size={16} className="animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Fresh Collection</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                            Recently <span className="text-pink-500">Added</span>
                        </h2>
                        <p className="text-gray-400 text-sm font-medium">The latest magic just landed in our store.</p>
                    </div>

                    <Link to="/new-arrivals" className="group flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-pink-500 transition-all border-b-2 border-gray-100 hover:border-pink-200 pb-1">
                        View All New Drops <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* --- Products Grid --- */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {NEW_PRODUCTS.map((product) => (
                        <motion.div
                            key={product.id}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 relative"
                        >
                            {/* NEW BADGE (Glassy) */}
                            <div className="absolute top-4 left-4 z-20">
                                <span className="bg-white/80 backdrop-blur-md text-pink-600 text-[10px] font-bold px-3 py-1 rounded-lg shadow-sm border border-white/50 flex items-center gap-1">
                                    <Sparkles size={10} /> {product.tag}
                                </span>
                            </div>

                            {/* Image Section */}
                            <div className="relative h-60 overflow-hidden bg-gray-50">
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Wishlist Button */}
                                <button
                                    onClick={() => toggleFavorite(product.id)}
                                    className={`absolute top-4 right-4 p-2.5 rounded-xl transition-all backdrop-blur-md shadow-sm ${favorites.includes(product.id) ? 'bg-red-500 text-white' : 'bg-white/70 text-gray-400 hover:text-red-500'}`}
                                >
                                    <Heart size={16} fill={favorites.includes(product.id) ? "currentColor" : "none"} />
                                </button>
                            </div>

                            {/* Info Section */}
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                        {product.category}
                                    </span>
                                    <div className="flex gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={10} className={i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"} />
                                        ))}
                                    </div>
                                </div>
                                <h3 className="font-bold text-gray-800 text-sm mb-4 line-clamp-1 group-hover:text-pink-500 transition-colors">
                                    {product.name}
                                </h3>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                                    <span className="text-xl font-bold text-gray-900">${product.price}</span>
                                    <motion.button
                                        whileTap={{ scale: 0.9 }}
                                        className="bg-gray-900 text-white p-2.5 rounded-xl hover:bg-pink-500 transition-all shadow-md"
                                    >
                                        <ShoppingCart size={18} />
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default RecentlyAdded;