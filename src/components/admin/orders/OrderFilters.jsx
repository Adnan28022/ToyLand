import React from 'react';
import { Search } from 'lucide-react';

const OrderFilters = ({ activeTab, setActiveTab }) => {
    const tabs = ["All Orders", "Processing", "Shipped", "Delivered", "Cancelled"];

    return (
        <div className="flex flex-col lg:flex-row gap-6 mb-8 items-center justify-between">
            {/* Status Tabs - Mobile: Horizontal Scroll | Desktop: Fixed */}
            <div className="w-full lg:w-auto overflow-hidden">
                <div className="flex bg-white p-1.5 rounded-[1.8rem] border border-slate-100 shadow-sm overflow-x-auto no-scrollbar">
                    <div className="flex gap-1">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-5 sm:px-6 py-2.5 rounded-[1.4rem] text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap cursor-pointer ${activeTab === tab
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'text-slate-400 hover:text-slate-600'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Search Bar - Full Width on Mobile */}
            <div className="relative w-full lg:w-80 group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-purple-500 transition-colors" size={18} />
                <input
                    type="text"
                    placeholder="Search Order ID..."
                    className="w-full bg-white border border-slate-100 rounded-2xl py-3.5 pl-12 pr-4 text-sm outline-none focus:ring-4 focus:ring-purple-50 focus:border-purple-200 transition-all shadow-sm"
                />
            </div>

            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </div>
    );
};

export default OrderFilters;