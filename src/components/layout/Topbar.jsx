import React from 'react';
import { Menu, Bell, Search, UserCircle, Maximize2 } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminTopbar = ({ toggleSidebar, isCollapsed }) => {
    return (
        <header className="h-20 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-40">

            {/* Left: Toggler & Search */}
            <div className="flex items-center gap-4">
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleSidebar}
                    className="p-2 bg-slate-50 text-slate-600 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
                >
                    <Menu size={20} />
                </motion.button>

                <div className="hidden sm:flex items-center bg-slate-50 border border-slate-100 rounded-xl px-3 py-2 w-64 group focus-within:border-purple-300 transition-all">
                    <Search size={18} className="text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search dashboard..."
                        className="bg-transparent border-none outline-none ml-2 text-sm text-slate-600 w-full"
                    />
                </div>
            </div>

            {/* Right: Notifications & Profile */}
            <div className="flex items-center gap-3">
                <button className="hidden md:flex p-2 text-slate-400 hover:text-slate-600">
                    <Maximize2 size={20} />
                </button>

                <div className="relative p-2 text-slate-400 hover:text-slate-600 cursor-pointer">
                    <Bell size={20} />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </div>

                <div className="h-8 w-px bg-slate-200 mx-2 hidden sm:block"></div>

                <div className="flex items-center gap-3 pl-2 cursor-pointer group">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-bold text-slate-800 leading-none">Admin User</p>
                        <p className="text-[10px] font-bold text-purple-500 uppercase tracking-widest mt-1">Super Admin</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 border border-purple-200 group-hover:shadow-md transition-all">
                        <UserCircle size={24} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AdminTopbar;