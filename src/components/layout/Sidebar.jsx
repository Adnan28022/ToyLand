import React from 'react';
import { motion } from 'framer-motion';
import { NavLink, useNavigate } from 'react-router-dom'; // useNavigate add kiya
import {
    LayoutDashboard,
    LayoutGrid,
    ShoppingBag,
    Users,
    Settings,
    LogOut,
    BarChart3,
    PackageSearch,
    MessageSquareQuote
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

const AdminSidebar = ({ isCollapsed }) => {
    const navigate = useNavigate(); // Navigation hook initialize kiya

    const handleLogout = () => {
        // Aap yahan localStorage.clear() ya auth logic bhi add kar sakte hain
        navigate('/'); // Logout par seedha Home page bhej dega
    };

    return (
        <motion.aside
            initial={false}
            animate={{ width: isCollapsed ? 80 : 256 }}
            className="fixed left-0 top-0 h-screen bg-slate-900 text-slate-300 z-50 flex flex-col border-r border-slate-800"
        >
            {/* Sidebar Logo Area */}
            <div className="h-20 flex items-center px-6 mb-4">
                <div className="w-8 h-8 bg-purple-500 rounded-lg shrink-0 flex items-center justify-center text-white font-black text-xl">
                    T
                </div>
                {!isCollapsed && (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="ml-3 font-bold text-white text-lg tracking-tight"
                    >
                        ToyLand <span className="text-purple-400 text-xs block -mt-1 uppercase tracking-widest font-medium">Admin</span>
                    </motion.span>
                )}
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-3 space-y-1">
                {menuItems.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        className={({ isActive }) => `
                            flex items-center px-3 py-3 rounded-xl transition-all duration-200 group
                            ${isActive ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/20' : 'hover:bg-slate-800 hover:text-white'}
                        `}
                    >
                        <item.icon size={22} className={`${isCollapsed ? 'mx-auto' : 'mr-3'} shrink-0`} />
                        {!isCollapsed && (
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

            {/* Logout Button - Ab ye working hai */}
            <div className="p-4 border-t border-slate-800">
                <button
                    onClick={handleLogout} // Click event add kiya
                    className="flex items-center w-full px-3 py-3 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all cursor-pointer"
                >
                    <LogOut size={22} className={`${isCollapsed ? 'mx-auto' : 'mr-3'}`} />
                    {!isCollapsed && <span className="text-sm font-bold">Logout</span>}
                </button>
            </div>
        </motion.aside>
    );
};

export default AdminSidebar;