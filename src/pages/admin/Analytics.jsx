import React from 'react';
import AnalyticsHeader from '../../components/admin/analytics/AnalyticsHeader';
import KPIOverview from '../../components/admin/analytics/KPIOverview';
import SalesChart from '../../components/admin/analytics/SalesChart';
import CategoryDistribution from '../../components/admin/analytics/CategoryDistribution';
import DeviceAnalytics from '../../components/admin/analytics/DeviceAnalytics';
import Breadcrumbs from '../../components/admin/BreadCrumbs';

const AdminAnalytics = () => {
    return (
        <div className="max-w-[1600px] mx-auto pb-10 px-4">
            <Breadcrumbs items={[{ label: 'Business', path: '/admin/analytics' }, { label: 'Reports & Data' }]} />

            <AnalyticsHeader />

            <KPIOverview />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2">
                    <SalesChart />
                    {/* Additional insights card */}
                    <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
                        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="max-w-md">
                                <h4 className="text-lg font-bold mb-2 tracking-tight flex items-center gap-2">
                                    AI Strategy Insight <span className="bg-white/10 px-2 py-0.5 rounded text-[10px] uppercase tracking-widest">Powered</span>
                                </h4>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Aapke store ki conversion rate 2PM se 6PM ke darmiyan sabse zyada hoti hai. Is waqt "Special Flash Offers" chalana sales ko 20% mazeed barha sakta hai.
                                </p>
                            </div>
                            <button className="bg-white text-slate-900 px-8 py-3 rounded-2xl font-black text-sm whitespace-nowrap hover:bg-purple-400 hover:text-white transition-all">
                                Apply Auto-Strategy
                            </button>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-1 flex flex-col gap-10">
                    <CategoryDistribution />
                    {/* Quick Insight Card */}
                    <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm">
                        <h4 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-4">Traffic Channel</h4>
                        <div className="space-y-5">
                            {['Social Media', 'Direct Search', 'Referrals'].map((source, i) => (
                                <div key={i} className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-purple-500' : i === 1 ? 'bg-blue-500' : 'bg-pink-500'}`} />
                                        <span className="text-sm font-bold text-slate-600">{source}</span>
                                    </div>
                                    <span className="text-xs font-black text-slate-800">{70 - (i * 20)}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminAnalytics;