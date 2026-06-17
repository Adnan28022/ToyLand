import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/layout/Sidebar';
import AdminTopbar from '../components/layout/Topbar';

const AdminLayout = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false); // Mobile ke liye alag state

    const toggleSidebar = () => {
        // Agar mobile screen hai to mobile state toggle karo, warna desktop wali
        if (window.innerWidth < 1024) {
            setIsMobileOpen(!isMobileOpen);
        } else {
            setIsCollapsed(!isCollapsed);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar - Dono states pass ki hain */}
            <AdminSidebar
                isCollapsed={isCollapsed}
                isMobileOpen={isMobileOpen}
                setIsMobileOpen={setIsMobileOpen}
            />

            {/* Mobile Backdrop - Jab sidebar khulega to background dhundla hoga */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[45] lg:hidden"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            {/* Main Content Area */}
            <div className={`flex-1 flex flex-col transition-all duration-300 w-full 
                ${isCollapsed ? 'lg:ml-20' : 'lg:ml-64'} ml-0`}>

                <AdminTopbar toggleSidebar={toggleSidebar} isCollapsed={isCollapsed} />

                <main className="p-4 md:p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;