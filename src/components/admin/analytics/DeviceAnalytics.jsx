import React from 'react';
import { Smartphone, Monitor, Tablet, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const DeviceAnalytics = () => {
    const deviceData = [
        {
            name: "Mobile Users",
            value: 58,
            trend: "+12%",
            isUp: true,
            icon: Smartphone,
            color: "text-purple-600",
            barColor: "bg-purple-500",
            sessions: "8.4k"
        },
        {
            name: "Desktop Users",
            value: 32,
            trend: "+5%",
            isUp: true,
            icon: Monitor,
            color: "text-blue-600",
            barColor: "bg-blue-500",
            sessions: "4.2k"
        },
        {
            name: "Tablet Users",
            value: 10,
            trend: "-2%",
            isUp: false,
            icon: Tablet,
            color: "text-pink-600",
            barColor: "bg-pink-500",
            sessions: "1.1k"
        },
    ];

    return (
        <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm h-full flex flex-col">
            <div className="flex justify-between items-start mb-8">
                <div>
                    <h3 className="text-lg font-black text-slate-800 tracking-tight">Device Traffic</h3>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1">User platform distribution</p>
                </div>
                <div className="p-2 bg-slate-50 rounded-xl">
                    <Smartphone size={20} className="text-slate-400" />
                </div>
            </div>

            <div className="space-y-8 flex-1">
                {deviceData.map((device, i) => {
                    const Icon = device.icon;
                    return (
                        <div key={i} className="space-y-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center ${device.color}`}>
                                        <Icon size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-800">{device.name}</p>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase">{device.sessions} Sessions</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-black text-slate-800">{device.value}%</p>
                                    <div className={`flex items-center gap-0.5 text-[10px] font-black uppercase ${device.isUp ? 'text-emerald-500' : 'text-rose-500'}`}>
                                        {device.isUp ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
                                        {device.trend}
                                    </div>
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="w-full h-2 bg-slate-50 rounded-full overflow-hidden">
                                <div
                                    className={`h-full ${device.barColor} rounded-full transition-all duration-1000`}
                                    style={{ width: `${device.value}%` }}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Bottom Insight Footer */}
            <div className="mt-8 pt-6 border-t border-slate-50">
                <div className="bg-purple-50 p-4 rounded-2xl flex items-center justify-between">
                    <p className="text-[10px] font-bold text-purple-600 uppercase tracking-wider leading-tight">
                        Optimize mobile <br /> checkout experience
                    </p>
                    <button className="text-[10px] font-black text-white bg-purple-600 px-3 py-2 rounded-lg uppercase tracking-widest shadow-sm">
                        Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeviceAnalytics;