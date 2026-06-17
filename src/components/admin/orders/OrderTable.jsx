import React from 'react';
import { motion } from 'framer-motion';
import { Eye, MoreHorizontal, Printer } from 'lucide-react';

const OrderTable = ({ orders, onViewDetails }) => {
    return (
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] border-b border-slate-50">
                            <th className="py-6 pl-8">Order ID</th>
                            <th className="py-6">Date</th>
                            <th className="py-6">Customer</th>
                            <th className="py-6">Total Amount</th>
                            <th className="py-6">Status</th>
                            <th className="py-6 pr-8 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 text-sm">
                        {orders.map((order, i) => (
                            <motion.tr
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                key={order.id}
                                className="group hover:bg-slate-50/50 transition-all"
                            >
                                <td className="py-5 pl-8 font-black text-slate-900">{order.id}</td>
                                <td className="py-5 text-slate-500 font-medium">{order.date}</td>
                                <td className="py-5">
                                    <p className="font-bold text-slate-800">{order.customer}</p>
                                    <p className="text-[10px] text-slate-400 font-bold">{order.email}</p>
                                </td>
                                <td className="py-5 font-black text-slate-900">${order.amount}</td>
                                <td className="py-5">
                                    <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider ${order.status === "Delivered" ? "bg-green-100 text-green-600" :
                                        order.status === "Shipped" ? "bg-purple-100 text-purple-600" :
                                            order.status === "Processing" ? "bg-blue-100 text-blue-600" :
                                                "bg-red-100 text-red-600"
                                        }`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="py-5 pr-8 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button onClick={() => onViewDetails(order)} className="p-2.5 bg-slate-50 text-slate-400 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all"><Eye size={18} /></button>
                                        <button className="p-2.5 bg-slate-50 text-slate-400 hover:text-slate-600 rounded-xl transition-all"><Printer size={18} /></button>
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

export default OrderTable;