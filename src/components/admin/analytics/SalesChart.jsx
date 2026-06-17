import React from 'react';
import { TrendingUp } from 'lucide-react';

const SalesChart = () => {
    return (
        <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm mb-10 overflow-hidden relative">
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h3 className="text-xl font-black text-slate-800 tracking-tight">Revenue Growth</h3>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Monthly performance audit</p>
                </div>
                <div className="flex items-center gap-2 text-emerald-500 bg-emerald-50 px-4 py-2 rounded-2xl font-black text-xs">
                    <TrendingUp size={16} /> +24.5% vs Last Month
                </div>
            </div>

            {/* Simulated SVG Chart */}
            <div className="relative h-64 w-full group">
                <svg className="w-full h-full" viewBox="0 0 1000 200" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M0,150 Q100,140 200,100 T400,80 T600,120 T800,40 T1000,60 L1000,200 L0,200 Z"
                        fill="url(#gradient)"
                    />
                    <path
                        d="M0,150 Q100,140 200,100 T400,80 T600,120 T800,40 T1000,60"
                        fill="none"
                        stroke="#8B5CF6"
                        strokeWidth="4"
                        strokeLinecap="round"
                    />
                </svg>

                {/* Data Points */}
                <div className="absolute top-[40px] left-[80%] w-4 h-4 bg-purple-600 border-4 border-white rounded-full shadow-lg cursor-pointer">
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                        Peak: $12,400
                    </div>
                </div>
            </div>

            <div className="flex justify-between mt-6 px-2 text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span>
            </div>
        </div>
    );
};

export default SalesChart;