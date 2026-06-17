import React, { useState } from 'react';
import { Plus, LayoutGrid, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import Breadcrumbs from '../../components/admin/BreadCrumbs';
import CategoryCard from '../../components/admin/categories/CategoryCard';
import AddCategoryModal from '../../components/admin/categories/AddCategoryModal';

const AdminCategories = () => {
    // Initial State for "Working" demo
    const [categories, setCategories] = useState([
        { id: 1, name: "Action Figures", productCount: 45 },
        { id: 2, name: "Soft Toys", productCount: 32 },
        { id: 3, name: "Educational", productCount: 120 },
        { id: 4, name: "Remote Control", productCount: 15 },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editData, setEditData] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    // Functionality: Add/Edit
    const handleSaveCategory = (data) => {
        if (editData) {
            setCategories(categories.map(cat => cat.id === data.id ? data : cat));
        } else {
            setCategories([...categories, data]);
        }
        setEditData(null);
    };

    // Functionality: Remove
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this category?")) {
            setCategories(categories.filter(cat => cat.id !== id));
        }
    };

    const handleEdit = (category) => {
        setEditData(category);
        setIsModalOpen(true);
    };

    const filteredCategories = categories.filter(cat =>
        cat.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="max-w-[1600px] mx-auto pb-10">
            <Breadcrumbs items={[{ label: 'Catalog', path: '/admin/categories' }, { label: 'Categories' }]} />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div>
                    <h1 className="text-3xl font-black text-slate-800 tracking-tight">Product Categories</h1>
                    <p className="text-slate-400 text-sm font-medium">Organize your toys into easy-to-browse groups.</p>
                </div>

                <div className="flex gap-3">
                    <div className="relative group hidden sm:block">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-purple-500" size={18} />
                        <input
                            type="text"
                            placeholder="Search categories..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-white border border-slate-100 rounded-2xl py-3.5 pl-12 pr-4 text-sm outline-none focus:ring-4 focus:ring-purple-50 focus:border-purple-200 transition-all w-64 shadow-sm"
                        />
                    </div>
                    <motion.button
                        onClick={() => { setEditData(null); setIsModalOpen(true); }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-xl shadow-purple-200 flex items-center justify-center gap-2 hover:bg-purple-700 transition-all"
                    >
                        <Plus size={20} strokeWidth={3} /> Add Category
                    </motion.button>
                </div>
            </div>

            {/* Grid View */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredCategories.map((cat) => (
                    <CategoryCard
                        key={cat.id}
                        category={cat}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                ))}
            </div>

            {filteredCategories.length === 0 && (
                <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-slate-200">
                    <LayoutGrid size={48} className="mx-auto text-slate-200 mb-4" />
                    <p className="text-slate-400 font-bold tracking-widest uppercase text-xs">No categories found</p>
                </div>
            )}

            <AddCategoryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSaveCategory}
                editData={editData}
            />
        </div>
    );
};

export default AdminCategories;