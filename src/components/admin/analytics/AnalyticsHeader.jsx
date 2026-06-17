import React from 'react';
import { Calendar, Download, ChevronDown, Filter } from 'lucide-react';

const AnalyticsHeader = () => {
    return (
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 mb-10">
            <div>
                <h1 className="text-4xl font-black text-slate-800 tracking-tight">Analytics Overview</h1>
                <p className="text-slate-400 text-sm font-medium mt-1">Real-time insights into your toy store performance.</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
                <div className="flex bg-white p-1.5 rounded-2xl shadow-sm border border-slate-100">
                    {['12h', '24h', '7d', '30d', '1y'].map((range) => (
                        <button key={range} className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${range === '7d' ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-400 hover:text-slate-600'}`}>
                            {range}
                        </button>
                    ))}
                </div>

                <button className="flex items-center gap-2 bg-white border border-slate-100 px-5 py-3 rounded-2xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
                    <Calendar size={18} className="text-purple-500" />
                    Custom Date
                    <ChevronDown size={16} />
                </button>

                <button className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-2xl text-sm font-bold hover:bg-purple-700 transition-all shadow-lg shadow-purple-200">
                    <Download size={18} />
                    Export Report
                </button>
            </div>
        </div>
    );
};

export default AnalyticsHeader;