import React from 'react';
import WelcomeBanner from '../../components/admin/dashboard/WelcomeBanner';
import StatsCards from '../../components/admin/dashboard/StatsCards';
import RecentOrders from '../../components/admin/dashboard/RecentOrders';
import TopProducts from '../../components/admin/dashboard/TopProducts';

const DashboardHome = () => {
    return (
        <div className="max-w-[1600px] mx-auto">
            {/* Header Section */}
            <WelcomeBanner />

            {/* Stats Overview */}
            <StatsCards />

            {/* Grid for Table and Side Card */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <RecentOrders />
                </div>
                <div className="lg:col-span-1">
                    <TopProducts />
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;