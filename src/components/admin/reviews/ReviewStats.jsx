import React from 'react';
import { Star, MessageSquare, ThumbsUp, ThumbsDown } from 'lucide-react';

const stats = [
    { label: "Total Reviews", value: "1,240", icon: MessageSquare, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Average Rating", value: "4.8", icon: Star, color: "text-amber-500", bg: "bg-amber-50" },
    { label: "Positive Feed", value: "92%", icon: ThumbsUp, color: "text-green-600", bg: "bg-green-50" },
    { label: "Negative Feed", value: "8%", icon: ThumbsDown, color: "text-rose-600", bg: "bg-rose-50" },
];

const ReviewStats = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                    <div key={i} className="bg-white p-6 rounded-[2.2rem] border border-slate-100 shadow-sm flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-2xl ${s.bg} ${s.color} flex items-center justify-center`}>
                            <Icon size={24} fill={s.label === "Average Rating" ? "currentColor" : "none"} />
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

export default ReviewStats;