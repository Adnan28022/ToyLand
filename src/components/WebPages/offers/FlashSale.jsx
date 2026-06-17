import React from 'react';
import { motion } from 'framer-motion';
import { Timer } from 'lucide-react';

const FlashSale = () => {
    return (
        <div className="w-full bg-orange-50 border-y border-orange-100">
            <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <div className="bg-orange-500 p-3 rounded-2xl shadow-lg shadow-orange-200">
                        <Timer className="text-white" size={24} />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-gray-800">Flash Sale Ending Soon!</h4>
                        <p className="text-sm text-orange-600 font-medium">Limited quantities available</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    {[
                        { label: 'Hrs', value: '08' },
                        { label: 'Min', value: '45' },
                        { label: 'Sec', value: '12' }
                    ].map((time, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <motion.div
                                animate={{ y: [0, -2, 0] }}
                                transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
                                className="bg-white w-14 h-14 flex items-center justify-center rounded-xl shadow-sm border border-orange-100 text-xl font-bold text-gray-800"
                            >
                                {time.value}
                            </motion.div>
                            <span className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-wider">{time.label}</span>
                        </div>
                    ))}
                </div>

                <motion.button
                    whileHover={{ x: 5 }}
                    className="bg-gray-900 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-xl"
                >
                    Grab Deals Now
                </motion.button>
            </div>
        </div>
    );
};

export default FlashSale;