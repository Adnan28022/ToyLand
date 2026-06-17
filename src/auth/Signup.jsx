import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { User, Mail, Lock, ArrowRight, ShieldCheck } from 'lucide-react';

const Signup = () => {
    return (
        <div className="w-full">
            {/* Header */}
            <div className="mb-8">
                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl font-bold text-gray-900 tracking-tight"
                >
                    Create Account
                </motion.h2>
                <p className="text-sm text-gray-500 mt-1">Join our magic world of toys today.</p>
            </div>

            <form className="space-y-5">
                {/* Responsive Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-[12px] font-semibold text-gray-600 ml-1 uppercase tracking-wider">First Name</label>
                        <div className="group relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500" size={18} />
                            <input type="text" placeholder="John" className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-3.5 pl-12 pr-4 text-sm outline-none focus:bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-50 transition-all" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[12px] font-semibold text-gray-600 ml-1 uppercase tracking-wider">Last Name</label>
                        <input type="text" placeholder="Doe" className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-3.5 px-4 text-sm outline-none focus:bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-50 transition-all" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[12px] font-semibold text-gray-600 ml-1 uppercase tracking-wider">Email Address</label>
                    <div className="group relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500" size={18} />
                        <input type="email" placeholder="example@mail.com" className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-3.5 pl-12 pr-4 text-sm outline-none focus:bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-50 transition-all" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[12px] font-semibold text-gray-600 ml-1 uppercase tracking-wider">Password</label>
                    <div className="group relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500" size={18} />
                        <input type="password" placeholder="Min. 8 characters" className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-3.5 pl-12 pr-4 text-sm outline-none focus:bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-50 transition-all" />
                    </div>
                </div>

                {/* Terms */}
                <div className="flex items-center gap-2 px-1">
                    <div className="bg-green-100 p-1 rounded-md">
                        <ShieldCheck size={14} className="text-green-600" />
                    </div>
                    <p className="text-[11px] text-gray-500 font-medium">By signing up, you agree to our Terms & Privacy.</p>
                </div>

                <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-purple-600 text-white py-4 rounded-2xl font-bold text-sm shadow-xl shadow-purple-100 flex items-center justify-center gap-3 hover:bg-purple-700 transition-all mt-2"
                >
                    Create Free Account <ArrowRight size={18} />
                </motion.button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-50 text-center">
                <p className="text-sm text-gray-500 font-medium">
                    Already joined? <Link to="/auth/login" className="text-purple-600 font-bold hover:underline ml-1">Login here</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;