import React, { useState } from 'react';
import Breadcrumbs from '../../components/admin/BreadCrumbs';
import OrderFilters from '../../components/admin/orders/OrderFilters';
import OrderTable from '../../components/admin/orders/OrderTable';
import OrderDetailsModal from '../../components/admin/orders/OrderDetailModal';

const demoOrders = [
    { id: "#ORD-7712", date: "Oct 24, 2023", customer: "Ali Khan", email: "ali@example.com", amount: 155.00, status: "Processing", items: [{ name: "RC Super Car", price: 45, qty: 1, image: "https://images.unsplash.com/photo-1594787330447-234b9623ffd0?w=100" }, { name: "Lego Castle", price: 110, qty: 1, image: "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=100" }] },
    { id: "#ORD-7713", date: "Oct 23, 2023", customer: "Sara Ahmed", email: "sara@test.com", amount: 45.00, status: "Delivered", items: [{ name: "Teddy Bear", price: 45, qty: 1, image: "https://images.unsplash.com/photo-1559440666-3744d4422957?w=100" }] },
    { id: "#ORD-7714", date: "Oct 22, 2023", customer: "Zain Malik", email: "zain@web.com", amount: 89.99, status: "Shipped", items: [{ name: "Blocks Set", price: 89.99, qty: 1, image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=100" }] },
];

const AdminOrders = () => {
    const [activeTab, setActiveTab] = useState("All Orders");
    const [selectedOrder, setSelectedOrder] = useState(null);

    return (
        <div className="max-w-[1600px] mx-auto pb-10 px-4">
            <Breadcrumbs items={[{ label: 'Sales', path: '/admin/orders' }, { label: 'Order List' }]} />

            <div className="mb-10">
                <h1 className="text-3xl font-black text-slate-800 tracking-tight">Orders Management</h1>
                <p className="text-slate-400 text-sm font-medium mt-1">Check and manage all store transactions and deliveries.</p>
            </div>

            <OrderFilters activeTab={activeTab} setActiveTab={setActiveTab} />
            <OrderTable orders={demoOrders} onViewDetails={(order) => setSelectedOrder(order)} />

            <OrderDetailsModal order={selectedOrder} onClose={() => setSelectedOrder(null)} />
        </div>
    );
};

export default AdminOrders;