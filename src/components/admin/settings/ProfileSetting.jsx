import React from 'react';
import { Camera, Save } from 'lucide-react';

const ProfileSettings = () => {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex items-center gap-6 mb-10">
                <div className="relative group">
                    <div className="w-24 h-24 rounded-[2rem] bg-purple-50 border-4 border-white shadow-xl flex items-center justify-center text-3xl font-black text-purple-600 overflow-hidden">
                        A
                    </div>
                    <button className="absolute -bottom-2 -right-2 bg-slate-900 text-white p-2 rounded-xl shadow-lg border-2 border-white hover:bg-purple-600 transition-all">
                        <Camera size={16} />
                    </button>
                </div>
                <div>
                    <h3 className="text-xl font-black text-slate-800">Admin Photo</h3>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">PNG or JPG, Max 5MB</p>
                </div>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input type="text" defaultValue="Admin User" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm outline-none focus:bg-white focus:border-purple-300 transition-all font-bold" />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input type="email" defaultValue="admin@toyverse.com" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm outline-none focus:bg-white focus:border-purple-300 transition-all font-bold" />
                </div>
                <div className="space-y-2 md:col-span-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Current Password</label>
                    <input type="password" placeholder="••••••••" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm outline-none focus:bg-white focus:border-purple-300 transition-all font-bold" />
                </div>
                <div className="md:col-span-2 pt-4">
                    <button className="bg-gray-900 text-white px-10 py-4 rounded-2xl font-bold text-sm shadow-xl flex items-center gap-2 hover:bg-purple-600 transition-all">
                        <Save size={18} /> Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProfileSettings;