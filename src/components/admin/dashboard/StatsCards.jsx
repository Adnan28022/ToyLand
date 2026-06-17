import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, ShoppingBag, Users, TrendingUp, ArrowUpRight } from 'lucide-react';

const stats = [
    { id: 1, label: "Total Revenue", value: "$45,280", trend: "+12.5%", icon: DollarSign, color: "text-blue-600", bgColor: "bg-blue-50" },
    { id: 2, label: "Total Orders", value: "1,240", trend: "+8.2%", icon: ShoppingBag, color: "text-orange-600", bgColor: "bg-orange-50" },
    { id: 3, label: "New Customers", value: "320", trend: "+5.1%", icon: Users, color: "text-purple-600", bgColor: "bg-purple-50" },
    { id: 4, label: "Growth Rate", value: "24.8%", trend: "+2.4%", icon: TrendingUp, color: "text-green-600", bgColor: "bg-green-50" },
];

const StatsCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, i) => {
                const Icon = stat.icon; // Icon component reference
                return (
                    <motion.div
                        key={stat.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white p-6 rounded-[2.2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group"
                    >
                        <div className="flex justify-between items-start mb-5">
                            <div className={`w-14 h-14 rounded-2xl ${stat.bgColor} ${stat.color} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                                <Icon size={26} strokeWidth={2.5} />
                            </div>
                            <div className="flex items-center gap-1 text-[10px] font-black bg-green-50 text-green-600 px-2 py-1 rounded-lg">
                                <ArrowUpRight size={10} /> {stat.trend}
                            </div>
                        </div>

                        <div>
                            <p className="text-slate-400 text-[11px] font-bold uppercase tracking-[0.1em] mb-1">
                                {stat.label}
                            </p>
                            <h3 className="text-2xl font-black text-slate-800 tracking-tight">
                                {stat.value}
                            </h3>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default StatsCards;