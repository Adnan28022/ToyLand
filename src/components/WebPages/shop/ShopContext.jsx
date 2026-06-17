import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ChevronDown, Star, ShoppingCart, Heart, LayoutGrid, List, X } from 'lucide-react';

const ShopContent = () => {
    // 1. STYLES & DATA
    const INITIAL_PRODUCTS = [
        { id: 1, name: "LEGO Star Wars Set", price: 89, category: "Construction", rating: 5, img: "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?q=80&w=400&auto=format&fit=crop" },
        { id: 2, name: "Remote Control Drone", price: 120, category: "Electronics", rating: 4, img: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?q=80&w=400&auto=format&fit=crop" },
        { id: 3, name: "Wooden Train Track", price: 45, category: "Wooden", rating: 5, img: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?q=80&w=400&auto=format&fit=crop" },
        { id: 4, name: "Plush Panda Bear", price: 25, category: "Soft Toys", rating: 5, img: "https://images.unsplash.com/photo-1556012018-50c5c0da73bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGx1c2glMjBwYW5hZGElMjBiZWFyfGVufDB8fDB8fHww" },
        { id: 5, name: "Science Kit - Volcano", price: 35, category: "Educational", rating: 4, img: "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?q=80&w=400&auto=format&fit=crop" },
        { id: 6, name: "Action Hero Figure", price: 18, category: "Action Figures", rating: 5, img: "https://images.unsplash.com/photo-1685382633381-5957265de35e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWN0aW9uJTIwaGVybyUyMGZpZ3VyZXxlbnwwfHwwfHx8MA%3D%3D" },
    ];

    const categories = ["All", "Construction", "Electronics", "Wooden", "Soft Toys", "Educational", "Action Figures"];

    // 2. STATES
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [maxPrice, setMaxPrice] = useState(200);
    const [sortBy, setSortBy] = useState('Featured'); // Featured, LowToHigh, HighToLow
    const [favorites, setFavorites] = useState([]); // Array of product IDs

    // 3. LOGIC (Filtering & Sorting)
    const filteredProducts = useMemo(() => {
        let result = INITIAL_PRODUCTS.filter(item => {
            const categoryMatch = selectedCategory === 'All' || item.category === selectedCategory;
            const priceMatch = item.price <= maxPrice;
            return categoryMatch && priceMatch;
        });

        // Sorting Logic
        if (sortBy === 'LowToHigh') result.sort((a, b) => a.price - b.price);
        if (sortBy === 'HighToLow') result.sort((a, b) => b.price - a.price);

        return result;
    }, [selectedCategory, maxPrice, sortBy]);

    // Favorites Toggle
    const toggleFavorite = (id) => {
        setFavorites(prev =>
            prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
        );
    };

    // Reset Filters
    const resetFilters = () => {
        setSelectedCategory('All');
        setMaxPrice(200);
        setSortBy('Featured');
    };

    return (
        <div className="bg-white min-h-screen py-10">
            <div className="max-w-7xl mx-auto px-4 md:px-6">

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* --- 1. SIDEBAR FILTERS --- */}
                    <aside className="w-full lg:w-64 space-y-8">
                        <div className="bg-gray-50/50 border border-gray-100 p-6 rounded-[2rem] sticky top-24">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2">
                                    <Filter size={18} className="text-sky-500" />
                                    <h3 className="font-bold text-gray-800 uppercase tracking-widest text-xs">Filters</h3>
                                </div>
                                {(selectedCategory !== 'All' || maxPrice < 200) && (
                                    <button onClick={resetFilters} className="text-[10px] font-bold text-red-500 hover:underline">RESET</button>
                                )}
                            </div>

                            {/* Category Filter */}
                            <div className="space-y-4">
                                <h4 className="text-sm font-bold text-gray-700">Categories</h4>
                                <div className="space-y-2">
                                    {categories.map((cat) => (
                                        <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                                            <input
                                                type="radio"
                                                name="category"
                                                checked={selectedCategory === cat}
                                                onChange={() => setSelectedCategory(cat)}
                                                className="w-4 h-4 accent-sky-500 cursor-pointer"
                                            />
                                            <span className={`text-sm font-medium transition-colors ${selectedCategory === cat ? 'text-sky-600 font-bold' : 'text-gray-500 group-hover:text-sky-400'}`}>
                                                {cat}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Price Range Filter */}
                            <div className="mt-8 space-y-4">
                                <h4 className="text-sm font-bold text-gray-700">Price Range: <span className="text-sky-500">${maxPrice}</span></h4>
                                <input
                                    type="range"
                                    min="0"
                                    max="200"
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                                    className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-sky-500"
                                />
                                <div className="flex justify-between text-xs font-bold text-gray-400">
                                    <span>$0</span>
                                    <span>$200</span>
                                </div>
                            </div>

                            <button onClick={resetFilters} className="w-full mt-8 py-3 bg-gray-900 text-white rounded-2xl text-xs font-bold hover:bg-sky-500 transition-all shadow-lg uppercase tracking-widest">
                                Clear All
                            </button>
                        </div>
                    </aside>

                    {/* --- 2. MAIN PRODUCT AREA --- */}
                    <main className="flex-1">

                        {/* Top Bar (Results & Live Sorting) */}
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-gray-50/50 p-4 rounded-2xl border border-gray-100">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                                Showing {filteredProducts.length} Results
                            </span>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-gray-100">
                                    <span className="text-[10px] font-bold text-gray-400 uppercase">Sort By:</span>
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="text-xs font-bold text-gray-700 bg-transparent outline-none cursor-pointer"
                                    >
                                        <option value="Featured">Featured</option>
                                        <option value="LowToHigh">Price: Low to High</option>
                                        <option value="HighToLow">Price: High to Low</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Product Grid with Animations */}
                        {filteredProducts.length > 0 ? (
                            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                <AnimatePresence mode='popLayout'>
                                    {filteredProducts.map((product) => (
                                        <motion.div
                                            key={product.id}
                                            layout
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            whileHover={{ y: -8 }}
                                            className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                                        >
                                            {/* Image Section */}
                                            <div className="relative h-60 overflow-hidden bg-gray-50">
                                                <img
                                                    src={product.img}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                <button
                                                    onClick={() => toggleFavorite(product.id)}
                                                    className={`absolute top-4 right-4 p-2.5 rounded-xl shadow-sm transition-all backdrop-blur-md ${favorites.includes(product.id) ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-400 hover:text-red-500'}`}
                                                >
                                                    <Heart size={18} fill={favorites.includes(product.id) ? "currentColor" : "none"} />
                                                </button>
                                            </div>

                                            {/* Info Section */}
                                            <div className="p-6">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-[10px] font-bold text-sky-500 uppercase tracking-widest bg-sky-50 px-2 py-0.5 rounded-full">
                                                        {product.category}
                                                    </span>
                                                    <div className="flex items-center gap-1">
                                                        <Star size={12} className="fill-yellow-400 text-yellow-400" />
                                                        <span className="text-xs font-bold text-gray-700">{product.rating}.0</span>
                                                    </div>
                                                </div>
                                                <h3 className="font-bold text-gray-800 mb-4 group-hover:text-sky-500 transition-colors">
                                                    {product.name}
                                                </h3>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-xl font-bold text-gray-900">${product.price}</span>
                                                    <button className="p-3 bg-gray-900 text-white rounded-xl hover:bg-sky-500 transition-all shadow-md active:scale-90">
                                                        <ShoppingCart size={18} />
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </motion.div>
                        ) : (
                            <div className="py-20 text-center">
                                <X size={48} className="mx-auto text-gray-200 mb-4" />
                                <h3 className="text-xl font-bold text-gray-400">No products match your filters.</h3>
                                <button onClick={resetFilters} className="mt-4 text-sky-500 font-bold underline">Clear all filters</button>
                            </div>
                        )}

                        {/* Pagination (Visual only) */}
                        {filteredProducts.length > 0 && (
                            <div className="mt-16 flex justify-center items-center gap-3">
                                <button className="px-4 py-2 border-2 border-gray-100 rounded-xl font-bold text-sm text-gray-400 hover:bg-sky-50 hover:text-sky-500 transition-all cursor-pointer">Prev</button>
                                <button className="w-10 h-10 rounded-xl font-bold text-sm bg-sky-500 text-white shadow-lg shadow-sky-100">1</button>
                                <button className="px-4 py-2 border-2 border-gray-100 rounded-xl font-bold text-sm text-gray-400 hover:bg-sky-50 hover:text-sky-500 transition-all cursor-pointer">Next</button>
                            </div>
                        )}

                    </main>
                </div>
            </div>
        </div>
    );
};

export default ShopContent;