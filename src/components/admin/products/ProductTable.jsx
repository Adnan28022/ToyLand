import React from 'react';
import { motion } from 'framer-motion';
import { Edit3, Trash2, Eye, MoreVertical } from 'lucide-react';

const products = [
    { id: 1, name: "Remote Control Car", category: "RC Toys", price: "$45.00", stock: 12, status: "In Stock", img: "https://images.unsplash.com/photo-1758964087156-0eac97044f84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVtb3RlJTIwY29udHJvbCUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 2, name: "Cuddle Teddy Bear", category: "Soft Toys", price: "$25.00", stock: 0, status: "Out of Stock", img: "https://plus.unsplash.com/premium_photo-1725075087153-610264ca9cbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3VkZGxlJTIwdGVhZHklMjBiZWFyfGVufDB8fDB8fHww" },
    { id: 3, name: "LEGO Star Wars", category: "Blocks", price: "$89.99", stock: 5, status: "Low Stock", img: "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=100" },
    { id: 4, name: "Alphabet Blocks", category: "Educational", price: "$15.00", stock: 45, status: "In Stock", img: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=100" },
];

const ProductTable = () => {
    return (
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-slate-400 text-[10px] font-black uppercase tracking-[0.15em] border-b border-slate-50">
                            <th className="py-6 pl-8">Product</th>
                            <th className="py-6">Category</th>
                            <th className="py-6">Price</th>
                            <th className="py-6">Stock</th>
                            <th className="py-6">Status</th>
                            <th className="py-6 pr-8 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {products.map((product, i) => (
                            <motion.tr
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                key={product.id}
                                className="group hover:bg-slate-50/50 transition-all"
                            >
                                <td className="py-5 pl-8">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 shrink-0">
                                            <img src={product.img} alt="" className="w-full h-full object-cover" />
                                        </div>
                                        <span className="text-sm font-bold text-slate-800">{product.name}</span>
                                    </div>
                                </td>
                                <td className="py-5 text-sm font-medium text-slate-500">{product.category}</td>
                                <td className="py-5 text-sm font-black text-slate-900">{product.price}</td>
                                <td className="py-5 text-sm font-bold text-slate-600">{product.stock} pcs</td>
                                <td className="py-5">
                                    <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider ${product.status === "In Stock" ? "bg-green-100 text-green-600" :
                                        product.status === "Low Stock" ? "bg-orange-100 text-orange-600" :
                                            "bg-red-100 text-red-600"
                                        }`}>
                                        {product.status}
                                    </span>
                                </td>
                                <td className="py-5 pr-8 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button className="p-2.5 bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"><Eye size={18} /></button>
                                        <button className="p-2.5 bg-slate-50 text-slate-400 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all"><Edit3 size={18} /></button>
                                        <button className="p-2.5 bg-slate-50 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"><Trash2 size={18} /></button>
                                    </div>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Placeholder */}
            <div className="p-6 border-t border-slate-50 flex justify-between items-center bg-slate-50/30">
                <p className="text-xs font-bold text-slate-400">Showing 1-10 of 120 products</p>
                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50">Previous</button>
                    <button className="px-4 py-2 bg-purple-600 text-white rounded-xl text-xs font-bold hover:bg-purple-700">Next</button>
                </div>
            </div>
        </div>
    );
};

export default ProductTable;