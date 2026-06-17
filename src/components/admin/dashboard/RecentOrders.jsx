import React from 'react';
import { ExternalLink } from 'lucide-react';

const orders = [
    { id: "#TY-9081", customer: "Ali Khan", product: "Remote Control Car", amount: "$45.00", status: "Delivered", color: "bg-green-100 text-green-600" },
    { id: "#TY-9082", customer: "Sara Ahmed", product: "Barbie Dream House", amount: "$120.00", status: "Processing", color: "bg-blue-100 text-blue-600" },
    { id: "#TY-9083", customer: "John Doe", product: "LEGO City Set", amount: "$85.50", status: "Shipped", color: "bg-purple-100 text-purple-600" },
];

const RecentOrders = () => {
    return (
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-8 h-full">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h3 className="text-xl font-bold text-slate-800">Recent Orders</h3>
                    <p className="text-slate-400 text-xs font-medium">Monitoring latest store transactions</p>
                </div>
                <button className="p-2 hover:bg-slate-50 rounded-xl transition-colors text-slate-400 hover:text-purple-600">
                    <ExternalLink size={20} />
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-slate-400 text-[10px] font-black uppercase tracking-[0.15em] border-b border-slate-50">
                            <th className="pb-5 pl-2">Customer</th>
                            <th className="pb-5">Product</th>
                            <th className="pb-5">Amount</th>
                            <th className="pb-5">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {orders.map((order, i) => (
                            <tr key={i} className="group hover:bg-slate-50/50 transition-all">
                                <td className="py-5 pl-2">
                                    <p className="text-sm font-bold text-slate-800">{order.customer}</p>
                                    <p className="text-[10px] text-slate-400 font-bold">{order.id}</p>
                                </td>
                                <td className="py-5 text-sm font-medium text-slate-600">{order.product}</td>
                                <td className="py-5 text-sm font-black text-slate-900">{order.amount}</td>
                                <td className="py-5">
                                    <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider ${order.color}`}>
                                        {order.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecentOrders;