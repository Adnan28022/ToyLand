import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingCart, Trash2, ArrowRight, Ghost } from 'lucide-react';
import PageHero from '../../components/WebPages/PageHero';
import { Link } from 'react-router-dom';

const Wishlist = () => {
    // Example data
    const [wishlistItems, setWishlistItems] = useState([
        { id: 1, title: "Flying Superhero Action Figure", price: 29.99, image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=400", stock: "In Stock" },
        { id: 2, title: "Wooden Alphabet Blocks", price: 19.50, image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400", stock: "In Stock" },
    ]);

    const removeItem = (id) => {
        setWishlistItems(wishlistItems.filter(item => item.id !== id));
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            <PageHero
                title="My Favorites"
                description="Your personal toy box of saved treasures. Grab them before they fly away!"
                breadcrumb="Wishlist"
                image="https://images.unsplash.com/photo-1597422232698-1a27a1289cea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZhdm91cml0ZSUyMHRveXxlbnwwfHwwfHx8MA%3D%3D"
                colorTheme="pink"
            />

            <div className="max-w-6xl mx-auto px-6 py-16">
                {wishlistItems.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence>
                            {wishlistItems.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-xl text-gray-400 hover:text-red-500 transition-colors shadow-sm"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                        <div className="absolute bottom-4 left-4 bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                                            {item.stock}
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-gray-800 mb-1">{item.title}</h3>
                                        <p className="text-2xl font-black text-pink-500 mb-6">${item.price}</p>

                                        <div className="flex gap-3">
                                            <button className="flex-1 bg-gray-900 text-white py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-sky-500 transition-colors">
                                                <ShoppingCart size={18} /> Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-gray-200"
                    >
                        <div className="bg-pink-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-pink-400">
                            <Heart size={40} fill="currentColor" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Wishlist is Empty!</h2>
                        <p className="text-gray-400 text-sm mb-8">Save your favorite toys to track them here.</p>
                        <Link to="/shop">
                            <button className="bg-gray-900 text-white px-10 py-4 rounded-2xl font-bold text-sm inline-flex items-center gap-2 hover:bg-pink-500 transition-colors">
                                Browse Toys <ArrowRight size={18} />
                            </button>
                        </Link>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Wishlist;