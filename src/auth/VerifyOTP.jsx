import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, RotateCcw } from 'lucide-react';

const VerifyOTP = () => {
    return (
        <div className="w-full">
            <div className="mb-8 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-50 rounded-2xl text-green-600 mb-4">
                    <ShieldCheck size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Verify OTP</h2>
                <p className="text-sm text-gray-500 mt-2">We've sent a 4-digit code to your email.</p>
            </div>

            <form className="space-y-8">
                {/* OTP Inputs Group */}
                <div className="flex justify-between gap-3 max-w-xs mx-auto">
                    {[1, 2, 3, 4].map((_, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength="1"
                            className="w-14 h-14 sm:w-16 sm:h-16 text-center text-2xl font-bold bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-50 transition-all text-gray-800"
                        />
                    ))}
                </div>

                <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-purple-600 text-white py-4 rounded-2xl font-bold text-sm shadow-xl shadow-purple-100 hover:bg-purple-700 transition-all"
                >
                    Verify & Proceed
                </motion.button>
            </form>

            <div className="mt-8 text-center">
                <p className="text-sm text-gray-500 font-medium">
                    Didn't receive the code?
                    <button className="ml-2 text-purple-600 font-bold inline-flex items-center gap-1 hover:underline">
                        <RotateCcw size={14} /> Resend OTP
                    </button>
                </p>
            </div>
        </div>
    );
};

export default VerifyOTP;