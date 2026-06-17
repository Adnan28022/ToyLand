import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Flame, Clock, ArrowRight, Zap, Star } from 'lucide-react';

const HotDeals = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Suble Parallax for depth
    const yCard1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
    const yCard2 = useTransform(scrollYProgress, [0, 1], [-30, 30]);

    const deals = [
        { id: 1, name: "Remote Control Jet", discount: "40% OFF", price: "$45", oldPrice: "$75", img: "https://media.istockphoto.com/id/148092063/photo/rc-plane-and-radio-remote-control.webp?a=1&b=1&s=612x612&w=0&k=20&c=Pw2uTDiJ1ORHOqhFPw8Qcpv0VvxukYHREzG05nlGVJ4=", color: "from-sky-500/20" },
        { id: 2, name: "Luxury Doll House", discount: "30% OFF", price: "$120", oldPrice: "$180", img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=400", color: "from-pink-500/20" },
        { id: 3, name: "Giant LEGO Castle", discount: "25% OFF", price: "$85", oldPrice: "$110", img: "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=400", color: "from-orange-500/20" },
    ];

    return (
        <section ref={containerRef} className="relative py-16 bg-[#0f172a] overflow-hidden">

            {/* --- Animated Mesh Background --- */}
            <div className="absolute inset-0 z-0 opacity-30">
                <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-purple-600 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-blue-600 rounded-full blur-[120px] animate-pulse" />
            </div>

            {/* --- Decorative Rotating Ring --- */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full animate-slow-spin pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 text-orange-400 mb-2">
                            <Flame size={18} fill="currentColor" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Top Offers</span>
                        </div>
                        <h2 className="text-3xl font-bold text-white">Weekly <span className="text-sky-400">Hot Deals</span></h2>
                    </div>

                    <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10">
                        <Clock size={16} className="text-sky-400 animate-pulse" />
                        <span className="text-xs font-semibold text-gray-300">Ends in: 12h : 45m : 30s</span>
                    </div>
                </div>

                {/* Deals Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {deals.map((deal, i) => (
                        <motion.div
                            key={deal.id}
                            style={{ y: i === 1 ? yCard2 : yCard1 }}
                            whileHover={{ y: -5 }}
                            className={`relative group bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 overflow-hidden transition-all hover:bg-white/[0.07]`}
                        >
                            {/* Inner Glow Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${deal.color} to-transparent opacity-30`} />

                            {/* Discount Badge */}
                            <div className="absolute top-5 left-5 bg-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg z-20">
                                {deal.discount}
                            </div>

                            {/* Product Image */}
                            <div className="relative h-48 mb-6 z-10 flex justify-center items-center">
                                <motion.div
                                    whileHover={{ rotate: 10, scale: 1.1 }}
                                    className="w-full h-full"
                                >
                                    <img
                                        src={deal.img}
                                        alt={deal.name}
                                        className="w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
                                    />
                                </motion.div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 text-center">
                                <div className="flex justify-center gap-1 mb-2">
                                    {[...Array(5)].map((_, s) => <Star key={s} size={10} className="fill-yellow-400 text-yellow-400" />)}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-4">{deal.name}</h3>

                                <div className="flex items-center justify-center gap-3 mb-6">
                                    <span className="text-2xl font-black text-sky-400">{deal.price}</span>
                                    <span className="text-sm line-through text-gray-500 font-bold">{deal.oldPrice}</span>
                                </div>

                                <button className="w-full py-3 bg-white text-gray-900 rounded-2xl font-bold text-xs hover:bg-sky-500 hover:text-white transition-all flex items-center justify-center gap-2 group">
                                    Grab it Now <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Decorative Info */}
                <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-40">
                    {['Limited Stock', 'Exclusive for Club Members', 'Verified Quality'].map((text, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <Zap size={14} className="text-sky-400" />
                            <span className="text-[10px] font-bold text-white uppercase tracking-widest">{text}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default HotDeals;