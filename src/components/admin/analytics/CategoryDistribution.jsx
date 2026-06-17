import React from 'react';

const CategoryDistribution = () => {
    const data = [
        { name: "Action Figures", value: 65, color: "bg-purple-500" },
        { name: "Soft Toys", value: 45, color: "bg-blue-500" },
        { name: "Educational", value: 30, color: "bg-orange-500" },
        { name: "Board Games", value: 20, color: "bg-rose-500" },
    ];

    return (
        <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm h-full">
            <h3 className="text-xl font-black text-slate-800 tracking-tight mb-8 text-center">Category Sales</h3>

            <div className="relative w-48 h-48 mx-auto mb-10">
                {/* Simple Circular Progress Visual */}
                <svg className="w-full h-full transform -rotate-90">
                    <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="16" fill="transparent" className="text-slate-50" />
                    <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="16" fill="transparent" strokeDasharray="502" strokeDashoffset="150" strokeLinecap="round" className="text-purple-500 transition-all duration-1000" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-black text-slate-800 tracking-tight">65%</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Best Category</span>
                </div>
            </div>

            <div className="space-y-4">
                {data.map((item, i) => (
                    <div key={i}>
                        <div className="flex justify-between text-[11px] font-bold text-slate-600 mb-1">
                            <span>{item.name}</span>
                            <span>{item.value}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-50 rounded-full overflow-hidden">
                            <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.value}%` }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryDistribution;