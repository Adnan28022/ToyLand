import React from 'react';
import { motion } from 'framer-motion';
import { Eye, ShieldAlert, Mail, Calendar, ShoppingBag, DollarSign } from 'lucide-react';

const CustomerTable = ({ customers, onView }) => {

    // Functionality: Block/Unblock handler
    const handleStatusAction = (user) => {
        const action = user.status === "Active" ? "Block" : "Unblock";
        if (window.confirm(`Are you sure you want to ${action} ${user.name}?`)) {
            alert(`${user.name} has been ${action}ed.`);
        }
    };

    return (
        <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">

            {/* 1. Desktop Table View (Hidden on Mobile) */}
            <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] border-b border-slate-50">
                            <th className="py-6 pl-8">Customer</th>
                            <th className="py-6">Joined Date</th>
                            <th className="py-6">Orders</th>
                            <th className="py-6">Total Spent</th>
                            <th className="py-6">Status</th>
                            <th className="py-6 pr-8 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {customers.map((user, i) => (
                            <motion.tr
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                key={user.id}
                                className="group hover:bg-slate-50/50 transition-all"
                            >
                                <td className="py-5 pl-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-500 uppercase shrink-0">
                                            {user.name.charAt(0)}
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-sm font-bold text-slate-800 truncate">{user.name}</p>
                                            <p className="text-[10px] text-slate-400 font-bold truncate">{user.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-5 text-sm font-medium text-slate-500">{user.joined}</td>
                                <td className="py-5 text-sm font-bold text-slate-700">{user.orders} Orders</td>
                                <td className="py-5 text-sm font-black text-slate-900">${user.spent}</td>
                                <td className="py-5">
                                    <span className={`px-4 py-1 rounded-xl text-[10px] font-black uppercase tracking-widest ${user.status === "Active" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                                        }`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="py-5 pr-8 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button
                                            onClick={() => onView(user)}
                                            className="p-2.5 bg-slate-50 text-slate-400 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all cursor-pointer"
                                            title="View Profile"
                                        >
                                            <Eye size={18} />
                                        </button>
                                        <button
                                            onClick={() => handleStatusAction(user)}
                                            className="p-2.5 bg-slate-50 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all cursor-pointer"
                                            title="Manage Status"
                                        >
                                            <ShieldAlert size={18} />
                                        </button>
                                    </div>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* 2. Mobile Card View (Visible only on Mobile) */}
            <div className="md:hidden divide-y divide-slate-100 px-4">
                {customers.map((user, i) => (
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        key={user.id}
                        className="py-6 flex flex-col gap-5"
                    >
                        {/* Card Top: Avatar & Basic Info */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center font-black text-lg shadow-sm border border-purple-100">
                                    {user.name.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="text-sm font-black text-slate-800">{user.name}</h3>
                                    <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold">
                                        <Mail size={10} /> {user.email}
                                    </div>
                                </div>
                            </div>
                            <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider ${user.status === "Active" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                                }`}>
                                {user.status}
                            </span>
                        </div>

                        {/* Card Body: Stats Grid */}
                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100/50">
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 flex items-center gap-1">
                                    <ShoppingBag size={10} /> Orders
                                </p>
                                <p className="text-xs font-bold text-slate-800">{user.orders} Total</p>
                            </div>
                            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100/50">
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 flex items-center gap-1">
                                    <DollarSign size={10} /> Total Spent
                                </p>
                                <p className="text-xs font-black text-purple-600">${user.spent}</p>
                            </div>
                        </div>

                        {/* Card Bottom: Meta & Actions */}
                        <div className="flex items-center justify-between mt-1">
                            <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold">
                                <Calendar size={12} /> Joined: {user.joined}
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => onView(user)}
                                    className="px-4 py-2 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2"
                                >
                                    <Eye size={14} /> Profile
                                </button>
                                <button
                                    onClick={() => handleStatusAction(user)}
                                    className="p-2 bg-slate-100 text-slate-400 hover:text-red-500 rounded-xl transition-colors"
                                >
                                    <ShieldAlert size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* 3. Empty State (Logic for Safety) */}
            {customers.length === 0 && (
                <div className="p-20 text-center text-slate-300 font-black uppercase tracking-widest text-sm">
                    No customers found
                </div>
            )}
        </div>
    );
};

export default CustomerTable;