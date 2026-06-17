import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate add kiya
import { Mail, Lock, ArrowRight, EyeOff } from 'lucide-react';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState(''); // Email track karne ke liye state

    const handleLogin = (e) => {
        e.preventDefault();

        // Admin Logic: Agar email admin ka hai to dashboard bhej do
        if (email === 'admin@gmail.com') {
            navigate('/admin/dashboard');
        } else {
            // Normal user ke liye home page
            navigate('/');
        }
    };

    return (
        <div className="w-full">
            {/* Header */}
            <div className="mb-10">
                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl font-bold text-gray-900 tracking-tight"
                >
                    Login to Account
                </motion.h2>
                <p className="text-sm text-gray-500 mt-1">Please enter your details to continue.</p>
            </div>

            {/* Form - handleLogin function yahan call ho rahi hai */}
            <form className="space-y-6" onSubmit={handleLogin}>
                <div className="space-y-2">
                    <label className="text-[12px] font-semibold text-gray-600 ml-1 uppercase tracking-wider">Email Address</label>
                    <div className="group relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500 transition-colors">
                            <Mail size={18} />
                        </div>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // State update
                            placeholder="admin@toyverse.com"
                            className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none focus:bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-50 transition-all font-medium text-gray-700"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between items-center px-1">
                        <label className="text-[12px] font-semibold text-gray-600 uppercase tracking-wider">Password</label>
                        <Link to="/auth/forgot-password" size={18} className="text-[11px] font-bold text-purple-600 hover:text-purple-700 uppercase tracking-tight">Forgot Password?</Link>
                    </div>
                    <div className="group relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500 transition-colors">
                            <Lock size={18} />
                        </div>
                        <input
                            type="password"
                            required
                            placeholder="••••••••"
                            className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-12 text-sm outline-none focus:bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-50 transition-all font-medium text-gray-700"
                        />
                        <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                            <EyeOff size={18} />
                        </button>
                    </div>
                </div>

                <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold text-sm shadow-xl shadow-gray-200 flex items-center justify-center gap-3 hover:bg-gray-800 transition-all"
                >
                    Sign In to Store <ArrowRight size={18} />
                </motion.button>
            </form>

            {/* Footer Link */}
            <div className="mt-8 pt-6 border-t border-gray-50 text-center">
                <p className="text-sm text-gray-500 font-medium">
                    New member? <Link to="/auth/signup" className="text-purple-600 font-bold hover:underline ml-1">Create an account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;