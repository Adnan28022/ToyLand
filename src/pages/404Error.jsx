import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, Ghost, Construction } from 'lucide-react';

const NotFound = () => {
    const [timeLeft, setTimeLeft] = useState(10); // 10 Second Timer
    const navigate = useNavigate();

    useEffect(() => {
        if (timeLeft === 0) {
            navigate(-1); // Automatically go back to previous page
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, navigate]);

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-6 overflow-hidden">

            {/* Animated Illustration */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="relative mb-8"
            >
                {/* Floating Toy Icon */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="bg-white p-8 rounded-[3rem] shadow-2xl shadow-purple-100 relative z-10"
                >
                    <Ghost size={80} className="text-purple-400" strokeWidth={1.5} />
                </motion.div>

                {/* Decorative Circles */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-200 rounded-full blur-xl opacity-60 animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-200 rounded-full blur-xl opacity-60" />
            </motion.div>

            {/* Error Message */}
            <div className="text-center max-w-md">
                <motion.h1
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className="text-8xl font-black text-gray-200 mb-2 tracking-tighter"
                >
                    404
                </motion.h1>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    Oops! Toys are hiding.
                </h2>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                    The page you are looking for doesn't exist or has been moved to another toy box.
                </p>

                {/* Countdown Timer UI */}
                <div className="mb-10 inline-flex flex-col items-center bg-white px-6 py-3 rounded-2xl border border-gray-100 shadow-sm">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Teleporting back in</span>
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-purple-600 font-mono">{timeLeft}s</span>
                        <div className="w-12 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: "100%" }}
                                animate={{ width: "0%" }}
                                transition={{ duration: 10, ease: "linear" }}
                                className="h-full bg-purple-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-all shadow-lg shadow-gray-200 w-full sm:w-auto"
                    >
                        <ArrowLeft size={16} /> Go Back Now
                    </motion.button>

                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 px-6 py-3 bg-white text-gray-700 border border-gray-200 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-all w-full sm:w-auto"
                    >
                        <Home size={16} /> Home Page
                    </motion.button>
                </div>
            </div>

            {/* Background Text Parallax Effect (Reusing your concept) */}
            <div className="fixed bottom-10 left-0 right-0 overflow-hidden opacity-[0.03] pointer-events-none select-none">
                <div className="whitespace-nowrap text-[15rem] font-black uppercase">
                    Lost in the Toy Store • Lost in the Toy Store
                </div>
            </div>
        </div>
    );
};

export default NotFound;