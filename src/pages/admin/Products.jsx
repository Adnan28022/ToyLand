import React, { useState } from 'react';
import { Plus, Package } from 'lucide-react';
import { motion } from 'framer-motion';
import Breadcrumbs from '../../components/admin/BreadCrumbs';
import ProductFilters from '../../components/admin/products/ProductFilters';
import ProductTable from '../../components/admin/products/ProductTable';
import AddProductModal from '../../components/admin/products/AddProductModal';

const AdminProducts = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="max-w-[1600px] mx-auto pb-10">
            {/* 1. Breadcrumbs Component Call */}
            <Breadcrumbs items={[{ label: 'Inventory', path: '/admin/products' }, { label: 'All Products' }]} />

            {/* 2. Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-black text-slate-800 tracking-tight">Toy Inventory</h1>
                    <p className="text-slate-400 text-sm font-medium">Add, edit and manage your store products.</p>
                </div>

                <motion.button
                    onClick={() => setIsModalOpen(true)} // Modal Open Function
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-xl shadow-purple-200 flex items-center justify-center gap-2 hover:bg-purple-700 transition-all"
                >
                    <Plus size={20} strokeWidth={3} /> Add New Toy
                </motion.button>
            </div>

            {/* 3. Filter & Table Components */}
            <ProductFilters />
            <ProductTable />

            {/* 4. Add Product Modal Component */}
            <AddProductModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default AdminProducts;