import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Heart, Brain, Bike, Gamepad2, Puzzle, Sparkles } from 'lucide-react';
import PageHero from '../../components/WebPages/PageHero';
import CategoryCard from '../../components/WebPages/categories/CategoryCard';
import CategoryParallax from '../../components/WebPages/categories/CategoryParallex';

const categoriesData = [
    { id: 1, title: "Action Figures", count: "120+ Items", image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=500", color: "text-blue-500", bgColor: "bg-blue-50/50", icon: Zap },
    { id: 2, title: "Soft Toys", count: "85+ Items", image: "https://images.unsplash.com/photo-1696527014341-a874bd839540?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNvZnQlMjB0b3lzfGVufDB8fDB8fHww", color: "text-pink-500", bgColor: "bg-pink-50/50", icon: Heart },
    { id: 3, title: "Educational", count: "200+ Items", image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500", color: "text-amber-600", bgColor: "bg-amber-50/50", icon: Brain },
    { id: 4, title: "Outdoor Fun", count: "50+ Items", image: "https://images.unsplash.com/photo-1766426368342-40c578ffbb7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b3V0ZG9vciUyMGZ1biUyMHRveXN8ZW58MHx8MHx8fDA%3D", color: "text-green-500", bgColor: "bg-green-50/50", icon: Bike },
    { id: 5, title: "Remote Control", count: "40+ Items", image: "https://media.istockphoto.com/id/528289050/photo/blue-rc-truck-car.webp?a=1&b=1&s=612x612&w=0&k=20&c=43KuvTbC1eqX6yeo4yEvyRzixTGFsTCt39BOWsyYHfM=", color: "text-purple-500", bgColor: "bg-purple-50/50", icon: Gamepad2 },
    { id: 6, title: "Board Games", count: "110+ Items", image: "https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9hcmQlMjBnYW1lc3xlbnwwfHwwfHx8MA%3D%3D", color: "text-orange-500", bgColor: "bg-orange-50/50", icon: Puzzle },
];

const Categories = () => {
    return (
        <div className="bg-white min-h-screen">
            <PageHero
                title="Toy Kingdoms"
                description="Explore our curated collection of joy and wonder for every age."
                breadcrumb="Categories"
                image="https://images.unsplash.com/photo-1603558431750-dfa36513aee6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG95cyUyMGNhdGVnb3JpZXN8ZW58MHx8MHx8fDA%3D"
                colorTheme="purple"
            />

            <CategoryParallax text="Play • Discover • Learn" speed={-10} />

            <div className="max-w-6xl mx-auto px-6 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center mb-12"
                >
                    <div className="flex items-center gap-2 mb-3 bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                        <Sparkles size={14} /> Shop by Interests
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-3">Popular Categories</h2>
                    <p className="text-gray-500 text-sm max-w-md leading-relaxed">
                        Find the perfect toy from our wide range of categories designed for growth and fun.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoriesData.map((cat, index) => (
                        <CategoryCard key={cat.id} category={cat} index={index} />
                    ))}
                </div>
            </div>

            <CategoryParallax text="Magic in every box" speed={10} />
        </div>
    );
};

export default Categories;