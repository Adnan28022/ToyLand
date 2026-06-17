import React from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';

const ProductFilters = () => {
    return (
        <div className="bg-white p-4 rounded-[2rem] border border-slate-100 shadow-sm mb-6 flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-purple-500 transition-colors" size={18} />
                <input
                    type="text"
                    placeholder="Search by product name, SKU..."
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 pl-12 pr-4 text-sm outline-none focus:bg-white focus:border-purple-200 transition-all"
                />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-3">
                <div className="relative">
                    <select className="appearance-none bg-slate-50 border border-slate-100 rounded-xl py-3 pl-4 pr-10 text-sm font-bold text-slate-600 outline-none cursor-pointer focus:border-purple-200">
                        <option>All Categories</option>
                        <option>Action Figures</option>
                        <option>Soft Toys</option>
                        <option>Educational</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                </div>

                <button className="p-3 bg-slate-50 text-slate-500 rounded-xl hover:bg-slate-100 transition-colors">
                    <Filter size={20} />
                </button>
            </div>
        </div>
    );
};

export default ProductFilters;