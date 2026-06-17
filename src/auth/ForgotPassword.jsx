import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, KeyRound } from 'lucide-react';

const ForgotPassword = () => {
    return (
        <div className="w-full">
            <div className="mb-8 text-center sm:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-50 rounded-2xl text-purple-600 mb-4">
                    <KeyRound size={24} />
                </div>
                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl font-bold text-gray-900 tracking-tight"
                >
                    Forgot Password?
                </motion.h2>
                <p className="text-sm text-gray-500 mt-2">Enter your email and we'll send you an OTP to reset your password.</p>
            </div>

            <form className="space-y-6">
                <div className="space-y-2">
                    <label className="text-[12px] font-semibold text-gray-600 ml-1 uppercase tracking-wider">Email Address</label>
                    <div className="group relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500 transition-colors" size={18} />
                        <input
                            type="email"
                            placeholder="name@example.com"
                            className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none focus:bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-50 transition-all"
                        />
                    </div>
                </div>

                <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold text-sm shadow-xl shadow-gray-200 hover:bg-gray-800 transition-all"
                >
                    Send OTP Code
                </motion.button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-50 text-center">
                <Link to="/auth/login" className="inline-flex items-center gap-2 text-sm text-gray-500 font-bold hover:text-purple-600 transition-colors">
                    <ArrowLeft size={16} /> Back to Login
                </Link>
            </div>
        </div>
    );
};

export default ForgotPassword;