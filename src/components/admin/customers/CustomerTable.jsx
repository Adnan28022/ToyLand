import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MoreVertical, Eye, ShieldAlert } from 'lucide-react';

const CustomerTable = ({ customers, onView }) => {
    return (
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
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
                                        <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-500 uppercase">
                                            {user.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-800">{user.name}</p>
                                            <p className="text-[10px] text-slate-400 font-bold">{user.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-5 text-sm font-medium text-slate-500">{user.joined}</td>
                                <td className="py-5 text-sm font-bold text-slate-700">{user.orders} Orders</td>
                                <td className="py-5 text-sm font-black text-slate-900">${user.spent}</td>
                                <td className="py-5">
                                    <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${user.status === "Active" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                                        }`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="py-5 pr-8 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button onClick={() => onView(user)} className="p-2.5 bg-slate-50 text-slate-400 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all"><Eye size={18} /></button>
                                        <button className="p-2.5 bg-slate-50 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"><ShieldAlert size={18} /></button>
                                    </div>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CustomerTable;