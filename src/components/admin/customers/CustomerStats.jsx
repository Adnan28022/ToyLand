import React from 'react';
import { Users, UserCheck, Crown, UserPlus } from 'lucide-react';

const stats = [
    { label: "Total Customers", value: "8,420", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Active Members", value: "1,205", icon: UserCheck, color: "text-green-600", bg: "bg-green-50" },
    { label: "Top Spenders", value: "450", icon: Crown, color: "text-amber-600", bg: "bg-amber-50" },
    { label: "New This Month", value: "+120", icon: UserPlus, color: "text-purple-600", bg: "bg-purple-50" },
];

const CustomerStats = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                    <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-2xl ${s.bg} ${s.color} flex items-center justify-center`}>
                            <Icon size={24} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{s.label}</p>
                            <h3 className="text-xl font-black text-slate-800">{s.value}</h3>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CustomerStats;