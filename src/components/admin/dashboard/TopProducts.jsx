import React from 'react';
import { Star } from 'lucide-react';

const products = [
    { name: "Super Hero Set", sales: 450, rating: 4.9, img: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=100" },
    { name: "Wooden Blocks", sales: 320, rating: 4.8, img: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=100" },
    { name: "Soft Teddy Bear", sales: 280, rating: 5.0, img: "https://images.unsplash.com/photo-1559440666-3744d4422957?w=100" },
];

const TopProducts = () => {
    return (
        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Best Selling Toys</h3>
            <div className="space-y-6">
                {products.map((p, i) => (
                    <div key={i} className="flex items-center gap-4">
                        <img src={p.img} alt="" className="w-12 h-12 rounded-xl object-cover" />
                        <div className="flex-1">
                            <h4 className="text-sm font-bold text-slate-800 leading-tight">{p.name}</h4>
                            <p className="text-[10px] font-bold text-slate-400 uppercase">{p.sales} Sales</p>
                        </div>
                        <div className="flex items-center gap-1 text-amber-500 bg-amber-50 px-2 py-1 rounded-lg font-bold text-xs">
                            <Star size={12} fill="currentColor" /> {p.rating}
                        </div>
                    </div>
                ))}
            </div>
            <button className="w-full mt-6 py-3 border border-dashed border-slate-200 rounded-2xl text-xs font-bold text-slate-400 hover:border-purple-300 hover:text-purple-500 transition-all">
                Manage Inventory
            </button>
        </div>
    );
};

export default TopProducts;