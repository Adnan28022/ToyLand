import React from 'react';
import { motion } from 'framer-motion';
import { Tag, Sparkles, Flame } from 'lucide-react';
import PageHero from '../../components/WebPages/PageHero';
import OfferCard from '../../components/WebPages/offers/OfferCard';
import FlashSale from '../../components/WebPages/offers/FlashSale';
import CategoryParallax from '../../components/WebPages/categories/CategoryParallex'; // Reusing your parallax component

const dealsData = [
    { id: 1, title: "Remote Control Super Car", originalPrice: 150, discountPrice: 99, discount: "35% OFF", image: "https://images.unsplash.com/photo-1676763092563-628ad69c226b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVtb3RlJTIwY29udHJvbCUyMHN1cGVyJTIwY2FyJTIwdG95fGVufDB8fDB8fHww", tag: "Hot Seller" },
    { id: 2, title: "Giant Teddy Bear", originalPrice: 80, discountPrice: 60, discount: "25% OFF", image: "https://images.unsplash.com/photo-1774390937506-9f03100a2156?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lhbnQlMjB0ZWRkeSUyMGJlYXJ8ZW58MHx8MHx8fDA%3D", tag: "Limited Stock" },
    { id: 3, title: "Lego City Set", originalPrice: 200, discountPrice: 170, discount: "15% OFF", image: "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=500", tag: "Best Value" },
    { id: 4, title: "Magnetic Building Blocks", originalPrice: 120, discountPrice: 85, discount: "30% OFF", image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500", tag: "Flash Deal" },
];

const Offers = () => {
    return (
        <div className="bg-white min-h-screen">
            <PageHero
                title="Super Savings Zone"
                description="Grab your favorite toys at unbeatable prices. Sale is live for a limited time!"
                breadcrumb="Special Offers"
                image="https://images.unsplash.com/photo-1663850697008-29fd8ea8e941?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRveXMlMjBkZWFsc3xlbnwwfHwwfHx8MA%3D%3D"
                colorTheme="orange"
            />

            {/* Flash Sale Banner */}
            <FlashSale />

            <div className="max-w-6xl mx-auto px-6 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center mb-12"
                >
                    <div className="flex items-center gap-2 mb-3 bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                        <Flame size={14} /> Don't Miss Out
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Today's Best Deals</h2>
                    <p className="text-gray-500 text-sm max-w-md">Quality toys, happy kids, and even happier wallets.</p>
                </motion.div>

                {/* Deals Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {dealsData.map((item, index) => (
                        <OfferCard key={item.id} item={item} index={index} />
                    ))}
                </div>
            </div>

            <CategoryParallax text="UP TO 50% OFF • SHOP NOW •" speed={-8} />

            {/* Coupon Section */}
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="bg-slate-900 rounded-[2rem] p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-10 opacity-10"><Tag size={150} color="white" /></div>
                    <h3 className="text-white text-2xl font-bold mb-4 relative z-10">Extra 10% Off on First Order</h3>
                    <p className="text-slate-400 mb-6 relative z-10">Use code: <span className="text-orange-400 font-mono font-bold tracking-widest bg-white/10 px-3 py-1 rounded">WELCOME10</span></p>
                    <motion.button whileHover={{ scale: 1.05 }} className="bg-orange-500 text-white px-8 py-3 rounded-xl font-bold relative z-10">Copy Code</motion.button>
                </div>
            </div>
        </div>
    );
};

export default Offers;