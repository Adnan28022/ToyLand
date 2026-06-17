import React from 'react';
import { Search, ListFilter } from 'lucide-react';

const OrderFilters = ({ activeTab, setActiveTab }) => {
    const tabs = ["All Orders", "Processing", "Shipped", "Delivered", "Cancelled"];

    return (
        <div className="flex flex-col lg:flex-row gap-6 mb-8 items-center justify-between">
            {/* Status Tabs */}
            <div className="flex bg-white p-1.5 rounded-[1.8rem] border border-slate-100 shadow-sm overflow-x-auto max-w-full">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-2.5 rounded-[1.4rem] text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${activeTab === tab
                            ? 'bg-slate-900 text-white shadow-lg'
                            : 'text-slate-400 hover:text-slate-600'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full lg:w-80 group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-purple-500 transition-colors" size={18} />
                <input
                    type="text"
                    placeholder="Order ID, Customer..."
                    className="w-full bg-white border border-slate-100 rounded-2xl py-3.5 pl-12 pr-4 text-sm outline-none focus:ring-4 focus:ring-purple-50 focus:border-purple-200 transition-all shadow-sm"
                />
            </div>
        </div>
    );
};

export default OrderFilters;