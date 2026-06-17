import React from 'react';
import { motion } from 'framer-motion';
import { Target, MousePointer2, ShoppingCart, Banknote } from 'lucide-react';

const kpis = [
    { label: "Conversion Rate", value: "3.42%", trend: "+0.8%", icon: Target, color: "from-blue-500 to-indigo-600" },
    { label: "Avg. Order Value", value: "$84.20", trend: "+$5.1", icon: Banknote, color: "from-emerald-500 to-teal-600" },
    { label: "Store Visits", value: "12,402", trend: "+12%", icon: MousePointer2, color: "from-purple-500 to-pink-600" },
    { label: "Cart Abandonment", value: "42.1%", trend: "-2.4%", icon: ShoppingCart, color: "from-orange-500 to-rose-600" },
];

const KPIOverview = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {kpis.map((kpi, i) => {
                const Icon = kpi.icon;
                return (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        key={i}
                        className="relative group overflow-hidden bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all"
                    >
                        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${kpi.color} opacity-[0.03] rounded-bl-full`} />
                        <div className="relative z-10">
                            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${kpi.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                                <Icon size={22} />
                            </div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{kpi.label}</p>
                            <div className="flex items-end gap-3">
                                <h3 className="text-2xl font-black text-slate-800 tracking-tight">{kpi.value}</h3>
                                <span className={`text-[10px] font-bold mb-1 ${kpi.trend.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                                    {kpi.trend}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default KPIOverview;