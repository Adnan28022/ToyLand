import React from 'react';
import { motion } from 'framer-motion';
import { Lock, CheckCircle2, EyeOff } from 'lucide-react';

const ResetPassword = () => {
    return (
        <div className="w-full">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Reset Password</h2>
                <p className="text-sm text-gray-500 mt-1">Your identity is verified. Set a new password below.</p>
            </div>

            <form className="space-y-5">
                <div className="space-y-2">
                    <label className="text-[12px] font-semibold text-gray-600 ml-1 uppercase tracking-wider">New Password</label>
                    <div className="group relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500" size={18} />
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none focus:bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-50 transition-all font-medium"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[12px] font-semibold text-gray-600 ml-1 uppercase tracking-wider">Confirm New Password</label>
                    <div className="group relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500" size={18} />
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none focus:bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-50 transition-all font-medium"
                        />
                    </div>
                </div>

                {/* Password Strength Checklist */}
                <div className="bg-slate-50 p-4 rounded-2xl space-y-2">
                    <div className="flex items-center gap-2 text-[11px] font-bold text-green-600">
                        <CheckCircle2 size={14} /> At least 8 characters
                    </div>
                    <div className="flex items-center gap-2 text-[11px] font-bold text-gray-400">
                        <CheckCircle2 size={14} /> Contains a special character
                    </div>
                </div>

                <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold text-sm shadow-xl shadow-gray-200 hover:bg-gray-800 transition-all pt-2"
                >
                    Update Password
                </motion.button>
            </form>
        </div>
    );
};

export default ResetPassword;