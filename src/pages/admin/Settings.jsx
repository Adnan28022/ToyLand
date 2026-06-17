import React, { useState } from 'react';
import Breadcrumbs from '../../components/admin/BreadCrumbs';
import ProfileSettings from '../../components/admin/settings/ProfileSetting';
import StoreSettings from '../../components/admin/settings/StoreSetting';
import { User, Store, Bell, ShieldCheck } from 'lucide-react';

const AdminSettings = () => {
    const [activeTab, setActiveTab] = useState('profile');

    const tabs = [
        { id: 'profile', label: 'My Profile', icon: User },
        { id: 'store', label: 'Store Info', icon: Store }
    ];

    return (
        <div className="max-w-[1200px] mx-auto pb-10 px-4">
            <Breadcrumbs items={[{ label: 'Admin', path: '/admin/dashboard' }, { label: 'Settings' }]} />

            <div className="mb-10">
                <h1 className="text-3xl font-black text-slate-800 tracking-tight">System Settings</h1>
                <p className="text-slate-400 text-sm font-medium mt-1">Manage your account and store preferences.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-10">
                {/* Sidebar Tabs */}
                <div className="lg:w-1/4 space-y-2">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-sm transition-all ${activeTab === tab.id
                                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-200'
                                    : 'bg-white text-slate-400 hover:bg-slate-50'
                                    }`}
                            >
                                <Icon size={20} />
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                {/* Content Area */}
                <div className="lg:w-3/4">
                    <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-8 sm:p-12">
                        {activeTab === 'profile' && <ProfileSettings />}
                        {activeTab === 'store' && <StoreSettings />}
                        {activeTab === 'notifications' && <NotificationSettings />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminSettings;