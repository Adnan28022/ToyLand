import React from 'react';
import { Rabbit, Palette, Sparkles, Zap, Star } from 'lucide-react';

const Hero = () => {
    // Offers for the slider
    const offers = [
        "Special Offer: Buy 2 Get 1 Free!",
        "Free Delivery on orders over $50",
        "New Arrival: Superhero Collection is here!",
        "Flat 20% OFF on Educational Toys",
        "Join our Club for exclusive discounts",
    ];

    return (
        <div className="relative bg-sky-50 overflow-hidden">
            {/* Background Decorative Shapes */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-300 rounded-full -ml-16 -mt-16 opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-200 rounded-full -mr-20 -mb-20 opacity-40"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between py-8 md:py-16 relative z-10">

                    {/* Left Side: Content */}
                    <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                        <span className="inline-flex items-center px-4 py-1 rounded-full bg-orange-100 text-orange-600 font-bold text-xs mb-3 uppercase tracking-widest">
                            <Zap size={14} className="mr-1 fill-orange-600" /> Big Sale: Up to 50% Off!
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-4">
                            Play, Learn & <br />
                            <span className="text-orange-500">Explore</span> the Fun!
                        </h1>
                        <p className="text-base md:text-lg text-gray-600 mb-6 max-w-lg">
                            Discover a world of magic and adventure with our exclusive collection of premium toys. Quality and safety guaranteed.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                            <button className="px-7 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold text-md shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                                Shop Now
                            </button>
                            <button className="px-7 py-3 border-2 border-sky-500 text-sky-600 hover:bg-sky-50 rounded-full font-bold text-md transition-all">
                                View Collections
                            </button>
                        </div>

                        {/* Stats Badges */}
                        <div className="mt-6 flex items-center justify-center md:justify-start space-x-6 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                            <div className="flex items-center">
                                <Sparkles size={16} className="text-orange-500 mr-1" /> Fast Delivery
                            </div>
                            <div className="flex items-center">
                                <Sparkles size={16} className="text-orange-500 mr-1" /> 100% Safe
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Image/Graphics */}
                    <div className="w-full md:w-1/2 flex justify-center relative">
                        <div className="absolute w-60 h-60 md:w-80 md:h-80 bg-sky-200 rounded-full blur-3xl opacity-60 animate-pulse"></div>

                        <img
                            src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1000&auto=format&fit=crop"
                            alt="Toys Collection"
                            className="relative z-10 w-3/4 md:w-full max-w-sm animate-float drop-shadow-2xl rounded-2xl"
                        />

                        {/* Floating Icons */}
                        <div className="absolute top-0 right-5 animate-bounce hidden md:block">
                            <div className="bg-white p-3 rounded-2xl shadow-lg border border-sky-100">
                                <Rabbit size={32} className="text-sky-500" />
                            </div>
                        </div>
                        <div className="absolute bottom-5 left-5 animate-pulse hidden md:block">
                            <div className="bg-white p-3 rounded-2xl shadow-lg border border-orange-100">
                                <Palette size={32} className="text-orange-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- INFINITE SCROLLING TICKER (BOTTOM STRIP) --- */}
            <div className="bg-gray-900 py-3 overflow-hidden border-t border-white/10 relative z-20">
                <div className="animate-infinite-scroll whitespace-nowrap flex items-center">
                    {/* Double rendering list to create seamless infinite loop */}
                    {[...offers, ...offers].map((offer, index) => (
                        <div key={index} className="flex items-center mx-8">
                            <Star size={14} className="text-yellow-400 fill-yellow-400 mr-3" />
                            <span className="text-white text-sm font-bold tracking-wide uppercase">
                                {offer}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;