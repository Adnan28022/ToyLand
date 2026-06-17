import React, { useState } from 'react';
import Breadcrumbs from '../../components/admin/BreadCrumbs';
import CustomerStats from '../../components/admin/customers/CustomerStats';
import CustomerTable from '../../components/admin/customers/CustomerTable';
import CustomerProfileModal from '../../components/admin/customers/CustomerProfileModal';
import { Search, Download } from 'lucide-react';

const demoCustomers = [
    { id: 1, name: "Ali Khan", email: "ali@example.com", joined: "12 Oct 2023", orders: 15, spent: 1250, status: "Active" },
    { id: 2, name: "Sara Ahmed", email: "sara@test.com", joined: "05 Oct 2023", orders: 3, spent: 450, status: "Active" },
    { id: 3, name: "John Doe", email: "john@web.com", joined: "28 Sep 2023", orders: 0, spent: 0, status: "Blocked" },
];

const AdminCustomers = () => {
    const [selectedUser, setSelectedUser] = useState(null);

    return (
        <div className="max-w-[1600px] mx-auto pb-10 px-4">
            <Breadcrumbs items={[{ label: 'Users', path: '/admin/customers' }, { label: 'Customer List' }]} />

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-black text-slate-800 tracking-tight">Customers</h1>
                    <p className="text-slate-400 text-sm font-medium">Manage and monitor user activities and spending.</p>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                    <div className="relative flex-1 md:flex-none group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-purple-500" size={18} />
                        <input type="text" placeholder="Search customers..." className="bg-white border border-slate-100 rounded-2xl py-3 px-12 text-sm outline-none w-full md:w-64 focus:ring-4 focus:ring-purple-50 focus:border-purple-200 transition-all shadow-sm" />
                    </div>
                    <button className="p-3 bg-white border border-slate-100 text-slate-400 rounded-2xl hover:text-purple-600 transition-all shadow-sm"><Download size={20} /></button>
                </div>
            </div>

            <CustomerStats />
            <CustomerTable customers={demoCustomers} onView={(user) => setSelectedUser(user)} />

            <CustomerProfileModal user={selectedUser} onClose={() => setSelectedUser(null)} />
        </div>
    );
};

export default AdminCustomers;