import React from 'react';
import { motion } from 'framer-motion';
import { NavLink, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard, LayoutGrid, ShoppingBag, Users, Settings,
    LogOut, BarChart3, PackageSearch, MessageSquareQuote, X
} from 'lucide-react';

const menuItems = [
    { title: "Dashboard", icon: LayoutDashboard, path: "/admin/dashboard" },
    { title: "Products", icon: ShoppingBag, path: "/admin/products" },
    { title: "Orders", icon: PackageSearch, path: "/admin/orders" },
    { title: "Customers", icon: Users, path: "/admin/customers" },
    { title: "Analytics", icon: BarChart3, path: "/admin/analytics" },
    { title: "Categories", icon: LayoutGrid, path: "/admin/categories" },
    { title: "Reviews", icon: MessageSquareQuote, path: "/admin/reviews" },
    { title: "Settings", icon: Settings, path: "/admin/settings" },
];

const AdminSidebar = ({ isCollapsed, isMobileOpen, setIsMobileOpen }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <motion.aside
            initial={false}
            animate={{
                width: isCollapsed ? 80 : 256,
                x: isMobileOpen ? 0 : (window.innerWidth < 1024 ? -300 : 0) // Mobile hide/show logic
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`fixed left-0 top-0 h-screen bg-slate-900 text-slate-300 z-[50] flex flex-col border-r border-slate-800
                ${isMobileOpen ? 'w-full sm:w-64' : ''} // Mobile par full width ya 64
            `}
        >
            {/* Sidebar Logo Area */}
            <div className="h-20 flex items-center justify-between px-6 mb-4">
                <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg shrink-0 flex items-center justify-center text-white font-black text-xl">
                        T
                    </div>
                    {(!isCollapsed || isMobileOpen) && (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="ml-3 font-bold text-white text-lg tracking-tight"
                        >
                            ToyLand <span className="text-purple-400 text-xs block -mt-1 uppercase tracking-widest font-medium">Admin</span>
                        </motion.span>
                    )}
                </div>

                {/* Mobile Close Button */}
                {isMobileOpen && (
                    <button onClick={() => setIsMobileOpen(false)} className="lg:hidden text-slate-400">
                        <X size={24} />
                    </button>
                )}
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-3 space-y-1 overflow-y-auto no-scrollbar">
                {menuItems.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        onClick={() => setIsMobileOpen(false)} // Link click par mobile sidebar band ho jaye
                        className={({ isActive }) => `
                            flex items-center px-3 py-3 rounded-xl transition-all duration-200 group
                            ${isActive ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/20' : 'hover:bg-slate-800 hover:text-white'}
                        `}
                    >
                        <item.icon size={22} className={`${isCollapsed && !isMobileOpen ? 'mx-auto' : 'mr-3'} shrink-0`} />
                        {(!isCollapsed || isMobileOpen) && (
                            <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-sm font-semibold"
                            >
                                {item.title}
                            </motion.span>
                        )}
                    </NavLink>
                ))}
            </nav>

            {/* Logout Button */}
            <div className="p-4 border-t border-slate-800">
                <button
                    onClick={handleLogout}
                    className="flex items-center w-full px-3 py-3 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all cursor-pointer"
                >
                    <LogOut size={22} className={`${isCollapsed && !isMobileOpen ? 'mx-auto' : 'mr-3'}`} />
                    {(!isCollapsed || isMobileOpen) && <span className="text-sm font-bold">Logout</span>}
                </button>
            </div>
        </motion.aside>
    );
};

export default AdminSidebar;