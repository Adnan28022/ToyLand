import React from 'react';
import { Save, Globe } from 'lucide-react';

const StoreSettings = () => {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <h3 className="text-xl font-black text-slate-800 mb-6">Store Configuration</h3>

            <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Store Name</label>
                    <input type="text" defaultValue="ToyVerse Wonderland" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm font-bold outline-none focus:bg-white" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Store Currency</label>
                        <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm font-bold outline-none">
                            <option>USD ($)</option>
                            <option>EUR (€)</option>
                            <option>PKR (Rs)</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Language</label>
                        <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm font-bold outline-none">
                            <option>English</option>
                            <option>Urdu</option>
                        </select>
                    </div>
                </div>
            </div>

            <button className="bg-gray-900 text-white px-10 py-4 rounded-2xl font-bold text-sm flex items-center gap-2 hover:bg-purple-600 transition-all">
                <Save size={18} /> Update Store
            </button>
        </div>
    );
};

export default StoreSettings;