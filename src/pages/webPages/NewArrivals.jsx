import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Heart, Star, Sparkles, Clock, Filter } from 'lucide-react';
import PageHero from '../../components/WebPages/PageHero';
import RecentlyAdded from '../../components/WebPages/newArrivals/RecentlyAdded';
import HotDeals from '../../components/WebPages/newArrivals/HotDeals';
import ServiceHighlights from '../../components/WebPages/newArrivals/ServiceHighlights';

const NewArrivals = () => {

    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (id) => {
        setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
    };

    return (
        <div className="bg-white min-h-screen">
            {/* 1. Page Hero (Props-based) */}
            <PageHero
                title="Fresh Fun Arrivals"
                description="Be the first to explore our latest magic! We've just restocked with the trendiest and safest toys for your little ones."
                breadcrumb="New Arrivals"
                image="https://images.unsplash.com/photo-1616429777191-cc11a3c8bb2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmV3JTIwYXJyaXZhbHMlMjB0b3lzfGVufDB8fDB8fHww"
                colorTheme="pink"
            />

            <RecentlyAdded />
            <HotDeals />
            <ServiceHighlights />
        </div>
    );
};

export default NewArrivals;